export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha);
    // const horaCompleta = fechaNueva.toLocaleTimeString();//* 11:17:39
    const hora = fechaNueva.getHours();
    const minutos = fechaNueva.getMinutes();
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones) + ' ' + '-' + ' ' + hora + ':' + minutos + 'hs';
}
