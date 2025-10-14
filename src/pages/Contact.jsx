import React, { useState, useEffect, useRef } from "react";
import { GoDownload, GoLinkExternal } from "react-icons/go";
import { motion, useInView } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { SiFormspree } from "react-icons/si";

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.25
        }
    }
};

const Contact = () => {
    useEffect(() => {
        document.title = "Abhi Ramachandran | Contact";
        window.scrollTo(0, 0);
    }, []);

    const resumeRef = useRef(null);
    const resumeInView = useInView(resumeRef, { once: true, margin: "-80px" });

    const contactRef = useRef(null);
    const contactInView = useInView(contactRef, { once: true, margin: "-80px" });

    const [pdfError, setPdfError] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(null);

    return (
        <div className="px-6 lg:px-32 py-6">
            {/* Resume Section */}
            <motion.h1 variants={fadeUp} className="font-outfit text-2xl font-bold mb-4">
                My Resume
            </motion.h1>
            <motion.p variants={fadeUp} className="font-geist-mono text-sm mb-6 text-muted">
                In case you don't want to look through this complicated website
            </motion.p>
            <motion.div
                ref={resumeRef}
                variants={staggerContainer}
                initial="hidden"
                animate={resumeInView ? "visible" : "hidden"}
                className="mx-auto mb-8 pl-8"
            >
                <div className="flex gap-4 mb-6">
                    <motion.a
                        variants={fadeUp}
                        href="/resume.pdf"
                        download="Abhiram_Ramachandran.pdf"
                        className="font-geist-mono inline-flex items-center px-2 py-2 text-xs bg-primary text-white hover:bg-secondary active:scale-95 transition-colors duration-200"
                    >
                        <GoDownload className="w-4 h-4 mr-2" />
                        Download
                    </motion.a>
                    <motion.a
                        variants={fadeUp}
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-geist-mono text-xs inline-flex items-center px-2 py-1 border-2 border-dashed border-primary text-muted hover:bg-primary hover:text-gray-200 hover:border-0 active:scale-95 transition-colors duration-200"
                    >
                        <GoLinkExternal className="w-4 h-4 mr-2" />
                        Open in New Tab
                    </motion.a>
                </div>
                <motion.div variants={fadeUp} className="mt-6 max-w-4xl rounded-lg overflow-hidden shadow-lg bg-white">
                    <iframe
                        src="/resume.pdf"
                        className="font-geist-mono w-full h-[800px] md:h-[1000px]"
                        title="Resume"
                        onError={() => setPdfError(true)}
                        onLoad={() => setPdfError(false)}
                    />
                    {pdfError && (
                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-geist-mono text-left mt-4 text-sm text-muted"
                        >
                            Can't see this PDF? <a href="/resume.pdf" className="text-primary hover:text-secondary transition-colors duration-200">Click here to download it</a>
                        </motion.p>
                    )}
                </motion.div>
            </motion.div>

            {/* Contact Header & Description (aligned with Resume header) */}
            <motion.h1
                variants={fadeUp}
                className="font-outfit text-2xl font-bold mb-4"
            >
                Contact Me
            </motion.h1>
            <motion.p
                variants={fadeUp}
                className="font-geist-mono text-sm mb-6 text-muted"
            >
                Feel free to reach out for any inquiries or opportunities.
            </motion.p>

            {/* Indented Contact Form */}
            <motion.div
                ref={contactRef}
                variants={staggerContainer}
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
                className="max-w-xl pl-8 mb-8 items-start"
            >
                <motion.form
                    variants={staggerContainer}
                    className="flex flex-col gap-4 items-start"
                    autoComplete="off"
                    action="https://formspree.io/f/YOUR_FORM_ID"
                    method="POST"
                >
                    {/* Name fields in a flex row */}
                    <motion.div variants={fadeUp} className="flex gap-4 w-full">
                        <div className="w-full flex flex-col">
                            <label className="font-geist-mono text-xs uppercase mb-1 text-primary" htmlFor="firstName">
                                First Name<span className="text-secondary">*</span>
                            </label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                required
                                className="font-geist-mono text-sm p-2 border-2 border-dashed border-muted focus:border-primary focus:border-solid focus:outline-none w-full"
                            />
                        </div>
                        <div className="w-full flex flex-col">
                            <label className="font-geist-mono text-xs uppercase mb-1 text-primary" htmlFor="lastName">
                                Last Name<span className="text-secondary">*</span>
                            </label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                required
                                className="font-geist-mono text-sm p-2 border-2 border-dashed border-muted focus:border-primary focus:border-solid focus:outline-none w-full"
                            />
                        </div>
                    </motion.div>
                    {/* Full-width fields */}
                    <motion.div variants={fadeUp} className="flex flex-col w-full">
                        <label className="font-geist-mono text-xs uppercase mb-1 text-primary" htmlFor="company">
                            Company (Optional)
                        </label>
                        <motion.input
                            id="company"
                            name="company"
                            variants={fadeUp}
                            className='font-geist-mono text-sm p-2 border-2 border-dashed border-muted focus:border-primary focus:border-solid focus:outline-none w-full'
                        />
                    </motion.div>
                    <motion.div variants={fadeUp} className="flex flex-col w-full">
                        <label className="font-geist-mono text-xs uppercase mb-1 text-primary" htmlFor="email">
                            Email<span className="text-secondary">*</span>
                        </label>
                        <motion.input
                            id="email"
                            name="email"
                            variants={fadeUp}
                            type="email"
                            required
                            className="font-geist-mono text-sm p-2 border-2 border-dashed border-muted focus:border-primary focus:border-solid focus:outline-none w-full"
                        />
                    </motion.div>
                    <motion.div variants={fadeUp} className="flex flex-col w-full">
                        <label className="font-geist-mono text-xs uppercase mb-1 text-primary" htmlFor="message">
                            Your Message<span className="text-secondary">*</span>
                        </label>
                        <motion.textarea
                            id="message"
                            name="message"
                            variants={fadeUp}
                            required
                            rows={5}
                            className="font-geist-mono text-sm p-2 border-2 border-dashed border-muted focus:border-primary focus:border-solid focus:outline-none w-full"
                        />
                    </motion.div>
                    <motion.p variants={fadeUp} className="font-geist-mono text-xs text-muted">
                        Powered by <a href="https://www.formspree.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors duration-200">
                            <SiFormspree className="inline w-4 h-4 mr-1 mb-1" />
                        </a>
                    </motion.p>
                    <div className="flex justify-start w-full">
                        <motion.button
                            variants={fadeUp}
                            type="submit"
                            className="font-geist-mono px-2 py-2 text-xs bg-primary text-white hover:bg-secondary transition-colors duration-200 active:scale-95 w-auto"
                        >
                            Send Message
                        </motion.button>
                    </div>
                    <motion.div variants={fadeUp} className="mt-4">
                        <div style={{ transform: "scale(0.85)", transformOrigin: "0 0" }}>
                            <ReCAPTCHA
                                sitekey="6Lehg-orAAAAAEHDX3BVvyjWTvA3TtwnGGijrzWw"
                                onChange={value => setCaptchaValue(value)}
                                size="small"
                            />
                        </div>
                    </motion.div>
                </motion.form>
            </motion.div>
        </div>
    );
};

export default Contact;