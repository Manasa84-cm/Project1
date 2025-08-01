import React from 'react';


const Late = () => {
    return (
        <div className="relative w-full h-[500px] pb-4">

            <img src="src\assets\Office.png" className="h-[80vh] w-[100vw]" />

            <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                <div className="text-center text-white px-6 py-8 max-w-2xl">
                    <h1 className="text-3xl md:text-4xl font-serif mb-4">Lorem Dolors Ament</h1>
                    <p className="text-sm md:text-base leading-relaxed mb-6">
                        Lorem ipsum dolor sit amet, consec lorem dolor sit amet, consectetur adipisci.
                        Lorem ipsum dolor sit amet, consec consectetur adipiscing elit.
                    </p>
                    <a
                        href="#learn-more"
                        className="inline-block text-sm text-gray-300 hover:text-white underline"
                    >
                        Learn More &gt;
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Late;
