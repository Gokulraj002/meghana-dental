import React from "react";
import Link from "next/link";
import blogsMeta from "@/data/blogs-meta.json";

// Table of contents — section IDs match the h2 anchors below
const TOC = [
  { id: "what-it-is", label: "What a Smile Makeover Is" },
  { id: "what-it-fixes", label: "What It Can Fix" },
  { id: "toolbox", label: "The Cosmetic Toolbox" },
  { id: "digital-design", label: "Digital Smile Design" },
  { id: "health-first", label: "Health First, Beauty Second" },
  { id: "wedding-timeline", label: "The Wedding Smile Timeline" },
  { id: "natural-details", label: "Natural vs Obvious Results" },
  { id: "maintenance", label: "Caring for Your New Smile" },
  { id: "why-meghana", label: "Why Meghana Dental" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const CURRENT_SLUG = "smile-makeover-tirupati";
const ARTICLE_URL = "https://meghanadental.in/blogs/" + CURRENT_SLUG;
const ARTICLE_TITLE =
  "Smile Makeover in Tirupati: Your Complete Guide to Veneers, Whitening, Bonding and Smile Design";

const Aug29 = () => {
  return (
    <>
      <div className="container py-4">
        {/* H1 */}
        <h1 className="text-brand py-4">
          Smile Makeover in Tirupati: Veneers, Whitening &amp; Smile Design
        </h1>

        {/* Date + read time */}
        {/* <div className="mb-4" style={{ color: "#6B7280", fontSize: "0.9rem" }}>
          August 29, 2026 &nbsp;•&nbsp; 13 min read
        </div> */}

        <div className="row g-5">
          {/* ─────── LEFT — Article Content ─────── */}
          <div
            className="col-lg-8 blog-article-body"
            style={{ fontSize: "14px", lineHeight: 1.7 }}
          >
            {/* Introduction */}
            <p>
              Everyone has a photograph they almost loved. The light was right,
              the moment was real — but the smile was held back: lips pressed
              together over a chipped front tooth, a hand drifting up to cover a
              gap, a grin trimmed short because of stains no amount of brushing
              ever budged. If you recognise that photograph, you already
              understand what a{" "}
              <span style={{ fontWeight: 700 }}>
                smile makeover in Tirupati
              </span>{" "}
              is for. It is not vanity, and it is not a single procedure — it is
              a planned, personalised combination of cosmetic and restorative
              treatments designed to fix everything that bothers you about your
              smile in one coordinated journey.
            </p>
            <p>
              This guide is for the person tired of editing their smile — before
              a wedding, a new job, or simply the everyday mirror. Written the
              way our cosmetic team explains it at Meghana Multi Speciality
              Dental Hospital (NABH-certified, 17+ years, 50,000+ patients
              treated), it covers what a makeover can fix, every tool in the
              toolbox, how you can preview your result before treatment starts,
              and how to plan around the big dates on your calendar.
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
                    A smile makeover is a combination of treatments planned as
                    one design — not procedures patched on one at a time.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    Whitening usually comes first, because it sets the target
                    shade every veneer and crown is matched to.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    Digital smile design lets you preview and approve your new
                    smile before anything irreversible happens.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    Health comes before cosmetics — decay and gum problems are
                    treated first, or the result won&apos;t last.
                  </span>
                </li>
                <li className="d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    Many of the best makeovers are conservative — whitening plus
                    a little bonding — not a full set of veneers.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <img
                src="/blogimage/aug29(5).jpg"
                alt="Smile makeover in Tirupati — veneers, whitening and smile design at Meghana Multi Speciality Dental Hospital"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* What It Is */}
            <div>
              <h2 id="what-it-is" className="fw-bold mt-5">
                <span className="text-brand">
                  What a Smile Makeover Actually Is
                </span>
              </h2>
              <p>
                A smile makeover — also called smile designing — is a customised
                plan that combines two or more cosmetic and restorative
                procedures to transform your smile as a whole, rather than
                patching individual complaints in isolation. The distinction
                matters. A whitened smile with one mismatched old crown looks
                worse, not better. Veneers placed on crowded teeth fight a
                losing battle against the alignment beneath. A beautiful set of
                new front teeth framed by an uneven, over-exposed gumline still
                photographs wrong.
              </p>
              <p>
                Smile design treats the smile as the unified picture it is —
                evaluating tooth colour, shape, length, alignment and
                proportion; how the upper edges track the curve of the lower
                lip; how the midline relates to the face; how much gum shows
                when you laugh — and only then selecting and sequencing the
                procedures that deliver that picture. At our{" "}
                <Link
                  href="/services/smile-makeover"
                  style={{ fontWeight: 600 }}
                >
                  Smile Makeover
                </Link>{" "}
                service, the plan may be as light as whitening with a touch of
                bonding, or as comprehensive as alignment, gum recontouring and
                a full set of veneers. The constant is that it is designed,
                start to finish, around one coherent result — yours.
              </p>
            </div>

            {/* What It Fixes */}
            <div>
              <h2 id="what-it-fixes" className="fw-bold mt-5">
                <span className="text-brand">
                  What a Smile Makeover Can Fix
                </span>
              </h2>
              <p>
                The honest answer: nearly everything that has ever made you hold
                a smile back.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-cup-hot text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Stains and discolouration
                    </span>{" "}
                    — from tea, coffee, tobacco and age, including the
                    chalky-white or brown fluorosis mottling common across
                    Andhra Pradesh that whitening alone handles poorly (see our{" "}
                    <Link
                      href="/blogs/teeth-cleaning-vs-teeth-whitening-tirupati"
                      style={{ fontWeight: 600 }}
                    >
                      teeth cleaning vs whitening guide
                    </Link>
                    ).
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-hammer text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Chips, cracks and worn edges
                    </span>{" "}
                    that make teeth look broken or aged.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-arrows-collapse text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Gaps between front teeth
                    </span>{" "}
                    — closed with bonding or veneers, or properly with
                    alignment, depending on size and cause.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-shuffle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Crooked, rotated or uneven teeth
                    </span>{" "}
                    — mildly, with cosmetic work; genuinely, via the orthodontic
                    route.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-emoji-laughing text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Short, small or &quot;gummy&quot; smiles
                    </span>{" "}
                    where excess gum tissue steals the show from the teeth.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-arrow-repeat text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Old, unsightly dental work
                    </span>{" "}
                    — the dark-margined crown, the yellowed front filling —
                    replaced and harmonised.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-plus-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Missing teeth</span> —
                    because no smile design is complete around a gap, and
                    implants integrate seamlessly (see our{" "}
                    <Link
                      href="/blogs/dental-implants-tirupati-complete-guide"
                      style={{ fontWeight: 600 }}
                    >
                      dental implants guide
                    </Link>
                    ).
                  </span>
                </li>
              </ul>
              <p>
                One framing our specialists always offer: most patients do not
                need everything on this list. Many of the most satisfying
                makeovers are conservative — whitening plus an hour of artistic
                bonding — and part of an honest consultation is telling you when
                less gives you the result you actually want.
              </p>
            </div>

            {/* Toolbox */}
            <div>
              <h2 id="toolbox" className="fw-bold mt-5">
                <span className="text-brand">
                  The Cosmetic Toolbox, Explained Honestly
                </span>
              </h2>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-brightness-high text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Professional teeth whitening
                    </span>{" "}
                    is the foundation tool and almost always the first move. A
                    single in-office session at our{" "}
                    <Link
                      href="/services/teeth-whitening"
                      style={{ fontWeight: 600 }}
                    >
                      Teeth Whitening
                    </Link>{" "}
                    service lightens the natural teeth by several shades — and,
                    crucially, sets the target shade every subsequent veneer,
                    crown and bonding is matched to. Whiten after placing
                    restorations and the natural teeth brighten while the
                    ceramic does not; this sequencing rule alone separates
                    well-planned makeovers from patchwork ones.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-brush text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Composite bonding</span>{" "}
                    is the quiet workhorse: tooth-coloured resin sculpted
                    directly onto the tooth by hand, in one visit, with little
                    or no drilling — closing small gaps, rebuilding chipped
                    corners and refining uneven edges. Its conservatism (your
                    natural tooth stays essentially untouched) makes it the
                    right first answer for many young patients and minor
                    corrections.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-layers text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Veneers</span> are the
                    transformation tool — thin, custom shells bonded to the
                    front of the teeth that change colour, shape, length and
                    apparent alignment at once. They come in two families,
                    composite and porcelain, each with honest trade-offs
                    (compared in detail in the FAQ below). As the{" "}
                    <a
                      href="https://www.mouthhealthy.org/all-topics-a-z/veneers"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontWeight: 600 }}
                    >
                      American Dental Association
                    </a>{" "}
                    notes, veneers are not reversible because some enamel is
                    removed, so any dental problems must be treated first — one
                    reason this is hospital work, not a walk-in cosmetic
                    transaction.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-gem text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Dental crowns</span> enter
                    where teeth are too damaged, root-treated or heavily filled
                    for veneers to be wise — full-coverage zirconia and ceramic
                    restorations that rebuild strength and beauty together (see
                    our{" "}
                    <Link
                      href="/services/dental-crowns"
                      style={{ fontWeight: 600 }}
                    >
                      Dental Crowns
                    </Link>{" "}
                    service).
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-arrow-left-right text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Alignment — clear aligners or braces
                    </span>{" "}
                    — is the structural tool cosmetic dentistry too often skips.
                    Genuinely crooked teeth disguised under veneers need
                    aggressive grinding and still fight the bite forever.
                    Aligning them first — usually via the{" "}
                    <Link href="/services/aligners" style={{ fontWeight: 600 }}>
                      clear aligners
                    </Link>{" "}
                    route, weighed against braces in our{" "}
                    <Link
                      href="/blogs/braces-vs-clear-aligners"
                      style={{ fontWeight: 600 }}
                    >
                      comparison guide
                    </Link>{" "}
                    — means later veneers (if needed at all) can be thin,
                    conservative and built to last.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-lightning-charge-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Laser gum contouring
                    </span>{" "}
                    perfects the frame around the picture: using our{" "}
                    <Link
                      href="/services/laser-dentistry"
                      style={{ fontWeight: 600 }}
                    >
                      Laser Dentistry
                    </Link>{" "}
                    unit, excess or uneven gum tissue is gently reshaped —
                    correcting gummy smiles and revealing the full length of
                    teeth that always looked short — with minimal discomfort and
                    quick healing.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <img
                src="/blogimage/aug29(2).jpg"
                alt="Before and after smile makeover — worn, stained teeth restored with veneers at Meghana Dental, Tirupati"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Digital Smile Design */}
            <div>
              <h2 id="digital-design" className="fw-bold mt-5">
                <span className="text-brand">
                  Digital Smile Design — See Your New Smile Before You Commit
                </span>
              </h2>
              <p>
                The single development that has most changed cosmetic dentistry
                is this: you no longer have to imagine the result — you can see
                it first. Smile design here begins with records — photographs of
                your face and smile from several angles, and digital scans of
                your teeth — from which your new smile is planned against the
                principles that govern natural beauty: tooth proportion, the
                smile curve, the midline, the gum frame, your facial features.
              </p>
              <p>
                The plan is then shown to you and, in suitable cases, rehearsed
                on you through a trial smile — a temporary preview material
                placed over your own teeth, letting you see the proposed shapes
                and lengths in your own mirror before a single irreversible step
                is taken. This is where the best makeovers are made: lengths
                adjusted, character refined, expectations aligned in both
                directions. Nothing protects you from disappointment like seeing
                the destination before the journey.
              </p>
            </div>

            {/* Health First */}
            <div>
              <h2 id="health-first" className="fw-bold mt-5">
                <span className="text-brand">
                  Health First, Beauty Second — the Rule That Protects Your
                  Investment
                </span>
              </h2>
              <p>
                Here is the honest principle that separates a hospital-grade
                makeover from a beauty-parlour transaction: cosmetics are built
                on health, never instead of it. Veneers bonded over unstable
                gums, whitening across untreated cavities, crowns on infected
                roots — all of it fails, expensively and predictably. The ADA
                has publicly cautioned against exactly this shortcut, warning of
                the harm that comes from placing veneers over unhealthy teeth or
                untreated decay.
              </p>
              <p>
                Every makeover at Meghana Dental therefore begins with a full
                examination, and any disease found — decay, gum inflammation,
                failing old work, root infection — is treated first, with the
                multispeciality team and a 25&times; dental operating microscope
                behind the foundation work (see why magnification matters in our{" "}
                <Link
                  href="/blogs/best-root-canal-hospital-tirupati"
                  style={{ fontWeight: 600 }}
                >
                  root canal guide
                </Link>
                ). This sequencing is not an upsell; it is the warranty. A smile
                rebuilt on healthy foundations keeps its beauty for many years;
                one painted over problems keeps it for months. If a clinic
                proposes veneers without examining your gums and X-raying the
                teeth beneath, our sincere advice — wherever you choose to be
                treated — is to keep walking.
              </p>
            </div>

            {/* Wedding Timeline */}
            <div>
              <h2 id="wedding-timeline" className="fw-bold mt-5">
                <span className="text-brand">
                  Planning Around the Big Day — the Wedding Smile Timeline
                </span>
              </h2>
              <p>
                In Tirupati as everywhere in India, the most common deadline
                behind a makeover has a date, a venue and a photographer. Here
                is the honest planning calendar our specialists share:
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-calendar3 text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Six or more months out
                    </span>{" "}
                    — the luxury window: time for alignment where needed, gum
                    contouring with full healing, implant work, and unhurried
                    veneer artistry, all finished well before the mehendi.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-calendar-range text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Three months out</span> —
                    comfortably fits whitening, bonding, porcelain veneers,
                    crown replacements and laser gum reshaping; most makeovers,
                    minus major alignment.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-calendar-event text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>One month out</span> —
                    still transforms: in-office whitening, composite bonding and
                    veneers, and minor gum contouring, sequenced tightly.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-calendar-check text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      One to two weeks out
                    </span>{" "}
                    — the honest menu narrows to a professional clean, whitening
                    and small same-day bonding refinements; meaningful polish,
                    no irreversible adventures against the clock.
                  </span>
                </li>
              </ul>
              <p>
                Two rules govern every timeline: finish at least one to two
                weeks before the event so everything settles and any refinement
                happens calmly, and start the conversation as soon as the date
                is fixed — the earlier we meet, the more of the toolbox is
                available to you.
              </p>
            </div>

            <div>
              <img
                src="/blogimage/aug29(3).jpg"
                alt="Before and after cosmetic smile transformation with veneers and whitening — Meghana Dental, Tirupati"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Natural Details */}
            <div>
              <h2 id="natural-details" className="fw-bold mt-5">
                <span className="text-brand">
                  Five Details That Separate a Natural Result From an Obvious
                  One
                </span>
              </h2>
              <p>
                When patients say they fear &quot;fake-looking&quot; results,
                they are sensing the details templated work gets wrong and true
                smile design gets right:
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-1-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Tooth length</span> —
                    youthful upper front teeth show slightly at rest and follow
                    the lower lip&apos;s curve when smiling; uniformly over-long
                    teeth read as artificial. The right length is read from your
                    lips and face, not a chart.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-2-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Edge translucency</span> —
                    natural enamel carries a subtle glassiness at the biting
                    edges that quality ceramics reproduce and cheap monolithic
                    work flattens.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-3-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>The midline</span> — the
                    line between your two front teeth should harmonise with your
                    facial midline; a tilted or shifted midline quietly
                    unsettles every photograph.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-4-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>The buccal corridor</span>{" "}
                    — the soft dark spaces at the corners of a smile;
                    over-widened &quot;Hollywood&quot; work erases them and
                    produces the piano-key effect.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-5-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Character</span> — a
                    50-year-old face wearing a teenager&apos;s hyper-regular
                    teeth convinces no one; the finest makeovers build in your
                    appropriate warmth, texture and individuality.
                  </span>
                </li>
              </ul>
              <p>
                None of this asks you to become a designer — it asks you to
                choose a team that already thinks this way. Now you know the
                questions to ask.
              </p>
            </div>

            {/* Maintenance */}
            <div>
              <h2 id="maintenance" className="fw-bold mt-5">
                <span className="text-brand">
                  Caring for Your New Smile — Longevity and Maintenance
                </span>
              </h2>
              <p>
                A makeover wants simple maintenance, not anxious protection.
                Brush twice daily with a non-abrasive toothpaste, clean between
                the teeth, and keep the six-monthly professional cleanings that
                guard both the restorations and the gums framing them. A few
                specific cautions:
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-x-octagon text-brand me-3"></i>
                  <span>
                    Front teeth, veneered or natural, are not tools — bottle
                    caps, thread-biting and pen-chewing retire permanently.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-moon-stars text-brand me-3"></i>
                  <span>
                    Night-grinders get a slim protective night guard, the single
                    best insurance for ceramic work.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-brightness-high text-brand me-3"></i>
                  <span>
                    Whitening is maintained with sensible staining habits and
                    occasional touch-ups.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-telephone text-brand me-3"></i>
                  <span>
                    Any chip, roughness or change of feeling gets a prompt visit
                    rather than wait-and-see.
                  </span>
                </li>
              </ul>
              <p>
                Looked after this way, composite work serves for years with easy
                refurbishment, and porcelain veneers and modern crowns routinely
                serve a decade and beyond.
              </p>
            </div>

            {/* Why Meghana */}
            <div>
              <h2 id="why-meghana" className="fw-bold mt-5">
                <span className="text-brand">
                  Why Tirupati Trusts Meghana Dental for Cosmetic Dentistry
                </span>
              </h2>
              <p>
                Cosmetic dentistry is where artistry meets engineering, and a
                makeover is only as good as the weakest discipline behind it —
                which is exactly why it belongs in a true multispeciality
                hospital. Your smile design is led under the experience of Dr.
                M. Hemadri, MDS and ICOI Fellow, with 17+ years of clinical work
                and a reputation for full-smile transformations. Every tool in
                this guide — whitening, bonding, veneers, crowns, aligners with
                our MDS Orthodontist, laser gum contouring, implants — exists
                under one roof, sequenced by one team to one design. Previews
                and try-ins ensure you approve your smile before it is
                permanent, and the whole journey runs inside NABH-certified
                standards, with the trust of 50,000+ patients and a 4.9-star
                Google rating from 850+ reviews — many of them, fittingly, from
                patients describing the photographs they finally love.
              </p>
            </div>

            {/* FAQs */}
            <div>
              <h2 id="faqs" className="fw-bold mt-5">
                <span className="text-brand">Frequently Asked Questions</span>
              </h2>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  What does a smile makeover include?
                </span>
              </p>
              <p>
                Whatever your smile needs — typically a personalised combination
                of professional whitening, composite bonding, veneers, crowns,
                alignment with aligners or braces, laser gum contouring, and
                implants where teeth are missing, all sequenced as one
                coordinated design rather than separate patches.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Will my new smile look fake?
                </span>
              </p>
              <p>
                Not when it is designed rather than templated. Natural results
                come from matching tooth shapes and shades to your face,
                building in subtle character and translucency, and previewing
                the design on you through a mock-up before anything is
                permanent. The &quot;too-white&quot; look is a planning failure,
                not a veneer inevitability.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Do veneers damage your natural teeth?
                </span>
              </p>
              <p>
                Modern porcelain veneers need only minimal, conservative enamel
                preparation, and composite veneers and bonding often need
                virtually none. The genuinely damaging path is the opposite one
                — heavy veneers used to disguise crooked teeth that should have
                been aligned first, which a proper smile design avoids.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Which is better — composite or porcelain veneers?
                </span>
              </p>
              <p>
                Composite is single-visit, enamel-friendly and easily repaired,
                but stains and wears sooner. Porcelain is more lifelike,
                stain-resistant and durable across a decade or more, over two to
                three visits. The right choice depends on your teeth, bite,
                grinding habits and expectations, which you will hear discussed
                plainly at your consultation.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  How long does a smile makeover take?
                </span>
              </p>
              <p>
                From a single visit (whitening plus bonding) to several months
                (alignment-first comprehensive designs). Most veneer-centred
                makeovers complete within two to six weeks, and your written
                plan maps every visit before you begin so there are no
                surprises.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Can a gummy smile really be corrected?
                </span>
              </p>
              <p>
                Yes. Laser gum contouring gently reshapes excess or uneven gum
                tissue in a single comfortable visit with rapid healing, often
                transforming a smile on its own or as the finishing frame around
                veneers and whitening.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  I&apos;m getting married in two months — is there time?
                </span>
              </p>
              <p>
                Comfortably, for most makeovers: whitening, bonding, veneers,
                crown replacements and gum contouring all fit a
                two-to-three-month runway. Book the consultation as soon as the
                date is fixed so the plan can be sequenced calmly and finished
                well before the event.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Is a smile makeover safe for my teeth long-term?
                </span>
              </p>
              <p>
                Yes, when built health-first: disease treated before cosmetics,
                conservative techniques preferred, bite and grinding accounted
                for, and maintenance built in. That sequencing is the difference
                between a makeover that lasts a decade and one that lasts a
                season.
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
              &amp; Director, Meghana Multi Speciality Dental Hospital. Cosmetic
              and smile-design treatment at Meghana Dental is delivered by the
              hospital&apos;s multispeciality team.
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
                The Smile You&apos;ve Been Holding Back Is One Consultation Away
              </h3>
              <p className="mb-4">
                Book your smile design consultation at Meghana Multi Speciality
                Dental Hospital, Tirupati — and let the next photograph be the
                one you frame.
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
                  Cosmetic Dentistry
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

export default Aug29;
