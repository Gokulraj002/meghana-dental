import React from "react";
import Link from "next/link";
import blogsMeta from "@/data/blogs-meta.json";

// Table of contents — section IDs match the h2 anchors below
const TOC = [
  { id: "what-dentures-do", label: "What Dentures Do & Who Needs Them" },
  { id: "options", label: "The Range of Options" },
  { id: "how-made", label: "How a Denture Is Made" },
  { id: "price", label: "What Shapes the Price" },
  { id: "settling-in", label: "Settling In: First Weeks" },
  { id: "everyday-care", label: "Everyday Care" },
  { id: "loose-denture", label: "When a Denture Feels Loose" },
  { id: "how-to-choose", label: "How to Choose" },
  { id: "myths", label: "Myths, Cleared Up" },
  { id: "why-meghana", label: "Why Trust Meghana" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const CURRENT_SLUG = "dentures-tirupati-complete-guide";
const ARTICLE_URL = "https://meghanadental.in/blogs/" + CURRENT_SLUG;
const ARTICLE_TITLE =
  "Dentures in Tirupati: Your Complete Guide to Types, BPS Dentures, Fit and Everyday Care";

const Aug30 = () => {
  return (
    <>
      <div className="container py-4">
        {/* H1 */}
        <h1 className="text-brand py-4">
          Dentures in Tirupati: Types, BPS Dentures, Fit & Everyday Care
        </h1>

        {/* Date + read time */}
        {/* <div className="mb-4" style={{ color: "#6B7280", fontSize: "0.9rem" }}>
          August 30, 2026 &nbsp;•&nbsp; 13 min read
        </div> */}

        <div className="row g-5">
          {/* ─────── LEFT — Article Content ─────── */}
          <div
            className="col-lg-8 blog-article-body"
            style={{ fontSize: "14px", lineHeight: 1.7 }}
          >
            {/* Introduction */}
            <p>
              Watch an elder at a family function quietly pick the softest items
              on the plate, decline the food they once loved, and cover their
              mouth when they laugh — and you are watching the daily cost of
              missing teeth or a badly fitting denture. It is one of the most
              common and most silently endured problems in Indian homes, yet
              also one of the most unnecessary, because denture craftsmanship
              has moved far beyond the loose, clicking plates of a generation
              ago. If you are exploring{" "}
              <span style={{ fontWeight: 700 }}>dentures in Tirupati</span> for
              yourself or a parent, this guide from Meghana Multi Speciality
              Dental Hospital — Tirupati&apos;s NABH-certified dental centre
              with 17+ years of experience and 50,000+ patients treated —
              explains every denture type, how to choose, the settling-in period
              nobody warns you about, and the care routine that adds years to a
              denture&apos;s life.
            </p>
            <p>
              This guide is written for two readers: the patient (often a parent
              or grandparent) and the son or daughter doing the research on
              their behalf. We have written for both of you, plainly, exactly as
              our specialists explain it across the consultation table.
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
                    Dentures replace missing teeth to restore chewing, clear
                    speech and facial support; complete dentures replace a full
                    jaw, partial dentures fill gaps around natural teeth.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    BPS dentures are the premium standard — better suction-fit,
                    strength and a natural look than ordinary acrylic.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    A well-made denture takes several unhurried visits — the
                    functional impression and the try-in are where fit is won or
                    lost.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    New dentures need a 2–4 week adjustment period; sore spots
                    are normal and fixed chairside in minutes.
                  </span>
                </li>
                <li className="d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    A loose lower denture is not your fault — an
                    implant-supported overdenture ends the struggle permanently.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <img
                src="/blogimage/aug30(1).png"
                alt="Dentures in Tirupati — BPS and implant-supported dentures at Meghana Multi Speciality Dental Hospital"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* What Dentures Do */}
            <div>
              <h2 id="what-dentures-do" className="fw-bold mt-5">
                <span className="text-brand">
                  What Dentures Do — and Who Actually Needs Them
                </span>
              </h2>
              <p>
                Dentures are removable replacements for missing teeth and the
                gum around them, custom-made to restore chewing, speech and a
                natural smile. They serve two situations. Complete dentures
                replace all teeth in a jaw for patients who have lost them to
                age, decay or gum disease. Partial dentures replace only some
                teeth while healthy natural teeth remain, filling gaps that
                would otherwise let neighbouring teeth drift and the bite
                collapse onto fewer and fewer teeth.
              </p>
              <p>
                Beyond chewing, teeth support the lips and cheeks from within.
                When they are lost, the lower face folds inward — the sunken
                look that ages a face by a decade. A well-made denture rebuilds
                that internal scaffolding, which is why new-denture patients so
                often hear &quot;you look younger&quot; before anyone mentions
                the teeth.
              </p>
              <p>Consider a consultation if you:</p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-emoji-frown text-brand me-3"></i>
                  <span>
                    Are missing several teeth and have not replaced them.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-triangle text-brand me-3"></i>
                  <span>
                    Wear an old plate that is loose, sore, clicking, or more
                    than 5–7 years old.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-x-circle text-brand me-3"></i>
                  <span>
                    Have been told your remaining teeth &quot;all need to come
                    out.&quot;
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-soundwave text-brand me-3"></i>
                  <span>
                    Avoid certain foods, or notice speech or whistling changes.
                  </span>
                </li>
              </ul>
            </div>

            {/* Range of Options */}
            <div>
              <h2 id="options" className="fw-bold mt-5">
                <span className="text-brand">
                  The Range of Options at Meghana Dental
                </span>
              </h2>
              <p>
                One reason patients across Tirupati come to us for tooth
                replacement is that we offer the full range under one roof — so
                the recommendation fits you, not a single product we happen to
                sell.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-clipboard text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Conventional Complete Dentures.
                    </span>{" "}
                    The standard acrylic full denture, made across a series of
                    visits after the gums heal. Honest and economical, and when
                    properly made it serves well — especially in the upper jaw,
                    where the denture gives natural suction. Lower complete
                    dentures are the harder challenge, which is where the
                    premium options below earn their place.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-gem text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      BPS Precision Dentures — the Premium Standard.
                    </span>{" "}
                    BPS stands for Biofunctional Prosthetic System, an
                    internationally certified protocol that re-engineers every
                    stage of denture-making. The differences are concrete, not
                    cosmetic: functional impressions record how your lips,
                    cheeks and tongue actually move, so the borders are sculpted
                    for true suction-fit; instrumented bite registration
                    captures your jaw relationship accurately; and
                    injection-moulded, high-impact processing removes the
                    shrinkage of ordinary acrylic curing, producing a denser,
                    stronger, stain-resistant base. The result patients report —
                    dentures that stay put while talking and laughing, and look
                    convincingly like their own teeth.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-grid-3x3-gap-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Cast Metal Partial Dentures.
                    </span>{" "}
                    A thin, precise cobalt-chromium framework that carries the
                    replacement teeth and grips the natural teeth with
                    engineered clasps. It is the durable, hygienic and stable
                    gold standard among removable partials.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-bezier2 text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Flexible Partial Dentures.
                    </span>{" "}
                    Made from resilient, gum-coloured resin with no visible
                    metal clasps — lightweight, comfortable and nearly invisible
                    against the gums. An excellent choice for the visible front
                    zone and for patients who dislike rigid frameworks.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-cash-coin text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Acrylic Partial Dentures.
                    </span>{" "}
                    The economical, quickly made option — useful as an interim
                    solution or an immediate replacement after extraction, with
                    its limitations stated plainly rather than discovered later.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-lightning-charge-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Immediate Dentures.</span>{" "}
                    Fabricated before extraction and fitted the same day teeth
                    are removed, so you never face the world without teeth.
                    Because gums shrink as they heal, immediate dentures need
                    relining or remaking after a few months — planned and
                    explained from day one.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-plus-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Implant-Supported Overdentures.
                    </span>{" "}
                    The transformation option: two to four dental implants
                    anchor the denture through snap attachments — ending
                    looseness, adhesive and food creeping underneath, and
                    multiplying chewing power, most dramatically in the lower
                    jaw. This is the bridge between the denture world and{" "}
                    <Link
                      href="/services/dental-implants"
                      style={{ fontWeight: 600 }}
                    >
                      dental implants
                    </Link>
                    , covered further in our{" "}
                    <Link
                      href="/services/full-mouth-rehab"
                      style={{ fontWeight: 600 }}
                    >
                      full mouth rehabilitation guide
                    </Link>
                    .
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <img
                src="/blogimage/aug30(2).jpg"
                alt="Implant-supported overdenture anchored on a bar attachment — Meghana Dental, Tirupati"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* How Made */}
            <div>
              <h2 id="how-made" className="fw-bold mt-5">
                <span className="text-brand">
                  How a Well-Fitted Denture Is Made — Visit by Visit
                </span>
              </h2>
              <p>
                Quality dentures are fitted to you across a sequence of
                unhurried appointments. Understanding the sequence explains both
                the timeline and why corner-cutting shows.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-1-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Examination and primary impressions.
                    </span>{" "}
                    Your gums, ridges, remaining teeth and medical history are
                    assessed; first moulds are taken; your plan and timeline are
                    settled transparently.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-2-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Final functional impressions.
                    </span>{" "}
                    Custom trays capture the fine detail of your ridges and, in
                    BPS, the movement of your lips, cheeks and tongue — the step
                    on which fit lives or dies.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-3-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Bite registration.</span>{" "}
                    The height and relationship of your jaws, collapsed by years
                    without teeth, are re-established, restoring facial
                    proportions along with the bite. Tooth shade and size are
                    chosen with you.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-4-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>The try-in.</span> Your
                    future denture, with teeth set in wax, is rehearsed in your
                    mouth — look, speech, bite and lip support refined while
                    changes are still easy. Bring the family member whose
                    opinion matters.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-5-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Delivery and follow-up.
                    </span>{" "}
                    The finished denture is fitted and the bite fine-tuned.
                    Small pressure-spot adjustments over the first weeks are a
                    normal, included part of the process.
                  </span>
                </li>
              </ul>
              <p>
                Typical end-to-end time is two to four weeks for partials and
                conventional completes; BPS protocols and post-extraction
                healing extend timelines as planned.
              </p>
            </div>

            {/* Price */}
            <div>
              <h2 id="price" className="fw-bold mt-5">
                <span className="text-brand">
                  What Shapes the Price of Your Treatment
                </span>
              </h2>
              <p>
                There is no single figure, because the cost depends on real
                clinical variables — and any clinic quoting a flat price before
                examining you is guessing. The main factors are:
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-currency-rupee text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Type of denture</span> —
                    acrylic is the most economical; cast metal, flexible, BPS
                    and implant-supported cost progressively more for the added
                    strength, comfort and longevity.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-currency-rupee text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Full arch vs a few teeth
                    </span>{" "}
                    — a complete denture uses more material and lab time than a
                    small partial.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-currency-rupee text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Extractions or implants
                    </span>{" "}
                    — whether teeth must be removed first, or implants placed to
                    anchor an overdenture.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-currency-rupee text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Tooth quality and lab system
                    </span>{" "}
                    — premium tooth sets and injection-moulded processing add
                    cost but last longer.
                  </span>
                </li>
              </ul>
              <p>
                We publish clear starting prices and confirm your exact figure
                in writing after examination, with EMI options available. You
                can see the current price list on our{" "}
                <Link href="/services/dentures" style={{ fontWeight: 600 }}>
                  Dentures &amp; Prosthetics page
                </Link>
                . One honest caution: an unusually cheap quote often means a
                skipped functional impression, no try-in, or no specialist — and
                a poorly fitting denture costs far more in daily misery than it
                ever saves.
              </p>
            </div>

            {/* Settling In */}
            <div>
              <h2 id="settling-in" className="fw-bold mt-5">
                <span className="text-brand">
                  Settling In: Your First Weeks With New Teeth
                </span>
              </h2>
              <p>
                New teeth — even excellent ones — ask for a short adjustment
                period. Patients warned in advance sail through it; the unwarned
                assume something is wrong.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-emoji-neutral text-brand me-3"></i>
                  <span>
                    A feeling of fullness and &quot;too many teeth&quot; for the
                    first days.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-droplet text-brand me-3"></i>
                  <span>
                    Extra saliva as the mouth investigates its new resident — it
                    settles within days.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-soundwave text-brand me-3"></i>
                  <span>
                    Minor speech changes on certain sounds — cured fastest by
                    reading aloud for ten minutes a day.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-egg-fried text-brand me-3"></i>
                  <span>
                    An eating learning curve — begin with soft foods cut small,
                    chew slowly on both sides, and progress steadily.
                  </span>
                </li>
              </ul>
              <p>
                Sore spots — small pressure points as gums and denture negotiate
                their fit — are normal and ours to fix. Never file or trim a
                denture at home; a two-minute chairside adjustment resolves what
                home surgery ruins. Most patients eat and speak with easy
                confidence within two to four weeks, and the cheek and tongue
                muscles gradually learn to help hold the denture in place.
              </p>
            </div>

            {/* Everyday Care */}
            <div>
              <h2 id="everyday-care" className="fw-bold mt-5">
                <span className="text-brand">
                  Everyday Care That Adds Years of Life
                </span>
              </h2>
              <p>
                A handful of habits separate the denture that serves comfortably
                for years from the one that stains, smells and warps. These
                align with guidance from the{" "}
                <a
                  href="https://www.mouthhealthy.org/all-topics-a-z/dentures"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: 600 }}
                >
                  American Dental Association
                </a>
                .
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-brush text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Clean daily, correctly.
                    </span>{" "}
                    Rinse after meals; morning and night, brush all surfaces
                    with a denture brush and denture cleanser — never regular
                    whitening toothpaste, whose abrasives scratch acrylic into a
                    stain-and-bacteria magnet.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-moon-stars text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Rest your gums overnight.
                    </span>{" "}
                    Remove the denture at night and soak it in water or a
                    cleansing solution; round-the-clock wear breeds fungal
                    irritation.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-thermometer-high text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Never use hot water.
                    </span>{" "}
                    Heat warps acrylic permanently — lukewarm only.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-hand-index-thumb text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Handle over a towel or basin.
                    </span>{" "}
                    Most fractures are bathroom-floor accidents, not chewing
                    accidents.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-emoji-smile text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Clean your mouth too.
                    </span>{" "}
                    Brush the gums, palate, tongue and any remaining natural
                    teeth before reinserting.
                  </span>
                </li>
              </ul>
              <p>
                Keep the six-monthly review as well, so we can check the fit,
                screen the soft tissues, and catch the slow ridge changes that
                quietly loosen even a perfect denture.
              </p>
            </div>

            <div>
              <img
                src="/blogimage/aug30(3).jpg"
                alt="Implant-supported denture diagram — a denture anchored on dental implants in the gums and jaw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Loose Denture */}
            <div>
              <h2 id="loose-denture" className="fw-bold mt-5">
                <span className="text-brand">
                  When a Denture Feels Loose — Relines, Remakes and the Implant
                  Fix
                </span>
              </h2>
              <p>
                Dentures are not lifetime devices, through no fault of their
                own: the jawbone beneath slowly shrinks (a process only implants
                can halt), so a denture fitted to the ridge of five years ago
                floats on the ridge of today. The remedies, in honest order:
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-arrow-repeat text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>A reline</span> refits the
                    tissue surface to your current ridge — economical, when the
                    teeth and base are still sound.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-recycle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>A remake</span> is due
                    when the denture is worn, repeatedly patched, or past the
                    5–7 year mark.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-plus-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      An implant-supported overdenture
                    </span>{" "}
                    is the definitive answer for anyone — especially a
                    lower-denture wearer — for whom no conventional plate has
                    ever felt secure. Many of our most grateful patients endured
                    a loose lower denture for a decade before learning the
                    solution had existed all along.
                  </span>
                </li>
              </ul>
            </div>

            {/* How to Choose */}
            <div>
              <h2 id="how-to-choose" className="fw-bold mt-5">
                <span className="text-brand">
                  How to Choose — the Questions Worth Asking First
                </span>
              </h2>
              <p>
                Rather than repeat the type descriptions above, here is the
                practical filter. Bring these four questions to any clinic you
                consult, and the quality of the answers will tell you more than
                any brochure:
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-question-circle-fill text-brand me-3"></i>
                  <span>
                    How will the fit be achieved — are functional impressions
                    used?
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-question-circle-fill text-brand me-3"></i>
                  <span>
                    Will I see and approve a try-in before the denture is
                    finished?
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-question-circle-fill text-brand me-3"></i>
                  <span>What adjustment visits are included afterwards?</span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-question-circle-fill text-brand me-3"></i>
                  <span>
                    What is the long-term plan for relines and reviews?
                  </span>
                </li>
              </ul>
              <p>
                And bring your existing denture along. To a specialist&apos;s
                eye, an old denture tells half your story before you say a word.
              </p>
            </div>

            {/* Myths */}
            <div>
              <h2 id="myths" className="fw-bold mt-5">
                <span className="text-brand">
                  Myths About False Teeth, Cleared Up
                </span>
              </h2>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-patch-check-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      &quot;Dentures mean my eating days are over.&quot;
                    </span>{" "}
                    The reverse is true — dentures exist to return eating.
                    Conventional dentures restore a good share of chewing
                    function, BPS more, and implant-anchored dentures bring back
                    firm foods entirely.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-patch-check-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      &quot;Everyone will know they are false teeth.&quot;
                    </span>{" "}
                    A generation ago, perhaps. Today&apos;s premium tooth sets
                    and individualised shading make a well-made denture pass
                    unnoticed in conversation — and you approve the look at the
                    try-in before anything is finalised.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-patch-check-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      &quot;At my age, it isn&apos;t worth it.&quot;
                    </span>{" "}
                    This myth costs the most. An older adult with a well-fitting
                    denture eats better, speaks clearly and stays better
                    nourished — and nutrition in later life is health in later
                    life.
                  </span>
                </li>
              </ul>
            </div>

            {/* Why Meghana */}
            <div>
              <h2 id="why-meghana" className="fw-bold mt-5">
                <span className="text-brand">
                  Why Tirupati Families Trust Meghana Dental for Prosthodontic
                  Care
                </span>
              </h2>
              <p>
                A denture is judged at every meal, conversation and photograph
                for years, so choose its maker with care. At Meghana Multi
                Speciality Dental Hospital, denture work is treated as
                prosthodontic craft: unhurried functional impressions and
                try-ins, the premium BPS system for patients who want the best
                prosthesis available, and the full range — cast, flexible,
                immediate and implant-retained — so the recommendation fits you
                rather than our shelf.
              </p>
              <p>
                Just as valuable is the complete in-house pathway for whatever
                your mouth needs around the denture — extractions, gum care and
                the implant upgrade under one roof, within NABH-certified
                standards, backed by 17+ years of care, 50,000+ patients and a
                4.9-star Google rating from 850+ reviews. Whether you are
                replacing a few teeth, starting fresh, upgrading a faithful old
                plate to BPS, or finally anchoring a loose lower denture on
                implants — bring the question to one consultation and leave with
                an honest written plan.
              </p>
            </div>

            {/* FAQs */}
            <div>
              <h2 id="faqs" className="fw-bold mt-5">
                <span className="text-brand">Frequently Asked Questions</span>
              </h2>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Which type of denture is best for me?
                </span>
              </p>
              <p>
                It depends on how many teeth are missing, the condition of your
                remaining teeth and ridges, and your priorities. As a broad
                guide: cast or flexible partials for a few missing teeth, BPS
                complete dentures for full replacement at the highest removable
                standard, and implant-supported overdentures for a loose lower
                denture.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  What makes BPS dentures better than ordinary dentures?
                </span>
              </p>
              <p>
                BPS dentures use functional impressions that capture your muscle
                movement, precise bite records, and injection-moulded
                high-impact processing. Together these give superior
                suction-fit, stability, strength, stain resistance and a more
                lifelike appearance than conventional acrylic dentures.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  How long does it take to get dentures made?
                </span>
              </p>
              <p>
                Usually a week across four to five visits for partials and
                conventional complete dentures. BPS protocols and healing time
                after extractions extend this as planned.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  How long do dentures last?
                </span>
              </p>
              <p>
                Typically five to seven years before a reline or remake is
                advisable — not because the denture fails, but because the jaw
                ridge beneath it slowly changes shape. Six-monthly reviews keep
                the fit on track and catch problems early.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Will I be able to eat normally with dentures?
                </span>
              </p>
              <p>
                Yes, after a short learning curve — start with soft foods, chew
                on both sides, and progress steadily. BPS and implant-supported
                dentures give the strongest chewing performance, and most
                patients eat with easy confidence within days.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  My lower denture is always loose — is there a real solution?
                </span>
              </p>
              <p>
                Yes. The lower jaw is the hardest place for any conventional
                denture. Two to four implants with snap attachments transform
                stability permanently. It is the single most life-changing
                upgrade in denture care, and one consultation will explain
                exactly what it involves.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Should I wear my dentures at night?
                </span>
              </p>
              <p>
                No. Remove them nightly to rest the gums and prevent fungal
                irritation, and soak them in water or a cleansing solution.
                Never use hot water, which permanently warps the denture base.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Can old, stained or loose dentures be repaired?
                </span>
              </p>
              <p>
                Often yes — relines restore fit, repairs mend fractures, and
                professional cleaning revives staining. But a denture past five
                to seven years, or one repeatedly patched, usually serves you
                better remade. Bring it in; the honest answer takes one
                inspection.
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
              &amp; Director, Meghana Multi Speciality Dental Hospital. Denture
              treatment at Meghana Dental is carried out by the hospital&apos;s
              MDS prosthodontic team.
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
                Give Yourself — or Your Parents — the Smile Back
              </h3>
              <p className="mb-4">
                Book a denture consultation at Meghana Multi Speciality Dental
                Hospital, Tirupati.
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
                    Mon–Sat: 9:00 AM – 8:00 PM &nbsp;·&nbsp; Sunday: 10:00 AM –
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
                  Dentures
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

export default Aug30;
