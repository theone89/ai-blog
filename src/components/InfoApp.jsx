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
                        alt="search ico"
                        className="bg-primary text-primary-foreground rounded-full flex items-center justify-center"
                        width={100}
                        height={100}
                        priority
                    />
                    <div>
                        <h3 className="text-lg font-medium">Generar y revisar:</h3>
                        <p className="text-muted-foreground">La app generará el contenido. Revisa y personaliza según tus preferencias.</p>
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
                        <h3 className="text-lg font-medium">Copiar el JSON:</h3>
                        <p className="text-muted-foreground">Copia la información en formato JSON para usarla en otras aplicaciones.</p>
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
    );
}

export default InfoApp;