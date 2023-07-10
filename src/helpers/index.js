export const createId = () => {
  // Genera un id random mientras se convierte en un string
  // de codigo binario de "n" posiciones y se extrae desde
  // la posición 2 de la cadena. Se adhiere el valor de la fecha
  // actual también pasada a string de código binario.
  const random = Math.random().toString(36).substr(2);
  const date = Date.now().toString(36);
  return random + date;
};

export const formatDate = (date) => {
  const newDate = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return newDate.toLocaleDateString("es-ES", options);
};
