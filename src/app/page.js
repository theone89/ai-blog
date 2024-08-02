"use client";

import { useRef, useState, Fragment } from "react";
import { generate } from "./actions";
import { readStreamableValue } from "ai/rsc";
import { z } from "zod";
import Image from "next/image";
import { createApi } from "unsplash-js";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "je80tOS5RE_JEfcfLZ_DB5hkxXa3H9qb4w3Yv27VzWM",
});

const PhotoComp = ({ photo, size, style }) => {
  const { user, urls } = photo;

  return (
    <Fragment>
      <Image
        height={size.height}
        width={size.width}
        className={style}
        src={urls.regular}
        alt="una imagen"
      />
      <a
        className=""
        target="_blank"
        href={`https://unsplash.com/@${user.username}`}
      >
        {user.name}
      </a>
    </Fragment>
  );
};

export default function Home() {
  const [data, setPhotosResponse] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [check, setCheck] = useState(false);
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [generation, setGeneration] = useState();

  function handleChange(e) {
    const { checked } = e.target;
    setCheck(checked);
  }

  const copyCode = () => {
    const code = codeRef.current?.innerText;
    if (code) {
      navigator.clipboard
        .writeText(code)
        .then(() => { })
        .catch((err) => {
          console.error("Error al copiar el código: ", err);
        });
    }
    setCopied(!copied);
  };

  function getImagesAPi() {
    api.search
      .getPhotos({
        query: `${generation?.blogs[0].images}`,
        orientation: "landscape",
        perPage: 4,
      })
      .then((result) => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }

  return (
    <div>
      <div className="container mx-auto ">
        {generation?.blogs?.map((blog, index) => (
          <div key={index} className="prose lg:prose-xl mx-auto">
            <div className="">
              <div className="text-start p-4 ">
                <h1 className="text-4xl md:text-6xl  font-bold ">
                  {blog.title}
                </h1>
                <p className="text-xl md:text-4xl font-bold ">
                  {blog?.subtitle}
                </p>
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-slate-500">
                  Publicado el {blog?.date}
                </h3>
                <h3 className="text-xl font-semibold mb-2">{blog?.author}</h3>
              </div>
              <div className="mb-4">
                {!data ? (
                  "IsLoading..."
                ) : (
                  <PhotoComp
                    size={{
                      width: 500,
                      height: 500,
                    }}
                    style={"w-full object-cover h-96 shadow-lg"}
                    key={data?.response?.results[0].id}
                    photo={data?.response?.results[0]}
                  />
                )}

                <div className=" mx-auto">
                  <p className="">Tags:</p>
                  {blog?.keywords?.map((keyword, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-200 text-blue-800 p-1 m-1 rounded"
                    >
                      <a href="#">{keyword}</a>
                    </span>
                  ))}
                </div>
              </div>
              <article className="text-justify prose prose-gray mx-auto max-w-3xl py-12 dark:prose-invert">
                <h1 className="text-2xl font-bold">Introduccion:</h1>
                <p className="mb-4">{blog?.text?.introduction}</p>
                <div className=" text-justify md:grid  md:grid-cols-2 gap-1 mx-2">
                  <div className=" mr-2">
                    {!data ? (
                      "IsLoading..."
                    ) : (
                      <PhotoComp
                        size={{
                          width: 500,
                          height: 500,
                        }}
                        style={" object-cover"}
                        key={data?.response?.results[1].id}
                        photo={data?.response?.results[1]}
                      />
                    )}
                    <h1 className="text-2xl font-bold"></h1>
                    <h1 className="text-2xl font-bold">Importante</h1>
                    <p className="mb-4">{blog?.text?.development}</p>
                  </div>
                  <div>
                    <p className="mb-4">{blog?.text?.development2}</p>
                    {!data ? (
                      "IsLoading..."
                    ) : (
                      <PhotoComp
                        size={{
                          width: 500,
                          height: 500,
                        }}
                        style={" object-cover"}
                        key={data?.response?.results[2].id}
                        photo={data?.response?.results[2]}
                      />
                    )}
                  </div>
                </div>
                <h1 className="text-2xl font-bold">Conclusiones:</h1>
                <p className="mb-4">{blog?.text?.conclusions}</p>
              </article>
              {blog.images ? getImagesAPi() : "no hay imagen"}
            </div>
          </div>
        ))}
      </div>
      {check == true ? (
        <div className="bg-slate-200 text-black container mx-auto overflow-y-auto ">
          <div className="ml-2 mt-2">
            <button
              onClick={copyCode}
              className=" items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none border border-input font-medium rounded-md text-xs  right-4 top-5 z-10 flex h-6 gap-1 bg-white px-1.5 text-gray-500 shadow-none transition-colors hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
            >
              {copied == true ? "Copiado" : "Copiar"}
              {copied == true ? "✅" : "📋"}
            </button>
          </div>

          <pre ref={codeRef} className=" p-4" id="code">
            {JSON.stringify(generation, null, 2)}
          </pre>
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col w-full max-w-md b py-24 mx-auto stretch">
        <div className="fixed bottom-0 w-full  backdrop-blur-sm max-w-md  p-2 mb-8 border  border-gray-300 rounded shadow-xl">
          <div className="flex justify-between ">
            <input
              type="text"
              className="bg-transparent w-2/3 mr-1 rounded-e-md pl-1  border-orange-200 border-b-4 focus:outline-none hover:border-orange-300"
              placeholder="¿De que trata el articulo?..."
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
              }}
            />

            <button
              className={`bg-blue-700  p-1 rounded-md w-1/3 text-white disabled:bg-slate-500/20 `}
              onClick={async () => {
                const { object } = await generate(
                  "Crea un blog sobre:" + input
                );

                for await (const partialObject of readStreamableValue(object)) {
                  if (partialObject) {
                    setGeneration(partialObject);
                  }
                }
              }}
              disabled={input == "" || isLoading ? true : false}
            >
              Enviar
            </button>
          </div>
          <div>
            {isLoading && (
              <div>
                <div>Loading...</div>
                <button type="button" onClick={() => stop()}>
                  Stop
                </button>
              </div>
            )}
            <div className="text-end ">
              <label htmlFor="json"> JSON </label>
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
      </div>
    </div>
  );
}
