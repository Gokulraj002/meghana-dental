import React from "react";
import Link from "next/link";
import blogsMeta from "@/data/blogs-meta.json";

// Table of contents — section IDs match the h2 anchors below
const TOC = [
  { id: "what-are-wisdom-teeth", label: "What Are Wisdom Teeth?" },
  { id: "when-removal-needed", label: "When Does It Need Removal?" },
  { id: "cost-of-ignoring", label: "The Cost of Ignoring It" },
  { id: "extraction-procedure", label: "The Extraction Procedure" },
  { id: "recovery-timeline", label: "Does It Hurt? Recovery Timeline" },
  { id: "eating-and-care", label: "Eating, Care & the Don'ts" },
  { id: "dry-socket", label: "Dry Socket — Avoiding It" },
  { id: "upper-vs-lower", label: "Upper vs Lower Wisdom Teeth" },
  { id: "planning-extraction", label: "Planning Around Work & College" },
  { id: "preparing-checklist", label: "Preparing for Extraction Day" },
  { id: "why-meghana-dental", label: "Why Meghana Dental?" },
  { id: "faqs", label: "Frequently Asked Questions" },
];

const CURRENT_SLUG = "wisdom-tooth-extraction-tirupati";
const ARTICLE_URL = "https://meghanadental.in/blogs/" + CURRENT_SLUG;
const ARTICLE_TITLE =
  "Wisdom Tooth Extraction in Tirupati: The Complete, Honest Guide to Pain, Procedure and Recovery";

