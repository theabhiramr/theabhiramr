import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaSpinner,
  FaCircleCheck,
  FaCircleExclamation,
} from "react-icons/fa6";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Contact = () => {
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: true, margin: "-80px" });

  const [status, setStatus] = useState(""); // "", "success", "error", "invalid-phone"
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Phone Validation
    if (phoneNumber && !isValidPhoneNumber(phoneNumber)) {
      setStatus("invalid-phone");
      return;
    }

    setIsSubmitting(true);
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b72b35d0-b097-4b33-bba6-c36f198061c2",
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          company: data.company || "N/A",
          phone: phoneNumber,
          message: data.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset();
        setPhoneNumber("");
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

  // UI Components for cleaner code
  const Label = ({ children, required }) => (
    <label className="text-muted mb-1.5 text-xs font-medium opacity-70">
      {children}
      {required && <span className="ml-0.5 text-red-500/50">*</span>}
    </label>
  );

  const inputStyles =
    "bg-surface border-border focus:border-content focus:ring-content/20 w-full rounded-lg border px-4 py-2.5 text-sm transition-all outline-none focus:ring-1 placeholder:opacity-30";

  return (
    <div className="bg-background min-h-[80vh] py-12">
      <div className="font-geist text-content mx-auto max-w-7xl">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8 text-4xl font-bold tracking-tight"
        >
          Contact
        </motion.h1>

        <motion.div
          ref={contactRef}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          className="max-w-xl"
        >
          <AnimatePresence mode="wait">
            {status && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={`mb-6 flex items-center gap-2 overflow-hidden rounded-lg border px-4 py-3 text-sm ${
                  status === "success"
                    ? "border-green-500/20 bg-green-500/10 text-green-600"
                    : "border-red-500/20 bg-red-500/10 text-red-600"
                }`}
              >
                {status === "success" ? (
                  <>
                    <FaCircleCheck /> Message sent successfully!
                  </>
                ) : (
                  <>
                    <FaCircleExclamation />{" "}
                    {status === "invalid-phone"
                      ? "Please enter a valid phone number."
                      : "Something went wrong."}
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div className="flex w-full flex-col">
                <Label required>First Name</Label>
                <input
                  name="firstName"
                  type="text"
                  required
                  className={inputStyles}
                />
              </div>
              <div className="flex w-full flex-col">
                <Label required>Last Name</Label>
                <input
                  name="lastName"
                  type="text"
                  required
                  className={inputStyles}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <Label>Company</Label>
              <input name="company" type="text" className={inputStyles} />
            </div>

            <div className="flex flex-col">
              <Label required>Email</Label>
              <input
                name="email"
                type="email"
                required
                // 2. Email validation pattern (standard RFC 5322)
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title="Please enter a valid email address"
                className={inputStyles}
              />
            </div>

            <div className="flex flex-col">
              <Label>Phone</Label>
              <div className="phone-wrapper">
                <PhoneInput
                  international
                  defaultCountry="US"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  className={`bg-surface focus-within:ring-content/20 focus-within:border-content flex items-center rounded-lg border px-3 transition-all focus-within:ring-1 ${
                    status === "invalid-phone"
                      ? "border-red-500"
                      : "border-border"
                  }`}
                  numberInputProps={{
                    className:
                      "bg-transparent w-full py-2.5 pl-2 text-sm outline-none text-content placeholder:opacity-30",
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <Label required>Message</Label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="How can I help you?"
                className={`${inputStyles} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group hover:bg-content hover:text-background border-muted hover:border-content inline-flex items-center justify-center gap-2 rounded-full border px-8 py-3 text-sm font-medium transition-all active:scale-95 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin" /> Sending
                </>
              ) : (
                <>
                  Send Message
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      <style jsx global>{`
        .PhoneInputCountry {
          border-right: 1px solid var(--border);
          padding-right: 10px;
          margin-right: 4px;
        }
        .PhoneInputCountrySelect {
          cursor: pointer;
        }
        .PhoneInputCountryIcon {
          box-shadow: none !important;
          width: 20px !important;
        }
      `}</style>
    </div>
  );
};

export default Contact;
