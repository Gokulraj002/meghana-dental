import React from "react";
import Link from "next/link";
import blogsMeta from "@/data/blogs-meta.json";

// Table of contents — section IDs match the h2 anchors below
const TOC = [
  { id: "why-meghana-dental", label: "Why Meghana Dental Is the Best" },
  { id: "nabh-certified", label: "NABH Certified Excellence" },
  { id: "empanelled-organisations", label: "Empanelled with Government Bodies" },
  { id: "microscope-dentistry", label: "Only 25× Microscope Clinic" },
  { id: "comprehensive-services", label: "Comprehensive Dental Services" },
  { id: "expert-team", label: "Our MDS Specialist Team" },
  { id: "advanced-technology", label: "Advanced Technology" },
  { id: "patient-reviews", label: "What Our Patients Say" },
  { id: "transparent-pricing", label: "Affordable, Transparent Pricing" },
  { id: "visit-us", label: "Visit Meghana Dental, Tirupati" },
];

const CURRENT_SLUG = "best-dental-hospital-in-andhra-pradesh";
const ARTICLE_URL = "https://meghanadental.in/blogs/" + CURRENT_SLUG;
const ARTICLE_TITLE = "Best Dental Hospital in Andhra Pradesh";

const May07b = () => {
  return (
    <>
      <div className="container py-4">
        {/* H1 */}
        <h1 className="text-brand py-4">
          Best Dental Hospital in Andhra Pradesh 
        </h1>

        {/* Date + read time */}
        <div className="mb-4" style={{ color: "#6B7280", fontSize: "0.9rem" }}>
          May 07, 2026 &nbsp;•&nbsp; 9 min read
        </div>

        <div className="row g-5">
          {/* ─────── LEFT — Article Content ─────── */}
          <div className="col-lg-8 blog-article-body" style={{ fontSize: "14px", lineHeight: 1.7 }}>

            {/* Introduction */}
            <p>
              When it comes to oral health, you deserve nothing but the very
              best. Across Andhra Pradesh, thousands of patients travel every
              year seeking advanced, reliable, and affordable dental care from
              a hospital they can truly trust. If you are searching for the{" "}
              <span style={{ fontWeight: 700 }}>Best Dental Hospital in Andhra Pradesh</span>,
              your search ends right here — at Meghana Multispeciality Dental
              Hospital, Tirupati. With over 17 years of clinical excellence, a
              team of highly qualified MDS specialists, world-class
              infrastructure, and a 4.9-star Google rating from over 850
              verified patient reviews, Meghana Dental has established itself
              as the most trusted name in dental care across Tirupati and the
              entire state of Andhra Pradesh.
            </p>
            <p>
              More than 50,000 patients have walked through our doors and left
              with healthier teeth, more confident smiles, and a dental
              experience that exceeded their expectations. Whatever your
              dental concern — from a simple toothache to a complete smile
              transformation — Meghana Dental has the specialist, the
              technology, and the compassion to deliver the finest care
              available anywhere in Andhra Pradesh.
            </p>

            <div>
              <img
                src="/blogimage/blog2(1).jpg"
                alt="Best Dental Hospital in Andhra Pradesh — Meghana Multispeciality Dental Hospital, Tirupati"
                style={{ width: "100%", height: "700px", objectFit: "cover" }}
              />
            </div>

            {/* Why Meghana Dental */}
            <div>
              <h2 id="why-meghana-dental" className="fw-bold mt-5">
                <span className="text-brand">
                  Why Meghana Dental Is the Best Dental Hospital in Andhra
                  Pradesh
                </span>
              </h2>
              <p>
                Choosing the best dental hospital in Andhra Pradesh is not
                just about finding a clinic closest to you — it is about
                finding a place where your oral health is treated as a
                priority, where technology is at par with global standards,
                and where the doctors genuinely care about your wellbeing.
                Meghana Multispeciality Dental Hospital ticks every one of
                these boxes and more. We combine clinical precision with
                genuine compassion, offering a dental experience that is
                pain-free, anxiety-free, and built around your comfort. From
                the moment you walk into our modern facility in Tirupati to
                the moment your treatment is complete, every aspect of your
                care is personalised, professional, and of the highest
                quality.
              </p>
              <p>
                What truly makes Meghana Dental the{" "}
                <span style={{ fontWeight: 700 }}>Best Dental Clinic in Andhra Pradesh</span> is our
                unwavering commitment to staying at the forefront of dental
                technology and medical knowledge. We have invested in
                equipment that most dental hospitals in the state do not even
                have access to — including a Dental Operating Microscope with
                25&times; magnification, laser dentistry systems, advanced
                rotary endodontic technology, and 3D digital scanning for
                aligners and implants. Combined with our team of MDS-qualified
                specialists across all major dental disciplines, this
                technology allows us to diagnose more accurately, treat more
                precisely, and deliver outcomes that are consistently superior
                to what patients find elsewhere in Andhra Pradesh.
              </p>
            </div>

            {/* NABH Certified */}
            <div>
              <h2 id="nabh-certified" className="fw-bold mt-5">
                <span className="text-brand">
                  NABH Certified — A Mark of Excellence Trusted Across Andhra
                  Pradesh
                </span>
              </h2>
              <p>
                One of the most important reasons Meghana Multispeciality
                Dental Hospital stands apart as the{" "}
                <span style={{ fontWeight: 700 }}>Best Dental Hospital in Andhra Pradesh</span> is
                our NABH Certification — the National Accreditation Board for
                Hospitals. This is one of the most prestigious accreditations
                a dental hospital can hold in India, and it is held by only a
                very small number of dental clinics in the entire state of
                Andhra Pradesh. NABH certification means that Meghana
                Dental&apos;s clinical protocols, sterilisation standards,
                infection control practices, patient safety procedures, and
                overall hospital management have all been rigorously evaluated
                and found to meet the highest national healthcare standards.
                When you choose Meghana Dental, you are choosing a hospital
                that has been independently verified to be safe, hygienic,
                professional, and accountable — a standard that gives both
                patients and their families complete peace of mind.
              </p>
            </div>

            {/* Empanelled Organisations */}
            <div>
              <h2 id="empanelled-organisations" className="fw-bold mt-5">
                <span className="text-brand">
                  Empanelled with Government &amp; Public Sector Organisations
                  Across Andhra Pradesh
                </span>
              </h2>
              <p>
                Meghana Dental&apos;s reputation as the{" "}
                <span style={{ fontWeight: 700 }}>Best Dental Clinic in Andhra Pradesh</span> is
                further cemented by the fact that we are officially empanelled
                with more than 11 government organisations, defence services,
                and public sector undertakings. These include the Government
                of India, ECHS (Ex-Servicemen Contributory Health Scheme), TTD
                (Tirumala Tirupati Devasthanams), Andhra Pradesh Police,
                APSRTC, Southern Power Distribution AP, APTRANSCO, BSNL, India
                Post, NTR Vaidya Seva, and Bank Employees. This means that
                government employees, defence personnel, their families, and
                public sector workers across Andhra Pradesh can access
                world-class dental care at Meghana Dental through cashless,
                empanelled treatment. No other dental hospital in Tirupati has
                built this level of institutional trust and recognition across
                so many major organisations in Andhra Pradesh.
              </p>
            </div>

            <div>
              <img
                src="/blogimage/blog2(2).jpg"
                alt="NABH Certified Dental Hospital in Andhra Pradesh — Meghana Dental"
                style={{ width: "100%", height: "700px", objectFit: "cover" }}
              />
            </div>

            {/* Microscope Dentistry */}
            <div>
              <h2 id="microscope-dentistry" className="fw-bold mt-5">
                <span className="text-brand">
                  Tirupati&apos;s Only Clinic with 25&times; Dental Operating
                  Microscope
                </span>
              </h2>
              <p>
                Among all dental hospitals in Andhra Pradesh, Meghana Dental
                holds a distinction that is truly unique — we are the only
                dental clinic in Tirupati equipped with a Dental Operating
                Microscope with 25&times; magnification. This is the same
                level of technology used in neurosurgery, and its application
                in dentistry represents the absolute pinnacle of precision
                dental care. Under 25&times; magnification, our specialists
                can see details of the tooth and surrounding tissues that are
                completely invisible to the naked eye. Every root canal,
                dental restoration, microsurgery, and implant placement is
                performed with a level of accuracy and care that simply cannot
                be matched by conventional dental clinics.
              </p>
              <p>
                The result is less trauma to healthy tissue, faster healing
                times, and outcomes that are far superior to standard dental
                treatment. If you want the best possible dental care in Andhra
                Pradesh — the kind of care where there is truly zero margin
                for error — Meghana Dental is the only hospital in Tirupati
                where microscope-guided dentistry is available.
              </p>
            </div>

            {/* Comprehensive Services */}
            <div>
              <h2 id="comprehensive-services" className="fw-bold mt-5">
                <span className="text-brand">
                  Comprehensive Dental Services — All Under One Roof
                </span>
              </h2>
              <p>
                As the <span style={{ fontWeight: 700 }}>Best Dental Hospital in Andhra Pradesh</span>,
                Meghana Multispeciality Dental Hospital offers a full range of
                dental treatments across 12 specialties, all delivered by
                qualified MDS specialists — not general dentists. Here is a
                detailed overview of every service we offer:
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-gem text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Dental Implants</span> are one of our most
                    popular and highly sought-after treatments. A dental
                    implant is a premium titanium root surgically placed into
                    the jawbone to replace a missing tooth permanently. At
                    Meghana Dental, every implant procedure is planned and
                    executed with surgical precision by our ICOI Fellow
                    Implantologist, Dr. M. Hemadri, using advanced imaging,
                    high-quality titanium implants, and guided implant
                    protocols. The result is a natural-looking, natural-feeling
                    tooth replacement that lasts a lifetime with proper care.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-shield-check text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Root Canal Treatment (RCT)</span> at Meghana
                    Dental is a completely different experience from what most
                    patients expect. Thanks to our Dental Operating Microscope
                    and advanced rotary endodontic technology, root canal
                    treatment at our hospital is painless, precise, and often
                    completed in a single sitting with the highest success
                    rate. Microscope-guided RCT allows our endodontist to see
                    the entire root canal system with exceptional clarity,
                    clean it thoroughly using lasers, and seal it perfectly
                    with 3D obturation — dramatically improving long-term
                    success.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-bricks text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Orthodontic Treatment</span> at Meghana Dental
                    covers all types of braces — metal braces, ceramic braces,
                    and self-ligating braces — for patients of all ages. Our
                    MDS Orthodontist designs personalised treatment plans for
                    each patient to achieve perfectly aligned teeth, corrected
                    jaw relationships, and a confident, beautiful smile.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-stars text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Clear Aligners</span> are the modern, invisible
                    alternative to traditional braces. At Meghana Dental,
                    clear aligners are custom-designed using 3D digital
                    scanning technology, ensuring each tray fits precisely and
                    moves your teeth exactly as planned. These transparent,
                    removable trays allow you to straighten your teeth
                    discreetly — making them especially popular among working
                    professionals and adults across Andhra Pradesh.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-brightness-high text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Teeth Whitening</span> at Meghana Dental is a
                    professional, clinically safe, in-office laser whitening
                    procedure that delivers dramatically brighter results in a
                    single appointment. Our professional whitening uses
                    controlled, high-grade whitening agents with laser
                    activation to lift deep stains and discolouration safely
                    and effectively.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-layers-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Dental Crowns and Bridges</span> at Meghana
                    Dental are crafted from premium materials including
                    zirconia and e-max lithium disilicate, manufactured to the
                    highest precision standards. Every crown and bridge is
                    custom-made to match your natural tooth colour, shape, and
                    bite — ensuring a result that is both functionally strong
                    and aesthetically flawless.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-emoji-smile text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Dentures and Prosthetics</span> at Meghana
                    Dental include premium BPS (Biofunctional Prosthetic
                    System) dentures, removable partial dentures, and
                    implant-supported dentures. BPS dentures are crafted using
                    a sophisticated Swiss biofunctional technique that ensures
                    an accurate, comfortable fit aligned with your jaw
                    movement and facial aesthetics.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-balloon-heart text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Pediatric Dentistry</span> at Meghana Dental
                    is delivered in a gentle, fun, and completely
                    child-friendly environment designed to make young patients
                    feel safe and comfortable from their very first visit.
                    From cavity treatment and tooth extractions to
                    pulpectomy, preventive care, and habit correction, we
                    provide comprehensive dental care for children at every
                    stage of their development.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-zoom-in text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Microscope Dentistry</span> is perhaps the
                    most extraordinary service offered at Meghana Dental — and
                    it is completely exclusive to our hospital in Tirupati.
                    With our Dental Operating Microscope providing 25&times;
                    magnification, every microscopic detail of the tooth is
                    visible to our specialists during treatment. Patients who
                    have had failed treatments elsewhere often find that
                    microscope-guided retreatment at Meghana Dental achieves
                    success where conventional approaches could not.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-lightning-charge-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Laser Dentistry</span> at Meghana Dental
                    makes a wide range of procedures minimally invasive,
                    faster healing, and completely pain-free. Dental lasers
                    are used for gum disease treatment, gum reshaping, cavity
                    removal in early stages, canal disinfection,
                    frenectomies, teeth whitening enhancement, and soft tissue
                    surgeries — all without the need for a scalpel, stitches,
                    or lengthy recovery periods.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-heart-pulse text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Gum Treatment</span> at Meghana Dental
                    addresses all stages of gum disease — from early
                    gingivitis to advanced periodontitis. Our periodontists
                    provide scaling and root planing, deep cleaning,
                    laser-assisted gum treatment, and flap surgeries where
                    necessary. Healthy gums are the foundation of a healthy
                    smile.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-magic text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Smile Makeover</span> at Meghana Dental is a
                    comprehensive cosmetic dentistry treatment that combines
                    multiple procedures — such as teeth whitening, veneers,
                    crowns, aligners, and gum reshaping — to completely
                    transform your smile. Our cosmetic dentistry team designs
                    your personalised plan using digital smile design tools,
                    giving you a preview of your expected results before
                    treatment even begins.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-award text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Full Mouth Rehabilitation</span> is our most
                    comprehensive treatment offering, designed for patients
                    who have lost multiple teeth or suffer from advanced
                    dental disease affecting their ability to eat, speak, and
                    smile with confidence. It combines implants, crowns,
                    bridges, dentures, RCT, and periodontal treatment in a
                    carefully sequenced treatment plan that systematically
                    restores the entire mouth to full health and function.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <img
                src="/blogimage/blog2(3).jpg"
                alt="Comprehensive Dental Services — Meghana Dental Hospital, Tirupati"
                style={{ width: "100%", height: "700px", objectFit: "cover" }}
              />
            </div>

            {/* Expert Team */}
            <div>
              <h2 id="expert-team" className="fw-bold mt-5">
                <span className="text-brand">
                  Our Expert Team — MDS Specialists You Can Trust
                </span>
              </h2>
              <p>
                At the heart of Meghana Dental&apos;s excellence is our
                outstanding team of doctors. Leading the hospital is{" "}
                <span style={{ fontWeight: 700 }}>Dr. M. Hemadri</span>, Founder and Director of
                Meghana Multispeciality Dental Hospital, and one of Andhra
                Pradesh&apos;s most distinguished endodontists and
                implantologists. Dr. Hemadri holds an MDS in Conservative
                Dentistry and Endodontics and is also a Fellow of the
                International Congress of Oral Implantologists (ICOI). With
                over 17 years of clinical experience, he is widely acclaimed
                across Andhra Pradesh for his expertise in microscope-guided
                root canal treatment, single-visit RCT, laser dentistry,
                dental implants, and full-mouth rehabilitation. His
                dedication to continuing education and adoption of the latest
                dental technologies has been the driving force behind Meghana
                Dental&apos;s reputation as the{" "}
                <span style={{ fontWeight: 700 }}>Best Dental Hospital in Andhra Pradesh</span>.
              </p>
              <p>
                Alongside Dr. Hemadri, Meghana Dental&apos;s team includes
                six or more specialist doctors covering all major dental
                disciplines — endodontics, prosthodontics, orthodontics,
                periodontics, oral surgery, cosmetic dentistry, and pediatric
                dentistry. Every treatment at Meghana Dental is performed by
                a qualified MDS specialist in that field — not a general
                dentist — ensuring the highest standard of clinical care for
                every patient at every visit. This commitment to
                specialist-level care across all departments is one of the
                key reasons Meghana Dental is trusted as the{" "}
                <span style={{ fontWeight: 700 }}>Best Dental Clinic in Andhra Pradesh</span>.
              </p>
            </div>

            {/* Advanced Technology */}
            <div>
              <h2 id="advanced-technology" className="fw-bold mt-5">
                <span className="text-brand">
                  Advanced Technology — Setting the Standard for Dental
                  Hospitals in Andhra Pradesh
                </span>
              </h2>
              <p>
                Meghana Dental&apos;s investment in advanced dental technology
                is unmatched in the Tirupati region and places us among the
                most technologically advanced dental hospitals in all of
                Andhra Pradesh. Our state-of-the-art facility features a
                Dental Operating Microscope with 25&times; magnification for
                precision endodontics and microsurgery, dental laser systems
                for painless soft tissue procedures, rotary endodontic
                systems for single-sitting root canal treatment, digital
                X-ray and OPG for accurate diagnosis, and 3D digital scanning
                for custom aligner and implant planning. Every piece of
                equipment at Meghana Dental is selected specifically to
                enhance precision, reduce patient discomfort, shorten
                treatment time, and improve long-term outcomes. When you
                visit Meghana Dental, you receive care that is on par with
                the best dental hospitals in India — right here in Tirupati,
                Andhra Pradesh.
              </p>
            </div>

            {/* Sterilisation & Safety */}
            <div>
              <h2 className="fw-bold mt-5">
                <span className="text-brand">
                  Sterilisation and Safety — International Standards at
                  Meghana Dental
                </span>
              </h2>
              <p>
                Patient safety is a non-negotiable priority at Meghana Dental.
                Our hospital follows international-grade sterilisation and
                infection control protocols that meet and exceed the
                requirements set by NABH. Every instrument used in patient
                treatment goes through a rigorous multi-stage sterilisation
                process. Treatment rooms are disinfected between patients
                using hospital-grade protocols. Disposable materials are used
                wherever possible to completely eliminate the risk of
                cross-contamination. Our commitment to a clean, safe, and
                hygienic environment means that every patient — from a small
                child to an elderly senior — can receive dental treatment at
                Meghana Dental with complete confidence in their safety. This
                level of clinical safety governance is part of why Meghana
                Dental is recognised as the{" "}
                <span style={{ fontWeight: 700 }}>Best Dental Hospital in Andhra Pradesh</span>.
              </p>
            </div>

            {/* Patient Reviews */}
            <div>
              <h2 id="patient-reviews" className="fw-bold mt-5">
                <span className="text-brand">
                  What Our Patients Say About Meghana Dental
                </span>
              </h2>
              <p>
                The true measure of any dental hospital is the experience of
                its patients. Meghana Dental&apos;s 4.9-star Google rating
                from over 850 verified patient reviews reflects the
                consistently exceptional care our team delivers. Business
                owners, teachers, software engineers, college students,
                homemakers, and retired professors from across Tirupati and
                Andhra Pradesh have shared their experiences — praising the
                painless procedures, the caring staff, the modern facilities,
                and the life-changing results they achieved at Meghana
                Dental.
              </p>
              <p>
                Patients who came in afraid of dentists have left completely
                comfortable and converted into regular dental visitors.
                Children who dreaded dental clinics now look forward to
                visiting Meghana Dental. People who had been suffering with
                missing teeth, painful infections, or embarrassing smiles for
                years have had their lives transformed by the skilled hands
                of our specialists. These stories are the reason Meghana
                Dental has treated more than 50,000 patients and continues to
                grow as the most trusted dental hospital in Andhra Pradesh.
              </p>
            </div>

            {/* Transparent Pricing */}
            <div>
              <h2 id="transparent-pricing" className="fw-bold mt-5">
                <span className="text-brand">
                  Affordable, Transparent Pricing and Flexible Payment Options
                </span>
              </h2>
              <p>
                World-class dental care should not come at a cost that is
                beyond reach. At Meghana Dental, the{" "}
                <span style={{ fontWeight: 700 }}>Best Dental Hospital in Andhra Pradesh</span>, we
                believe that every resident of Tirupati and Andhra Pradesh
                deserves access to specialist dental care regardless of their
                financial situation. Our pricing is completely transparent —
                no hidden charges, no surprise bills. We offer flexible
                payment options including EMI plans to make even major
                treatments like dental implants, full mouth rehabilitation,
                and orthodontics financially accessible. For government
                employees and defence personnel covered under empanelled
                schemes, cashless treatment is available. During your initial
                consultation, our team clearly explains all treatment costs
                and options so you can make a fully informed decision without
                any financial pressure.
              </p>
            </div>

            {/* Visit Us */}
            <div>
              <h2 id="visit-us" className="fw-bold mt-5">
                <span className="text-brand">
                  Visit the Best Dental Hospital in Andhra Pradesh — Meghana
                  Dental, Tirupati
                </span>
              </h2>
              <p>
                Whether you are from Tirupati, Tirumala, Chandragiri,
                Srikalahasti, Renigunta, Chittoor, Nellore, or anywhere across
                Andhra Pradesh, Meghana Multispeciality Dental Hospital is
                your destination for the finest dental care available in the
                state. Our doors are open six days a week with extended
                evening hours to accommodate patients with busy schedules,
                and we are open on Sundays as well for morning appointments.
                You can book your consultation through our website, call us
                directly, or reach us on WhatsApp for quick and easy
                appointment scheduling. Virtual consultations are also
                available for patients who want to discuss their dental
                concerns with our specialists before making the trip to
                Tirupati.
              </p>
              <p>
                Do not compromise on your dental health. Trust the hospital
                that Andhra Pradesh trusts — Meghana Multispeciality Dental
                Hospital, Tirupati. With 17 years of excellence, the only
                microscope dentistry clinic in Tirupati, NABH certification,
                six-plus MDS specialists, and a 4.9-star reputation built on
                50,000 patient smiles, Meghana Dental is truly the{" "}
                <span style={{ fontWeight: 700 }}>Best Dental Hospital in Andhra Pradesh</span>.
              </p>
            </div>

            {/* CTA Box */}
            <div
              className="mt-5 mb-4"
              style={{
                background: "var(--primary-50)",
                border: "2px solid var(--primary-light)",
                borderRadius: "var(--radius-lg)",
                padding: "32px",
              }}
            >
              <h3 className="fw-bold mb-4" style={{ color: "var(--primary-dark)" }}>
                Book Your Appointment Today at Meghana Multispeciality Dental
                Hospital
              </h3>
              <ul className="list-unstyled mb-0">
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-geo-alt-fill text-brand me-3"></i>
                  <span>
                    No. 18-2-91B, Ashok Nagar, Tirupati, Andhra Pradesh 517501
                  </span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-telephone-fill text-brand me-3"></i>
                  <span>
                    Call / WhatsApp:{" "}
                    <a
                      href="tel:08772248330"
                      style={{ color: "var(--primary)", fontWeight: 600 }}
                    >
                      08772248330
                    </a>
                    ,{" "}
                    <a
                      href="tel:+917893327036"
                      style={{ color: "var(--primary)", fontWeight: 600 }}
                    >
                      +91 7893327036
                    </a>
                  </span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-envelope-fill text-brand me-3"></i>
                  <span>
                    <a
                      href="mailto:info@meghanadental.in"
                      style={{ color: "var(--primary)", fontWeight: 600 }}
                    >
                      info@meghanadental.in
                    </a>
                  </span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-globe text-brand me-3"></i>
                  <span>
                    <a
                      href="https://www.meghanadental.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--primary)", fontWeight: 600 }}
                    >
                      www.meghanadental.in
                    </a>
                  </span>
                </li>
                <li className="d-flex align-items-center">
                  <i className="bi bi-clock-fill text-brand me-3"></i>
                  <span>
                    Mon–Sat: 9:00 AM – 8:00 PM &nbsp;|&nbsp; Sunday: 10:00 AM
                    – 2:00 PM
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* ─────── /LEFT ─────── */}

          {/* ─────── RIGHT — Editorial Sidebar ─────── */}
          <aside className="col-lg-4">
            <div style={{ position: "sticky", top: "100px" }}>

              {/* 1. CATEGORY pill + READING META */}
              <div className="mb-4 d-flex align-items-center" style={{ gap: "10px", flexWrap: "wrap" }}>
                <span
                  style={{
                    background: "var(--primary-50)",
                    color: "var(--primary-dark)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    textTransform: "uppercase",
                  }}
                >
                  Dental Hospital
                </span>
                <span style={{ fontSize: "0.78rem", color: "#9CA3AF" }}>
                  <i className="bi bi-clock me-1"></i>9 min read
                </span>
              </div>

              {/* 2. TABLE OF CONTENTS — sticky editorial-style */}
              <div
                className="mb-4"
                style={{
                  background: "#fff",
                  border: "1px solid #E5E7EB",
                  borderLeft: "3px solid var(--primary)",
                  borderRadius: "10px",
                  padding: "22px 22px 18px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    letterSpacing: "1.8px",
                    color: "#6B7280",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}
                >
                  <i className="bi bi-list-ul text-brand me-2"></i>
                  In this article
                </div>
                <ol className="list-unstyled mb-0" style={{ counterReset: "toc" }}>
                  {TOC.map((t) => (
                    <li
                      key={t.id}
                      className="toc-item"
                      style={{
                        position: "relative",
                        paddingLeft: "30px",
                        marginBottom: "10px",
                        counterIncrement: "toc",
                      }}
                    >
                      <a
                        href={"#" + t.id}
                        className="toc-link"
                        style={{
                          color: "var(--text-body)",
                          fontSize: "0.86rem",
                          lineHeight: 1.45,
                          display: "block",
                          textDecoration: "none",
                          transition: "color .2s",
                        }}
                      >
                        {t.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* 3. MEDICALLY REVIEWED BY (E-E-A-T trust signal) */}
              <div
                className="mb-4"
                style={{
                  background: "#fff",
                  border: "1px solid #E5E7EB",
                  borderRadius: "10px",
                  padding: "22px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    letterSpacing: "1.8px",
                    color: "#6B7280",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}
                >
                  <i className="bi bi-patch-check-fill text-brand me-2"></i>
                  Medically Reviewed By
                </div>
                <div className="d-flex align-items-center">
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: "var(--primary-gradient)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      flexShrink: 0,
                      marginRight: "14px",
                    }}
                  >
                    MD
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)" }}>
                      MDS Specialist Team
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "#6B7280", marginTop: "2px" }}>
                      Meghana Dental Hospital
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "var(--primary-dark)", marginTop: "4px", fontWeight: 600 }}>
                      17+ Years Experience &nbsp;•&nbsp; NABH Certified
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. RELATED ARTICLES — pulled from blogs-meta.json */}
              <div
                className="mb-4"
                style={{
                  background: "#fff",
                  border: "1px solid #E5E7EB",
                  borderRadius: "10px",
                  padding: "22px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    letterSpacing: "1.8px",
                    color: "#6B7280",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}
                >
                  <i className="bi bi-journal-text text-brand me-2"></i>
                  Related Articles
                </div>
                {blogsMeta
                  .filter((p) => p.slug !== CURRENT_SLUG)
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      key={p.slug}
                      href="/"
                      className="related-item"
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        padding: "10px 0",
                        borderTop: "1px solid #F3F4F6",
                        textDecoration: "none",
                      }}
                    >
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "8px",
                          background: "var(--primary-50)",
                          color: "var(--primary-dark)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginRight: "12px",
                          fontSize: "1.1rem",
                        }}
                      >
                        <i className="bi bi-file-earmark-text"></i>
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "0.7rem",
                            color: "var(--primary)",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            marginBottom: "2px",
                          }}
                        >
                          {p.category}
                        </div>
                        <div
                          style={{
                            fontSize: "0.82rem",
                            color: "var(--text-primary)",
                            fontWeight: 600,
                            lineHeight: 1.35,
                          }}
                        >
                          {p.title.length > 60 ? p.title.slice(0, 60) + "…" : p.title}
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>

              {/* 6. NEWSLETTER / SUBTLE CTA — editorial footer */}
              <div
                style={{
                  background: "var(--primary-dark)",
                  color: "#fff",
                  borderRadius: "10px",
                  padding: "22px",
                  textAlign: "center",
                }}
              >
                <i
                  className="bi bi-chat-heart-fill"
                  style={{ fontSize: "1.6rem", color: "#fff", opacity: 0.9 }}
                ></i>
                <div
                  className="fw-bold mt-2 mb-2"
                  style={{ color: "#fff", fontSize: "1.05rem" }}
                >
                  Have a dental question?
                </div>
                <div style={{ fontSize: "0.82rem", opacity: 0.85, marginBottom: "14px" }}>
                  WhatsApp our team — we reply within 10 minutes.
                </div>
                <a
                  href="https://wa.me/917893327036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn fw-bold w-100"
                  style={{
                    background: "#25D366",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "8px",
                    fontSize: "0.88rem",
                  }}
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </aside>
          {/* ─────── /RIGHT ─────── */}
        </div>
      </div>

      {/* Sidebar interactions + article body font-size override */}
      <style>{`
        /* Editorial sidebar — TOC numbered, hover, share pills, related-article hover */
        .toc-item::before {
          content: counter(toc, decimal-leading-zero);
          position: absolute;
          left: 0;
          top: 0;
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--primary);
          letter-spacing: 0.5px;
        }
        .toc-link:hover {
          color: var(--primary-dark) !important;
        }
        .toc-link:hover::after {
          content: " →";
          color: var(--primary);
        }
        .share-pill {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          color: #fff !important;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          transition: transform .2s, box-shadow .2s;
          text-decoration: none !important;
        }
        .share-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(0,0,0,0.18);
          color: #fff !important;
        }
        .related-item:hover {
          background: var(--primary-50);
          border-radius: 8px;
          padding-left: 8px !important;
          padding-right: 8px !important;
        }
        /* Smooth scroll for TOC anchor jumps + offset for sticky navbar */
        html { scroll-behavior: smooth; }
        .blog-article-body h2[id] {
          scroll-margin-top: 100px;
        }
        .blog-article-body p,
        .blog-article-body li,
        .blog-article-body li span,
        .blog-article-body ul,
        .blog-article-body strong,
        .blog-article-body a {
          font-size: 14px;
          line-height: 1.7;
        }
        /* Remove any red/pink boxes, borders, outlines, backgrounds on inline emphasis */
        .blog-article-body strong,
        .blog-article-body b,
        .blog-article-body a,
        .blog-article-body em {
          background: transparent !important;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          padding: 0 !important;
          text-decoration: none !important;
          color: inherit !important;
        }
        .blog-article-body strong,
        .blog-article-body b {
          font-weight: 700 !important;
        }
      `}</style>
    </>
  );
};

export default May07b;
