import React, { useState, useEffect } from "react";
import { useTypewriter } from "../hooks/useTypewriter";

const fileTree = [
  {
    name: "labs",
    children: [
      { name: "boolean.html", path: "/cs164/labs/boolean.html" },
      { name: "compare.html", path: "/cs164/labs/compare.html" },
      { name: "numbers.html", path: "/cs164/labs/numbers.html" },
    ],
  },
  {
    name: "tranq",
    children: [
      {
        name: "docs",
        children: [
          { name: "vpet_docs.html", path: "/cs164/tranq/docs/vpet_docs.html" },
        ],
      },
      { name: "cubes.html", path: "/cs164/tranq/cubes.html" },
      { name: "fsm.html", path: "/cs164/tranq/fsm.html" },
      { name: "hello.html", path: "/cs164/tranq/hello.html" },
      { name: "lab7.html", path: "/cs164/tranq/lab7.html" },
      { name: "lab8.html", path: "/cs164/tranq/lab8.html" },
      { name: "vpet.html", path: "/cs164/tranq/vpet.html" },
    ],
  },
];

function buildTreeHTML(tree, prefix = "", isLast = true) {
  let lines = [];
  tree.forEach((item, idx) => {
    const last = idx === tree.length - 1;
    const connector = last ? "└─── " : "├─── ";
    let name = item.name;
    if (item.path) {
      name = `<a href="${item.path}" target="_blank" rel="noopener noreferrer" class="tree-link">${item.name}</a>`;
    } else if (item.children) {
      name = `<span style="font-weight:bold;">${item.name}/</span>`;
    }
    lines.push(prefix + connector + name);
    if (item.children) {
      const subPrefix = prefix + (last ? "    " : "│   ") + " ".repeat(1);
      lines = lines.concat(buildTreeHTML(item.children, subPrefix, last));
    }
  });
  return lines;
}

const Secret = () => {
  const treeLines = [`<span style="font-weight:bold;">cs164/</span>`].concat(
    buildTreeHTML(fileTree),
  );
  const treeHTML = treeLines.join("<br/>");
  const { displayText, isComplete } = useTypewriter(treeHTML, 1);

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

  const finalText = skipped ? treeHTML : displayText;
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
                    .tree-link {
                        color: #7ee787;
                        text-decoration: none;
                    }
                    .tree-link:hover {
                        color: #9effa9;
                        text-decoration: underline;
                    }
                    .tree-link:active {
                        color: #5dd975;
                    }
                `}
      </style>
      <div className="flex h-full w-full flex-col p-6 font-mono">
        <div className="mb-4 text-[#7ee787]">
          abhi<span className="text-[#f85149]">@</span>portfolio
          <span className="text-white">:</span>
          <span className="text-[#79c0ff]">~</span>
          <span className="text-white">$ </span>
          <span className="text-white">cd cs164 && tree -P '*.html'</span>
        </div>
        <pre
          className="pl-4 select-text"
          dangerouslySetInnerHTML={{ __html: finalText }}
        />
        {finalIsComplete && (
          <div className="mt-6">
            <div className="mb-4 text-[#7ee787]">
              abhi<span className="text-[#f85149]">@</span>portfolio
              <span className="text-white">:</span>
              <span className="text-[#79c0ff]">~/cs164</span>
              <span className="text-white">$ </span>
              <span className="blink">█</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Secret;
