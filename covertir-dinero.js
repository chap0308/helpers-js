const formatearCantidadUSD = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}
const formatearCantidadPEN = (cantidad) => {
    return cantidad.toLocaleString('es-PE', {
        style: 'currency',
        currency: 'PEN'
    })
}