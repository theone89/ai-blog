import React, { useState } from 'react';
import Image from 'next/image';

const PromptInput = ({ input, setInput, isLoading, handleSubmit, check, handleChange, unsplashApiKey, setUnsplashApiKey }) => {
    const [showModal, setShowModal] = useState(false);
    const [openaiApiKey, setOpenaiApiKey] = useState('sk-proj-9X3Rn5RzGcvAcZOZAc9eT3BlbkFJoY8lLYtDUF7C7S4fgiN0');
    const [temperature, setTemperature] = useState(0.7);
    const [model, setModel] = useState('gpt-4o-mini');
    const [provider, setProvider] = useState('openai');

    const handleToolClick = () => {
        setShowModal(true);
    };

    const handleSubmitWithConfig = () => {
        handleSubmit({ openaiApiKey, unsplashApiKey, temperature, model, provider });
    };

    return (
        <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
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
                        disabled={input === "" || isLoading}
                    >
                        Enviar
                    </button>
                </div>
                <div className="flex justify-between items-center">
                    <a href="#" className="font-bold text-gray-600 hover:text-gray-900" onClick={handleToolClick}>
                        <Image
                            src="/enoceantool.svg"
                            alt="Vercel Logo"
                            className="bg-primary hover:rotate-45 text-primary-foreground rounded-full flex items-center justify-center"
                            width={50}
                            height={50}
                            priority
                        />
                    </a>
                    <a href="https://strongfreecode.com" className="font-bold text-gray-600 hover:text-gray-900">@StrongFreeCode</a>
                    <div className="">
                        <label htmlFor="json" className={`font-bold text-gray-600 hover:text-gray-900`}> JSON </label>
                        <input
                            type="checkbox"
                            name="json"
                            id="json"
                            checked={check}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold mb-2">Configuración</h2>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">OpenAI API Key:</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded"
                                value={openaiApiKey}
                                onChange={(e) => setOpenaiApiKey(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Unsplash API Key:</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded"
                                value={unsplashApiKey}
                                onChange={(e) => setUnsplashApiKey(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Temperatura del Modelo:</label>
                            <input
                                type="number"
                                className="w-full p-2 border rounded"
                                value={temperature}
                                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Modelo:</label>
                            <select
                                className="w-full p-2 border rounded"
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                            >
                                <option value="gpt-4o-mini">GPT-4o-Mini</option>
                                <option value="otro-modelo">Otro Modelo</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Proveedor:</label>
                            <select
                                className="w-full p-2 border rounded"
                                value={provider}
                                onChange={(e) => setProvider(e.target.value)}
                            >
                                <option value="openai">OpenAI</option>
                                <option value="otro-proveedor">Otro Proveedor</option>
                            </select>
                        </div>
                        <button onClick={() => setShowModal(false)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PromptInput;