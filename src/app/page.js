"use client";

import { useState, useEffect } from "react";
import { generate } from "../actions/generate";
import { createUnsplashApi } from "../services/api";
import { readStreamableValue } from "ai/rsc";
import InfoApp from "../components/InfoApp";
import BlogPost from "../components/BlogPost";
import JsonDisplay from "../components/JsonDisplay";
import PromptInput from "../components/PromptInput";
import SettingsModal from "../components/SettingsModal";
import { encodeApiKey, decodeApiKey } from '../utils/encryptionUtils';

export default function Home() {
  const [data, setPhotosResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [check, setCheck] = useState(false);
  const [copied, setCopied] = useState(false);
  const [generation, setGeneration] = useState(null);
  const [config, setConfig] = useState({
    openaiApiKey: '',
    unsplashApiKey: '',
    temperature: 0.7,
    model: 'gpt-4o-mini',
    provider: 'openai',
  });
  const [showModal, setShowModal] = useState(false);

  const api = createUnsplashApi(config.unsplashApiKey);

  useEffect(() => {
    const storedConfig = localStorage.getItem('appConfig');
    if (storedConfig) {
      try {
        const parsedConfig = JSON.parse(storedConfig);
        setConfig({
          ...parsedConfig,
          openaiApiKey: decodeApiKey(parsedConfig.openaiApiKey),
          unsplashApiKey: decodeApiKey(parsedConfig.unsplashApiKey),
        });
      } catch (error) {
        console.error('Error al decodificar la configuración:', error);
      }
    }
  }, []);

  useEffect(() => {
    if (generation?.blogs?.length > 0 && generation.blogs[0]?.images) {
      // Lógica para obtener imágenes de Unsplash
    }
  }, [generation]);

  function handleChange(e) {
    setCheck(e.target.checked);
  }

  const handleSubmit = async (config) => {
    setIsLoading(true);
    const { object } = await generate("Crea un blog sobre:" + input, config);
    for await (const partialObject of readStreamableValue(object)) {
      if (partialObject) {
        setGeneration(partialObject);
      }
    }
    setIsLoading(false);
  };

  return (
    <div>
      {JSON.stringify(config, null, 2)}
      <div className="container mx-auto px-4">
        {!generation ? <InfoApp /> : (
          <div className="pt-12 justify-center w-full">
            <h1 className="text-center font-bold text-4xl">Blog AI</h1>
          </div>
        )}
        {generation?.blogs?.map((blog, index) => (
          <BlogPost key={index} blog={blog} data={data} />
        ))}
      </div>
      {check && (
        <JsonDisplay generation={generation} copied={copied} setCopied={setCopied} />
      )}
      <PromptInput
        input={input}
        setInput={setInput}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
        check={check}
        handleChange={handleChange}
        config={config}
        setShowModal={setShowModal}
      />
      <SettingsModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        setConfig={(newConfig) => {
          const encodedConfig = {
            ...newConfig,
            openaiApiKey: encodeApiKey(newConfig.openaiApiKey),
            unsplashApiKey: encodeApiKey(newConfig.unsplashApiKey),
          };
          localStorage.setItem('appConfig', JSON.stringify(encodedConfig));
          setConfig(newConfig);
        }}
      />
    </div>
  );
}