import React, { useState, useRef } from "react";
import { GoDownload, GoLinkExternal } from "react-icons/go";
import { motion, useInView } from "framer-motion";

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

const Resume = () => {
  const resumeRef = useRef(null);
  const resumeInView = useInView(resumeRef, { once: true, margin: "-80px" });
  const [pdfError, setPdfError] = useState(false);

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-geist mb-4 text-3xl font-bold"
        >
          Resume
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-geist text-muted mb-6 text-sm"
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
              className="font-geist text-content hover:bg-content hover:text-background border-muted hover:border-content inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors active:scale-95"
            >
              <GoDownload className="h-4 w-4" />
              Download
            </motion.a>
          </div>
          <motion.div
            variants={fadeUp}
            className="mt-6 max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg"
          >
            <iframe
              src="/resume.pdf"
              className="font-geist h-[500px] w-full sm:h-[600px] md:h-[800px] lg:h-[1000px]"
              title="Resume"
              onError={() => setPdfError(true)}
              onLoad={() => setPdfError(false)}
            />
            {pdfError && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-geist text-muted mt-4 text-left text-sm"
              >
                Can't see this PDF?{" "}
                <a
                  href="/resume.pdf"
                  className="text-accent hover:text-accent/80 transition-colors duration-200"
                >
                  Click here to download it
                </a>
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
