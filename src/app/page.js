"use client";

import { useRef, useState, Fragment } from "react";
import { generate } from "./actions";
import { readStreamableValue } from "ai/rsc";
import { set, z } from "zod";
import Image from "next/image";
import { createApi } from "unsplash-js";
import { useEffect } from "react";

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

function InfoApp() {
  return (
    <div className="  pt-12 justify-center w-full">
      <h1 className="text-center font-bold text-4xl">Blog AI</h1>
      <div>
        <h2 className="text-lg text-start hover:underline transition duration-500  hover:underline-offset-8  font-extrabold p-6">¿Que es?</h2>
        <h3 className="text-justify">Blog AI es una innovadora herramienta de generación de artículos que se basa en un prompt definido por el usuario. A partir de la información proporcionada, la aplicación edita tanto el contenido textual como las imágenes, presentándolos al usuario en un formato predefinido. Las imágenes son seleccionadas automáticamente por la IA en función de una palabra clave relevante al contexto proporcionado por el usuario, garantizando una integración coherente y atractiva.</h3>
      </div>
      <div className="w-full">
        <h2 className="text-lg text-start hover:underline transition duration-500  hover:underline-offset-8  font-extrabold p-6">¿Como se usa?</h2>
        <div className="flex items-center ">
          <Image
            src="/ideas-repec.svg"
            alt="Vercel Logo"
            className="bg-primary text-primary-foreground rounded-full flex items-center justify-center"
            width={100}
            height={100}
            priority
          />

          <div >
            <h3 className="text-lg font-medium">Proporcionar la idea:</h3>
            <p className="text-muted-foreground">Introduce la idea del blog en el campo de texto del prompt.</p>
          </div>
        </div>
        <div className="flex items-center">
          <Image
            src="/file-search-outlined.svg"
            alt="search ico"
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
            alt="cursor-hand-click-line"
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
            alt="Copy icon"
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

    </div>
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
  const [generation, setGeneration] = useState(/* {
    "blogs": [
      {
        "title": "Descubriendo Cuba: Un Paraíso en el Caribe",
        "subtitle": "Explorando la cultura, historia y belleza natural de la isla",
        "date": "2023-10-01",
        "author": "Juan Pérez",
        "images": "cuba",
        "keywords": [
          "Cuba",
          "viajes",
          "cultura",
          "historia",
          "playas",
          "gastronomía",
          "música",
          "naturaleza"
        ],
        "text": {
          "introduction": "Cuba, la joya del Caribe, es un destino que atrae a millones de turistas cada año. Con su rica historia, vibrante cultura y paisajes impresionantes, la isla ofrece una experiencia única que combina tradición y modernidad. En este blog, exploraremos los aspectos más destacados de Cuba, desde sus playas de arena blanca hasta su música contagiosa y su deliciosa gastronomía.",
          "development": "La historia de Cuba es fascinante y compleja. Desde la llegada de Cristóbal Colón en 1492 hasta la revolución de 1959, la isla ha sido testigo de numerosos eventos que han moldeado su identidad. La Habana, su capital, es un reflejo de esta historia, con su arquitectura colonial y su vibrante vida urbana. Pasear por el Malecón, disfrutar de un mojito en una terraza y explorar el casco antiguo son actividades imperdibles para cualquier visitante.",
          "development2": "Además de su historia, Cuba es famosa por sus playas paradisíacas. Varadero, con sus aguas turquesas y arenas blancas, es uno de los destinos más populares. Pero no te limites a Varadero; lugares como Playa Paraiso en Cayo Largo y las playas de Cayo Coco también ofrecen paisajes de ensueño. La gastronomía cubana es otro aspecto que no puedes dejar de lado. Platos como el Ropa Vieja, el Arroz con Pollo y el Tostón son solo algunas de las delicias que podrás degustar. Y, por supuesto, la música cubana, con ritmos como el son, la salsa y el bolero, te acompañará en cada rincón de la isla.",
          "conclusions": "Cuba es un destino que ofrece una mezcla única de historia, cultura y belleza natural. Ya sea que busques relajarte en sus playas, explorar su rica historia o disfrutar de su vibrante música, la isla tiene algo para todos. No esperes más, ¡planifica tu viaje a Cuba y descubre todo lo que este paraíso caribeño tiene para ofrecer!"
        }
      }
    ]
  } */);



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
        query: `${generation?.blogs[0]?.images}`,
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
      <div className="container mx-auto px-4 ">
        {!generation ?
          <InfoApp />
          : (<div className="  pt-12 justify-center w-full">
            <h1 className="text-center font-bold text-4xl">Blog AI</h1></div>)
        }
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
                {!data?.response?.results[0]?.id ? (
                  "IsLoading..."
                ) : (
                  <PhotoComp
                    size={{
                      width: 500,
                      height: 500,
                    }}
                    style={"w-full object-cover h-96 shadow-lg"}
                    key={data?.response?.results[0]?.id}
                    photo={data?.response?.results[0]}
                  />
                )}

                <div className=" mx-auto">
                  <p className="">Tags:</p>
                  {blog?.keywords?.map((keyword, index) => (
                    <div
                      key={index}
                      className="inline-block"
                    >
                      <button onClick={async () => {
                        setIsLoading(true);
                        const { object } = await generate(
                          "Crea un blog sobre:" + keyword
                        );

                        for await (const partialObject of readStreamableValue(object)) {
                          if (partialObject) {
                            setGeneration(partialObject);
                          }
                        }
                        setIsLoading(false)
                      }} className=" bg-blue-200 hover:bg-blue-400 hover:shadow-xl hover:scale-105 shadow-blue-900 hover:animate-pulse text-blue-800 p-1 m-1 rounded">{keyword}</button>
                    </div>
                  ))}
                </div>
              </div>
              <article className="text-justify prose prose-gray mx-auto max-w-3xl py-12 dark:prose-invert">
                <p className="mb-4"><span className="mb-4 font-semibold text-xl">{blog?.text?.introduction?.split(' ')[0]}</span> {blog?.text?.introduction?.split(" ").slice(1).join(" ")}</p>
                <div className=" text-justify md:grid  md:grid-cols-2 gap-1 mx-2">
                  <div className=" mr-2">
                    {!data?.response?.results[1]?.id ? (
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
                    <p className="mb-4"><span className="mb-4 font-semibold text-lg">{blog?.text?.development?.split(' ')[0]}</span> {blog?.text?.development?.split(" ").slice(1).join(" ")}</p>
                  </div>
                  <div>
                    <p className="mb-4"><span className="mb-4 font-semibold text-lg">{blog?.text?.development2?.split(' ')[0]}</span> {blog?.text?.development2?.split(" ").slice(1).join(" ")}</p>
                    {!data?.response?.results[2]?.id ? (
                      "IsLoading..."
                    ) : (
                      <PhotoComp
                        size={{
                          width: 500,
                          height: 500,
                        }}
                        style={" object-cover"}
                        key={data?.response?.results[2]?.id}
                        photo={data?.response?.results[2]}
                      />
                    )}
                  </div>
                </div>
                <p className="mb-4"><span className="mb-4 font-semibold text-lg">{blog?.text?.conclusions?.split(' ')[0]}</span> {blog?.text?.conclusions?.split(" ").slice(1).join(" ")}</p>
              </article>
              {generation?.blogs[0]?.images ? getImagesAPi() : "No hay Imagenes"}

            </div>
          </div>
        ))
        }
      </div >
      {
        check == true ? (
          <div className="bg-slate-200 text-black container mx-auto overflow-y-auto ">
            <div className="ml-2 mt-2">
              <button
                onClick={copyCode}
                className=" items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none border border-input font-medium rounded-md text-xs  right-4 top-5 z-10 flex h-6 gap-1 bg-white px-1.5 text-gray-500 shadow-none transition-colors hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
              >
                {copied == true ? "Copiado" : "Copiar"}
                {copied == true ? (<Image
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

            <pre ref={codeRef} className=" p-4" id="code">
              {JSON.stringify(generation, null, 2)}
            </pre>
          </div>
        ) : (
          ""
        )
      }
      <div className="flex flex-col w-full max-w-md b py-24 mx-auto stretch ">
        <div className="fixed bottom-0 w-full hover:border-blue-700   backdrop-blur-sm max-w-md border-4 p-2 mb-8 border-double border-gray-200 rounded shadow-xl shadow-black/40 border-opacity-90 ">
          <div className="flex justify-between ">
            <input
              type="text"
              className="bg-transparent w-2/3 mr-1 rounded-e-md pl-1  border-orange-400 border-b-4 focus:outline-none hover:border-orange-600"
              placeholder="¿De que trata el articulo?..."
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
              }}
            />

            <button
              className={`bg-blue-700  p-1 rounded-md w-1/3 text-white disabled:bg-slate-500/20 disabled:border disabled:border-double`}
              onClick={async () => {
                setIsLoading(true);
                const { object } = await generate(
                  "Crea un blog sobre:" + input
                );

                for await (const partialObject of readStreamableValue(object)) {
                  if (partialObject) {
                    setGeneration(partialObject);
                  }
                }




                setIsLoading(false)
              }}
              disabled={input == "" || isLoading ? true : false}
            >
              Enviar
            </button>
          </div>
          <div className=" flex justify-between items-center">
            <a href="#" className="font-bold text-gray-600 hover:text-gray-900"><Image
              src="/enoceantool.svg"
              alt="Vercel Logo"
              className="bg-primary hover:rotate-45 text-primary-foreground rounded-full flex items-center justify-center"
              width={50}
              height={50}
              priority
            /></a>
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
      </div>
    </div >
  );
}
