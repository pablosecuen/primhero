// formValidations.js

// Validación de nombre (solo letras y longitud máxima de 20 caracteres)
export const isValidFirstName = (value:any) => /^[A-Za-z]{1,20}$/.test(value);

// Validación de apellido (solo letras y longitud máxima de 20 caracteres)
export const isValidLastName = (value:any) => /^[A-Za-z]{0,20}$/.test(value);

// Validación de correo electrónico
export const isValidEmail = (value:any) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

// Validación del mensaje (no permite inyección de código malicioso)
export const isSafeMessage = (value:any) => {
  const maliciousCodeRegex = /<(\s|\S)+\/?script(\s|\S)*>|on\w+\s*=/i;
  return !maliciousCodeRegex.test(value);
};
