"use client";

import { useRef, useState, Fragment } from "react";
import { generate } from "./actions";
import { readStreamableValue } from "ai/rsc";
import { z } from "zod";
import Image from "next/image";
import { createApi } from "unsplash-js";
import IdeaICON from '/public/ideas-repec.svg'

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



function Clock1Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 14.5 8" />
    </svg>
  )
}


function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function Link2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </svg>
  )
}


function Music3Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="18" r="4" />
      <path d="M16 18V2" />
    </svg>
  )
}
/**
 * This is the main function of the Home component. It handles the user input, generates a blog post, and displays the content.
 *
 * @returns {JSX.Element} - The Home component.
 */
export default function Home() {
  const [data, setPhotosResponse] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [check, setCheck] = useState(false);
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [generation, setGeneration] = useState();



  /**
   * This function handles the checkbox change event. It updates the 'check' state with the new checkbox value.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event.
   */
  function handleChange(e) {
    const { checked } = e.target;
    setCheck(checked);
  }

  /**
   * This function copies the JSON representation of the 'generation' state to the clipboard.
   * It uses the 'navigator.clipboard' API to write the text to the clipboard.
   */
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

  /**
   * This function fetches images from the Unsplash API based on the 'generation' state.
   * It uses the 'unsplash-js' library to make API requests.
   */
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
        {!generation ? (
          <div className="grid  pt-12 justify-center">
            <h1 className="text-center font-bold text-2xl">Blog AI</h1>
            <h3 className="text-justify">Blog AI es una innovadora herramienta de generación de artículos que se basa en un prompt definido por el usuario. A partir de la información proporcionada, la aplicación edita tanto el contenido textual como las imágenes, presentándolos al usuario en un formato predefinido. Las imágenes son seleccionadas automáticamente por la IA en función de una palabra clave relevante al contexto proporcionado por el usuario, garantizando una integración coherente y atractiva.</h3>
            <div className="flex items-center">
              <Image
                src="/ideas-repec.svg"
                alt="Vercel Logo"
                className="bg-primary text-primary-foreground rounded-full flex items-center justify-center"
                width={100}
                height={100}
                priority
              />

              <div>
                <h3 className="text-lg font-medium">Proporcionar la idea:</h3>
                <p className="text-muted-foreground">Introduce la idea del blog en el campo de texto del prompt.</p>
              </div>
            </div>
            <div className="flex items-center">
              <Image
                src="/file-search-outlined.svg"
                alt="Vercel Logo"
                className="bg-primary text-primary-foreground rounded-full flex items-center justify-center"
                width={100}
                height={100}
                priority
              />

              <div>
                <h3 className="text-lg font-medium">Generar y revisar:</h3>
                <p className="text-muted-foreground"> La app generará el contenido. Revisa y personaliza según tus preferencias.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Image
                src="/cursor-hand-click-line.svg"
                alt="Vercel Logo"
                className="bg-primary text-primary-foreground rounded-full flex items-center justify-center"
                width={100}
                height={100}
                priority
              />

              <div>
                <h3 className="text-lg font-medium">Ver el JSON: </h3>
                <p className="text-muted-foreground"> Accede a la opción para ver el contenido en formato JSON.</p>
              </div>
            </div>
            <div className="flex items-center">
              <Image
                src="/copy.svg"
                alt="Vercel Logo"
                className="bg-primary text-primary-foreground rounded-full flex items-center justify-center"
                width={100}
                height={100}
                priority
              />

              <div>
                <h3 className="text-lg font-medium">Copiar el JSON:</h3>
                <p className="text-muted-foreground"> Copia la información en formato JSON para usarla en otras aplicaciones.</p>
              </div>
            </div>
            <div className="flex items-center">
              <Image
                src="/flag.svg"
                alt="Vercel Logo"
                className="bg-primary text-primary-foreground rounded-full flex items-center justify-center"
                width={100}
                height={100}
                priority
              />

              <div>
                <h3 className="text-lg font-medium">Verificar el resultado final</h3>
                <p className="text-muted-foreground">Asegúrate de que el resultado final cumpla con tus expectativas.</p>
              </div>
            </div>
          </div>
        ) : ''}
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
                {!data?.response?.results[0].id ? (
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
                    {!data?.response?.results[1].id ? (
                      "IsLoading..."
                    ) : (
                      <PhotoComp
                        size={{
                          width: 500,
                          height: 500,
                        }}
                        style={" object-cover"}
                        key={data?.response?.results[1]?.id}
                        photo={data?.response?.results[1]}
                      />
                    )}
                    <h1 className="text-2xl font-bold"></h1>
                    <h1 className="text-2xl font-bold">Desarrollo:</h1>
                    <p className="mb-4">{blog?.text?.development}</p>
                  </div>
                  <div>
                    <p className="mb-4">{blog?.text?.development2}</p>
                    {!data?.response?.results[2].id ? (
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
