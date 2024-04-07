const diccionarioIconos = {
    ahorro : "IconoAhorro",
    comida : "IconoComida",
    casa : "IconoCasa",
    gastos : "IconoGastos",
    ocio : "IconoOcio",
    salud : "IconoSalud",
    suscripciones : "IconoSuscripciones"
}
const productos = [
    {
        nombre : 'Celular',
        categoria : 'ahorro',
        precio : 1500
    },
    {
        nombre : 'Vendas',
        categoria : 'salud',
        precio : 500
    }
]

productos.forEach(producto => {
    console.log(diccionarioIconos[producto.categoria]);//*diccionarioIconos["ahorro"] = "IconoAhorro"
})