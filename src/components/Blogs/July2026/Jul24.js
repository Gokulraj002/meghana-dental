import React from "react";
import Link from "next/link";
import blogsMeta from "@/data/blogs-meta.json";

// Table of contents — section IDs match the h2 anchors below
const TOC = [
  { id: "what-is-cleaning", label: "What Is Professional Teeth Cleaning?" },
  { id: "scaling-myth", label: "Busting the Scaling Myth" },
  { id: "what-is-whitening", label: "What Is Professional Teeth Whitening?" },
  { id: "cleaning-vs-whitening", label: "Cleaning vs Whitening: Key Differences" },
  { id: "cleaning-first", label: "Why Cleaning Must Come First" },
  { id: "self-check", label: "Which One Do You Need? A Self-Check" },
  { id: "cost", label: "Cost in Tirupati (2026)" },
  { id: "salon-warning", label: "Salon Whitening & Home Remedies — A Warning" },
  { id: "postpone-whitening", label: "Who Should Postpone Whitening" },
  { id: "aftercare", label: "After-Care for Both Procedures" },
  { id: "why-meghana-dental", label: "Why Meghana Dental?" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const CURRENT_SLUG = "teeth-cleaning-vs-teeth-whitening-tirupati";
const ARTICLE_URL = "https://meghanadental.in/blogs/" + CURRENT_SLUG;
const ARTICLE_TITLE =
  "Teeth Cleaning vs Teeth Whitening: What's the Difference and Which One Do You Actually Need?";

const Jul24 = () => {
  return (
    <>
      <div className="container py-4">
        {/* H1 */}
        <h1 className="text-brand py-4">
          Teeth Cleaning vs Whitening: Which One Do You Need?
        </h1>

        {/* Date + read time */}
        {/* <div className="mb-4" style={{ color: "#6B7280", fontSize: "0.9rem" }}>
          July 24, 2026 &nbsp;•&nbsp; 13 min read
        </div> */}

        <div className="row g-5">
          {/* ─────── LEFT — Article Content ─────── */}
          <div
            className="col-lg-8 blog-article-body"
            style={{ fontSize: "14px", lineHeight: 1.7 }}
          >
            {/* Introduction */}
            <p>
              Every week at Meghana Multispeciality Dental Hospital, patients
              arrive asking for &quot;whitening&quot; when what their mouth is
              crying out for is a professional cleaning, and others postpone the
              whitening they genuinely want because they assume their recent
              cleaning already covered it. The confusion is completely
              understandable: both procedures happen in a dental chair, both
              leave teeth looking brighter, and both get casually described as
              &quot;polishing the teeth.&quot; But teeth cleaning and teeth
              whitening are two fundamentally different procedures, with
              different purposes, different methods, different costs, and
              different answers to the question &quot;do I need this?&quot;
              Getting the distinction right saves you money, protects your gums,
              and gets you the smile you are actually after. This guide from
              Tirupati&apos;s NABH-certified super speciality dental centre —
              17+ years of excellence, 50,000+ patients, 4.9-star Google rating
              across 850+ reviews — settles the cleaning-versus-whitening
              question once and for all.
            </p>
            <p>
              Here is the short answer before the detail.{" "}
              <span style={{ fontWeight: 700 }}>
                Teeth cleaning (scaling and polishing)
              </span>{" "}
              is a health procedure: it removes plaque, hardened tartar
              (calculus) and surface stains from the teeth and from under the
              gumline — deposits that cause bleeding gums, bad breath, gum
              disease and eventually tooth loss, and that no toothbrush on earth
              can remove once they have hardened.{" "}
              <span style={{ fontWeight: 700 }}>Teeth whitening</span> is a
              cosmetic procedure: it uses professionally controlled bleaching
              gels, activated in-office by light or laser, to lighten the actual
              shade of your enamel by several levels — something no amount of
              cleaning can do. Cleaning makes teeth healthy and restores their
              natural colour by removing what is sitting on them; whitening
              makes that natural colour lighter. Most people need cleaning
              regularly; some people additionally want whitening; and everyone
              who wants whitening needs cleaning first. Now let us unpack each
              one properly.
            </p>

            <div>
              <img
                src="/blogimage/jul24(2).JPG"
                alt="Professional teeth scaling and cleaning procedure with disclosing solution at Meghana Dental, Tirupati"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* What Is Professional Teeth Cleaning */}
            <div>
              <h2 id="what-is-cleaning" className="fw-bold mt-5">
                <span className="text-brand">
                  What Is Professional Teeth Cleaning (Scaling and Polishing)?
                </span>
              </h2>
              <p>
                Within hours of brushing, a soft, sticky bacterial film called
                plaque begins re-forming on your teeth. Brushing and flossing
                remove most of it — but the plaque that survives in the
                hard-to-reach zones (along the gumline, between teeth, behind
                the lower front teeth) absorbs minerals from your saliva and
                hardens within days into tartar, also called calculus: a rough,
                yellow-brown crust that is chemically bonded to the tooth
                surface. This is the critical fact most patients have never been
                told:{" "}
                <span style={{ fontWeight: 700 }}>
                  once plaque hardens into tartar, no toothbrush, no floss, no
                  home remedy can remove it.
                </span>{" "}
                Tartar can only be removed professionally, and its rough surface
                becomes a multiplying colony for the bacteria that inflame your
                gums — which is why bleeding gums, persistent bad breath and
                that yellow line along the gum margins all trace back to the
                same culprit.
              </p>
              <p>
                Professional cleaning at Meghana Dental removes this completely.
                Using an ultrasonic scaler — a fine tip vibrating at high
                frequency with a cooling water spray — our specialists
                painlessly shatter and flush away tartar from every tooth
                surface, including beneath the gumline where the real damage
                happens. The teeth are then polished smooth with a gentle paste,
                which removes surface stains from tea, coffee and tobacco and
                makes it harder for new plaque to grip. The whole procedure
                typically takes 30 to 45 minutes, requires no anaesthesia in
                routine cases, and leaves your mouth feeling remarkably fresh —
                patients constantly tell us they had forgotten what truly clean
                teeth feel like. Where gum disease has already progressed
                deeper, an extended deep cleaning (root planing) under local
                anaesthesia treats the root surfaces below the gums — the bridge
                between routine cleaning and the structured care of our{" "}
                <Link
                  href="/services/gum-treatment"
                  style={{ fontWeight: 600 }}
                >
                  Gum Treatment
                </Link>{" "}
                programme.
              </p>
            </div>

            {/* Scaling Myth */}
            <div>
              <h2 id="scaling-myth" className="fw-bold mt-5">
                <span className="text-brand">
                  &quot;Scaling Loosens Teeth and Removes Enamel&quot; — Time to
                  Bury This Myth
                </span>
              </h2>
              <p>
                No article on teeth cleaning written for Indian patients is
                complete without confronting the single most damaging myth in
                our consultation rooms: the widespread belief that scaling
                weakens teeth, scrapes away enamel, creates gaps, or makes teeth
                loose and sensitive forever. Let us be unambiguous:{" "}
                <span style={{ fontWeight: 700 }}>
                  professional scaling does not damage enamel and does not
                  loosen teeth.
                </span>{" "}
                The ultrasonic scaler removes deposits sitting on the tooth;
                enamel — the hardest substance in the human body — is unharmed.
              </p>
              <p>
                So where did the myth come from? From a misreading of what
                patients feel after a long-overdue cleaning. When heavy tartar
                has filled the gaps between teeth for years, removing it
                suddenly reveals the gaps that were always there — the tartar
                was never &quot;support,&quot; it was the disease. When
                inflamed, swollen gums heal and tighten after cleaning, they
                shrink back to healthy contours, which can briefly expose root
                surfaces and cause temporary sensitivity that settles within
                days to weeks. And teeth that feel slightly mobile after
                cleaning were already loosened by gum disease — the cleaning
                merely removed the cement of tartar hiding it, and is in fact
                the first step toward firming them up again. The truth is
                precisely the reverse of the myth: it is{" "}
                <span style={{ fontWeight: 700 }}>
                  avoiding cleaning that loosens teeth
                </span>
                , because unchecked tartar drives the gum disease that destroys
                the bone holding teeth in place. Six-monthly professional
                cleaning is among the cheapest, highest-return habits in all of
                healthcare.
              </p>
            </div>

            {/* What Is Professional Teeth Whitening */}
            <div>
              <h2 id="what-is-whitening" className="fw-bold mt-5">
                <span className="text-brand">
                  What Is Professional Teeth Whitening?
                </span>
              </h2>
              <p>
                Teeth whitening — as delivered at our{" "}
                <Link
                  href="/services/teeth-whitening"
                  style={{ fontWeight: 600 }}
                >
                  Teeth Whitening
                </Link>{" "}
                service — is a cosmetic procedure that lightens the intrinsic
                shade of your enamel using professionally controlled
                peroxide-based gels. Here is how it works: the active gel
                penetrates microscopic pores in the enamel and breaks down the
                pigmented molecules that accumulate inside the tooth structure
                over years of tea, coffee, tobacco and simple ageing — stains
                that live within the enamel, beyond the reach of any cleaning or
                polishing. In our in-office procedure, your gums are first
                carefully protected with a barrier, the whitening gel is applied
                to the teeth, and a specialised light or laser activates and
                accelerates the reaction. In a single visit of roughly 60 to 90
                minutes, most patients see their teeth lighten by several shades
                — a same-day transformation that is dramatic, safe under
                professional control, and ideal before weddings, interviews,
                photoshoots and festivals.
              </p>
              <p>
                Whitening works superbly on yellowish staining from diet,
                tobacco and age; it works less predictably on greyish
                discolouration, on fluorosis marks — the chalky-white or brown
                mottling from high-fluoride groundwater that is common in
                several regions of Andhra Pradesh — and not at all on crowns,
                fillings or veneers, whose colour is fixed. For these
                situations, our{" "}
                <Link
                  href="/services/smile-makeover"
                  style={{ fontWeight: 600 }}
                >
                  Smile Makeover
                </Link>{" "}
                service offers the right tools (veneers, microabrasion,
                combination plans).
              </p>
            </div>

            <div>
              <img
                src="/blogimage/jul24(3).png"
                alt="Teeth whitening before and after results at Meghana Dental, Tirupati"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Cleaning vs Whitening */}
            <div>
              <h2 id="cleaning-vs-whitening" className="fw-bold mt-5">
                <span className="text-brand">
                  Cleaning vs Whitening: The Head-to-Head Differences
                </span>
              </h2>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-bullseye text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Purpose:</span> cleaning
                    is preventive healthcare — it treats and prevents gum
                    disease, bad breath and decay risk; whitening is aesthetics
                    — it changes tooth colour.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-eraser-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>What it removes:</span>{" "}
                    cleaning removes deposits sitting on and around teeth
                    (plaque, tartar, surface stains); whitening removes nothing
                    — it chemically lightens pigments inside the enamel.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-slash-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>What it cannot do:</span>{" "}
                    cleaning cannot make teeth lighter than their natural shade;
                    whitening cannot remove tartar, cannot heal gums, and cannot
                    substitute for cleaning in any way.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-heart text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Need vs want:</span>{" "}
                    cleaning is something virtually every adult needs every six
                    months; whitening is something some patients want — entirely
                    legitimate, but optional.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-clock-history text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Sensation and downtime:
                    </span>{" "}
                    cleaning involves vibration and water with little to no
                    aftermath; whitening commonly causes mild, temporary
                    sensitivity for a day or two, managed with the desensitising
                    protocol we provide.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-calendar2-week text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Duration of results:
                    </span>{" "}
                    cleaning&apos;s benefits last as long as your home care plus
                    the six-month recall cycle; whitening results typically last
                    one to three years depending on tea, coffee and tobacco
                    habits and maintenance.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-person-check text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Who should perform them:
                    </span>{" "}
                    both belong in professional hands — and whitening in
                    particular should never be attempted through salon services
                    or aggressive home remedies, as we explain below.
                  </span>
                </li>
              </ul>
            </div>

            {/* Why Cleaning Must Come First */}
            <div>
              <h2 id="cleaning-first" className="fw-bold mt-5">
                <span className="text-brand">
                  Why Cleaning Must Always Come Before Whitening
                </span>
              </h2>
              <p>
                If you remember only one practical rule from this article, make
                it this:{" "}
                <span style={{ fontWeight: 700 }}>
                  cleaning first, whitening second — always.
                </span>{" "}
                The reasons are simple physics and simple safety. Whitening gel
                cannot lighten enamel it cannot touch; applying it over a layer
                of plaque and tartar produces patchy, uneven results and wastes
                your money. Whitening over inflamed, bleeding gums multiplies
                sensitivity and irritation; healthy gums tolerate the procedure
                comfortably. And frequently, the cleaning alone delivers a
                result that surprises the patient — once years of yellow-brown
                surface staining and tartar are gone, the natural tooth colour
                underneath is often bright enough that the patient happily
                postpones whitening altogether. This is why every whitening case
                at Meghana Dental begins with an examination and, where needed,
                a professional cleaning — and why we will honestly tell you when
                cleaning alone will give you what you came for. A clinic that
                whitens over tartar is a clinic to walk out of.
              </p>
            </div>

            {/* Self-Check */}
            <div>
              <h2 id="self-check" className="fw-bold mt-5">
                <span className="text-brand">
                  So Which One Do You Need? A Simple Self-Check
                </span>
              </h2>
              <p>Match your situation honestly against these profiles.</p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-droplet-half text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      You need a cleaning (most likely overdue) if:
                    </span>{" "}
                    your gums bleed when brushing; you have persistent bad
                    breath despite brushing; you can see or feel a rough,
                    yellowish crust along the gumline or behind your lower front
                    teeth; your last professional cleaning was more than six
                    months ago — or never; your gums look red, puffy or
                    receding.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-brightness-high text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      You may want whitening if:
                    </span>{" "}
                    your teeth are clean and your gums healthy, but the overall
                    shade is yellower than you would like; your stains come from
                    years of tea, coffee or tobacco; you have an important event
                    approaching and want a same-day brightening.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-arrow-repeat text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      You need cleaning first, then whitening if:
                    </span>{" "}
                    both of the above describe you — which is the most common
                    situation of all.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-magic text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      You need a smile makeover consultation instead if:
                    </span>{" "}
                    your discolouration is greyish or banded, you have fluorosis
                    mottling, or the teeth you want lighter carry crowns,
                    fillings or veneers — whitening will disappoint here, and
                    better tools exist.
                  </span>
                </li>
              </ul>
              <p>
                When in doubt, the answer is one short examination away, and we
                will tell you plainly which category you are in.
              </p>
            </div>

            {/* Cost */}
            <div>
              <h2 id="cost" className="fw-bold mt-5">
                <span className="text-brand">
                  Teeth Cleaning and Whitening Cost in Tirupati (2026)
                </span>
              </h2>
              <p>
                Honest numbers, as always. Professional cleaning (scaling and
                polishing) in Tirupati typically costs{" "}
                <span style={{ fontWeight: 700 }}>₹1,000 to ₹2,000</span> per
                session depending on the amount of deposit — making it one of
                the least expensive procedures in dentistry and, rupee for
                rupee, the highest-value. Deep cleaning (root planing) for
                established gum disease, performed quadrant-wise under local
                anaesthesia, typically ranges from{" "}
                <span style={{ fontWeight: 700 }}>₹2,500 to ₹6,000</span>{" "}
                depending on extent. In-office laser/light-activated whitening
                typically ranges from{" "}
                <span style={{ fontWeight: 700 }}>₹8,000 to ₹15,000</span> for
                the complete same-day procedure. These are indicative 2026
                market ranges; your exact cost at Meghana Dental is confirmed
                transparently after examination, with no hidden charges — and as
                ever, EMI options are available for larger treatment plans, and
                benefits under our empanelled schemes (ECHS, TTD, AP Police,
                APSRTC, BSNL, NTR Vaidya Seva, among 11+ organisations) are
                facilitated as per scheme guidelines. One comparison worth
                pausing on: a six-monthly cleaning costs less than most families
                spend on a single restaurant dinner — and it is the procedure
                most proven to prevent the root canals, extractions and gum
                surgeries that cost twenty times more.
              </p>
            </div>

            {/* Salon Warning */}
            <div>
              <h2 id="salon-warning" className="fw-bold mt-5">
                <span className="text-brand">
                  A Warning About Salon Whitening, Charcoal and Kitchen Remedies
                </span>
              </h2>
              <p>
                The internet and the beauty industry offer a parade of
                &quot;natural&quot; and budget whitening shortcuts — activated
                charcoal powders, baking-soda scrubs, lemon juice, banana peels,
                salon &quot;whitening&quot; services performed by non-dentists.
                Our specialists&apos; honest counsel:{" "}
                <span style={{ fontWeight: 700 }}>avoid all of them.</span>{" "}
                Charcoal and baking soda are abrasives — they scratch away
                enamel to remove stains, and enamel, once gone, never returns;
                thinner enamel exposes the yellow dentine beneath, making teeth
                permanently more yellow — the exact opposite of the goal. Lemon
                and other acids dissolve enamel directly. Salon whitening
                performed without dental examination, gum protection or
                professional-grade materials risks chemical burns to the gums
                and severe sensitivity, with no one qualified to manage
                complications. Professional whitening is not expensive because
                of the gel; it is the examination, the gum protection, the
                controlled concentrations, the desensitising protocol and the
                accountability you are paying for. Your enamel has to last until
                your final day — treat it accordingly.
              </p>
            </div>

            {/* Who Should Postpone Whitening */}
            <div>
              <h2 id="postpone-whitening" className="fw-bold mt-5">
                <span className="text-brand">
                  Who Should Postpone Whitening — An Honest Suitability Check
                </span>
              </h2>
              <p>
                Professional whitening is safe — for the right mouth at the
                right time, which is why the examination comes first. We advise
                postponing or modifying whitening for:
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-triangle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Pregnant and nursing mothers
                    </span>{" "}
                    — purely as a precaution — the brightening can comfortably
                    wait a few months.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-triangle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Patients under 16,</span>{" "}
                    whose enamel and pulp are still maturing.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-triangle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Anyone with untreated cavities, leaking fillings or active
                      gum disease
                    </span>{" "}
                    — the gel finds these and announces them painfully, so they
                    are treated first.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-triangle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Patients with severe pre-existing sensitivity,
                    </span>{" "}
                    for whom we adjust concentrations and protocols or recommend
                    gentler take-home regimens.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-triangle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Front teeth carrying large fillings, crowns or veneers,
                    </span>{" "}
                    whose unchanging colour would mismatch newly whitened
                    neighbours — a planning conversation, not a
                    disqualification, since restorations can be updated after
                    whitening to match the new shade.
                  </span>
                </li>
              </ul>
              <p>
                None of this is gatekeeping; it is the difference between a
                cosmetic procedure done medically and a chemical applied
                commercially — and it is included in every whitening
                consultation at Meghana Dental.
              </p>
            </div>

            <div>
              <img
                src="/blogimage/jul24(4).JPG"
                alt="Tartar removal before and after professional teeth cleaning at Meghana Dental, Tirupati"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Aftercare */}
            <div>
              <h2 id="aftercare" className="fw-bold mt-5">
                <span className="text-brand">
                  After-Care: Keeping the Results of Both
                </span>
              </h2>
              <p>
                After a cleaning, simply resume excellent home care — brushing
                twice daily, flossing, and a return visit every six months
                before tartar can re-establish itself; any mild sensitivity from
                healing gums settles within days. After whitening, follow the
                48-hour &quot;white diet&quot; we prescribe — avoiding strongly
                coloured foods and drinks (tea, coffee, cola, turmeric-heavy
                curries, beetroot, red wine) and tobacco entirely while the
                enamel pores reseal — then protect your investment long-term by
                drinking staining beverages in fewer, shorter sittings (a straw
                helps), rinsing with water afterwards, maintaining the
                six-monthly cleanings that remove new surface stains before they
                accumulate, and using the touch-up trays where provided.
                Patients who follow this simple regimen routinely keep their
                whitening results bright for two to three years.
              </p>
            </div>

            {/* Why Meghana Dental */}
            <div>
              <h2 id="why-meghana-dental" className="fw-bold mt-5">
                <span className="text-brand">
                  Why Meghana Dental for Cleaning and Whitening in Tirupati
                </span>
              </h2>
              <p>
                Routine procedures reveal a clinic&apos;s standards more
                honestly than glamorous ones. At Meghana Multispeciality Dental
                Hospital, even a simple cleaning happens inside an
                NABH-certified environment — instruments sterilised to
                nationally audited hospital standards between every single
                patient, a non-negotiable that matters enormously for any
                procedure touching the gumline. Your cleaning and whitening are
                performed by qualified professionals under specialist
                supervision, with an honest pre-assessment that tells you which
                procedure you actually need rather than which one bills higher;
                our laser-equipped whitening delivers same-day, evenly
                controlled results with full gum protection and a managed
                sensitivity protocol; and behind the routine visit stands the
                full multispeciality safety net — if your examination reveals
                early gum disease, a hidden cavity or anything else, the right
                specialist is in the same building. Add 17+ years of trust,
                50,000+ patients, a 4.9-star rating from 850+ Google reviews,
                transparent pricing, Sunday-morning hours and empanelment with
                11+ government organisations, and the choice for your
                family&apos;s six-monthly visits — and your pre-wedding
                brightening — becomes simple. Book your cleaning, your
                whitening, or the honest examination that tells you which, at
                Meghana Dental today.
              </p>
            </div>

            {/* FAQs */}
            <div>
              <h2 id="faqs" className="fw-bold mt-5">
                <span className="text-brand">
                  Frequently Asked Questions: Teeth Cleaning vs Teeth Whitening
                </span>
              </h2>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  What is the main difference between teeth cleaning and teeth
                  whitening?
                </span>
              </p>
              <p>
                Cleaning is a health procedure that removes plaque, tartar and
                surface stains to protect gums and teeth; whitening is a
                cosmetic procedure that bleaches the natural enamel shade
                lighter. Cleaning restores your natural colour; whitening
                lightens it.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Does teeth cleaning whiten your teeth?
                </span>
              </p>
              <p>
                Cleaning often makes teeth look noticeably brighter by removing
                yellow-brown tartar and surface stains — but it cannot lighten
                the enamel beyond its natural shade. Only whitening does that.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Does scaling damage enamel or loosen teeth?
                </span>
              </p>
              <p>
                No. This is a myth. Scaling removes deposits sitting on the
                tooth; enamel is unharmed. Teeth that feel loose after cleaning
                were already loosened by gum disease that the tartar was hiding
                — and cleaning is the first step in treating it.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  How much does teeth whitening cost in Tirupati?
                </span>
              </p>
              <p>
                In-office laser whitening typically costs ₹8,000–₹15,000.
                Professional cleaning typically costs ₹1,000–₹2,000 per session.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  How often should I get my teeth professionally cleaned?
                </span>
              </p>
              <p>
                Every six months for most adults — the interval before new
                tartar establishes itself. Patients with gum disease history may
                need more frequent recalls, advised individually.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  How long do whitening results last?
                </span>
              </p>
              <p>
                Typically one to three years, depending on tea, coffee and
                tobacco habits and on maintaining six-monthly cleanings.
                Touch-up options extend results further.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Is whitening safe? Does it cause permanent sensitivity?
                </span>
              </p>
              <p>
                Professionally performed whitening is safe for enamel. Mild
                sensitivity for a day or two is common and managed with our
                desensitising protocol; permanent damage is associated with
                unsupervised, abrasive or acidic home methods — not with
                professional treatment.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Can whitening fix fluorosis marks or discoloured crowns?
                </span>
              </p>
              <p>
                Not reliably. Fluorosis mottling, greyish discolouration and the
                fixed colour of crowns, fillings and veneers need different
                tools — microabrasion, veneers or a planned smile makeover, all
                available at Meghana Dental.
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
                Book Your Cleaning, Whitening — or the Honest Check-Up That
                Tells You Which
              </h3>
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
                  Cleaning &amp; Whitening
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
                    MD
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "var(--text-primary)",
                      }}
                    >
                      MDS Specialist Team
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

export default Jul24;
