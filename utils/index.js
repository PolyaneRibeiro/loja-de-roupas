export const mockMarcas = [
    {
        logo: './marca1.jpg'
    },
    {
        logo: './marca2.jpg'
    },
    {
        logo: './marca3.jpg'
    },
    {
        logo: './marca4.jpg'
    },
    {
        logo: './marca5.jpg'
    },
    {
        logo: './marca6.jpg'
    },
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