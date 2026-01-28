import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { TbWorldWww } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: true, margin: "-80px" });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b72b35d0-b097-4b33-bba6-c36f198061c2",
          name: `${form.firstName.value} ${form.lastName.value}`,
          company: form.company.value,
          email: form.email.value,
          message: form.message.value,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-geist mb-4 text-3xl font-bold"
        >
          Contact Me
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-geist text-muted mb-8 text-sm"
        >
          Feel free to reach out for any inquiries or opportunities.
        </motion.p>

        <motion.div
          ref={contactRef}
          variants={staggerContainer}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          className="max-w-xl"
        >
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-600 dark:text-green-400"
            >
              Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400"
            >
              Something went wrong. Please try again.
            </motion.div>
          )}

          <motion.form
            variants={staggerContainer}
            className="flex flex-col items-start gap-4"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <motion.div variants={fadeUp} className="flex w-full gap-4">
              <div className="flex w-full flex-col">
                <label
                  className="font-geist text-muted mb-1.5 text-xs font-medium"
                  htmlFor="firstName"
                >
                  First Name<span className="text-accent">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="font-geist bg-surface border-border text-content focus:border-content focus:ring-content/20 w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:ring-1 focus:outline-none"
                />
              </div>
              <div className="flex w-full flex-col">
                <label
                  className="font-geist text-muted mb-1.5 text-xs font-medium"
                  htmlFor="lastName"
                >
                  Last Name<span className="text-accent">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="font-geist bg-surface border-border text-content focus:border-content focus:ring-content/20 w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:ring-1 focus:outline-none"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex w-full flex-col">
              <label
                className="font-geist text-muted mb-1.5 text-xs font-medium"
                htmlFor="company"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                className="font-geist bg-surface border-border text-content focus:border-content focus:ring-content/20 w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:ring-1 focus:outline-none"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="flex w-full flex-col">
              <label
                className="font-geist text-muted mb-1.5 text-xs font-medium"
                htmlFor="email"
              >
                Email<span className="text-accent">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="font-geist bg-surface border-border text-content focus:border-content focus:ring-content/20 w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:ring-1 focus:outline-none"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="flex w-full flex-col">
              <label
                className="font-geist text-muted mb-1.5 text-xs font-medium"
                htmlFor="message"
              >
                Message<span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="font-geist bg-surface border-border text-content focus:border-content focus:ring-content/20 w-full resize-none rounded-lg border px-4 py-2.5 text-sm transition-colors focus:ring-1 focus:outline-none"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex w-full items-center justify-between"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="font-geist text-content hover:bg-content hover:text-background border-muted hover:border-content disabled:hover:text-content disabled:hover:border-muted inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:active:scale-100"
              >
                {isSubmitting ? "Sending..." : "Send Message"}{" "}
                <FaArrowRight className="ml-2 inline-block" />
              </button>

              <a
                href="https://web3forms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-geist text-muted hover:text-content inline-flex items-center gap-1.5 text-xs transition-colors"
              >
                Web3Forms
              </a>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
