"use client";

import LegalLayout, {
  Section,
  Para,
  List,
  Highlight,
} from "@/components/layout/LegalLayout";

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before using our website or purchasing any products."
      lastUpdated="1 January 2025"
      currentHref="/terms"
    >
      <Highlight>
        By accessing or using the TECHNYON website, you agree to be bound by
        these Terms and Conditions. If you do not agree with any part of these
        terms, please discontinue use of our site immediately.
      </Highlight>

      <Section title="1. About TECHNYON">
        <Para>
          TECHNYON (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a
          technology product curation service based at 395 Strand, London,
          United Kingdom. We connect customers with premium electronics and
          smart appliances via trusted third-party marketplaces, including
          Amazon UK.
        </Para>
        <Para>
          Our website at technyon.com serves as a product discovery and
          recommendation platform. All purchases are completed through
          Amazon&apos;s secure checkout and are subject to Amazon&apos;s own
          terms of service in addition to these terms.
        </Para>
      </Section>

      <Section title="2. Use of the Website">
        <Para>
          You may use this website for lawful purposes only. You agree not to
          use our site in any way that:
        </Para>
        <List
          items={[
            "Violates any applicable local, national, or international law or regulation",
            "Is fraudulent, deceptive, or misleading in any way",
            "Transmits any unsolicited or unauthorised advertising or promotional material",
            "Attempts to gain unauthorised access to any part of our website or its related systems",
            "Interferes with the normal operation of the website or its underlying infrastructure",
            "Harvests or collects data from our website without prior written consent",
          ]}
        />
      </Section>

      <Section title="3. Product Information">
        <Para>
          We take care to ensure all product descriptions, specifications, and
          imagery on our website are accurate and up to date. However, we do not
          guarantee that all product information is error-free, complete, or
          current at all times.
        </Para>
        <Para>
          Product availability, pricing, and specifications are subject to
          change without notice. Final pricing and availability are determined
          at the point of purchase on Amazon UK.
        </Para>
      </Section>

      <Section title="4. Purchases & Payments">
        <Para>
          All transactions are processed exclusively through Amazon UK. TECHNYON
          does not directly handle payment information, process orders, or
          manage fulfilment. By purchasing through our Amazon store links, you
          agree to Amazon&apos;s Conditions of Use and Sale.
        </Para>
        <Para>
          TECHNYON acts as an introducer only. Any disputes regarding payment,
          delivery, or product condition must be raised directly with Amazon UK
          through their standard dispute resolution process.
        </Para>
      </Section>

      <Section title="5. Returns & Refunds">
        <Para>
          As all sales are fulfilled through Amazon UK, returns and refunds are
          governed by Amazon&apos;s returns policy. In most cases, items may be
          returned within 30 days of receipt in their original condition.
        </Para>
        <Para>
          If you experience any issues with a product purchased through our
          Amazon store, please contact us at argrouplondon7@gmail.com and we
          will do our best to assist in resolving the matter.
        </Para>
      </Section>

      <Section title="6. Intellectual Property">
        <Para>
          All content on this website — including but not limited to text,
          graphics, logos, images, and software — is the property of TECHNYON or
          its content suppliers and is protected by applicable intellectual
          property laws.
        </Para>
        <Para>
          You may not reproduce, distribute, modify, or create derivative works
          from any content on this site without our express prior written
          permission.
        </Para>
      </Section>

      <Section title="7. Limitation of Liability">
        <Para>
          To the fullest extent permitted by law, TECHNYON shall not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages arising from your use of this website or any products
          purchased through our platform.
        </Para>
        <Para>
          Our total liability to you for any claim arising out of or in
          connection with these terms shall not exceed the value of the product
          or service that gave rise to the claim.
        </Para>
      </Section>

      <Section title="8. Third-Party Links">
        <Para>
          Our website contains links to third-party websites, including Amazon
          UK. These links are provided for your convenience only. We have no
          control over the content of those sites and accept no responsibility
          for them or for any loss or damage that may arise from your use of
          them.
        </Para>
      </Section>

      <Section title="9. Changes to These Terms">
        <Para>
          We reserve the right to amend these Terms and Conditions at any time.
          Changes will be posted on this page with an updated &quot;Last
          updated&quot; date. Your continued use of the website following any
          changes constitutes your acceptance of the revised terms.
        </Para>
      </Section>

      <Section title="10. Governing Law">
        <Para>
          These Terms and Conditions are governed by and construed in accordance
          with the laws of England and Wales. Any disputes arising under or in
          connection with these terms shall be subject to the exclusive
          jurisdiction of the courts of England and Wales.
        </Para>
      </Section>

      <Section title="11. Contact Us">
        <Para>
          If you have any questions about these Terms and Conditions, please
          contact us:
        </Para>
        <List
          items={[
            "Email: argrouplondon7@gmail.com",
            "Address: 395 Strand, London, United Kingdom",
            "Response time: Within 24 hours on business days",
          ]}
        />
      </Section>
    </LegalLayout>
  );
}
