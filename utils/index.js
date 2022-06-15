export const mockMarcas = [
    './marca1.jpg', './marca2.jpg', './marca3.jpg', './marca4.jpg', './marca5.jpg', './marca6.jpg'
]

export const mockMeuLateral = [
    {
        categoria: 'camisetas'
    },
    {
        categoria: 'cropped'
    },
    {
        categoria: 'calças'
    },
    {
        categoria: 'casacos'
    },
    {
        categoria: 'body'
    },
    {
        categoria: 'peças exclusivas'
    },
]


export const Submit = (page) => {
    if (typeof window !== "undefined") {
        window.location.href = page
    }
}

export const TratarValor = (value) => {
    const valorTratado = value?.toLocaleString("pt-br", {
        minimumFractionDigits: 2,
    })
    return valorTratado
}