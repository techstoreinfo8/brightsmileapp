
import { useState } from "react";
import {
  Menu,
  X,
  Smile,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  HeartPulse,
  CalendarDays,
} from "lucide-react";
import "./App.css";

const DEMO_PHONE = "917996602273"; // Replace with an authorized WhatsApp number

const services = [
  {
    icon: <Sparkles />,
    title: "Teeth Whitening",
    description: "A brighter-looking smile with a personalized whitening consultation.",
  },
  {
    icon: <ShieldCheck />,
    title: "Dental Checkups",
    description: "Routine examinations and preventive dental care for healthy smiles.",
  },
  {
    icon: <HeartPulse />,
    title: "Root Canal Care",
    description: "Information and consultation for treating damaged or infected teeth.",
  },
  {
    icon: <Stethoscope />,
    title: "Braces & Alignment",
    description: "Explore treatment options for a more comfortable, confident smile.",
  },
];

const dentists = [
  {
    name: "Dr. Ananya Rao",
    specialty: "General Dentistry",
    initials: "AR",
  },
  {
    name: "Dr. Kiran Mehta",
    specialty: "Cosmetic Dentistry",
    initials: "KM",
  },
  {
    name: "Dr. Priya Nair",
    specialty: "Preventive Dental Care",
    initials: "PN",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "General Checkup",
  });

  const openWhatsApp = (message) => {
    const url = `https://wa.me/${DEMO_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    openWhatsApp(
      `Hello SuvexaVUSM Dental Care! This is a demo enquiry.\nName: ${form.name}\nPhone: ${form.phone}\nInterested in: ${form.service}`
    );
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-wrapper">
      <div className="demo-notice">
        SuvexaVUSM WEBSITE — All clinic and dentist details are fictional.
      </div>

      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-icon"><Smile size={27} /></span>
          <span>
            <strong>SuvexaVUSM</strong>
            <small>Dental Care · Demo Clinic</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#dentists" onClick={closeMenu}>Our Team</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a
            className="nav-cta"
            href="#appointment"
            onClick={closeMenu}
          >
            Book a Consultation <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              <Sparkles size={15} /> YOUR SMILE, OUR PRIORITY
            </span>

            <h1>
              A healthier smile.
              <br />
              <span>A happier you.</span>
            </h1>

            <p>
              Discover a welcoming dental experience designed around your
              comfort, confidence, and long-term oral health.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#appointment">
                Enquire Now <ArrowRight size={18} />
              </a>
              <a className="button button-secondary" href="#services">
                Explore Services
              </a>
            </div>

            <div className="hero-points">
              <span><ShieldCheck size={17} /> Patient-focused care</span>
              <span><HeartPulse size={17} /> Healthy smiles</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-circle">
              <div className="tooth-illustration">
                <Smile size={116} strokeWidth={1.2} />
              </div>
              <div className="floating-card">
                <span className="floating-icon"><HeartPulse /></span>
                <span>
                  <strong>Your smile matters</strong>
                  <small>Personalized care, every day</small>
                </span>
              </div>
              <div className="floating-dot dot-one" />
              <div className="floating-dot dot-two" />
            </div>
            <span className="visual-caption">A brighter smile starts here</span>
          </div>
        </section>

        <section className="trust-strip">
          <div><ShieldCheck /><span><strong>Preventive Care</strong><small>Support your oral health</small></span></div>
          <div><HeartPulse /><span><strong>Patient Comfort</strong><small>A welcoming experience</small></span></div>
          <div><CalendarDays /><span><strong>Easy Enquiries</strong><small>Contact us on WhatsApp</small></span></div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE OFFER</span>
            <h2>Care for every smile</h2>
            <p>Explore example services featured in this fictional clinic website.</p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a
                  href="#appointment"
                  onClick={() =>
                    setForm((previous) => ({
                      ...previous,
                      service: service.title,
                    }))
                  }
                >
                  Ask about service <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="team-section" id="dentists">
          <div className="section">
            <div className="section-heading">
              <span className="eyebrow">MEET THE TEAM</span>
              <h2>Friendly faces, caring approach</h2>
              <p>
                These sample profiles are fictional placeholders for this
                portfolio demo, not real practitioners.
              </p>
            </div>

            <div className="team-grid">
              {dentists.map((dentist) => (
                <article className="dentist-card" key={dentist.name}>
                  <div className="dentist-avatar">{dentist.initials}</div>
                  <span className="demo-tag">DEMO PROFILE</span>
                  <h3>{dentist.name}</h3>
                  <p>{dentist.specialty}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="appointment-section" id="appointment">
          <div className="appointment-copy">
            <span className="eyebrow">LET'S TALK ABOUT YOUR SMILE</span>
            <h2>Have a question? We're here to help.</h2>
            <p>
              Send a sample enquiry through WhatsApp. This demo does not save
              form submissions to a database.
            </p>
            <div className="contact-detail">
              <Phone size={19} />
              <span><strong>WhatsApp enquiries</strong><small>Quick and convenient contact</small></span>
            </div>
            <div className="contact-detail">
              <MapPin size={19} />
              <span><strong>HSR Layout, Bengaluru</strong><small>Example location for demo purposes</small>
            <small><a
  href="https://www.google.com/maps/search/?api=1&query=HSR+Layout+Bengaluru"
  target="_blank"
  rel="noreferrer"
>
  View on Google Maps ↗
</a>
</small>
</span>
            </div>
            <div className="contact-detail">
              <Clock size={19} />
              <span><strong>Clinic hours</strong><small>Example hours: Mon–Sat, 9 AM–6 PM</small></span>
            </div>
          </div>

          <form className="appointment-form" onSubmit={handleSubmit}>
            <h3>Send an enquiry</h3>
            <p>Complete the details to open a WhatsApp message.</p>

            <label htmlFor="name">Your name</label>
            <input
              id="name"
              required
              value={form.name}
              placeholder="Enter your name"
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
            />

            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              required
              type="tel"
              value={form.phone}
              placeholder="Enter your phone number"
              onChange={(event) =>
                setForm({ ...form, phone: event.target.value })
              }
            />

            <label htmlFor="service">Service of interest</label>
            <select
              id="service"
              value={form.service}
              onChange={(event) =>
                setForm({ ...form, service: event.target.value })
              }
            >
              <option>General Checkup</option>
              {services.map((service) => (
                <option key={service.title}>{service.title}</option>
              ))}
            </select>

            <button className="button button-primary form-button" type="submit">
              Continue on WhatsApp <ArrowRight size={18} />
            </button>
            <small className="form-note">
              Demo only. Use an authorized WhatsApp number before presenting
              this site to a real clinic.
            </small>
          </form>
        </section>
      </main>

      <footer className="footer" id="contact">
        <a className="brand footer-brand" href="#home">
          <span className="brand-icon"><Smile size={25} /></span>
          <span><strong>BrightSmile</strong><small>Dental Care · Demo Clinic</small></span>
        </a>
        <p>Fictional clinic website concept created by Suvexa VUSM Technologies.</p>
        <a href="https://suvexavusm.com" target="_blank" rel="noreferrer">
          Built as a portfolio demo
        </a>
        <small>© {new Date().getFullYear()} BrightSmile Demo. All details are fictional.</small>
      </footer>
    </div>
  );
}

export default App;
