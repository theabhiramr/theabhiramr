import React, { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const errorText = `
<span class="text-secondary">Website received signal SIGSEGV, Segmentation fault (core dumped)</span><br/>
<span class="text-gray-400">Aw shucks! The page you requested has caused a segmentation fault.<br/>
This usually occurs when trying to access invalid memory.<br/>
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
            if (e.key === 'Enter' && !skipped) {
                setSkipped(true);
            }
        };
        const handleClick = () => {
            if (!skipped) setSkipped(true);
        };
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('click', handleClick);
        };
    }, [skipped]);

    const finalText = skipped ? errorText : displayText;
    const finalIsComplete = skipped || isComplete;

    return (
        <div className="text-md min-h-screen w-full bg-gray-900 text-white flex flex-col">
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
            <div className="w-full h-full bg-gray-900 p-6 font-mono flex flex-col">
                <div className="text-primary mb-4">
                    abhi<span className="text-secondary">@</span>portfolio
                    <span className="text-white">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ </span>
                    <span className="text-white">./navpage</span>
                </div>
                <div className="" dangerouslySetInnerHTML={{ __html: finalText + (!finalIsComplete ? '<span class="blink">█</span>' : '') }} />
                {finalIsComplete && (
                    <div className="mt-4 text-left">
                        <a 
                            href="/" 
                            className="font-geist-mono text-sm inline-block px-4 py-2 border-2 border-dashed border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-slate-900 hover:border-0 active:scale-95 transition-colors"
                        >
                            cd /
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NotFound;