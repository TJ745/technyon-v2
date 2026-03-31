"use client";

import LegalLayout, {
  Section,
  Para,
  List,
  Highlight,
} from "@/components/layout/LegalLayout";

export default function LegalPage() {
  return (
    <LegalLayout
      title="Legal Information"
      subtitle="Important legal disclosures, disclaimers, and regulatory information about TECHNYON."
      lastUpdated="1 January 2025"
      currentHref="/legal"
    >
      <Highlight>
        This page contains important legal information about TECHNYON, including
        our business registration details, disclaimers, and compliance
        information. Please read this alongside our Terms &amp; Conditions and
        Privacy Policy.
      </Highlight>

      <Section title="1. Business Information">
        <Para>
          TECHNYON is a trading name operated in the United Kingdom. Our
          registered business address is:
        </Para>
        <List
          items={[
            "Trading name: TECHNYON",
            "Address: 395 Strand, London, United Kingdom",
            "Email: argrouplondon7@gmail.com",
            "Amazon Seller ID: A161RUNEUG288T",
            "Marketplace: Amazon UK (amazon.co.uk)",
          ]}
        />
      </Section>

      <Section title="2. Website Disclaimer">
        <Para>
          The information provided on this website is for general informational
          purposes only. While we strive to keep all content accurate and up to
          date, TECHNYON makes no representations or warranties of any kind,
          express or implied, regarding the completeness, accuracy, reliability,
          or availability of the website or its content.
        </Para>
        <Para>
          Any reliance you place on information from this website is strictly at
          your own risk. TECHNYON shall not be liable for any loss or damage
          arising from the use of, or inability to use, this website or its
          content.
        </Para>
      </Section>

      <Section title="3. Amazon Affiliate & Seller Disclosure">
        <Para>
          TECHNYON operates as a seller on Amazon UK. Links on this website
          direct users to our Amazon storefront where products can be purchased.
          All sales are subject to Amazon&apos;s Conditions of Use.
        </Para>
        <Para>
          TECHNYON may participate in affiliate programmes. Where applicable, we
          may earn a commission on purchases made through our referral links at
          no additional cost to you. This does not influence our product
          recommendations.
        </Para>
      </Section>

      <Section title="4. Product Liability Disclaimer">
        <Para>
          All products listed on our website and available through our Amazon
          store have been curated for quality and reliability. However, TECHNYON
          does not manufacture any products and cannot be held liable for
          product defects, malfunctions, or injuries arising from product use.
        </Para>
        <Para>
          In the event of a defective product, please contact Amazon UK directly
          to initiate a return or replacement. For safety-critical issues,
          please also contact the product manufacturer.
        </Para>
        <List
          items={[
            "Product warranties are provided by the manufacturer or Amazon, not TECHNYON",
            "Always follow the manufacturer's safety instructions when using electronic devices",
            "Do not use damaged or malfunctioning electronic products",
            "Keep electronic devices away from water unless explicitly rated for water resistance",
          ]}
        />
      </Section>

      <Section title="5. Intellectual Property">
        <Para>
          The TECHNYON name, logo, and all associated branding are the
          intellectual property of TECHNYON. All rights are reserved.
          Unauthorised use, reproduction, or imitation of our brand identity is
          strictly prohibited and may result in legal action.
        </Para>
        <Para>
          Product images, descriptions, and trademarks referenced on this site
          remain the property of their respective manufacturers and brand
          owners. Their use on this site is for identification purposes only and
          does not imply endorsement.
        </Para>
      </Section>

      <Section title="6. Consumer Rights">
        <Para>
          As a consumer purchasing through Amazon UK, you are protected by UK
          consumer law, including:
        </Para>
        <List
          items={[
            "The Consumer Rights Act 2015 — goods must be of satisfactory quality, fit for purpose, and as described",
            "The Consumer Contracts Regulations 2013 — right to cancel online purchases within 14 days",
            "The Consumer Protection from Unfair Trading Regulations 2008 — protection against misleading practices",
            "The Electronic Commerce Regulations 2002 — governing online business disclosures",
          ]}
        />
        <Para>
          If you believe your consumer rights have been violated, you may
          contact Citizens Advice at citizensadvice.org.uk or the Competition
          and Markets Authority (CMA) at gov.uk/cma.
        </Para>
      </Section>

      <Section title="7. Limitation of Liability">
        <Para>
          Nothing in these legal notices excludes or limits our liability for
          death or personal injury caused by negligence, fraud or fraudulent
          misrepresentation, or any other liability that cannot be excluded or
          limited under applicable law.
        </Para>
        <Para>
          Subject to the above, TECHNYON&apos;s total aggregate liability to you
          in connection with any matter arising under or in relation to this
          website shall not exceed £100 (one hundred pounds sterling).
        </Para>
      </Section>

      <Section title="8. Governing Law & Jurisdiction">
        <Para>
          These legal notices and any disputes or claims arising out of or in
          connection with them are governed by and construed in accordance with
          the law of England and Wales.
        </Para>
        <Para>
          You and TECHNYON both agree that the courts of England and Wales will
          have exclusive jurisdiction to settle any dispute or claim arising
          from these notices, except where you are a consumer resident in
          Scotland or Northern Ireland, in which case you may bring proceedings
          in your local courts.
        </Para>
      </Section>

      <Section title="9. Regulatory Compliance">
        <Para>
          TECHNYON is committed to compliance with all applicable UK laws and
          regulations, including but not limited to:
        </Para>
        <List
          items={[
            "UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018",
            "The Electronic Commerce (EC Directive) Regulations 2002",
            "The Consumer Rights Act 2015 and associated consumer protection legislation",
            "The Equality Act 2010 — we are committed to accessibility and non-discrimination",
            "WEEE Directive — electronic waste disposal responsibilities",
          ]}
        />
      </Section>

      <Section title="10. Contact & Complaints">
        <Para>
          If you have a legal concern, complaint, or require further information
          regarding any of the above, please contact us in the first instance:
        </Para>
        <List
          items={[
            "Email: argrouplondon7@gmail.com",
            "Address: 395 Strand, London, United Kingdom",
            "We aim to acknowledge all legal enquiries within 2 business days",
          ]}
        />
        <Para>
          If your complaint is not resolved to your satisfaction, you may
          escalate to the relevant UK regulatory authority depending on the
          nature of your concern.
        </Para>
      </Section>
    </LegalLayout>
  );
}
