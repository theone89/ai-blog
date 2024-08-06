# Blog AI

Blog AI es una innovadora herramienta de generación de artículos que se basa en un prompt definido por el usuario. A partir de la información proporcionada, la aplicación edita tanto el contenido textual como las imágenes, presentándolos al usuario en un formato predefinido. Las imágenes son seleccionadas automáticamente por la IA en función de una palabra clave relevante al contexto proporcionado por el usuario, garantizando una integración coherente y atractiva.

## Características

- **Generación de Contenido**: Crea artículos de blog personalizados basados en un prompt proporcionado por el usuario.
- **Selección de Imágenes**: Utiliza la IA para seleccionar imágenes relevantes y de alta calidad desde Unsplash.
- **Configuración Flexible**: Permite a los usuarios configurar modelos de generación de texto y temperatura para adaptar la salida de la IA.
- **Interfaz Intuitiva**: Una interfaz de usuario fácil de usar que guía a los usuarios a través del proceso de generación de contenido.

## Tecnologías Utilizadas

- **Next.js**: Framework de React para aplicaciones web.
- **Vercel AI SDK**: SDK para integrar capacidades de inteligencia artificial.
- **Unsplash API**: API para obtener imágenes de alta calidad.
- **OpenAI API**: API para generar contenido textual basado en prompts.

## Requisitos Previos

- Node.js (versión 14.x o superior)
- npm o yarn
- Cuenta en OpenAI para obtener la API Key
- Cuenta en Unsplash para obtener la API Key

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/theone89/blog-ai.git
   cd blog-ai
   ```

2. Instala las dependencias:
   ```bash
   pnpm install
   # o
   yarn install
   ```

## Configuración de las API Keys

Las API Keys de OpenAI y Unsplash se configuran directamente en la interfaz de usuario del frontend. Sigue estos pasos para configurar tus claves:

1. Abre la aplicación en tu navegador.
2. Navega a la sección de configuración.
3. Introduce tus API Keys de OpenAI y Unsplash en los campos correspondientes.
4. Guarda la configuración.

## Uso

1. Inicia el servidor de desarrollo:

   ```bash
   pnpm run dev
   # o
   yarn dev
   ```

2. Abre http://localhost:3000 en tu navegador para ver la aplicación.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que te gustaría hacer.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Contacto

Para cualquier consulta o feedback, por favor contacta a través de [correo electrónico](mailto:contacto@blogai.com) o abre un issue en este repositorio.

---

¡Gracias por tu interés en Blog AI! Esperamos que encuentres esta herramienta útil y fácil de usar.
