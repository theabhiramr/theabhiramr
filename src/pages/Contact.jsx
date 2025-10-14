import React, { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
            document.title = "Abhi Ramachandran | Contact";
            window.scrollTo(0, 0);
          }, []);
    return (
        <div className="px-6 lg:px-32 py-6">
            <h1 className="font-outfit text-2xl font-bold mb-4">🚧 Coming Soon!</h1>
            <p className="font-geist-mono text-content">This page is under construction. Please check back later!</p>
        </div>
    );
}

export default Contact;