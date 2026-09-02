import React from "react";
import Link from "next/link";
import blogsMeta from "@/data/blogs-meta.json";

// Table of contents — section IDs match the h2 anchors below
const TOC = [
  { id: "why-specialist", label: "Why a Specialist, Not a Smaller Chair" },
  { id: "first-visit", label: "The First Visit — Why Age One" },
  { id: "milk-teeth-myth", label: "The Milk Teeth Myth" },
  { id: "common-problems", label: "Common Childhood Problems" },
  { id: "emergency-first-aid", label: "Dental Emergency First Aid" },
  { id: "preventive-shield", label: "Fluoride, Sealants & Prevention" },
  { id: "treatments", label: "When Treatment Is Needed" },
  { id: "home-playbook", label: "At-Home Playbook by Age" },
  { id: "what-to-say", label: "What to Say Before a Visit" },
  { id: "why-meghana", label: "Why Families Trust Meghana" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const CURRENT_SLUG = "best-pediatric-dentist-tirupati";
const ARTICLE_URL = "https://meghanadental.in/blogs/" + CURRENT_SLUG;
const ARTICLE_TITLE =
  "Best Pediatric Dentist in Tirupati: The Complete Kids' Dental Care Guide for Parents";

const Aug27 = () => {
  return (
    <>
      <div className="container py-4">
        {/* H1 */}
        <h1 className="text-brand py-4">
          Best Pediatric Dentist in Tirupati: Kids&apos; Dental Care Guide
        </h1>

        {/* Date + read time */}
        {/* <div className="mb-4" style={{ color: "#6B7280", fontSize: "0.9rem" }}>
          August 27, 2026 &nbsp;•&nbsp; 12 min read
        </div> */}

        <div className="row g-5">
          {/* ─────── LEFT — Article Content ─────── */}
          <div
            className="col-lg-8 blog-article-body"
            style={{ fontSize: "14px", lineHeight: 1.7 }}
          >
            {/* Introduction */}
            <p>
              Every parent knows the moment — a small hand tugging at a cheek, a
              child refusing the morning idli, a dark spot glimpsed on a back
              tooth during a laughing fit — and the cascade of questions that
              follows. Is it serious? Do milk teeth even need treatment? Will
              the dentist frighten her? Is he too young for a check-up? If you
              are looking for the{" "}
              <span style={{ fontWeight: 700 }}>
                best pediatric dentist in Tirupati
              </span>{" "}
              for your child, this guide answers all of it — the timing, the
              myths, the common problems, the treatments, the home routines by
              age, and the emergencies where minutes matter. It is written the
              way our pediatric team explains it to parents at Meghana Multi
              Speciality Dental Hospital, an NABH-certified centre with 17+
              years of experience and 50,000+ patients treated.
            </p>
            <p>
              This guide is for the worried parent, not the specialist. The
              kindest thing we can tell you is also the truest: almost
              everything in children&apos;s dental health is preventable, and
              almost everything that goes wrong is fixable — gently and
              comfortably — when it is handled by the right hands at the right
              time.
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
                    A child&apos;s first dental visit should happen by the first
                    birthday, or within six months of the first tooth.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    Milk teeth are not disposable — the last of them work until
                    age 11–12, so decay in them genuinely matters.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    Pediatric dentistry is as much about behaviour and trust as
                    it is about teeth.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    Learn the knocked-out-tooth first aid below — the first
                    30–60 minutes can decide whether a tooth is saved.
                  </span>
                </li>
                <li className="d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    Fluoride and sealants are among the safest, best-proven ways
                    to prevent childhood cavities.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <img
                src="/blogimage/aug27(4).png"
                alt="Best pediatric dentist in Tirupati — kids' dental care at Meghana Multi Speciality Dental Hospital"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Why a Specialist */}
            <div>
              <h2 id="why-specialist" className="fw-bold mt-5">
                <span className="text-brand">
                  Why Children Need a Specialist, Not Just a Smaller Chair
                </span>
              </h2>
              <p>
                Children are not miniature adults, and children&apos;s dentistry
                is not adult dentistry done quickly. A child&apos;s mouth is a
                construction site in motion — twenty milk teeth erupting,
                serving and departing on schedule while thirty-two permanent
                successors form silently beneath — and treating it well means
                knowing that timeline tooth by tooth.
              </p>
              <p>
                Just as importantly, the child&apos;s mind is the real patient
                in the chair. The art of{" "}
                <Link
                  href="/services/pediatric-dentistry"
                  style={{ fontWeight: 600 }}
                >
                  pediatric dentistry
                </Link>{" "}
                is behaviour guidance — turning an anxious five-year-old into a
                curious, cooperative one. Our approach uses the internationally
                practised &quot;tell-show-do&quot; method: every instrument is
                introduced by a friendly name, shown on a finger or toy first,
                then used slowly with praise at each step. Appointments are kept
                short and positive, language is chosen carefully, and first
                visits are deliberately easy wins — a ride in the chair, a count
                of the teeth, a &quot;tooth tickle&quot; cleaning. A child who
                trusts the dentist at five becomes a teenager who reports
                problems early and an adult who never develops the dental phobia
                that keeps so many away from check-ups.
              </p>
            </div>

            {/* First Visit */}
            <div>
              <h2 id="first-visit" className="fw-bold mt-5">
                <span className="text-brand">
                  The First Visit — Why Age One Matters More Than You Think
                </span>
              </h2>
              <p>
                The question parents ask most has an answer that surprises
                almost everyone: your child should first see a dentist by the
                first birthday, or within six months of the first tooth
                appearing, whichever comes first. Not at three, not &quot;when
                all the teeth come,&quot; and not &quot;when something
                hurts.&quot; The{" "}
                <a
                  href="https://www.aapd.org/assets/1/7/DentalHomeNeverTooEarly.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: 600 }}
                >
                  American Academy of Pediatric Dentistry
                </a>
                , along with the ADA and the American Academy of Pediatrics, all
                converge on this rule — because early childhood decay begins
                astonishingly early, and the feeding habits that drive it are
                far easier to correct at one than to repair at three.
              </p>
              <p>
                The visit itself is gentle to the point of being uneventful:
                your baby sits on your lap, knee-to-knee with our specialist,
                for a soft look at the new teeth and gums. You receive practical
                coaching on cleaning, feeding, teething and fluoride, your
                questions get unhurried answers, and your child collects a first
                positive memory of the place. Ten to fifteen minutes, no
                instruments, no drama — and a professional eye on your
                child&apos;s mouth from the beginning of the story rather than
                the middle of a problem.
              </p>
            </div>

            {/* Milk Teeth Myth */}
            <div>
              <h2 id="milk-teeth-myth" className="fw-bold mt-5">
                <span className="text-brand">
                  &quot;They&apos;re Only Milk Teeth&quot; — the Costliest Myth
                  for Parents
                </span>
              </h2>
              <p>
                If this guide changes one belief in Tirupati&apos;s households,
                let it be this one. Milk teeth are not disposable placeholders;
                they are working organs with careers that last more than a
                decade. The second milk molars serve until age eleven or twelve
                — so the &quot;temporary&quot; tooth with the cavity your
                six-year-old has today is scheduled to chew his food for another
                five or six years.
              </p>
              <p>Milk teeth do four jobs that nothing else can:</p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-egg-fried text-brand me-3"></i>
                  <span>Chew the nutrition a growing body is built from.</span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-chat-dots text-brand me-3"></i>
                  <span>
                    Shape clear speech during the very years speech develops.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-bounding-box text-brand me-3"></i>
                  <span>
                    Hold space for the permanent successors — lose a milk molar
                    early and the neighbours drift into the gap, causing much of
                    the crowding later treated with braces (see our guide to the{" "}
                    <Link
                      href="/blogs/best-age-for-braces"
                      style={{ fontWeight: 600 }}
                    >
                      best age for braces
                    </Link>
                    ).
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-shield-check text-brand me-3"></i>
                  <span>
                    Protect the permanent tooth bud sitting millimetres below,
                    which an untreated abscess can damage.
                  </span>
                </li>
              </ul>
              <p>
                Untreated decay is not a self-resolving inconvenience — it is
                pain, sleepless nights, infection, missed school and poor
                eating. The cheerful flip side: treated early, almost every
                milk-tooth problem is small, quick and painless to fix.
              </p>
            </div>

            {/* Common Problems */}
            <div>
              <h2 id="common-problems" className="fw-bold mt-5">
                <span className="text-brand">
                  The Childhood Dental Problems We See Most Often
                </span>
              </h2>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-cup-straw text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Early childhood (bottle) caries.
                    </span>{" "}
                    Decay sweeping across a toddler&apos;s upper front teeth,
                    driven by milk formula or juice pooling around the teeth
                    during sleep. Prevention is simple: nothing but water in a
                    bottle or sippy cup at bedtime, a shift to open-cup drinking
                    around age one, and cleaning teeth and gums after the last
                    feed.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-bug text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Cavities in milk molars.
                    </span>{" "}
                    The deep grooves of children&apos;s back teeth, plus a
                    modern snack-scape of biscuits, chocolates and juices, make
                    milk molars the cavity capital of childhood. Caught early at
                    a six-monthly visit, they are fixed with small, comfortable{" "}
                    <Link
                      href="/services/dental-fillings"
                      style={{ fontWeight: 600 }}
                    >
                      fillings
                    </Link>{" "}
                    in a single short appointment.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-droplet text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Teething troubles.</span>{" "}
                    Drooling, gum-rubbing and chewing on everything are normal
                    companions of erupting teeth; chilled (not frozen) teething
                    rings and gentle gum massage help. High fever, diarrhoea or
                    genuine illness are not teething symptoms and deserve a
                    paediatrician&apos;s attention.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-hand-index-thumb text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Oral habits — thumb sucking, tongue thrusting, mouth
                      breathing.
                    </span>{" "}
                    Comfort habits are normal in infancy; persisting past age
                    four or five, the constant pressure genuinely reshapes the
                    arches and bite. Our approach is staged and shame-free —
                    positive habit-coaching first, a simple reminder appliance
                    if needed, and an orthodontic evaluation only when the bite
                    is already affected. Punishment is never used; it only
                    entrenches the habit.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-moon-stars text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Grinding (bruxism).</span>{" "}
                    Night-time grinding alarms parents but is common and usually
                    outgrown. We monitor tooth wear at routine visits and fit a
                    night guard only in the minority of cases that need it.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-arrows-angle-contract text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Crowding and bite problems.
                    </span>{" "}
                    Permanent teeth that overlap, protrude or bite crosswise
                    deserve a screening around age seven — a quick look through
                    our{" "}
                    <Link
                      href="/services/orthodontics"
                      style={{ fontWeight: 600 }}
                    >
                      Orthodontics
                    </Link>{" "}
                    department that usually ends in reassurance and occasionally
                    catches problems far easier to fix while the jaw is still
                    growing.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <img
                src="/blogimage/aug27(2).jpeg"
                alt="Professional fluoride varnish applied to a child's tooth — pediatric preventive care at Meghana Dental, Tirupati"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Emergency First Aid */}
            <div>
              <h2 id="emergency-first-aid" className="fw-bold mt-5">
                <span className="text-brand">
                  Dental Emergency First Aid Every Parent Should Memorise
                </span>
              </h2>
              <p>
                Children fall — off cycles, on playgrounds, into furniture — and
                front teeth take the hit. What you do in the first minutes can
                decide whether a tooth is saved, so commit this to memory. This
                follows guidance echoed by the{" "}
                <a
                  href="https://www.mayoclinic.org/first-aid/first-aid-tooth-loss/basics/art-20056635"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: 600 }}
                >
                  Mayo Clinic
                </a>{" "}
                and the American Association of Endodontists.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-stopwatch text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      A permanent tooth knocked completely out is a race against
                      the clock.
                    </span>{" "}
                    Find it, hold it by the crown only (never the root), and if
                    dirty, rinse it briefly in milk or saline without scrubbing.
                    If your child is calm and old enough, gently place it
                    straight back into the socket and have them bite on a clean
                    cloth. If that isn&apos;t possible, drop the tooth into a
                    small container of milk — the best widely available storage
                    medium — or have the child hold it inside the cheek, and
                    reach us immediately. Replantation succeeds best within 30
                    to 60 minutes, and the sooner the better. Never let the
                    tooth dry out, and never store it in plain water.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-x-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      A knocked-out milk tooth is never replanted
                    </span>{" "}
                    (it can damage the permanent successor beneath) — but the
                    child should still be seen the same day.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-bandaid text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      A chipped or fractured tooth:
                    </span>{" "}
                    save any fragment in milk and come promptly; modern bonding
                    can often rebuild it invisibly.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      A loosened or pushed-out tooth:
                    </span>{" "}
                    don&apos;t push it back yourself — come straight in.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-thermometer-half text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Facial or gum swelling with fever:
                    </span>{" "}
                    this is an infection on the move and warrants same-day care.
                  </span>
                </li>
              </ul>
              <p>
                Save our numbers in your phone today (
                <a
                  href="tel:08772248330"
                  style={{ color: "var(--primary)", fontWeight: 600 }}
                >
                  08772248330
                </a>{" "}
                /{" "}
                <a
                  href="tel:+917893327036"
                  style={{ color: "var(--primary)", fontWeight: 600 }}
                >
                  7893327036
                </a>
                ); the moment you need them is not the moment to go searching.
              </p>
            </div>

            {/* Preventive Shield */}
            <div>
              <h2 id="preventive-shield" className="fw-bold mt-5">
                <span className="text-brand">
                  Building a Preventive Shield — Fluoride, Sealants and Regular
                  Visits
                </span>
              </h2>
              <p>
                The quiet superpower of pediatric dentistry is placing a shield
                around your child&apos;s teeth before decay gets its chance.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-droplet-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Professional fluoride varnish,
                    </span>{" "}
                    painted on in seconds at routine visits, hardens enamel and
                    can arrest the earliest decay before it becomes a cavity —
                    quick, painless and, as the CDC and ADA both note, among the
                    best-evidenced preventive measures in dentistry.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-shield-check text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Pit-and-fissure sealants
                    </span>{" "}
                    address the other great vulnerability: the deep molar
                    grooves too narrow for any bristle are flowed over with a
                    thin protective resin that seals food and bacteria out — a
                    five-minute, drill-free, injection-free shield, ideally
                    placed soon after the permanent molars erupt (around ages
                    six and twelve) and on vulnerable milk molars too.
                  </span>
                </li>
              </ul>
              <p>
                Around these sits the six-monthly rhythm that ties prevention
                together: small problems caught while still small, a
                professional clean, brushing technique coached at the chair,
                fluoride refreshed, and the child&apos;s friendly relationship
                with the clinic renewed twice a year, every year.
              </p>
            </div>

            {/* When Treatment Is Needed */}
            <div>
              <h2 id="treatments" className="fw-bold mt-5">
                <span className="text-brand">
                  When Treatment Is Needed — Gentle, Modern and Honest
                </span>
              </h2>
              <p>
                Sometimes, despite everything, treatment is needed — and this is
                where a child-centred team earns its keep.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-gem text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Fillings</span> for
                    cavities are small, quick and comfortable, done with
                    tooth-coloured materials and the same tell-show-do patience.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-heart-pulse text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Pulp therapy</span> — the
                    &quot;baby root canal&quot; (pulpectomy or pulpotomy) —
                    rescues a milk tooth whose decay has reached the nerve,
                    preserving it to finish its space-holding career rather than
                    pulling it early.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-award text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Pediatric crowns</span>{" "}
                    cap a heavily broken-down milk molar so it can keep chewing
                    safely until natural retirement.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-box-arrow-right text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Extractions,</span> when a
                    milk tooth truly cannot be saved, are done gently — and
                    followed by a space maintainer, the small unsung appliance
                    that guards the gap so the permanent tooth still arrives in
                    its rightful place. Skipping it is how one lost milk molar
                    becomes a teenager&apos;s crowding problem.
                  </span>
                </li>
              </ul>
              <p>
                Through all of it, our specialists explain each recommendation
                in plain language — what, why, and what happens if we wait —
                because an informed parent is part of the treatment team.
              </p>
            </div>

            {/* At-Home Playbook */}
            <div>
              <h2 id="home-playbook" className="fw-bold mt-5">
                <span className="text-brand">
                  Your At-Home Playbook, Age by Age
                </span>
              </h2>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-1-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Birth to first tooth:
                    </span>{" "}
                    wipe the gums with a clean, damp cloth after feeds —
                    cleaning habits start before teeth do.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-2-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      First tooth to age 3:
                    </span>{" "}
                    brush twice daily with a soft baby brush and a rice-grain
                    smear of fluoride toothpaste; no bottles of milk or juice in
                    bed, ever; first dental visit by the first birthday.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-3-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Ages 3 to 6:</span> a
                    pea-sized amount of fluoride toothpaste, spitting out but
                    not rinsing away the protective foam; the parent brushes or
                    re-brushes, because small hands lack the dexterity however
                    enthusiastic; begin flossing wherever two teeth touch.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-4-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Ages 7 to 12:</span>{" "}
                    supervised independence — children brush alone but parents
                    spot-check technique until at least seven or eight; sealants
                    on the new permanent molars; and a sports mouthguard for
                    every contact game — cricket, kabaddi, football, hockey —
                    because one guard is cheaper than one fractured front tooth.
                  </span>
                </li>
              </ul>
              <p>
                The diet rule that outranks all others, at every age:{" "}
                <span style={{ fontWeight: 700 }}>
                  it is the frequency of sugar, not the quantity, that decays
                  teeth.
                </span>{" "}
                A sweet enjoyed with a meal is a far smaller enemy than the same
                sweet grazed across an afternoon, and sticky biscuits and
                gummies that cling to the grooves are the worst offenders. Water
                as the default drink, fruit over fruit juice, and rinsing with
                water after snacks quietly win the long war.
              </p>
            </div>

            <div>
              <img
                src="/blogimage/aug27(3).jpeg"
                alt="Band-and-loop space maintainer holding the gap after early milk-tooth loss — Meghana Dental, Tirupati"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* What to Say */}
            <div>
              <h2 id="what-to-say" className="fw-bold mt-5">
                <span className="text-brand">
                  What to Say — and Never Say — Before a Visit
                </span>
              </h2>
              <p>
                How a visit is framed at home decides half its outcome. The
                phrases to avoid:
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-x-circle-fill text-brand me-3"></i>
                  <span>&quot;It won&apos;t hurt.&quot;</span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-x-circle-fill text-brand me-3"></i>
                  <span>&quot;Be brave.&quot;</span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-x-circle-fill text-brand me-3"></i>
                  <span>
                    &quot;They won&apos;t give you an injection.&quot;
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-x-circle-fill text-brand me-3"></i>
                  <span>
                    The classic &quot;if you don&apos;t brush, the dentist will
                    pull your teeth out&quot; — using the dentist as a threat
                    poisons the relationship we work to build.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-x-circle-fill text-brand me-3"></i>
                  <span>
                    Your own dental horror stories within small ears&apos; range
                    — children inherit dental fear at the dinner table far more
                    often than in the chair.
                  </span>
                </li>
              </ul>
              <p>What to do instead:</p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    Keep it light: &quot;the tooth doctor is going to count your
                    teeth and make them shiny.&quot;
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    Read a cheerful dentist-visit storybook the night before.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    Book the appointment for your child&apos;s best time of day
                    (rested and fed, not nap hour), and let our team lead in the
                    room.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    Afterwards, praise the child for the visit itself — not for
                    &quot;not crying,&quot; which frames crying as the expected
                    event — but for being a great helper who showed the doctor
                    all their teeth.
                  </span>
                </li>
              </ul>
            </div>

            {/* Why Meghana */}
            <div>
              <h2 id="why-meghana" className="fw-bold mt-5">
                <span className="text-brand">
                  Why Tirupati Families Trust Meghana Dental with Their Children
                </span>
              </h2>
              <p>
                Choosing your child&apos;s dentist is choosing the person who
                will shape their lifelong attitude toward dental care. At
                Meghana Multi Speciality Dental Hospital, children are treated
                by specialists trained in pediatric care, inside a kid-friendly
                environment built for small patients and nervous parents alike.
                Every recommendation is explained honestly, with prevention
                always preferred over intervention, and the complete
                multispeciality roof means your child&apos;s journey — from the
                first lap-visit, through sealants and fillings, to teenage
                braces with our MDS Orthodontist — happens in one trusted place
                with one continuous record, never bounced between clinics.
              </p>
              <p>
                Around the children&apos;s chair stands everything else the
                hospital is known for: NABH-certified sterilisation audited to
                national hospital standards, 17+ years of trust, 50,000+
                patients, a 4.9-star Google rating from 850+ reviews,
                Sunday-morning hours that respect school schedules, and same-day
                attention for the playground emergencies that never consult a
                calendar.
              </p>
            </div>

            {/* FAQs */}
            <div>
              <h2 id="faqs" className="fw-bold mt-5">
                <span className="text-brand">Frequently Asked Questions</span>
              </h2>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  At what age should my child first visit the dentist?
                </span>
              </p>
              <p>
                By the first birthday, or within six months of the first tooth —
                whichever comes first. The visit is a gentle lap examination
                plus parent coaching, and it builds the friendly familiarity
                that makes every later visit easier for your child.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Do cavities in milk teeth really need treatment?
                </span>
              </p>
              <p>
                Yes. Milk molars serve until age eleven or twelve, so untreated
                decay means pain, infection, poor eating and risk to the
                permanent tooth developing beneath. Caught early, milk-tooth
                cavities are quick, small and comfortable to fix.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  My child is terrified of dentists — what can be done?
                </span>
              </p>
              <p>
                Exactly what pediatric dentistry exists for: tell-show-do
                behaviour guidance, short positive visits, careful language and
                easy first wins. Most fearful children are cooperating happily
                within a visit or two, and parents help by following the
                do&apos;s and don&apos;ts above.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  What should I do if my child knocks out a permanent tooth?
                </span>
              </p>
              <p>
                Hold it by the crown only, rinse briefly in milk if dirty,
                replant it in the socket if possible, or store it in milk and
                reach us as fast as you can — ideally within 30 to 60 minutes.
                Knocked-out milk teeth are never replanted but should still be
                seen the same day.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Are fluoride and sealants safe for children?
                </span>
              </p>
              <p>
                Yes. Professional fluoride varnish and pit-and-fissure sealants
                are among the safest, best-proven preventive measures in
                dentistry, applied in minutes without drilling or injections,
                and they dramatically reduce childhood cavities.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  When should thumb sucking stop?
                </span>
              </p>
              <p>
                It is normal in infancy and toddlerhood. Persisting past age
                four or five, it begins reshaping the bite and deserves staged,
                shame-free help — habit coaching first, and a simple appliance
                only if needed.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  When does my child need to see an orthodontist?
                </span>
              </p>
              <p>
                A screening around age seven suits most children — the majority
                get reassurance, and the few with developing jaw or space
                problems get them corrected at the easiest possible stage. Our
                best-age-for-braces guide covers this in detail.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  How can I make brushing actually happen at home?
                </span>
              </p>
              <p>
                Brush together (children copy parents better than they obey
                them), use a two-minute song or timer, let the child choose the
                brush, and supervise until age seven or eight. Children often
                honour instructions from the &quot;tooth doctor&quot; with
                surprising loyalty.
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
              Children&apos;s dental treatment at Meghana Dental is carried out
              by the hospital&apos;s pediatric dental specialist team.
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
                Give Your Child a Lifetime of Fear-Free Smiles
              </h3>
              <p className="mb-4">
                Book your child&apos;s visit at Meghana Multi Speciality Dental
                Hospital, Tirupati — and watch them leave asking when they can
                come back.
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
                  Pediatric Dentistry
                </span>
                <span style={{ fontSize: "0.78rem", color: "#9CA3AF" }}>
                  <i className="bi bi-clock me-1"></i>12 min read
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

export default Aug27;
