import React from 'react';
import Image from 'next/image';

function InfoApp() {
    return (
        <div className="pt-12 justify-center w-full">
            <h1 className="text-center font-bold text-4xl">Blog AI</h1>
            <div>
                <h2 className="text-lg text-start hover:underline transition duration-500 hover:underline-offset-8 font-extrabold p-6">¿Qué es?</h2>
                <h3 className="text-justify">Blog AI es una innovadora herramienta de generación de artículos que se basa en un prompt definido por el usuario. A partir de la información proporcionada, la aplicación edita tanto el contenido textual como las imágenes, presentándolos al usuario en un formato predefinido. Las imágenes son seleccionadas automáticamente por la IA en función de una palabra clave relevante al contexto proporcionado por el usuario, garantizando una integración coherente y atractiva.</h3>
            </div>
            <div className="w-full">
                <h2 className="text-lg text-start hover:underline transition duration-500 hover:underline-offset-8 font-extrabold p-6">¿Cómo se usa?</h2>
                <div className="flex items-center">
                    <Image
                        src="/key.svg"
                        alt="Key icon"
                        className="bg-primary text-primary-foreground rounded-full flex items-center justify-center"
                        width={100}
                        height={100}
                        priority
                    />
                    <div>
                        <h3 className="text-lg font-medium">Llaves de acceso:</h3>
                        <p className="text-muted-foreground">Necesitas una API key de <a className="text-blue-800 hover:text-blue-500 underline" href="https://openai.com/api/">OpenAI</a> y <a className="text-blue-800 hover:text-blue-500 underline" href="https://unsplash.com/developers">Unsplash</a></p>
                    </div>
                </div>
                <div className="flex items-center">
                    <Image
                        src="/tools.svg"
                        alt="Tools icon"
                        className="bg-primary text-primary-foreground rounded-full flex items-center justify-center"
                        width={100}
                        height={100}
                        priority
                    />
                    <div>
                        <h3 className="text-lg font-medium">Ajusta la generación de IA:</h3>
                        <p className="text-muted-foreground">Escoge el modelo y la temperatura</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <Image
                        src="/ideas-repec.svg"
                        alt="Ideas icon"
                        className="bg-primary text-primary-foreground rounded-full flex items-center justify-center"
                        width={100}
                        height={100}
                        priority
                    />
                    <div>
                        <h3 className="text-lg font-medium">Proporciona la idea:</h3>
                        <p className="text-muted-foreground">Introduce la idea del blog en el campo de texto del prompt.</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <Image
                        src="/file-search-outlined.svg"
                        alt="Search icon"
                        className="bg-primary text-primary-foreground rounded-full flex items-center justify-center"
                        width={100}
                        height={100}
                        priority
                    />
                    <div>
                        <h3 className="text-lg font-medium">Genera y revisa:</h3>
                        <p className="text-muted-foreground">La aplicación generará el contenido. Revisa y personaliza según tus preferencias.</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <Image
                        src="/cursor-hand-click-line.svg"
                        alt="Cursor click icon"
                        className="bg-primary text-primary-foreground rounded-full flex items-center justify-center"
                        width={100}
                        height={100}
                        priority
                    />
                    <div>
                        <h3 className="text-lg font-medium">Ver el JSON:</h3>
                        <p className="text-muted-foreground">Accede a la opción para ver el contenido en formato JSON.</p>
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
                        <h3 className="text-lg font-medium">Copia el JSON:</h3>
                        <p className="text-muted-foreground">Copia la información en formato JSON para usarla en otras aplicaciones.</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <Image
                        src="/flag.svg"
                        alt="Flag icon"
                        className="bg-primary text-primary-foreground rounded-full flex items-center justify-center"
                        width={100}
                        height={100}
                        priority
                    />
                    <div>
                        <h3 className="text-lg font-medium">Verifica el resultado final:</h3>
                        <p className="text-muted-foreground">Asegúrate de que el resultado final cumpla con tus expectativas.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoApp;