"use client";

import LegalLayout, {
  Section,
  Para,
  List,
  Highlight,
} from "@/components/layout/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="We are committed to protecting your privacy and handling your data with transparency and care."
      lastUpdated="1 January 2025"
      currentHref="/privacy"
    >
      <Highlight>
        This Privacy Policy explains how TECHNYON collects, uses, stores, and
        protects your personal information in accordance with the UK General
        Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
      </Highlight>

      <Section title="1. Who We Are">
        <Para>
          TECHNYON is a technology product curation service operated from 395
          Strand, London, United Kingdom. For the purposes of data protection
          law, TECHNYON is the data controller for personal information
          collected through this website.
        </Para>
        <Para>
          If you have any questions about how we handle your data, you can
          contact us at argrouplondon7@gmail.com.
        </Para>
      </Section>

      <Section title="2. Information We Collect">
        <Para>
          We may collect the following types of personal information when you
          interact with our website:
        </Para>
        <List
          items={[
            "Contact information such as your name and email address when you submit our contact form",
            "Communication records including messages you send us and our responses",
            "Newsletter subscription details if you choose to subscribe",
            "Usage data such as pages visited, time spent on site, and browser type (collected via analytics tools)",
            "Technical data including your IP address, device type, and operating system",
          ]}
        />
        <Para>
          We do not collect payment information. All transactions are processed
          directly by Amazon UK, which has its own privacy policy governing data
          collected during purchase.
        </Para>
      </Section>

      <Section title="3. How We Use Your Information">
        <Para>We use the personal information we collect to:</Para>
        <List
          items={[
            "Respond to enquiries submitted through our contact form",
            "Send newsletters and product updates to subscribers who have opted in",
            "Improve our website content and user experience",
            "Monitor and analyse website traffic and usage patterns",
            "Comply with legal obligations and protect our legal rights",
            "Prevent fraud and ensure the security of our website",
          ]}
        />
      </Section>

      <Section title="4. Legal Basis for Processing">
        <Para>
          We process your personal data on the following legal grounds under UK
          GDPR:
        </Para>
        <List
          items={[
            "Consent — for newsletter subscriptions and marketing communications, where you have opted in",
            "Legitimate interests — for website analytics and improving our services, where this does not override your rights",
            "Contract — where processing is necessary to respond to your enquiries or fulfil a service you have requested",
            "Legal obligation — where we are required to process data to comply with applicable law",
          ]}
        />
      </Section>

      <Section title="5. Cookies">
        <Para>
          Our website uses cookies to improve your browsing experience. Cookies
          are small text files stored on your device that help us understand how
          you use our site.
        </Para>
        <Para>We use the following types of cookies:</Para>
        <List
          items={[
            "Essential cookies — required for the basic functioning of the website",
            "Analytics cookies — used to understand visitor behaviour and improve our content (e.g. Google Analytics)",
            "Preference cookies — used to remember your settings and preferences",
          ]}
        />
        <Para>
          You can control and delete cookies through your browser settings at
          any time. Disabling cookies may affect the functionality of certain
          parts of our website.
        </Para>
      </Section>

      <Section title="6. Data Sharing">
        <Para>
          We do not sell, rent, or trade your personal information to third
          parties. We may share your data with:
        </Para>
        <List
          items={[
            "Service providers who assist in operating our website and communications (e.g. email providers), under strict confidentiality agreements",
            "Analytics platforms such as Google Analytics to help us understand website usage",
            "Legal authorities where we are required to do so by law or court order",
          ]}
        />
      </Section>

      <Section title="7. Data Retention">
        <Para>
          We retain your personal data only for as long as necessary to fulfil
          the purposes for which it was collected, or as required by law.
          Contact form submissions are retained for up to 12 months. Newsletter
          subscriber data is retained until you unsubscribe.
        </Para>
      </Section>

      <Section title="8. Your Rights">
        <Para>
          Under UK GDPR, you have the following rights regarding your personal
          data:
        </Para>
        <List
          items={[
            "Right to access — request a copy of the personal data we hold about you",
            "Right to rectification — request correction of any inaccurate or incomplete data",
            "Right to erasure — request deletion of your personal data in certain circumstances",
            "Right to restrict processing — request that we limit how we use your data",
            "Right to data portability — receive your data in a structured, machine-readable format",
            "Right to object — object to processing based on legitimate interests or for direct marketing",
            "Right to withdraw consent — withdraw consent at any time where processing is based on consent",
          ]}
        />
        <Para>
          To exercise any of these rights, please contact us at
          argrouplondon7@gmail.com. We will respond within 30 days. You also
          have the right to lodge a complaint with the Information
          Commissioner&apos;s Office (ICO) at ico.org.uk.
        </Para>
      </Section>

      <Section title="9. Data Security">
        <Para>
          We implement appropriate technical and organisational measures to
          protect your personal data against unauthorised access, alteration,
          disclosure, or destruction. However, no method of transmission over
          the internet is entirely secure, and we cannot guarantee absolute
          security.
        </Para>
      </Section>

      <Section title="10. Changes to This Policy">
        <Para>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with a revised &quot;Last updated&quot; date.
          We encourage you to review this policy periodically.
        </Para>
      </Section>

      <Section title="11. Contact Us">
        <Para>
          For any questions or concerns regarding this Privacy Policy or your
          personal data, please contact us:
        </Para>
        <List
          items={[
            "Email: argrouplondon7@gmail.com",
            "Address: 395 Strand, London, United Kingdom",
            "ICO Registration: Pending",
          ]}
        />
      </Section>
    </LegalLayout>
  );
}
