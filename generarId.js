export const generarId = () => {
    const currentTime = new Date().getTime().toString();
    return currentTime.slice(-6); // Obtén los últimos 6 caracteres
}