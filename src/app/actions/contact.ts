"use server";

import { z } from "zod";
import { sendMail } from "@/lib/mail";

const ContactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof z.infer<typeof ContactSchema>, string[]>>;
};

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  const parsed = ContactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { firstName, lastName, email, subject, message } = parsed.data;

  try {
    await sendMail({
      to: process.env.CONTACT_EMAIL!,
      subject: `[TECHNYON] ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#C8973F;border-bottom:1px solid #C8973F;padding-bottom:12px;">
            New Contact Message — TECHNYON
          </h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#888;width:120px;">Name</td>
                <td style="padding:8px 0;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding:8px 0;color:#888;">Email</td>
                <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#C8973F;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888;">Subject</td>
                <td style="padding:8px 0;">${subject}</td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#f9f9f9;border-radius:4px;">
            <p style="color:#333;white-space:pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    // Auto-reply to sender
    await sendMail({
      to: email,
      subject: "We received your message — TECHNYON",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#C8973F;">Thank you, ${firstName}.</h2>
          <p style="color:#555;line-height:1.6;">
            We've received your message and will get back to you within 24 hours.
          </p>
          <p style="color:#555;line-height:1.6;margin-top:16px;">
            — The TECHNYON Team
          </p>
        </div>
      `,
    });

    return {
      success: true,
      message: "Message sent. We'll be in touch shortly.",
    };
  } catch (err) {
    console.error("Contact mail error:", err);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
