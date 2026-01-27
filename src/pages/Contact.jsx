import React, { useState, useEffect, useRef } from "react";
import { GoDownload, GoLinkExternal } from "react-icons/go";
import { motion, useInView } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { SiFormspree } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const Contact = () => {
  useEffect(() => {
    document.title = "Abhi Ramachandran | Contact";
  }, []);

  const resumeRef = useRef(null);
  const resumeInView = useInView(resumeRef, { once: true, margin: "-80px" });

  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: true, margin: "-80px" });

  const [pdfError, setPdfError] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl">
        {/* Resume Section */}
        <motion.h1
          variants={fadeUp}
          className="font-outfit mb-4 text-2xl font-bold"
        >
          My Resume
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="font-geist-mono text-muted mb-6 text-sm"
        >
          In case you don't want to look through this complicated website
        </motion.p>
        <motion.div
          ref={resumeRef}
          variants={staggerContainer}
          initial="hidden"
          animate={resumeInView ? "visible" : "hidden"}
          className="mx-auto mb-12"
        >
          <div className="mb-6 flex gap-4">
            <motion.a
              variants={fadeUp}
              href="/resume.pdf"
              download="Abhiram_Ramachandran.pdf"
              className="font-geist-mono bg-primary hover:bg-secondary inline-flex items-center px-2 py-2 text-xs text-white transition-colors duration-200 active:scale-95"
            >
              <GoDownload className="mr-2 h-4 w-4" />
              Download
            </motion.a>
            <motion.a
              variants={fadeUp}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-geist-mono border-primary text-muted hover:bg-primary inline-flex items-center border-2 border-dashed px-2 py-1 text-xs transition-colors duration-200 hover:border-0 hover:text-gray-200 active:scale-95"
            >
              <GoLinkExternal className="mr-2 h-4 w-4" />
              Open in New Tab
            </motion.a>
          </div>
          <motion.div
            variants={fadeUp}
            className="mt-6 max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg"
          >
            <iframe
              src="/resume.pdf"
              className="font-geist-mono h-[800px] w-full md:h-[1000px]"
              title="Resume"
              onError={() => setPdfError(true)}
              onLoad={() => setPdfError(false)}
            />
            {pdfError && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-geist-mono text-muted mt-4 text-left text-sm"
              >
                Can't see this PDF?{" "}
                <a
                  href="/resume.pdf"
                  className="text-primary hover:text-secondary transition-colors duration-200"
                >
                  Click here to download it
                </a>
              </motion.p>
            )}
          </motion.div>
        </motion.div>

        {/* Contact Header & Description (aligned with Resume header) */}
        <motion.h1
          variants={fadeUp}
          className="font-outfit mb-4 text-2xl font-bold"
        >
          Contact Me
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="font-geist-mono text-muted mb-6 text-sm"
        >
          Feel free to reach out for any inquiries or opportunities.
        </motion.p>

        {/* Indented Contact Form */}
        <motion.div
          ref={contactRef}
          variants={staggerContainer}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          className="mb-8 max-w-xl items-start md:pl-8"
        >
          <motion.form
            variants={staggerContainer}
            className="flex flex-col items-start gap-4"
            autoComplete="off"
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
          >
            {/* Name fields in a flex row */}
            <motion.div variants={fadeUp} className="flex w-full gap-4">
              <div className="flex w-full flex-col">
                <label
                  className="font-geist-mono text-primary mb-1 text-xs uppercase"
                  htmlFor="firstName"
                >
                  First Name<span className="text-secondary">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="font-geist-mono border-muted focus:border-primary w-full border-2 border-dashed p-2 text-sm focus:border-solid focus:outline-none"
                />
              </div>
              <div className="flex w-full flex-col">
                <label
                  className="font-geist-mono text-primary mb-1 text-xs uppercase"
                  htmlFor="lastName"
                >
                  Last Name<span className="text-secondary">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="font-geist-mono border-muted focus:border-primary w-full border-2 border-dashed p-2 text-sm focus:border-solid focus:outline-none"
                />
              </div>
            </motion.div>
            {/* Full-width fields */}
            <motion.div variants={fadeUp} className="flex w-full flex-col">
              <label
                className="font-geist-mono text-primary mb-1 text-xs uppercase"
                htmlFor="company"
              >
                Company (Optional)
              </label>
              <motion.input
                id="company"
                name="company"
                variants={fadeUp}
                className="font-geist-mono border-muted focus:border-primary w-full border-2 border-dashed p-2 text-sm focus:border-solid focus:outline-none"
              />
            </motion.div>
            <motion.div variants={fadeUp} className="flex w-full flex-col">
              <label
                className="font-geist-mono text-primary mb-1 text-xs uppercase"
                htmlFor="email"
              >
                Email<span className="text-secondary">*</span>
              </label>
              <motion.input
                id="email"
                name="email"
                variants={fadeUp}
                type="email"
                required
                className="font-geist-mono border-muted focus:border-primary w-full border-2 border-dashed p-2 text-sm focus:border-solid focus:outline-none"
              />
            </motion.div>
            <motion.div variants={fadeUp} className="flex w-full flex-col">
              <label
                className="font-geist-mono text-primary mb-1 text-xs uppercase"
                htmlFor="message"
              >
                Your Message<span className="text-secondary">*</span>
              </label>
              <motion.textarea
                id="message"
                name="message"
                variants={fadeUp}
                required
                rows={5}
                className="font-geist-mono border-muted focus:border-primary w-full border-2 border-dashed p-2 text-sm focus:border-solid focus:outline-none"
              />
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="font-geist-mono text-muted text-xs"
            >
              Powered by{" "}
              <a
                href="https://www.formspree.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors duration-200"
              >
                <SiFormspree className="mr-1 mb-1 inline h-4 w-4" />
              </a>
            </motion.p>
            <div className="flex w-full justify-start">
              <motion.button
                variants={fadeUp}
                type="submit"
                className="font-geist-mono bg-primary hover:bg-secondary w-auto px-2 py-2 text-xs text-white transition-colors duration-200 active:scale-95"
              >
                Send Message
              </motion.button>
            </div>
            <motion.div variants={fadeUp} className="mt-4">
              <div style={{ transform: "scale(0.85)", transformOrigin: "0 0" }}>
                <ReCAPTCHA
                  sitekey="6Lehg-orAAAAAEHDX3BVvyjWTvA3TtwnGGijrzWw"
                  onChange={(value) => setCaptchaValue(value)}
                  size="small"
                />
              </div>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
