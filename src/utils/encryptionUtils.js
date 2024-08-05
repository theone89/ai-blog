const SECURITY_WORD = 'miPalabraSecreta';

export const encodeApiKey = (apiKey) => {
    const combined = apiKey + SECURITY_WORD;
    return btoa(combined);
};

export const decodeApiKey = (encodedApiKey) => {
    // Verifica que la cadena codificada sea válida
    if (!isValidBase64(encodedApiKey)) {
        throw new Error('La cadena codificada no es válida');
    }
    const combined = atob(encodedApiKey);
    return combined.slice(0, -SECURITY_WORD.length);
};

// Función para validar si una cadena es válida en base64
const isValidBase64 = (str) => {
    try {
        return btoa(atob(str)) === str;
    } catch (err) {
        return false;
    }
};