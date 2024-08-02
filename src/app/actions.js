'use server'
import { streamObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { createStreamableValue } from "ai/rsc";
import { z } from "zod";

/**
 * This function generates a blog post content based on the provided input.
 * It uses the OpenAI API to generate the content and returns it as a stream.
 *
 * @param {string} input - The input text for generating the blog post content.
 * @returns {object} - An object containing the generated blog post content as a stream.
 */


export async function generate(input) {
    "use server";

    const stream = createStreamableValue();

    (async () => {
        const { partialObjectStream } = await streamObject({
            model: openai("gpt-4o-mini"),
            system: `Define una estrategia: Antes de comenzar a escribir, es importante tener una estrategia clara. Esto incluye entender a tu público objetivo, los objetivos de tu blog y cómo planeas alcanzarlos1.
Selecciona un tema principal: Elige un tema que sea relevante para tu audiencia y que esté alineado con los objetivos de tu blog1.
Considera todo tu SEO on-page: Esto incluye el uso de palabras clave en tus títulos, subtítulos y contenido del blog. También debes considerar la meta descripción, las etiquetas alt de las imágenes y la estructura de las URL12.
Organiza tu contenido: Una buena estructura de contenido facilita la lectura y ayuda a los motores de búsqueda a entender de qué trata tu artículo1.
Desarrolla el contenido de tu blog: Asegúrate de que tu contenido sea relevante, útil e interesante para tu audiencia. Recuerda que el contenido de calidad es clave para el SEO1.
Escribe una introducción atractiva: La introducción es lo primero que tus lectores verán, así que asegúrate de que sea interesante y atractiva1.
Inserta llamadas a la acción (CTA): Las CTA son importantes para guiar a tus lectores hacia la acción que deseas que realicen1.
Revisa, corrige y edita tu publicación: Antes de publicar, siempre es buena idea revisar tu contenido para asegurarte de que no hay errores y de que todo tiene sentido1.
Mide el rendimiento de tu blog: Utiliza herramientas de análisis para entender cómo está funcionando tu blog y dónde puedes hacer mejoras1.`,
            prompt: input,

            schema: z.object({
                blogs: z.array(
                    z.object({
                        title: z.string().describe("Titulo del blog"),
                        subtitle: z.string().describe("Subitulo del blog"),
                        date: z.string().describe("Fecha aleatoria"),
                        author: z.string().describe("Un nombre aleatorio"),
                        images: z
                            .string()
                            .describe("una palabra para una imagen blog no puden ser palabras compuestas"),
                        keywords: z.array(
                            z.string().describe("palabras clave del blog  entre 3 y 10")
                        ),
                        text: z.object({
                            introduction: z.string().describe("Introduccion del blog"),
                            development: z
                                .string()
                                .describe("Primera parte del Desarrollo del blog"),
                            development2: z
                                .string()
                                .describe("continuacion del Desarrollo del blog"),
                            conclusions: z.string().describe("Conclusiones del blog"),
                        }),
                    })
                ),
            }),
        });

        for await (const partialObject of partialObjectStream) {
            stream.update(partialObject);
        }

        stream.done();
    })();

    return { object: stream.value };
}
