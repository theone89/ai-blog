import React from 'react';
import Image from 'next/image';

const PromptInput = ({ input, setInput, isLoading, handleSubmit, check, handleChange, config, setShowModal, setGeneration }) => {

    const handleToolClick = () => {
        setShowModal(true);
    };

    const handleSubmitWithConfig = () => {
        // handleSubmit(config);
        alert(JSON.stringify(config))
    };

    return (
        <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
            {JSON.stringify(config, null, 2)}
            <div className="fixed bottom-0 w-full hover:border-orange-400 backdrop-blur-sm max-w-md border-4 p-2 mb-8 border-double border-gray-200 rounded shadow-xl shadow-black/40 border-opacity-90">
                <div className="flex justify-between">
                    <input
                        type="text"
                        className="bg-transparent w-2/3 mr-1 rounded-e-md pl-1 border-orange-400 border-b-4 focus:outline-none hover:border-orange-600"
                        placeholder="¿De qué trata el artículo?..."
                        value={input}
                        onChange={(event) => {
                            setInput(event.target.value);
                        }}
                    />
                    <button
                        className={`bg-blue-700 p-1 rounded-md w-1/3 text-white disabled:bg-slate-500/20 disabled:border disabled:border-double`}
                        onClick={handleSubmitWithConfig}
                        disabled={input === "" || isLoading || config.openaiApiKey === "" || config.unsplashApiKey === ""}
                    >
                        Enviar
                    </button>
                </div>
                <div className="flex justify-between items-center">
                    <a href="#" className="font-bold text-gray-600 hover:text-gray-900" onClick={handleToolClick}>
                        <Image
                            src="/enoceantool.svg"
                            alt="enoceantool icon"
                            className="bg-primary hover:rotate-45 text-primary-foreground rounded-full flex items-center justify-center"
                            width={50}
                            height={50}
                            priority
                        />
                    </a>
                    <a href="https://github.com/theone89" className="font-bold text-gray-600 hover:text-gray-900">@franklinCampos</a>
                    <div className="md:flex md:space-x-1">
                        <div className="">
                            <label htmlFor="json" className={`font-bold  text-nowrap text-gray-600 hover:text-gray-900`}> JSON </label>
                            <input
                                type="checkbox"
                                name="json"
                                id="json"
                                checked={check}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="text-center">
                            <button onClick={() => setGeneration(null)} htmlFor="json" className={`font-bold  text-nowrap text-gray-600 hover:text-orange-700`}>
                                RESET</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default PromptInput;