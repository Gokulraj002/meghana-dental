import React from "react";
import Link from "next/link";
import blogsMeta from "@/data/blogs-meta.json";

// Table of contents — section IDs match the h2 anchors below
const TOC = [
  { id: "what-it-is", label: "What Gum Disease Actually Is" },
  { id: "stages", label: "The Four Stages" },
  { id: "warning-signs", label: "Warning Signs Worth Acting On" },
  { id: "risk-factors", label: "What Puts You at Risk" },
  { id: "whole-body", label: "Gums & Whole-Body Health" },
  { id: "diagnosis", label: "How We Diagnose" },
  { id: "treatment-ladder", label: "The Treatment Ladder" },
  { id: "bad-breath", label: "Bad Breath & Your Gums" },
  { id: "gum-check-frequency", label: "How Often to Get a Check" },
  { id: "daily-routine", label: "Your Daily Routine" },
  { id: "why-meghana", label: "Why Choose Meghana" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const CURRENT_SLUG = "gum-disease-treatment-tirupati";
const ARTICLE_URL = "https://meghanadental.in/blogs/" + CURRENT_SLUG;
const ARTICLE_TITLE =
  "Bleeding Gums Are Never Normal: A Complete Guide to Gum Disease Stages, Pyorrhea and Laser Treatment in Tirupati";

const Aug31 = () => {
  return (
    <>
      <div className="container py-4">
        {/* H1 */}
        <h1 className="text-brand py-4">
          Bleeding Gums Are Never Normal: Gum Disease & Laser Care Tirupati
        </h1>

        {/* Date + read time */}
        {/* <div className="mb-4" style={{ color: "#6B7280", fontSize: "0.9rem" }}>
          August 31, 2026 &nbsp;•&nbsp; 13 min read
        </div> */}

        <div className="row g-5">
          {/* ─────── LEFT — Article Content ─────── */}
          <div
            className="col-lg-8 blog-article-body"
            style={{ fontSize: "14px", lineHeight: 1.7 }}
          >
            {/* Introduction */}
            <p>
              Pink in the sink. A little blood on the toothbrush. A metallic
              taste after biting into a guava. For millions of people across
              India this is so routine that it has been quietly filed under
              &quot;normal&quot; — blamed on a hard brush, hot weather, or
              simply ignored for years. Here is the single most important line
              in this article: healthy gums do not bleed. Not from brushing, not
              from flossing, not from eating. Bleeding is your gums raising an
              alarm — and the disease it announces, known to most Indian
              families as pyorrhea, is{" "}
              <a
                href="https://www.cdc.gov/oral-health/data-research/facts-stats/fast-facts-diabetes-and-oral-health.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 600 }}
              >
                a leading cause of adult tooth loss
              </a>
              . If you have been searching for{" "}
              <span style={{ fontWeight: 700 }}>
                gum disease treatment in Tirupati
              </span>
              , this guide from Meghana Multi Speciality Dental Hospital — an
              NABH-certified centre with 17+ years of experience and 50,000+
              patients treated — explains the stages, the symptoms worth acting
              on, the honest treatment ladder from cleaning to laser therapy to
              surgery, and the home habits that keep the disease from returning.
            </p>
            <p>
              This guide is for two readers: the person noticing the bleeding,
              and the family member worried about a parent&apos;s loosening
              teeth. The cruelty of this condition is its silence — it advances
              for years with little pain, dissolving the bone that holds your
              teeth. The mercy is equally real: caught early, it is completely
              reversible, and even advanced cases can be stabilised and teeth
              saved.
            </p>

            {/* Key Takeaways box */}
            <div
              className="mt-4 mb-4"
              style={{
                background: "var(--primary-50)",
                border: "1px solid var(--primary-light)",
                borderRadius: "var(--radius-lg)",
                padding: "24px 28px",
              }}
            >
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  letterSpacing: "1.5px",
                  color: "var(--primary-dark)",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                <i className="bi bi-clipboard2-check me-2"></i>
                Key Takeaways
              </div>
              <ul className="list-unstyled mb-0">
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    Bleeding gums are the earliest, most reversible warning sign
                    — never something to wait out.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    Gum disease moves through four stages; only the first
                    (gingivitis) is fully reversible, so timing is everything.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    Pain arrives late — by the time teeth feel loose, the
                    disease is advanced.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    Modern laser gum treatment makes moderate cases far gentler
                    and often avoids conventional surgery.
                  </span>
                </li>
                <li className="d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    Tobacco and diabetes are the two biggest accelerators, and
                    both deserve honest conversation.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <img
                src="/blogimage/aug31(1).png"
                alt="Gum disease treatment in Tirupati — bleeding gums, pyorrhea and laser gum therapy at Meghana Multi Speciality Dental Hospital"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* What It Is */}
            <div>
              <h2 id="what-it-is" className="fw-bold mt-5">
                <span className="text-brand">
                  What Gum Disease Actually Is — the Chain Reaction
                </span>
              </h2>
              <p>
                It begins with the villain behind almost every dental problem:
                plaque, the soft bacterial film that re-forms on teeth within
                hours of brushing. Plaque left along the gumline hardens within
                days into tartar — a rough crust no toothbrush can remove (the
                reason{" "}
                <Link
                  href="/services/gum-treatment"
                  style={{ fontWeight: 600 }}
                >
                  professional cleaning
                </Link>{" "}
                matters, as we cover in our guide to{" "}
                <Link
                  href="/blogs/teeth-cleaning-vs-teeth-whitening-tirupati"
                  style={{ fontWeight: 600 }}
                >
                  teeth cleaning vs whitening
                </Link>
                ). Tartar becomes a permanent bacterial surface pressed against
                your gums, and the body responds with inflammation: red, swollen
                gums that bleed easily. That is gingivitis, stage one.
              </p>
              <p>
                If the cause is not removed, the attachment between gum and
                tooth breaks down and a pocket forms — a warm, oxygen-poor
                crevice ordinary cleaning cannot reach. Inside it, infection and
                the body&apos;s own inflammatory response begin dissolving the
                periodontal ligament and the jawbone. That is periodontitis —
                the stage families call pyorrhea — and lost bone does not grow
                back on its own. The teeth, losing their foundation, eventually
                loosen and drift, frequently while still free of cavities. Every
                link in this chain can be broken, and the earlier the link, the
                easier the break.
              </p>
            </div>

            {/* Stages */}
            <div>
              <h2 id="stages" className="fw-bold mt-5">
                <span className="text-brand">
                  The Four Stages — From Gingivitis to Advanced Pyorrhea
                </span>
              </h2>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-1-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Stage 1 — Gingivitis (fully reversible).
                    </span>{" "}
                    Red, puffy gums that bleed on brushing, perhaps mild bad
                    breath. No bone lost, the attachment intact. One
                    professional cleaning plus corrected home care returns the
                    gums to health within weeks. Most people with bleeding gums
                    are in this stage right now — one short appointment from a
                    full reversal.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-2-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Stage 2 — Early periodontitis.
                    </span>{" "}
                    Pockets of 4–5 mm have formed and the first millimetres of
                    bone are gone. Bleeding is easier, breath worse, and teeth
                    may start to look subtly &quot;longer.&quot; Deep cleaning
                    here stops the process with minimal permanent cost.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-3-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Stage 3 — Moderate periodontitis.
                    </span>{" "}
                    Pockets of 5–7 mm, clearly measurable bone loss, root
                    sensitivity, food packing, occasional pus, and the first
                    hints of mobility. Treatment now combines deep cleaning,
                    laser therapy and sometimes localised surgery — teeth are
                    very saveable, but the margin for delay is gone.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-4-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Stage 4 — Advanced periodontitis.
                    </span>{" "}
                    Pockets beyond 7 mm, major bone loss, visibly loose and
                    drifting teeth, gaps opening, abscesses, pain on chewing.
                    Even here, modern periodontics fights hard with surgery,
                    regeneration and splinting — and what cannot be saved is
                    replaced with{" "}
                    <Link
                      href="/services/dental-implants"
                      style={{ fontWeight: 600 }}
                    >
                      dental implants
                    </Link>{" "}
                    or quality prosthetics. But this is the stage the whole
                    article exists to keep you from reaching.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <img
                src="/blogimage/aug31(2).png"
                alt="Bleeding gums during brushing — the earliest warning sign of gum disease, Meghana Dental, Tirupati"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Warning Signs */}
            <div>
              <h2 id="warning-signs" className="fw-bold mt-5">
                <span className="text-brand">
                  Warning Signs Worth Acting On
                </span>
              </h2>
              <p>Tick yourself honestly against this list:</p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-circle text-brand me-3"></i>
                  <span>Gums that bleed on brushing, flossing or eating.</span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-circle text-brand me-3"></i>
                  <span>
                    Persistent bad breath or a bad taste that mouthwash only
                    masks.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-circle text-brand me-3"></i>
                  <span>
                    Gums that look red or purplish rather than coral pink, or
                    puffy rather than firm.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-circle text-brand me-3"></i>
                  <span>
                    Receding gums and teeth that look longer than before.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-circle text-brand me-3"></i>
                  <span>Cold sensitivity at the necks of the teeth.</span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-circle text-brand me-3"></i>
                  <span>
                    Food packing between teeth where it never used to.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-circle text-brand me-3"></i>
                  <span>Pus on pressing the gums.</span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-circle text-brand me-3"></i>
                  <span>
                    Teeth that feel slightly mobile, have drifted, or show new
                    gaps.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-circle text-brand me-3"></i>
                  <span>
                    A change in how your teeth meet, or a partial denture that
                    suddenly fits differently.
                  </span>
                </li>
              </ul>
              <p>
                One tick is reason enough for a periodontal check; three or more
                says it is overdue. Note the deceiver in the list: pain is
                absent until the late stages. Waiting for gum disease to hurt is
                waiting for Stage 3 or 4.
              </p>
            </div>

            {/* Risk Factors */}
            <div>
              <h2 id="risk-factors" className="fw-bold mt-5">
                <span className="text-brand">What Puts You at Risk</span>
              </h2>
              <p>
                Plaque and tartar light the fire, but several factors pour fuel
                on it. <span style={{ fontWeight: 700 }}>Tobacco</span> — smoked
                or chewed — is the most powerful: it multiplies risk
                several-fold, accelerates bone loss, and treacherously masks the
                bleeding by constricting blood vessels, so a gutkha user&apos;s
                gum disease advances with the alarm switched off.{" "}
                <span style={{ fontWeight: 700 }}>Diabetes</span> is the second
                national conversation. The relationship runs both ways:
                uncontrolled blood sugar feeds gum infection and impairs
                healing, while active infection makes sugar harder to control —
                which is why the{" "}
                <a
                  href="https://www.cdc.gov/oral-health/data-research/facts-stats/fast-facts-diabetes-and-oral-health.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: 600 }}
                >
                  CDC and diabetes specialists
                </a>{" "}
                treat periodontal care as part of diabetes management itself.
              </p>
              <p>
                Other contributors include hormonal phases (pregnancy gingivitis
                is common and deserves proper care), medications that dry the
                mouth or enlarge gum tissue, genetics, stress and poor
                nutrition, crowded teeth that defeat cleaning, and leaking old
                fillings that shelter plaque. The encouraging flip side: most of
                these are modifiable, and the biggest one — plaque control — is
                in your hands and ours together.
              </p>
            </div>

            {/* Whole Body */}
            <div>
              <h2 id="whole-body" className="fw-bold mt-5">
                <span className="text-brand">
                  Beyond the Mouth: Gums and Whole-Body Health
                </span>
              </h2>
              <p>
                Gum disease does not stay politely in the mouth. A chronically
                infected pocket is effectively an open wound through which
                bacteria and inflammatory chemicals enter the bloodstream daily.
                The{" "}
                <a
                  href="https://www.perio.org/for-patients/gum-disease-information/gum-disease-and-other-diseases/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: 600 }}
                >
                  American Academy of Periodontology
                </a>{" "}
                notes research associating periodontitis with poorer diabetic
                control, cardiovascular risk, and adverse pregnancy outcomes.
                Association is not the same as proven causation, and our
                specialists will never frighten you with overclaims — but the
                direction of the evidence is consistent: a body carrying an
                untreated chronic oral infection is carrying an unnecessary
                burden. Treating gum disease is dentistry&apos;s contribution to
                your whole-body health, which is exactly why an NABH-certified
                hospital treats bleeding gums as medicine, not cosmetics.
              </p>
            </div>

            {/* Diagnosis */}
            <div>
              <h2 id="diagnosis" className="fw-bold mt-5">
                <span className="text-brand">How We Diagnose the Problem</span>
              </h2>
              <p>
                Periodontal diagnosis is simple and painless. Our specialist
                examines the colour, contour and bleeding tendency of your gums;
                gently measures the pocket depth around each tooth with a fine
                calibrated probe (millimetres reveal the stage); checks for
                recession, mobility and bite changes; and takes X-rays to see
                what no probe can — the actual bone level around each tooth.
                Fifteen to twenty minutes later you know precisely which stage
                you are in, tooth by tooth, and receive a written plan matched
                to it — never a generic &quot;cleaning&quot; sold to every mouth
                alike, and never surgery proposed where cleaning will do.
              </p>
            </div>

            {/* Treatment Ladder */}
            <div>
              <h2 id="treatment-ladder" className="fw-bold mt-5">
                <span className="text-brand">
                  The Treatment Ladder — Matched Honestly to Your Stage
                </span>
              </h2>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-droplet-half text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Professional cleaning (scaling and polishing)
                    </span>{" "}
                    — the complete answer for gingivitis. Ultrasonic removal of
                    plaque, tartar and stain above and just below the gumline,
                    with home-care coaching. Gums typically stop bleeding within
                    one to two weeks.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-arrow-down-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Deep cleaning (scaling and root planing)
                    </span>{" "}
                    — the workhorse for early and moderate periodontitis. Under
                    comfortable local anaesthesia, the root surfaces inside the
                    pockets are cleaned and smoothed so the gum can heal and
                    reattach, shrinking the pockets. Usually done quadrant-wise
                    over two to four visits.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-lightning-charge-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Laser-assisted gum therapy
                    </span>{" "}
                    — the modern force-multiplier, delivered through our{" "}
                    <Link
                      href="/services/laser-dentistry"
                      style={{ fontWeight: 600 }}
                    >
                      Laser Dentistry
                    </Link>{" "}
                    unit. The laser disinfects pocket linings, removes diseased
                    tissue and seals as it works, meaning far less bleeding,
                    minimal discomfort, faster healing, and frequently the
                    avoidance of conventional surgery in moderate cases.
                    Patients who feared &quot;gum surgery&quot; routinely
                    describe laser therapy as a relief.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-scissors text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Flap surgery and regenerative procedures
                    </span>{" "}
                    — for advanced pockets cleaning and laser cannot fully
                    reach. The gum is gently lifted for direct cleaning of the
                    roots and bone, deep pockets are reduced, and in suitable
                    defects, bone grafts and regenerative materials rebuild lost
                    support.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-link-45deg text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Splinting and rehabilitation
                    </span>{" "}
                    — loosened teeth can be stabilised by joining them to firm
                    neighbours while the foundations heal; teeth beyond saving
                    are replaced strategically, from implants to{" "}
                    <Link
                      href="/blogs/dentures-tirupati-complete-guide"
                      style={{ fontWeight: 600 }}
                    >
                      premium dentures
                    </Link>
                    , under one roof.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-arrow-repeat text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Maintenance</span> — the
                    stage that decides everything. Periodontitis is controlled,
                    not cured once and forgotten. Regular recall visits keep the
                    pockets clean and the disease switched off (schedule below).
                    Patients who keep their maintenance appointments keep their
                    teeth healthy.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <img
                src="/blogimage/aug31(3).jpg"
                alt="Before and after gum treatment — inflamed, tartar-laden gums restored to health at Meghana Dental, Tirupati"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Bad Breath */}
            <div>
              <h2 id="bad-breath" className="fw-bold mt-5">
                <span className="text-brand">
                  Could Your Bad Breath Be Coming From Your Gums?
                </span>
              </h2>
              <p>
                Of every symptom on the checklist, persistent bad breath is the
                one patients find hardest to mention — so let this section say
                it plainly: chronic bad breath is, in most cases, an oral
                problem with an oral solution, and gum disease sits at the
                centre of it. The bacteria in periodontal pockets produce the
                volatile sulphur compounds that cause the smell, and no mint or
                mouthwash can out-perfume an active infection — masking it is
                treating the smoke while the fire burns. The same applies to a
                coated tongue (which is why tongue cleaning belongs in every
                morning routine), dry mouth, deep cavities and unclean dentures.
                Treat the gums, restore daily tongue and interdental cleaning,
                and the breath problem that survived years of mouthwash usually
                resolves within weeks. In the minority where it persists after
                oral health is restored, we say so honestly and point you toward
                the right medical evaluation rather than selling another
                cleaning.
              </p>
            </div>

            {/* Gum Check Frequency */}
            <div>
              <h2 id="gum-check-frequency" className="fw-bold mt-5">
                <span className="text-brand">
                  How Often Should You Get a Gum Check?
                </span>
              </h2>
              <p>
                For a healthy mouth, a six-monthly check-up and cleaning keeps
                gingivitis from ever gaining a foothold — tartar never gets time
                to establish. For anyone treated for periodontitis, the interval
                tightens to every three to four months during stabilisation,
                then is individualised by how your pockets and home care are
                performing; this closer rhythm is the documented difference
                between controlled disease and quietly relapsing disease.
                Certain situations deserve an extra look regardless of the
                calendar: pregnancy, a new diabetes diagnosis or poor sugar
                control, starting medications that affect the gums, and the
                appearance of any symptom above.
              </p>
            </div>

            {/* Daily Routine */}
            <div>
              <h2 id="daily-routine" className="fw-bold mt-5">
                <span className="text-brand">
                  Your Daily Routine for Healthy Gums
                </span>
              </h2>
              <p>
                Professional treatment wins the battle; home care wins the war.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-brush text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Brush twice daily</span>{" "}
                    for two minutes with a soft brush angled 45° into the
                    gumline in small strokes — scrubbing with a hard brush
                    wounds gums, it does not clean them.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-distribute-horizontal text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Clean between the teeth daily,
                    </span>{" "}
                    where gum disease actually begins — floss, or better for
                    most adults, interdental brushes sized for you at your
                    visit.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-droplet text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Use any prescribed mouthwash as directed
                    </span>{" "}
                    — but know no rinse substitutes for mechanical cleaning;
                    rinsing away the smell while keeping the disease is the
                    commonest self-deception in oral health.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-x-octagon text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Skip folk remedies that injure
                    </span>{" "}
                    — rubbing salt, alum or tobacco ash into gums scars tissue
                    and worsens recession.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-heart-pulse text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Eat for your gums</span>{" "}
                    (vitamin-C-rich fruit, crunchy vegetables, less constant
                    sugar), manage diabetes diligently, and — said without
                    judgement — every step away from tobacco is a direct gift to
                    your gums and the teeth they hold.
                  </span>
                </li>
              </ul>
            </div>

            {/* Why Meghana */}
            <div>
              <h2 id="why-meghana" className="fw-bold mt-5">
                <span className="text-brand">
                  Why Choose Meghana Dental for Periodontal Care
                </span>
              </h2>
              <p>
                Gum disease rewards exactly what Meghana Multi Speciality Dental
                Hospital is built on: early honest diagnosis, stage-matched
                treatment, advanced technology and disciplined follow-up. Your
                gums are assessed with full periodontal charting under
                specialist supervision — not a glance and a generic cleaning.
                Our laser-assisted therapy offers a gentle route through
                moderate disease; surgical and regenerative care exists in-house
                for advanced cases other clinics refer away; and the complete
                multispeciality team means the loose tooth, the failing filling
                and the replacement plan are handled with one strategy. Every
                instrument that touches infection-sensitive tissue passes
                NABH-certified sterilisation. Add 17+ years of care, 50,000+
                patients, a 4.9-star Google rating from 850+ reviews,
                transparent staged pricing with EMI support, and empanelment
                with 11+ government organisations — and the address for the pink
                in your sink is settled. Bleeding gums are your body&apos;s
                politest warning, and it will not stay polite forever.
              </p>
            </div>

            {/* FAQs */}
            <div>
              <h2 id="faqs" className="fw-bold mt-5">
                <span className="text-brand">Frequently Asked Questions</span>
              </h2>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Is it normal for gums to bleed while brushing?
                </span>
              </p>
              <p>
                No. Healthy gums do not bleed. Bleeding signals inflammation —
                usually gingivitis, which is fully reversible with a
                professional cleaning and corrected home care. Switching to
                softer brushing while ignoring the cause only hides the warning;
                get the gums checked instead.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  What is pyorrhea and can it be cured?
                </span>
              </p>
              <p>
                Pyorrhea is the common name for periodontitis — advanced gum
                disease with bone loss. It cannot be reversed like gingivitis,
                but it can be effectively halted and controlled with deep
                cleaning, laser therapy and, where needed, surgery — saving
                teeth that would otherwise be lost.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Can loose teeth become firm again?
                </span>
              </p>
              <p>
                Often yes, when the looseness is due to inflammation and early
                bone loss — treating the infection lets the supporting tissues
                tighten, and splinting stabilises teeth while they heal. The
                later the stage, the smaller the recovery, which is one more
                reason not to wait.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Is laser gum treatment painful?
                </span>
              </p>
              <p>
                No. Laser therapy disinfects the pockets and removes diseased
                tissue with minimal bleeding and discomfort, healing faster than
                conventional surgery and often avoiding it in moderate cases.
                Most patients are surprised by how comfortable it is compared
                with what they feared.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  How quickly does gum treatment show results?
                </span>
              </p>
              <p>
                Faster than most expect. After a professional cleaning, bleeding
                usually reduces within days and stops within one to two weeks
                with good home care. Deep-cleaned pockets are re-evaluated after
                four to six weeks, by which time gums are visibly firmer and
                pinker.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Does gum disease affect diabetes?
                </span>
              </p>
              <p>
                Yes, in both directions. Uncontrolled blood sugar worsens gum
                infection, and active gum infection makes sugar harder to
                control. Anyone with diabetes should build regular periodontal
                care into their diabetes management plan.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Will my receded gums grow back?
                </span>
              </p>
              <p>
                Lost gum height does not regrow on its own, but treatment stops
                further recession, and grafting procedures can cover exposed
                roots in suitable cases. The root sensitivity that often comes
                with recession is also very treatable.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Why do my gums bleed more during pregnancy?
                </span>
              </p>
              <p>
                Hormonal changes exaggerate the gum&apos;s reaction to plaque —
                called pregnancy gingivitis. It deserves gentle professional
                cleaning and meticulous home care, both safe during pregnancy,
                rather than being waited out until after delivery.
              </p>
            </div>

            {/* Medically reviewed disclosure */}
            <div
              className="mt-4"
              style={{
                borderTop: "1px solid #E5E7EB",
                paddingTop: "16px",
                fontSize: "0.82rem",
                color: "#6B7280",
                fontStyle: "italic",
              }}
            >
              Medically reviewed by Dr. M. Hemadri, MDS (Conservative Dentistry
              &amp; Endodontics), ICOI Fellow in Implant Dentistry — Founder
              &amp; Director, Meghana Multi Speciality Dental Hospital.
              Periodontal (gum) treatment at Meghana Dental is carried out by
              the hospital&apos;s specialist periodontal team.
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
                className="fw-bold mb-2"
                style={{ color: "var(--primary-dark)" }}
              >
                Pink in the Sink? Get the 20-Minute Gum Check That Settles It
              </h3>
              <p className="mb-4">
                Book your gum check at Meghana Multi Speciality Dental Hospital,
                Tirupati — the earliest stage you will ever be in is
                today&apos;s.
              </p>
              <ul className="list-unstyled mb-0">
                <li className="d-flex align-items-center mb-3">
                  <i className="bi bi-geo-alt-fill text-brand me-3"></i>
                  <span>
                    No. 18-2-91B, Ashok Nagar, Tirupati, Andhra Pradesh — 517501
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
                    Mon–Sat: 10:00 AM – 8:00 PM &nbsp;·&nbsp; Sunday: 10:00 AM –
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
                  Gum Treatment
                </span>
                <span style={{ fontSize: "0.78rem", color: "#9CA3AF" }}>
                  <i className="bi bi-clock me-1"></i>13 min read
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
                      MDS, Founder &amp; Director
                    </div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--primary-dark)",
                        marginTop: "4px",
                        fontWeight: 600,
                      }}
                    >
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

export default Aug31;
