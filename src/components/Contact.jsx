import { useState } from "react";
import emailjs from "@emailjs/browser";
import { BRAND, IMAGES } from "../data.js";

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  type: "Full home",
};

const BENEFITS = [
  {
    icon: "chat",
    title: "Free Consultation",
    text: "Talk to our design team",
  },
  {
    icon: "design",
    title: "Personalised Ideas",
    text: "Design around your lifestyle",
  },
  {
    icon: "price",
    title: "Transparent Pricing",
    text: "Clear scope and costing",
  },
  {
    icon: "support",
    title: "End-to-End Support",
    text: "From design to handover",
  },
];

function Icon({ type }) {
  if (type === "chat") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 11.5a7.5 7.5 0 0 1-8 7.45 8.4 8.4 0 0 1-3.2-.62L4 20l1.7-3.5A7.35 7.35 0 0 1 4.5 12 7.5 7.5 0 0 1 12 4.5a7.5 7.5 0 0 1 8 7Z" />
        <path d="M8 12h.01M12 12h.01M16 12h.01" />
      </svg>
    );
  }

  if (type === "design") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="M4 7.5 12 12l8-4.5M12 12v9" />
      </svg>
    );
  }

  if (type === "price") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v18" />
        <path d="M16 7.5c-.8-1-2.1-1.5-4-1.5-2.2 0-3.5 1-3.5 2.5 0 4 7.5 1.5 7.5 5 0 1.5-1.4 2.5-3.8 2.5-1.9 0-3.2-.6-4.2-1.7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s7-3.8 7-10V5l-7-2-7 2v6c0 6.2 7 10 7 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name || !form.phone || !form.email) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        project_type: form.type,
        reply_to: form.email,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact contact--premium">
      {/* Animated background image */}
      <img
        src={IMAGES.cta}
        alt=""
        className="contact__bg"
      />

      <div className="contact__overlay" />

      {/* Decorative animated circles */}
      <div className="contact__orb contact__orb--one" />
      <div className="contact__orb contact__orb--two" />

      <div className="container contact__inner">

        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <div className="contact__text">

          <div className="contact__kicker-wrap">
            <span className="contact__line" />
            <p className="contact__kicker">
              Start your free consultation
            </p>
          </div>

          <h2 className="contact__title">
            Total care.
            <br />
            Totally{" "}
            <span>different.</span>
          </h2>

          <p className="contact__lead">
            Share a few details and our designer will get in
            touch with you to understand your space, ideas
            and requirements.
          </p>


          {/* Benefits */}

          <div className="contact__benefits">

            {BENEFITS.map((benefit, index) => (
              <div
                className="contact__benefit"
                key={benefit.title}
                style={{
                  "--delay": `${index * 100}ms`,
                }}
              >
                <div className="contact__benefit-icon">
                  <Icon type={benefit.icon} />
                </div>

                <div>
                  <strong>{benefit.title}</strong>
                  <small>{benefit.text}</small>
                </div>
              </div>
            ))}

          </div>


          {/* Contact information */}

          <div className="contact__info">

            <a href={`tel:${BRAND.phone}`}>
              <span className="contact__info-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M5 4h3l2 5-2 1.5c1 2.2 2.3 3.5 4.5 4.5L14 13l5 2v3c0 1-1 2-3 2C9.4 20 4 14.6 4 8c0-2 0-4 1-4Z" />
                </svg>
              </span>

              <span>{BRAND.phone}</span>
            </a>


            <a href={`mailto:${BRAND.email}`}>
              <span className="contact__info-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </span>

              <span>{BRAND.email}</span>
            </a>


            <div>
              <span className="contact__info-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
                  <circle cx="12" cy="9" r="2.2" />
                </svg>
              </span>

              <span>{BRAND.city}</span>
            </div>

          </div>

        </div>


        {/* =====================================================
            RIGHT FORM
        ====================================================== */}

        <div className="contact__card contact__card--premium">

          {/* Card top */}

          <div className="contact__card-head">

            <div>
              <span className="contact__card-kicker">
                BOOK A FREE CONSULTATION
              </span>

              <h3>
                Let's design
                <br />
                your space.
              </h3>
            </div>

            <div className="contact__steps">
              <span className="is-active" />
              <span />
              <span />
            </div>

          </div>


          {status === "success" ? (

            <div className="contact__success">

              <div className="contact__success-icon">
                ✓
              </div>

              <span>THANK YOU</span>

              <h3>
                Your enquiry
                <br />
                is on its way.
              </h3>

              <p>
                We've received your details. Our design team
                will contact you shortly.
              </p>

              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="contact__again"
              >
                Send another enquiry
              </button>

            </div>

          ) : (

            <form
              className="contact__form"
              onSubmit={handleSubmit}
            >

              {/* Name */}

              <label className="contact__field">

                <span>Full name</span>

                <div className="contact__input-wrap">

                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="3.5" />
                    <path d="M5 20c.8-3.2 3.1-5 7-5s6.2 1.8 7 5" />
                  </svg>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                  />

                </div>

              </label>


              {/* Phone */}

              <label className="contact__field">

                <span>Phone number</span>

                <div className="contact__input-wrap">

                  <svg viewBox="0 0 24 24">
                    <path d="M6 3h3l2 5-2 1.5c1 2.2 2.3 3.5 4.5 4.5L15 12l5 2v3c0 1.2-.8 2-2 2C10.8 19 5 13.2 5 6c0-1.7.3-3 1-3Z" />
                  </svg>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                  />

                </div>

              </label>


              {/* Email */}

              <label className="contact__field">

                <span>Email</span>

                <div className="contact__input-wrap">

                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />

                </div>

              </label>


              {/* Project type */}

              <label className="contact__field">

                <span>What are you planning?</span>

                <div className="contact__input-wrap">

                  <svg viewBox="0 0 24 24">
                    <path d="m4 11 8-7 8 7" />
                    <path d="M6 10v9h12v-9M10 19v-5h4v5" />
                  </svg>

                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                  >
                    <option>Full home</option>
                    <option>Living room</option>
                    <option>Modular kitchen</option>
                    <option>Bedroom</option>
                    <option>Wardrobe</option>
                    <option>Home office</option>
                    <option>Commercial</option>
                    <option>Renovation</option>
                  </select>

                </div>

              </label>


              {/* Error */}

              {status === "error" && (
                <div className="contact__error">
                  Please enter your name, phone number and email.
                </div>
              )}


              {/* Submit */}

              <button
                type="submit"
                className="contact__submit"
                disabled={status === "sending"}
              >

                {status === "sending" ? (
                  <>
                    <span className="contact__spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    Book free consultation
                    <ArrowIcon />
                  </>
                )}

              </button>


              <div className="contact__privacy">

                <svg viewBox="0 0 24 24">
                  <path d="M12 21s7-3.8 7-10V5l-7-2-7 2v6c0 6.2 7 10 7 10Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>

                Your details are safe with us. We respect
                your privacy.

              </div>

            </form>

          )}

        </div>

      </div>
    </section>
  );
}