const Jul25 = () => {
  return (
    <>
      <div className="container py-4">
        {/* H1 */}
        <h1 className="text-brand py-4">
          Wisdom Tooth Extraction in Tirupati: Pain, Procedure and Recovery —
          The Complete Guide
        </h1>

        {/* Date + read time */}
        {/* <div className="mb-4" style={{ color: "#6B7280", fontSize: "0.9rem" }}>
          July 25, 2026 &nbsp;•&nbsp; 14 min read
        </div> */}

        <div className="row g-5">
          {/* ─────── LEFT — Article Content ─────── */}
          <div
            className="col-lg-8 blog-article-body"
            style={{ fontSize: "14px", lineHeight: 1.7 }}
          >
            {/* Introduction */}
            <p>
              It usually begins quietly — a dull ache at the very back of the
              jaw, a gum flap that swells every few weeks, food that keeps
              wedging itself behind the last tooth, or a stiff jaw on waking.
              Then comes the night it stops being quiet: throbbing pain
              radiating to the ear, a swollen cheek, difficulty opening the
              mouth, and a frantic search for &quot;wisdom tooth pain
              relief&quot; at 2 AM. If any of this sounds familiar, you are in
              the company of millions — wisdom teeth, the third molars that
              arrive between roughly ages 17 and 25, are the most commonly
              extracted teeth in dentistry, and the reasons are written into
              human evolution itself. This complete guide from Meghana
              Multispeciality Dental Hospital — Tirupati&apos;s NABH-certified
              super speciality dental centre with 17+ years of excellence,
              50,000+ patients and a 4.9-star Google rating from 850+ reviews —
              explains honestly when wisdom teeth genuinely need removal (and
              when they don&apos;t), what the procedure actually feels like,
              the day-by-day recovery, how to avoid the dreaded dry socket,
              and how to prepare so the whole experience goes as smoothly for
              you as it does for our patients every week.
            </p>
            <p>
              One reassurance before everything else, because fear is the
              reason most people delay until the 2 AM emergency:{" "}
              <span style={{ fontWeight: 700 }}>
                performed by qualified specialists under proper anaesthesia,
                wisdom tooth extraction is a routine, controlled, painless
                procedure
              </span>{" "}
              — including surgical removal of fully impacted teeth. The
              horror stories you have heard almost invariably trace to delayed
              treatment of raging infections, unqualified hands, or poor
              aftercare. At Meghana Dental, surgical extractions are performed
              by specialist oral surgeons inside an NABH-audited sterile
              environment, planned on proper imaging, with the city&apos;s
              most advanced supporting technology — and our patients&apos;
              most common post-procedure remark is the familiar refrain:
              &quot;that was nothing like I feared.&quot;
            </p>

            <div>
              <img
                src="/blogimage/jul25(4).jpg"
                alt="Anatomical illustration of impacted wisdom teeth in the jaw at Meghana Dental, Tirupati"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* What Are Wisdom Teeth */}
            <div>
              <h2 id="what-are-wisdom-teeth" className="fw-bold mt-5">
                <span className="text-brand">
                  What Are Wisdom Teeth — and Why Do They Cause So Much
                  Trouble?
                </span>
              </h2>
              <p>
                Wisdom teeth are the third and final set of molars, erupting
                at the very back of each quadrant — upper left, upper right,
                lower left, lower right — typically between ages 17 and 25,
                the age of &quot;wisdom&quot; that gives them their name. Our
                distant ancestors, chewing coarse, unprocessed diets with
                larger jaws, used all twelve molars; modern humans, with
                softer diets and progressively smaller jaws, frequently no
                longer have room for the last four. The result is a collision
                between an erupting tooth and a jaw with no vacancy — and that
                collision is where nearly all wisdom tooth misery begins.
              </p>
              <p>
                When a wisdom tooth cannot erupt fully into a normal upright
                position, it is called{" "}
                <span style={{ fontWeight: 700 }}>impacted</span>: it may grow
                tilted forward into the neighbouring molar (mesial impaction —
                the most common), lie completely horizontal like a sleeping
                passenger, remain trapped vertically beneath the gum and bone,
                or angle backward (distal impaction). Many erupt only
                partway, leaving a flap of gum draped over part of the crown —
                a perfect food-and-bacteria trap that no toothbrush can clean.
              </p>
              <p>
                Importantly, some wisdom teeth cause no trouble at all. A
                wisdom tooth that has erupted fully upright, meets its
                opposing tooth, and can be cleaned properly is simply a molar
                doing honest work — and the honest clinical position, which we
                hold at Meghana Dental, is that such teeth do not need
                removal. The trouble belongs to the impacted and partially
                erupted majority, and it comes in well-documented forms
                described next.
              </p>
            </div>

            {/* When Removal Needed */}
            <div>
              <h2 id="when-removal-needed" className="fw-bold mt-5">
                <span className="text-brand">
                  When Does a Wisdom Tooth Genuinely Need Removal? The Honest
                  Indications
                </span>
              </h2>
              <p>
                Extraction is recommended when a wisdom tooth is causing
                damage or is reliably destined to. The classic indications our
                specialists see daily include:
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-triangle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Pericoronitis</span> —
                    recurrent painful infection of the gum flap over a
                    partially erupted tooth, the single most common wisdom
                    tooth emergency, announcing itself with swelling, bad
                    taste, difficulty opening the mouth and pain on biting.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-triangle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Decay</span> in the
                    wisdom tooth or — far worse — in the back surface of the
                    precious second molar beside it, because the tight,
                    tilted contact between an impacted wisdom tooth and its
                    neighbour creates an uncleanable trap where cavities
                    flourish silently until both teeth are in trouble.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-triangle-fill text-brand me-3"></i>
                  <span>
                    Repeated{" "}
                    <span style={{ fontWeight: 700 }}>
                      food impaction and gum inflammation
                    </span>{" "}
                    around the tooth despite your best cleaning efforts.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-triangle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Pressure damage to the neighbouring molar&apos;s root,
                    </span>{" "}
                    visible on X-rays as resorption.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-triangle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Cysts and other pathology
                    </span>{" "}
                    — an impacted tooth retains its developmental sac, which
                    can occasionally expand into a cyst that hollows out
                    jawbone painlessly for years before discovery.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-triangle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Orthodontic reasons,
                    </span>{" "}
                    where your orthodontist requires the space or seeks to
                    protect a finished alignment.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-exclamation-triangle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Unrestorable damage
                    </span>{" "}
                    to the wisdom tooth itself.
                  </span>
                </li>
              </ul>
              <p>
                Notice what is not on the list: &quot;all wisdom teeth,
                automatically.&quot; At your consultation, our specialist
                examines the tooth, reviews proper imaging, and tells you
                plainly into which category yours falls — removal now,
                monitoring with periodic review, or leave well alone.
              </p>
            </div>

            {/* Cost of Ignoring */}
            <div>
              <h2 id="cost-of-ignoring" className="fw-bold mt-5">
                <span className="text-brand">
                  The Cost of Ignoring an Impacted Wisdom Tooth
                </span>
              </h2>
              <p>
                Because wisdom tooth pain characteristically comes in episodes
                — flaring for a week, then subsiding — the most common patient
                strategy is to outlast each episode with painkillers and warm
                salt water, and hope. Our specialists owe you the honest
                arithmetic of that strategy. Each pericoronitis episode tends
                to return stronger, and an unchecked infection at the back of
                the lower jaw can spread into the facial spaces — a genuine
                medical emergency involving facial swelling, fever and
                difficulty swallowing that converts a routine outpatient
                extraction into hospital-level management. Meanwhile, the
                silent processes continue between episodes: decay tunnelling
                into the second molar (frequently ending in that innocent
                neighbour needing a root canal and crown, or extraction — a
                far greater loss than the wisdom tooth itself), bone-destroying
                cysts enlarging painlessly, and gum pockets deepening. And
                there is a timing truth worth knowing: extractions are
                technically easier, and recovery faster, in the late teens and
                twenties — before roots fully mature and bone densifies. The
                kindest thing this article can do is say it straight: an
                impacted wisdom tooth that has announced itself with even one
                infection episode has told you its plans. Schedule the
                consultation before it schedules the emergency.
              </p>
            </div>

            {/* The Extraction Procedure */}
            <div>
              <h2 id="extraction-procedure" className="fw-bold mt-5">
                <span className="text-brand">
                  The Extraction Procedure at Meghana Dental — Step by Step
                </span>
              </h2>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-display text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Assessment and imaging first.
                    </span>{" "}
                    Every extraction begins with clinical examination and an
                    X-ray; for lower wisdom teeth lying near the inferior
                    alveolar nerve (the nerve supplying sensation to the lip
                    and chin), a 3D CBCT scan precisely maps the relationship
                    between roots and nerve — planning that converts a risky
                    guess into a controlled, safe procedure and is a standard
                    of care we insist upon in complex cases.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-eyedropper text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Profound anaesthesia.
                    </span>{" "}
                    The area is completely numbed with local anaesthesia using
                    the same gentle, pre-numbing technique our patients praise
                    across all procedures. You remain awake and comfortable;
                    you will feel pressure and movement during the extraction,
                    but no pain. For exceptionally anxious patients, additional
                    comfort options can be discussed at consultation.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-scissors text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Simple extraction
                    </span>{" "}
                    — for erupted, accessible wisdom teeth — involves gently
                    loosening and lifting the tooth, typically within minutes.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-hospital text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Surgical extraction
                    </span>{" "}
                    — for impacted teeth — involves a small gum incision,
                    careful removal of a layer of overlying bone where needed,
                    frequently sectioning the tooth into pieces so each can be
                    lifted out through a minimal opening (far gentler than
                    forcing a whole tooth through bone), thorough cleaning of
                    the socket, and a few dissolving sutures. A routine
                    surgical extraction takes roughly 30 to 45 minutes.
                  </span>
                </li>
              </ul>
              <p>
                Where beneficial, our{" "}
                <Link href="/services/laser-dentistry" style={{ fontWeight: 600 }}>
                  Laser Dentistry
                </Link>{" "}
                unit assists soft-tissue management, reducing bleeding and
                post-operative swelling, and our specialists&apos; minimally
                invasive technique — small openings, sectioned teeth, gentle
                handling — is precisely what separates a smooth three-day
                recovery from the swollen week of legend. You walk out the
                same day with gauze, written instructions, prescriptions, and
                our team a phone call away — the complete picture of our{" "}
                <Link href="/services/tooth-extraction" style={{ fontWeight: 600 }}>
                  Tooth Extraction
                </Link>{" "}
                service.
              </p>
            </div>

            <div>
              <img
                src="/blogimage/jul25(3).JPG"
                alt="Panoramic dental X-ray showing impacted wisdom teeth at Meghana Dental, Tirupati"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Recovery Timeline */}
            <div>
              <h2 id="recovery-timeline" className="fw-bold mt-5">
                <span className="text-brand">
                  Does It Hurt? The Honest Day-by-Day Recovery Timeline
                </span>
              </h2>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-slash-circle text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      During the procedure:
                    </span>{" "}
                    no pain — pressure and pushing sensations, yes; pain, no.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-hourglass-split text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      The first evening:
                    </span>{" "}
                    as anaesthesia fades over two to four hours, expect a dull
                    ache, managed comfortably by taking the first prescribed
                    dose before the numbness fully lifts; keep gentle pressure
                    on the gauze as instructed and rest.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-calendar-day text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Days 1–3:</span> the
                    peak. Swelling of the cheek rises through day two to three
                    — this is normal healing, not a complication — alongside
                    soreness on opening the mouth and possible minor bruising;
                    cold compresses in the first 24 hours, the medication
                    schedule, soft cool foods and sleeping with the head
                    slightly elevated keep this phase entirely manageable, and
                    most patients return to desk work by the next day.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-calendar-week text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Days 4–7:</span> the
                    descent. Swelling recedes visibly each day, mouth opening
                    eases, and most patients are off painkillers.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-calendar-check text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Week 2:</span> the gum
                    has substantially closed and normal eating resumes; the
                    socket beneath continues filling with new bone quietly
                    over the following weeks.
                  </span>
                </li>
              </ul>
              <p>
                Surgical extractions of deeply impacted teeth sit at the
                longer end of these ranges, simple extractions at the shorter
                — and your specialist tells you your expected timeline before
                you ever sit in the chair. For perspective, patients who have
                experienced both consistently rate wisdom tooth recovery
                alongside or easier than they had feared — the same pattern we
                documented in our honest guide to{" "}
                <Link
                  href="/blogs/dental-implant-pain-what-to-expect"
                  style={{ fontWeight: 600 }}
                >
                  dental implant pain
                </Link>
                .
              </p>
            </div>

            {/* Eating and Care */}
            <div>
              <h2 id="eating-and-care" className="fw-bold mt-5">
                <span className="text-brand">
                  Eating, Care and the Don&apos;ts — Your Recovery Playbook
                </span>
              </h2>
              <p>
                Eat soft, cool and nourishing for the first days: curd rice,
                idli softened in sambar (lukewarm, not hot), khichdi, dal,
                mashed banana, milkshakes by spoon, paneer, well-cooked soft
                vegetables — progressing steadily toward normal food over the
                week, chewing away from the site. Avoid for the first days:
                hot, spicy and crunchy foods, and anything with small seeds or
                grains that can lodge in the socket.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-x-circle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Don&apos;t</span> smoke
                    or use tobacco in any form for at least 72 hours and
                    ideally a week — the single biggest risk factor for dry
                    socket.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-x-circle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Don&apos;t</span> use
                    straws.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-x-circle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Don&apos;t</span> spit
                    forcefully or rinse vigorously in the first 24 hours.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-x-circle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Don&apos;t</span> poke
                    the socket with tongue, finger or toothbrush.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Do</span> rinse gently
                    with warm salt water after meals from day two.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Do</span> brush all
                    other teeth normally.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Do</span> take every
                    medication on schedule, completing any antibiotic course
                    fully.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-check-circle-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>Do</span> rest from
                    heavy exercise for two to three days, and attend your
                    review appointment.
                  </span>
                </li>
              </ul>
            </div>

            {/* Dry Socket */}
            <div>
              <h2 id="dry-socket" className="fw-bold mt-5">
                <span className="text-brand">
                  Dry Socket — What It Is and How We Help You Avoid It
                </span>
              </h2>
              <p>
                The most talked-about complication deserves plain explanation.
                After extraction, the socket fills with a blood clot —
                nature&apos;s bandage, the scaffold over exposed bone on which
                healing builds. If that clot is dislodged or dissolves
                prematurely — classically by smoking, straw suction, forceful
                spitting or vigorous rinsing in the early days — the bone lies
                exposed, and the result is{" "}
                <span style={{ fontWeight: 700 }}>dry socket</span>: a
                distinctive, throbbing pain beginning two to four days after
                an initially comfortable extraction, often radiating to the
                ear, with a bad taste and odour.
              </p>
              <p>
                Two pieces of good news. First, dry socket is largely
                preventable — the don&apos;ts above exist precisely for this,
                and atraumatic surgical technique (small openings, gentle
                handling) further lowers the risk, which is one more quiet
                argument for specialist hands. Second, if it occurs, it is
                straightforwardly treatable: one quick visit for gentle
                cleaning and a medicated dressing brings dramatic relief, with
                the dressing refreshed until healing resumes. The rule for you
                is simple: pain that increases on day two to four instead of
                decreasing is your signal to call us — never to suffer
                through.
              </p>
            </div>

            <div>
              <img
                src="/blogimage/jul25(2).png"
                alt="Clinical view of a wisdom tooth extraction site at Meghana Dental, Tirupati"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Upper vs Lower */}
            <div>
              <h2 id="upper-vs-lower" className="fw-bold mt-5">
                <span className="text-brand">
                  Upper vs Lower Wisdom Teeth — Why the Lower Ones Get All the
                  Fame
                </span>
              </h2>
              <p>
                Patients are often surprised when an upper wisdom tooth comes
                out in minutes while its lower counterpart was scheduled as a
                surgical procedure — the difference is pure anatomy. Upper
                wisdom teeth sit in softer, more forgiving bone, usually erupt
                more cooperatively, and are accessed from a favourable angle;
                their extractions are commonly simple, with the gentlest
                recoveries of any molar removal. Lower wisdom teeth contend
                with dense mandibular bone, a far higher rate of tilted and
                horizontal impaction, and a sensitive neighbour — the inferior
                alveolar nerve canal running beneath their roots. This is why
                lower third molars account for nearly all surgical
                extractions, all CBCT planning, and virtually all the recovery
                stories your friends tell — and why, at Meghana Dental, they
                receive correspondingly serious treatment: specialist hands,
                three-dimensional imaging where the nerve relationship demands
                it, sectioned-tooth minimally invasive technique, and
                unhurried surgical time. If you have one of each on the
                schedule, expect the upper to feel like an anticlimax and plan
                your soft-food days around the lower — and either way, expect
                both to be painless in the chair.
              </p>
            </div>

            {/* Planning Extraction */}
            <div>
              <h2 id="planning-extraction" className="fw-bold mt-5">
                <span className="text-brand">
                  Planning Your Extraction Around Work, College and Exams
                </span>
              </h2>
              <p>
                A practical note our younger patients especially appreciate:
                wisdom tooth removal is one of the most schedulable procedures
                in dentistry, so schedule it intelligently. The ideal slot is
                the start of a light stretch — a Friday or pre-holiday
                appointment gives the swelling peak (days two to three) to the
                weekend, returning most patients to desk work, classes or
                screens by Monday. Students should book during semester breaks
                or well clear of examinations rather than in the week before
                them; working professionals with speaking-heavy roles should
                allow two to three days before major presentations. Avoid
                scheduling immediately before weddings, travel or competitive
                events. And if pain has already arrived, do not wait for the
                perfect calendar slot — an infected wisdom tooth sets its own
                schedule, and our same-day emergency slots exist precisely for
                it.
              </p>
            </div>

            {/* Preparing Checklist */}
            <div>
              <h2 id="preparing-checklist" className="fw-bold mt-5">
                <span className="text-brand">
                  Preparing for Extraction Day — A Simple Checklist
                </span>
              </h2>
              <p>
                A little preparation converts a good procedure into an
                effortless one, so here is the checklist our team walks
                patients through at booking.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-clipboard2-pulse text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Tell us everything medical:
                    </span>{" "}
                    your full list of medications (blood thinners such as
                    aspirin or clopidogrel especially — never stop them
                    yourself; we coordinate with your physician), diabetes
                    status and recent sugar control, blood pressure,
                    allergies, and — for women — any pregnancy; honest
                    disclosure is what lets us tailor the procedure safely
                    around you.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-cup-hot-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Eat a normal meal beforehand:
                    </span>{" "}
                    wisdom tooth removal under local anaesthesia needs no
                    fasting unless we specifically advise it, and a fed
                    patient is a calmer, steadier patient.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-calendar2-check text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Plan a light rest of the day:
                    </span>{" "}
                    keep the evening free, skip the gym, and although most
                    patients drive themselves home comfortably, anxious
                    patients are welcome to bring a companion.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-basket2-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Stock the kitchen before, not after:
                    </span>{" "}
                    curd, idli batter, dal, soups, bananas, paneer and ice
                    cream waiting at home means zero errands on a numb
                    afternoon; add a cold pack (a bag of frozen peas works
                    perfectly) and an extra pillow for elevated sleeping.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-capsule text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Fill the prescriptions on the way home
                    </span>{" "}
                    and set phone reminders for the first doses.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-x-octagon text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Begin the tobacco pause early:
                    </span>{" "}
                    smokers and gutkha users who stop a few days before the
                    procedure heal measurably better after it — and the
                    post-operative abstinence window protects against dry
                    socket.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-file-earmark-text text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Bring your scheme documents
                    </span>{" "}
                    if you are covered under one of our 11+ empanelled
                    organisations — ECHS, TTD, AP Police, APSRTC, BSNL, NTR
                    Vaidya Seva and others — so cashless facilitation can be
                    processed per your scheme&apos;s guidelines.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-chat-square-text-fill text-brand me-3"></i>
                  <span>
                    <span style={{ fontWeight: 700 }}>
                      Bring your questions written down:
                    </span>{" "}
                    an informed patient is a relaxed patient, and our
                    specialists would rather answer ten questions than have
                    you carry one worry into the chair.
                  </span>
                </li>
              </ul>
            </div>

            {/* Why Meghana Dental */}
            <div>
              <h2 id="why-meghana-dental" className="fw-bold mt-5">
                <span className="text-brand">
                  Why Meghana Dental for Wisdom Tooth Removal in Tirupati
                </span>
              </h2>
              <p>
                Wisdom tooth surgery rewards exactly three things: specialist
                skill, proper planning, and sterile discipline — and punishes
                their absence. At Meghana Multispeciality Dental Hospital,
                surgical extractions are performed by qualified oral surgery
                specialists, not attempted by whoever is free; lower third
                molars near the nerve are planned on 3D CBCT imaging so that
                the most feared complication — nerve injury — is engineered
                out by knowledge rather than left to luck; every instrument
                and every procedure operates inside NABH-certified
                sterilisation protocols audited to national hospital
                standards, the strongest possible insurance against
                post-operative infection; laser-assisted technique and
                minimally invasive surgery keep swelling and downtime at the
                merciful end of the range; and behind every extraction stands
                a complete multispeciality team — if your examination reveals
                the neighbouring molar needs attention, the endodontist with
                Tirupati&apos;s only 25&times; operating microscope is in the
                same building. Add transparent written pricing, 17+ years of
                trust, 50,000+ patients, a 4.9-star Google rating,
                Sunday-morning availability for the pain that never checks the
                calendar, and same-day emergency slots for acute swelling —
                and the place to bring your 2 AM toothache, or better, to
                prevent it, is clear. Book your wisdom tooth consultation at
                Meghana Dental today.
              </p>
            </div>

            {/* FAQs */}
            <div>
              <h2 id="faqs" className="fw-bold mt-5">
                <span className="text-brand">
                  Frequently Asked Questions About Wisdom Tooth Extraction
                </span>
              </h2>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  How long does a wisdom tooth extraction take?
                </span>
              </p>
              <p>
                A simple extraction of an erupted wisdom tooth often takes
                only minutes once the area is fully numb; a surgical
                extraction of an impacted tooth typically takes 30 to 45
                minutes. Plan a relaxed hour at the clinic and keep the rest
                of your day light.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Is wisdom tooth extraction painful?
                </span>
              </p>
              <p>
                The procedure itself is painless under local anaesthesia — you
                feel pressure, not pain. Afterwards, expect manageable
                soreness and swelling peaking around days two to three and
                settling within a week, controlled with prescribed medication.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Do all wisdom teeth need to be removed?
                </span>
              </p>
              <p>
                No. Fully erupted, well-positioned, cleanable wisdom teeth can
                stay. Removal is for teeth causing infection, decay, damage to
                neighbours, cysts or orthodontic problems — assessed honestly
                at consultation.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Can all four wisdom teeth be removed at once?
                </span>
              </p>
              <p>
                It is possible and sometimes preferred, but many patients
                choose one side at a time so they can always chew comfortably
                on the other. Your surgeon advises based on your case, health
                and schedule.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  How many days of rest are needed after wisdom tooth surgery?
                </span>
              </p>
              <p>
                Most patients return to desk work or college within a day,
                avoiding heavy physical exertion for about three days. Deeply
                impacted surgical cases may need a day or two more.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  What is dry socket and how do I avoid it?
                </span>
              </p>
              <p>
                Dry socket is exposed bone pain occurring when the healing
                clot is lost — typically from smoking, straws, spitting or
                vigorous rinsing in the first days. Follow the don&apos;ts
                strictly; if pain increases on days two to four, call us for
                the quick, effective treatment.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  Is there a risk of nerve injury with lower wisdom teeth?
                </span>
              </p>
              <p>
                Lower wisdom tooth roots can lie near the jaw nerve, which is
                precisely why complex cases at Meghana Dental are planned on
                3D CBCT imaging — mapping the anatomy in advance keeps this
                rare complication rare.
              </p>

              <p className="mt-3">
                <span style={{ fontWeight: 700 }}>
                  I&apos;m pregnant and have wisdom tooth pain — what should I
                  do?
                </span>
              </p>
              <p>
                Come in for assessment — infection is managed safely, and
                elective extraction is usually timed appropriately around
                pregnancy in coordination with your obstetrician. Never
                self-medicate; tell us about the pregnancy at booking.
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
                Wisdom Tooth Troubling You? Get the Honest Assessment Today
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
                  Tooth Extraction
                </span>
                <span style={{ fontSize: "0.78rem", color: "#9CA3AF" }}>
                  <i className="bi bi-clock me-1"></i>14 min read
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

export default Jul25;
