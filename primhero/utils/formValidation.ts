// formValidations.js

// Validación de nombre y apellido (solo letras)
export const isValidName = (value:any) => /^[A-Za-z\s]+$/.test(value);

// Validación de correo electrónico
export const isValidEmail = (value:any) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

// Validación de contenido HTML o caracteres de riesgo en el mensaje
export const isSafeMessage = (value:any) => {
  const htmlRegex = /<\/?[a-z][\s\S]*>/i;
  return !htmlRegex.test(value);
};
