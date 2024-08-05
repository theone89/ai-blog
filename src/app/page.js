"use client";

import { useRef, useState, useEffect } from "react";
import { generate } from "../actions/generate";
import { createUnsplashApi } from "../services/api";
import { readStreamableValue } from "ai/rsc";
import Image from "next/image";
import PhotoComp from "../components/PhotoComp";
import InfoApp from "../components/InfoApp";
import BlogPost from "../components/BlogPost";
import JsonDisplay from "../components/JsonDisplay";
import PromptInput from "../components/PromptInput";

export default function Home() {
  const [data, setPhotosResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [check, setCheck] = useState(false);
  const [copied, setCopied] = useState(false);
  const [generation, setGeneration] = useState(null);
  const [unsplashApiKey, setUnsplashApiKey] = useState("");
  const [config, setConfig] = useState({
    openaiApiKey: '',
    unsplashApiKey: '',
    temperature: 0.7,
    model: 'gpt-4o-mini',
    provider: 'openai',
  });

  const api = createUnsplashApi(config.unsplashApiKey);

  useEffect(() => {
    const storedConfig = localStorage.getItem('appConfig');
    if (storedConfig) {
      setConfig(JSON.parse(storedConfig));
    }
  }, []);

  useEffect(() => {
    if (generation?.blogs?.length > 0 && generation.blogs[0]?.images) {
      getImagesAPi();
    }
  }, [generation]);

  function handleChange(e) {
    setCheck(e.target.checked);
  }

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

  function getImagesAPi() {
    api.search.getPhotos({
      query: `${generation?.blogs[0]?.images}`,
      orientation: "landscape",
      perPage: 4,
    }).then((result) => {
      setPhotosResponse(result);
    }).catch(() => {
      console.log("something went wrong!");
    });
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
        unsplashApiKey={config.unsplashApiKey}
        setUnsplashApiKey={setUnsplashApiKey}
      />
    </div>
  );
}