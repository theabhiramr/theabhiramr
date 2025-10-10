import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen w-full bg-gray-900 text-white flex flex-col">
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
            <div className="w-full h-full bg-gray-900 p-6 font-mono text-sm flex flex-col">
                <div className="mb-4">
                    <span className="text-primary">abhi@portfolio</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ </span>
                    <span className="text-white">./navpage</span>
                </div>
                <div className="text-secondary mb-4">
                    Website received SIGSEGV, Segmentation fault (core dumped)
                </div>
                <div className="text-gray-400 mb-6">
                    Aw shucks! The page you requested has caused a segmentation fault.<br />
                    This usually occurs when trying to access invalid memory.<br />
                    ERRNO 404 Page not found
                </div>
                <div className="text-primary">
                    abhi@portfolio:~$
                    <span className="blink">|</span>
                </div>
                <div className="mt-4 text-left">
                    <a 
                        href="/" 
                        className="text-sm inline-block px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition-colors"
                    >
                        cd /
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NotFound;