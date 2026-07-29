import React from "react";
import Link from "next/link";
import blogsMeta from "@/data/blogs-meta.json";

// Table of contents — section IDs match the h2 anchors below
const TOC = [
  { id: "what-is-full-mouth-rehab", label: "What Is Full Mouth Rehabilitation?" },
  { id: "who-needs-it", label: "Who Needs It? The Honest Signs" },
  { id: "treatment-options", label: "Your Treatment Options, Explained" },
  { id: "the-process", label: "The Process — Step by Step" },
  { id: "cost-2026", label: "Cost in Tirupati (2026)" },
  { id: "how-long", label: "How Long Does It Take?" },
  { id: "life-after", label: "Life After Rehabilitation" },
  { id: "why-meghana-dental", label: "Why Meghana Dental?" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const CURRENT_SLUG = "full-mouth-rehabilitation-tirupati";
const ARTICLE_URL = "https://meghanadental.in/blogs/" + CURRENT_SLUG;
const ARTICLE_TITLE = "Full Mouth Rehabilitation in Tirupati";

const Jul30 = () => {
  return (
    <>
      <div className="container py-4">
        {/* H1 */}
        <h1 className="text-brand py-4">
          Full Mouth Rehabilitation in Tirupati — The Complete Guide
        </h1>

        {/* Date + read time */}
        {/* <div className="mb-4" style={{ color: "#6B7280", fontSize: "0.9rem" }}>
          July 30, 2026 &nbsp;•&nbsp; 15 min read
        </div> */}

        <div className="row g-5">
          {/* ─────── LEFT — Article Content ─────── */}
          <div
            className="col-lg-8 blog-article-body"
            style={{ fontSize: "14px", lineHeight: 1.7 }}
          >
            {/* Introduction */}
            <p>
              There is a particular kind of suffering that comes not from one
              bad tooth, but from a whole mouth that has gradually failed.
              Meals chosen by softness rather than taste. Conversations
              angled to hide the gaps. Dentures that float and click, or
              remaining teeth that ache, wobble and break one after another.
              Family functions where you smile with closed lips and skip the
              food you once loved. If this describes you or a parent you care
              for, understand two things clearly: first, this situation is
              fully, predictably fixable — modern dentistry can rebuild an
              entire failing mouth into one that chews, speaks and smiles
              like it did decades ago; and second, the rebuilding has a name:
              full mouth rehabilitation. This pillar guide from{" "}
              <span style={{ fontWeight: 700 }}>
                Meghana Multi Speciality Dental Hospital
              </span>{" "}
              — Tirupati&apos;s NABH-certified super speciality dental centre
              — explains everything: what full mouth rehabilitation actually
              is, who needs it, every treatment option from removable
              dentures to fixed All-on-4 implants, the step-by-step process,
              realistic full mouth rehabilitation cost in Tirupati for 2026,
              timelines, and how to choose where to have it done.
            </p>
            <p>
              Full mouth rehabilitation is the most demanding discipline in
              dentistry, because it is not one procedure — it is the
              coordinated orchestration of many: implantology,
              prosthodontics, endodontics, periodontics, and often laser and
              microscope dentistry, all converging on one mouth with one
              unified plan. This is precisely why it must be done at a true
              multispeciality centre. At{" "}
              <span style={{ fontWeight: 700 }}>
                Meghana Multi Speciality Dental Hospital
              </span>
              , full mouth cases are planned and led by Dr. M. Hemadri, MDS
              and ICOI Fellow in Implant Dentistry, with 17+ years of
              experience and a special clinical reputation for full mouth
              rehabilitation — supported by a complete in-house specialist
              team, Tirupati&apos;s only 25&times; Dental Operating
              Microscope, 3D CBCT planning, and the trust of 50,000+ patients
              reflected in a 4.9-star Google rating across 850+ reviews.
              Patients travel to us from across Chittoor district and Andhra
              Pradesh for exactly this treatment, and this guide is written to
              give you everything they learn in our consultation room.
            </p>

            <div>
              <img
                src="/blogimage/jul30(1).png"
                alt="Full mouth rehabilitation in Tirupati — complete guide from Meghana Multi Speciality Dental Hospital"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* What Is Full Mouth Rehabilitation */}
            <div>
              <h2 id="what-is-full-mouth-rehab" className="fw-bold mt-5">
                <span className="text-brand">
                  What Exactly Is Full Mouth Rehabilitation?
                </span>
              </h2>
              <p>
                Full mouth rehabilitation (also called full mouth
                reconstruction or full mouth restoration) is the
                comprehensive rebuilding of all teeth in both the upper and
                lower jaws — simultaneously and according to a single master
                plan — to restore complete function, health and appearance.
                The key word is plan. Patching one failing tooth at a time,
                year after year, produces a mouth of mismatched repairs that
                never quite work together: the bite stays collapsed, new
                problems keep surfacing, and money keeps flowing with no end
                state. Full mouth rehabilitation reverses this logic. Our
                specialist first defines the destination — the correct bite
                height, the right tooth positions, the ideal distribution of
                chewing forces, the smile you should have — and then selects
                and sequences every individual procedure (extractions, root
                canals, gum therapy, implants, crowns, bridges, dentures) as
                steps toward that one destination.
              </p>
              <p>
                The result is not a collection of fixes; it is a rebuilt,
                harmonised chewing system designed to function as a whole for
                decades. Depending on your situation, the final teeth may be
                fixed implant-supported bridges, full-mouth crown and bridge
                work on saved natural teeth, implant-anchored overdentures,
                premium removable dentures — or, very commonly, an
                intelligent combination. Explore our{" "}
                <Link href="/services/full-mouth-rehab" style={{ fontWeight: 600 }}>
                  Full Mouth Rehabilitation
                </Link>{" "}
                service at{" "}
                <span style={{ fontWeight: 700 }}>
                  Meghana Multi Speciality Dental Hospital
                </span>{" "}
                for an overview, and read on for the complete picture.
              </p>
            </div>

            {/* Who Needs It */}
            <div>
              <h2 id="who-needs-it" className="fw-bold mt-5">
                <span className="text-brand">
                  Who Needs Full Mouth Rehabilitation? The Honest Signs
                </span>
              </h2>
              <p>
                Full mouth rehabilitation is indicated when problems are
                generalised rather than isolated. The classic candidates we
                see at{" "}
                <span style={{ fontWeight: 700 }}>
                  Meghana Multi Speciality Dental Hospital
                </span>{" "}
                include:
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-emoji-frown text-brand me-3"></i>
                  <span>
                    Patients with{" "}
                    <span style={{ fontWeight: 700 }}>
                      many missing teeth
                    </span>{" "}
                    — whether lost gradually to decay and gum disease or
                    already wearing unsatisfactory dentures — who want to
                    chew real food again.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-triangle-fill text-brand me-3"></i>
                  <span>
                    Patients whose{" "}
                    <span style={{ fontWeight: 700 }}>
                      remaining teeth are failing together
                    </span>
                    : multiple teeth loose from advanced gum disease, multiple
                    deep cavities, repeated fractures of brittle or heavily
                    filled teeth, where saving a tooth here and there no
                    longer adds up to a working mouth.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-arrow-down-circle text-brand me-3"></i>
                  <span>
                    Patients with{" "}
                    <span style={{ fontWeight: 700 }}>severe tooth wear</span>{" "}
                    — decades of grinding (bruxism), acidic erosion or
                    abrasion that has flattened the teeth, collapsed the bite
                    height, strained the jaw joints and aged the lower face,
                    often visible as a shortened chin-to-nose distance and
                    deepened facial folds.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-x-octagon text-brand me-3"></i>
                  <span>
                    Patients with{" "}
                    <span style={{ fontWeight: 700 }}>
                      widespread failed old dentistry
                    </span>{" "}
                    — generations of crowns, bridges and root canals breaking
                    down simultaneously.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-bandaid text-brand me-3"></i>
                  <span>
                    Patients{" "}
                    <span style={{ fontWeight: 700 }}>
                      after trauma or medical treatment
                    </span>{" "}
                    affecting many teeth at once.
                  </span>
                </li>
              </ul>
              <p>
                The unifying experience underneath the categories is
                functional collapse: eating has become work, pain or
                embarrassment is constant, and piecemeal dentistry has
                visibly stopped working. If three or more of your teeth
                quadrants have problems, a full mouth evaluation — rather
                than another single-tooth patch — is the consultation you
                actually need.
              </p>
            </div>

            <div>
              <img
                src="/blogimage/jul30(2).jpg"
                alt="Signs you need full mouth rehabilitation — Meghana Multi Speciality Dental Hospital, Tirupati"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Treatment Options */}
            <div>
              <h2 id="treatment-options" className="fw-bold mt-5">
                <span className="text-brand">
                  Your Treatment Options, Explained Honestly
                </span>
              </h2>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-award text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Option 1 — Fixed Full Mouth Implants (All-on-4 /
                      All-on-6).
                    </span>{" "}
                    The gold standard for patients with no savable teeth who
                    want the closest possible return to natural teeth. Four to
                    six implants are placed at biomechanically optimised
                    angles in each jaw, and a complete fixed bridge of teeth is
                    attached to them — teeth that never come out, never
                    float, need no adhesive, and restore near-natural chewing
                    power. Because the implants transmit chewing forces into
                    the jawbone, they also halt the bone shrinkage that
                    conventional dentures accelerate. This option, detailed in
                    our{" "}
                    <Link
                      href="/blogs/dental-implants-tirupati-complete-guide"
                      style={{ fontWeight: 600 }}
                    >
                      complete dental implant guide
                    </Link>
                    , delivers the highest function, the highest confidence
                    and the highest longevity.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-link-45deg text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Option 2 — Implant-Supported Overdentures (Hybrid
                      Dentures).
                    </span>{" "}
                    The intelligent middle path. Two to four implants per jaw
                    anchor a removable denture that clips firmly onto them:
                    stability transformed — no slipping while speaking, no
                    food trapped underneath, dramatically stronger chewing —
                    at a significantly lower cost than a full fixed bridge,
                    since fewer implants carry a removable prosthesis. For
                    thousands of denture sufferers, this single upgrade is
                    life-changing, and it is one of the most frequently chosen
                    full mouth solutions at our{" "}
                    <Link href="/services/dental-implants" style={{ fontWeight: 600 }}>
                      Dental Implants
                    </Link>{" "}
                    department.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-gem text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Option 3 — Premium Complete Dentures (BPS System).
                    </span>{" "}
                    Where implants are not chosen — for medical, anatomical or
                    budget reasons — modern denture craftsmanship still offers
                    far more than the loose, flat plates of the past.{" "}
                    <span style={{ fontWeight: 700 }}>
                      Meghana Multi Speciality Dental Hospital
                    </span>{" "}
                    provides BPS (Biofunctional Prosthetic System) dentures:
                    precision-engineered through functional impressions that
                    record how your muscles, lips and tongue actually move,
                    producing dentures with superior suction-fit, natural
                    aesthetics and comfortable chewing. Read more at our{" "}
                    <Link href="/services/dentures" style={{ fontWeight: 600 }}>
                      Dentures &amp; Prosthetics
                    </Link>{" "}
                    service.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-shield-check text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Option 4 — Full Mouth Crown and Bridge Rehabilitation on
                      Natural Teeth.
                    </span>{" "}
                    When your teeth are damaged or worn but their roots are
                    sound, the finest outcome of all is often rebuilding on
                    your own teeth: root canal treatment where nerves are
                    involved (performed under our 25&times; microscope — see
                    why that matters in our{" "}
                    <Link
                      href="/blogs/best-root-canal-hospital-tirupati"
                      style={{ fontWeight: 600 }}
                    >
                      root canal guide
                    </Link>
                    ), gum therapy to stabilise foundations, and then
                    full-coverage ceramic or zirconia crowns and bridges
                    across both arches, rebuilt at the correct bite height.
                    This restores the collapsed bite, protects the saved
                    teeth and rejuvenates the smile — and frequently the
                    lower face with it.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-diagram-3 text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Option 5 — Combination Plans.
                    </span>{" "}
                    Most real mouths need a tailored mix: save and crown these
                    eight teeth, replace those six with implants, treat the
                    gums everywhere, rebuild the bite across everything.
                    Designing that mix wisely — what to save, what to
                    replace, in what sequence, at what cost — is precisely
                    the expertise you are paying for in full mouth
                    rehabilitation, and precisely what a single-speciality
                    clinic cannot offer.
                  </span>
                </li>
              </ul>
            </div>

            {/* The Process */}
            <div>
              <h2 id="the-process" className="fw-bold mt-5">
                <span className="text-brand">
                  The Full Mouth Rehabilitation Process at Meghana Multi
                  Speciality Dental Hospital — Step by Step
                </span>
              </h2>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-1-circle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Comprehensive Evaluation and 3D Diagnosis.
                    </span>{" "}
                    Everything begins with the most thorough examination in
                    dentistry: complete clinical assessment of every tooth,
                    the gums, the bite, the jaw joints and the facial
                    proportions; full-mouth X-rays and a 3D CBCT scan to map
                    bone volume, tooth roots and hidden infections;
                    impressions or digital scans for study models; and a
                    detailed conversation about your health, your priorities
                    and your budget — because the right plan for a 50-year-old
                    businessman and a 75-year-old grandmother may be entirely
                    different even with identical X-rays. We at{" "}
                    <span style={{ fontWeight: 700 }}>
                      Meghana Multi Speciality Dental Hospital
                    </span>{" "}
                    have equipped advanced technology machines like an intra
                    oral scanner, 3D CBCT and 2D OPG imaging, making treatment
                    planning easy and accurate.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-2-circle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      The Master Plan and Transparent Written Cost.
                    </span>{" "}
                    Our specialist team designs your rehabilitation — what
                    will be saved, what will be replaced, which option above
                    (or which combination) serves you best — and presents it
                    to you with the sequence of visits, the total timeline,
                    and the complete itemised cost in writing. Alternatives at
                    different budget levels are explained honestly. Nothing
                    begins until you understand and approve everything.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-3-circle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Foundation Phase.</span>{" "}
                    Disease is eliminated before construction begins: gum
                    therapy to stabilise the foundations, extractions of
                    hopeless teeth, microscope-guided root canals on teeth
                    being saved, and bone grafting where implant sites need
                    rebuilding. Throughout this phase you are never left
                    without teeth — provisional (temporary) teeth maintain
                    your appearance and basic function at every stage.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-4-circle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Reconstruction Phase.
                    </span>{" "}
                    Implants are placed with CBCT-guided, microscope-assisted
                    precision and allowed to integrate (typically 3–6 months,
                    during which you wear provisionals and live normally);
                    teeth being crowned are prepared; and the new bite is
                    test-driven in long-term provisionals so that the height,
                    comfort and appearance are verified in real life before
                    anything is made permanent.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-5-circle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Final Prosthetics and the New Smile.
                    </span>{" "}
                    Your definitive teeth — zirconia or ceramic crowns and
                    bridges, fixed implant bridges, precision overdentures or
                    BPS dentures per your plan — are fabricated, refined and
                    fitted. Bite balance is checked and perfected. The
                    transformation that began as a treatment plan becomes the
                    face in your mirror.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-6-circle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Maintenance for Life.
                    </span>{" "}
                    You leave with a care protocol and a six-monthly review
                    schedule. Professionally maintained, full mouth
                    rehabilitations are built to serve for decades — and our
                    team remains your team for the whole journey.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <img
                src="/blogimage/jul30(3).jpg"
                alt="Full mouth rehabilitation treatment process at Meghana Multi Speciality Dental Hospital, Tirupati"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Cost 2026 */}
            <div>
              <h2 id="cost-2026" className="fw-bold mt-5">
                <span className="text-brand">
                  Full Mouth Rehabilitation Cost in Tirupati (2026) — Realistic
                  Ranges
                </span>
              </h2>
              <p>
                Because full mouth rehabilitation spans such different
                options, honest pricing means ranges by pathway — all
                indicative for 2026, with your exact written quote provided
                only after clinical and CBCT evaluation at{" "}
                <span style={{ fontWeight: 700 }}>
                  Meghana Multi Speciality Dental Hospital
                </span>
                . Premium BPS complete dentures for both jaws typically range
                from{" "}
                <span style={{ fontWeight: 700 }}>₹60,000 to ₹1,20,000</span>.
                Implant-supported overdentures (both jaws, including
                implants) generally range from{" "}
                <span style={{ fontWeight: 700 }}>
                  ₹1,50,000 to ₹4,00,000
                </span>{" "}
                depending on the number of implants and attachment system.
                Full mouth crown and bridge rehabilitation on natural teeth
                typically ranges from{" "}
                <span style={{ fontWeight: 700 }}>
                  ₹1,50,000 to ₹4,00,000+
                </span>{" "}
                depending on the number of units, crown material (ceramic vs
                zirconia) and the root canal and gum work required. Fixed
                full mouth implants (All-on-4/All-on-6, both jaws) generally
                range from{" "}
                <span style={{ fontWeight: 700 }}>
                  ₹4,00,000 to ₹8,00,000
                </span>{" "}
                depending on the implant system and prosthesis type —
                consistent with the ranges in our implant pillar guide.
              </p>
              <p>
                Two honest notes belong beside every figure. First, beware
                quotes dramatically below these ranges: in full mouth work,
                corners cut on implant brand, lab quality or specialist time
                produce failures that cost far more to redo than to do right.
                Second, affordability at{" "}
                <span style={{ fontWeight: 700 }}>
                  Meghana Multi Speciality Dental Hospital
                </span>{" "}
                is engineered deliberately: phased treatment plans that
                spread procedures and payments across the timeline, and
                flexible EMI options.
              </p>
            </div>

            {/* How Long */}
            <div>
              <h2 id="how-long" className="fw-bold mt-5">
                <span className="text-brand">
                  How Long Does Full Mouth Rehabilitation Take?
                </span>
              </h2>
              <p>
                Plan in months, not days — and distrust anyone who promises
                otherwise for complex cases. Denture-based rehabilitations
                typically complete in 3 to 6 weeks across several
                appointments. Crown-and-bridge rehabilitations generally run
                6 to 12 weeks depending on root canal and gum work.
                Implant-based rehabilitations span 4 to 8 months end-to-end,
                governed by the biology of bone integration — though in
                suitable cases, immediate-loading protocols can attach
                provisional fixed teeth to implants within days of placement,
                so that even full-arch implant patients are rarely without
                presentable, functional teeth at any point. For our many
                patients visiting from other towns and cities, appointments
                are clustered efficiently to minimise travel, and the plan&apos;s
                timeline is mapped out in writing from day one.
              </p>
            </div>

            {/* Life After */}
            <div>
              <h2 id="life-after" className="fw-bold mt-5">
                <span className="text-brand">
                  Life After Full Mouth Rehabilitation — What Patients
                  Actually Report
                </span>
              </h2>
              <p>
                The clinical outcomes — restored chewing efficiency,
                eliminated pain, halted disease — are the measurable part.
                What our full mouth patients at{" "}
                <span style={{ fontWeight: 700 }}>
                  Meghana Multi Speciality Dental Hospital
                </span>{" "}
                actually talk about at their review visits is everything
                else: eating guava, corn and mutton again at family functions
                instead of watching others eat; laughing in photographs with
                teeth showing for the first time in years; the end of
                denture adhesive, floating plates and covered-mouth
                conversations; faces that look years younger because a
                collapsed bite height has been restored and the lower face
                lifted; and — repeatedly, in almost these words — &quot;I
                should have done this years ago.&quot; Maintenance is
                refreshingly ordinary: brush, clean as instructed (interdental
                brushes or water flosser for implant bridges, overnight care
                for removable prostheses), and see us every six months. That
                small discipline protects a transformation built to last
                decades.
              </p>
            </div>

            <div>
              <img
                src="/blogimage/jul30(4).jpg"
                alt="Life after full mouth rehabilitation — patient results at Meghana Multi Speciality Dental Hospital, Tirupati"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Why Meghana Dental */}
            <div>
              <h2 id="why-meghana-dental" className="fw-bold mt-5">
                <span className="text-brand">
                  Why Meghana Dental Is Tirupati&apos;s Address for Full Mouth
                  Rehabilitation
                </span>
              </h2>
              <p>
                Full mouth rehabilitation succeeds or fails on three things:
                the planning intelligence at the top, the breadth of
                specialists executing it, and the precision infrastructure
                underneath.{" "}
                <span style={{ fontWeight: 700 }}>
                  Meghana Multi Speciality Dental Hospital
                </span>{" "}
                is built around exactly these three. Your case is led by Dr.
                M. Hemadri, MDS and ICOI Fellow in Implant Dentistry, whose
                17+ years of practice carry a particular clinical reputation
                for full mouth rehabilitation; every discipline the plan
                requires — implantology, prosthodontics, microscope
                endodontics, gum therapy, laser dentistry — exists in-house,
                under one roof, with one unified plan and zero referral
                run-arounds; and the infrastructure is unmatched in Tirupati:
                the city&apos;s only 25&times; Dental Operating Microscope, 3D
                CBCT-guided planning, laser-assisted procedures and
                NABH-certified sterilisation audited to national hospital
                standards.
              </p>
              <p>
                Around that core stands the trust: 50,000+ patients, a
                4.9-star Google rating from 850+ reviews, empanelment with
                11+ government organisations, transparent written pricing and
                EMI support. If your mouth has reached the stage where
                patching no longer works, give it the consultation it
                deserves — a complete evaluation, an honest master plan, and
                a written path back to eating, speaking and smiling without a
                second thought. Book your full mouth rehabilitation
                consultation at{" "}
                <span style={{ fontWeight: 700 }}>
                  Meghana Multi Speciality Dental Hospital
                </span>{" "}
                today.
              </p>
            </div>

            {/* FAQs */}
            <div>
              <h2 id="faqs" className="fw-bold mt-5">
                <span className="text-brand">
                  Frequently Asked Questions About Full Mouth Rehabilitation
                </span>
              </h2>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  What is the cost of full mouth rehabilitation in Tirupati?
                </span>
              </p>
              <p>
                Depending on the pathway: BPS complete dentures
                ₹60,000–₹1,20,000; implant-supported overdentures
                ₹1,50,000–₹4,00,000; full mouth crowns and bridges
                ₹1,50,000–₹4,00,000+; fixed All-on-4/All-on-6 implants
                ₹4,00,000–₹8,00,000 (both jaws, indicative 2026 ranges). Your
                exact written quote follows clinical and CBCT evaluation at{" "}
                <span style={{ fontWeight: 700 }}>
                  Meghana Multi Speciality Dental Hospital
                </span>
                , with EMI and phased-payment options.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Am I too old for full mouth rehabilitation?
                </span>
              </p>
              <p>
                No. Patients in their 60s, 70s and 80s are rehabilitated
                successfully every month. What matters is general health and
                bone condition, both evaluated thoroughly — and treatment
                options exist for virtually every situation.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Will I be without teeth during treatment?
                </span>
              </p>
              <p>
                No. Provisional (temporary) teeth maintain your appearance and
                basic function at every stage of the process, including
                during implant healing.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  How long does full mouth rehabilitation take?
                </span>
              </p>
              <p>
                Denture pathways: 3–6 weeks. Crown-and-bridge pathways: 6–12
                weeks. Implant pathways: 4–8 months end-to-end, with immediate
                provisional teeth in suitable cases.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Is full mouth rehabilitation painful?
                </span>
              </p>
              <p>
                Each procedure is performed under effective local anaesthesia,
                and microscope-guided, minimally invasive technique keeps
                post-operative soreness mild and short-lived — see our honest
                guide to{" "}
                <Link
                  href="/blogs/dental-implant-pain-what-to-expect"
                  style={{ fontWeight: 600 }}
                >
                  implant pain
                </Link>{" "}
                for the day-by-day reality.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Should I save my remaining teeth or replace everything with
                  implants?
                </span>
              </p>
              <p>
                Whichever serves you better — and that is a clinical
                judgement, not a sales decision. Savable teeth with sound
                roots are often worth saving; hopeless teeth are not worth
                heroics. Our master plan tells you exactly which is which,
                and why.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  How long do the results last?
                </span>
              </p>
              <p>
                With six-monthly professional maintenance and good home care,
                full mouth rehabilitations are built to serve for decades —
                implants routinely 10 years or more, quality crown work
                10–15+ years, with individual components maintainable over
                time.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Can diabetic or medically compromised patients undergo full
                  mouth rehabilitation?
                </span>
              </p>
              <p>
                Usually yes, with proper preparation. We coordinate with your
                physician, optimise control before surgical phases, and
                select the pathway your health supports best — one more
                reason this treatment belongs in an NABH-certified hospital.
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
              <h3
                className="fw-bold mb-4"
                style={{ color: "var(--primary-dark)" }}
              >
                Get Your Complete Smile Back — Book Your Full Mouth Evaluation
              </h3>
              <ul className="list-unstyled mb-0">
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-geo-alt-fill text-brand me-3"></i>
                  <span>
                    No. 18-2-91B, Ashok Nagar, Tirupati, Andhra Pradesh —
                    517501
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
                    Mon–Sat: 9:00 AM – 8:00 PM &nbsp;|&nbsp; Sunday: 10:00 AM –
                    2:00 PM
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
              <div
                className="mb-4 d-flex align-items-center"
                style={{ gap: "10px", flexWrap: "wrap" }}
              >
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
                  Full Mouth Rehab
                </span>
                <span style={{ fontSize: "0.78rem", color: "#9CA3AF" }}>
                  <i className="bi bi-clock me-1"></i>15 min read
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
                <ol
                  className="list-unstyled mb-0"
                  style={{ counterReset: "toc" }}
                >
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
                    MH
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "var(--text-primary)",
                      }}
                    >
                      Dr. M. Hemadri
                    </div>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: "#6B7280",
                        marginTop: "2px",
                      }}
                    >
                      Meghana Multi Speciality Dental Hospital
                    </div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--primary-dark)",
                        marginTop: "4px",
                        fontWeight: 600,
                      }}
                    >
                      MDS, ICOI Fellow &nbsp;•&nbsp; NABH Certified
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
                          {p.title.length > 60
                            ? p.title.slice(0, 60) + "…"
                            : p.title}
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
                <div
                  style={{
                    fontSize: "0.82rem",
                    opacity: 0.85,
                    marginBottom: "14px",
                  }}
                >
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

export default Jul30;
