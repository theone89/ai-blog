# Blog AI

Blog AI es una innovadora herramienta de generación de artículos que se basa en un prompt definido por el usuario. A partir de la información proporcionada, la aplicación edita tanto el contenido textual como las imágenes, presentándolos al usuario en un formato predefinido. Las imágenes son seleccionadas automáticamente por la IA en función de una palabra clave relevante al contexto proporcionado por el usuario, garantizando una integración coherente y atractiva.

## Tecnologías Utilizadas

- **Next.js**: Framework de React para aplicaciones web.
- **Vercel AI SDK**: SDK para integrar capacidades de inteligencia artificial.
- **Unsplash API**: API para obtener imágenes de alta calidad.

## Requisitos Previos

- Node.js
- npm o yarn
- Cuenta en OpenAI para obtener la API Key
- Cuenta en Unsplash para obtener la API Key

## Instalación

1. Clona el repositorio:
    ```bash
    [git clone https://github.com/tu-usuario/blog-ai.git](https://github.com/theone89/blog-ai)
    cd blog-ai
    ```

2. Instala las dependencias:
    ```bash
    npm install
    # o
    yarn install
    ```

3. Configura las variables de entorno:
    Crea un archivo `.env.local` en la raíz del proyecto y añade tus API Keys de OpenAI y Unsplash:
    ```env
    NEXT_PUBLIC_OPENAI_API_KEY=tu-api-key
    NEXT_PUBLIC_UNSPLASH_API_KEY=tu-api-key
    ```

## Uso

1. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    # o
    yarn dev
    ```

2. Abre http://localhost:3000 en tu navegador para ver la aplicación.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que te gustaría hacer.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
