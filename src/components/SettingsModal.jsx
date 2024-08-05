import React, { useState, useEffect } from 'react';

const SettingsModal = ({ isOpen, onClose, setConfig }) => {
    const [openaiApiKey, setOpenaiApiKey] = useState('');
    const [unsplashApiKey, setUnsplashApiKey] = useState('');
    const [temperature, setTemperature] = useState(0.7);
    const [model, setModel] = useState('gpt-4o-mini');
    const [provider, setProvider] = useState('openai');
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const storedConfig = localStorage.getItem('appConfig');
        if (storedConfig) {
            const config = JSON.parse(storedConfig);
            setOpenaiApiKey(config.openaiApiKey || '');
            setUnsplashApiKey(config.unsplashApiKey || '');
            setTemperature(config.temperature || 0.7);
            setModel(config.model || 'gpt-4o-mini');
            setProvider(config.provider || 'openai');
        }
    }, [isOpen]);

    useEffect(() => {
        // Validar si ambas claves API están presentes
        setIsValid(openaiApiKey.trim() !== '' && unsplashApiKey.trim() !== '');
    }, [openaiApiKey, unsplashApiKey]);

    const handleSave = () => {
        if (isValid) {
            const config = {
                openaiApiKey,
                unsplashApiKey,
                temperature,
                model,
                provider,
            };
            setConfig(config);
            onClose();
        }
    };

    const handleReset = () => {
        // Restablecer valores a los predeterminados
        setOpenaiApiKey('');
        setUnsplashApiKey('');
        setTemperature(0.7);
        setModel('gpt-4o-mini');
        setProvider('openai');
        setIsValid(false);
        const restetConfg = {
            openaiApiKey: '',
            unsplashApiKey: '',
            temperature: 0.7,
            model: 'gpt-4o-mini',
            provider: 'openai',
        }
        setConfig(restetConfg)
        localStorage.removeItem('appConfig');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg shadow-lg w-96">
                <h2 className="text-lg font-bold mb-4">Configuración</h2>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">OpenAI API Key:</label>
                    <input
                        type="password"
                        className="w-full p-2 border rounded"
                        value={openaiApiKey}
                        onChange={(e) => setOpenaiApiKey(e.target.value)}
                    />
                    {openaiApiKey.trim() === '' && <span className="text-red-500 font-light text-xs animate-pulse">Requerido</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Unsplash API Key:</label>
                    <input
                        type="password"
                        className="w-full p-2 border rounded"
                        value={unsplashApiKey}
                        onChange={(e) => setUnsplashApiKey(e.target.value)}
                    />
                    {unsplashApiKey.trim() === '' && <span className="text-red-500 font-light text-xs animate-pulse">Requerido</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Temperatura del Modelo:</label>
                    <input
                        type="number"
                        max="1"
                        min="0"
                        step="0.1"
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
                <div className="flex justify-end">
                    {isValid ? (
                        <div>
                            <button
                                onClick={handleReset}
                                className="mr-2 px-4 py-2 text-white rounded bg-red-500 hover:bg-red-600"
                            >
                                Reset
                            </button>
                            <button onClick={onClose} className="mr-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded">
                                Cerrar
                            </button>
                        </div>
                    ) : (
                        <button onClick={onClose} className="mr-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded">
                            Cerrar
                        </button>
                    )}

                    <button
                        onClick={handleSave}
                        className={`px-4 py-2 text-white rounded ${!isValid ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'}`}
                        disabled={!isValid}
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;