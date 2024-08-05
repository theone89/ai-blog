import React, { useRef } from 'react';
import Image from 'next/image';

const JsonDisplay = ({ generation, copied, setCopied }) => {
    const codeRef = useRef(null);

    const copyCode = () => {
        const code = codeRef.current?.innerText;
        if (code) {
            navigator.clipboard.writeText(code).then(() => {
                setCopied(true);
            }).catch((err) => {
                console.error("Error al copiar el código: ", err);
            });
        }
    };

    return (
        <div className="bg-slate-200 rounded-md scroll-smooth focus:scroll-auto text-black container mx-auto overflow-y-auto">
            <div className="ml-2 mt-2">
                <button
                    onClick={copyCode}
                    className="items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none border border-input font-medium rounded-md text-xs right-4 top-5 z-10 flex h-6 gap-1 bg-white px-1.5 text-gray-500 shadow-none transition-colors hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                >
                    {copied ? "Copiado" : "Copiar"}
                    {copied ? (<Image
                        src="/check.svg"
                        alt="Copy icon"
                        className="bg-primary text-primary-foreground rounded-full flex items-center justify-center"
                        width={25}
                        height={25}
                        priority
                    />) : (<Image
                        src="/copy.svg"
                        alt="Copy icon"
                        className="bg-primary text-primary-foreground rounded-full flex items-center justify-center"
                        width={25}
                        height={25}
                        priority
                    />)}
                </button>
            </div>
            <pre ref={codeRef} className="p-4" id="code">
                {JSON.stringify(generation, null, 2)}
            </pre>
        </div>
    );
};

export default JsonDisplay;