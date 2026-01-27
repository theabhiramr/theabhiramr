import React, { useState, useEffect } from "react";
import { useTypewriter } from "../hooks/useTypewriter";
import { FaArrowRight } from "react-icons/fa6";

const errorText = `
<span class="text-[#f48771]" style="font-weight: 600;">Website received signal SIGSEGV, Segmentation fault (core dumped)</span><br/>
<span class="text-[#cccccc]">Aw shucks! The page you requested could not be found.<br/>
This usually means the URL is incorrect or the page has been moved.<br/> <br/>
ERRNO 404 Page not found</span>
`;

const NotFound = () => {
  useEffect(() => {
    document.title = "ERR Segmentation Fault";
    window.scrollTo(0, 0);
  }, []);

  const { displayText, isComplete } = useTypewriter(errorText, 10);
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && !skipped) {
        setSkipped(true);
      }
    };
    const handleClick = () => {
      if (!skipped) setSkipped(true);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleClick);
    };
  }, [skipped]);

  const finalText = skipped ? errorText : displayText;
  const finalIsComplete = skipped || isComplete;

  return (
    <div className="text-md flex min-h-screen w-full flex-col bg-black text-white">
      <style>
        {`
                    .blink {
                        animation: blink 1s infinite;
                    }
                    @keyframes blink {
                        0%, 50% { opacity: 1; }
                        51%, 100% { opacity: 0; }
                    }
                `}
      </style>
      <div className="flex h-full w-full flex-col bg-black p-6 font-mono">
        <div className="mb-4 text-[#7ee787]">
          abhi<span class="text-[#f85149]">@</span>portfolio
          <span className="text-white">:</span>
          <span className="text-[#79c0ff]">~</span>
          <span className="text-white">$ </span>
          <span className="text-white">./navpage</span>
        </div>
        <div
          className=""
          dangerouslySetInnerHTML={{
            __html:
              finalText +
              (!finalIsComplete ? '<span class="blink">█</span>' : ""),
          }}
        />
        {finalIsComplete && (
          <div className="mt-4 text-left">
            <a
              href="/"
              className="font-geist inline-flex items-center gap-2 rounded-full border border-[#333333] bg-black px-4 py-2 text-sm text-white transition-colors hover:border-white hover:bg-white hover:text-black active:scale-95"
            >
              Return to Home Page <FaArrowRight className="inline-block" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotFound;
