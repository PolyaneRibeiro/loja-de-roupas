export const mockMarcas = [
    './marca1.jpg', './marca2.jpg', './marca3.jpg', './marca4.jpg', './marca5.jpg', './marca6.jpg'
]

export const mockTendencia = [
    {
        titulo: 'Cropped de renda',
        descricao: 'O cropped de renda é uma peça delicada e que voltou com força nesse verão e faz a cabeça de muitas amantes da moda, já que ele pode compor diversos estilos e te levar a vários tipos de ambientes super bem vestida. Além de prático e bonito, o seu modelo vai trazer um ar feminino e sensual. Uma regrinha de ouro para se usar essa peça, é lembrar de tomar cuidado com a transparência. Se optar por um que tenha forro garanta, que sejam da mesma cor (forro e pano da blusinha) caso não, escolha um top que combine. Esta é uma peça tão eclética que pode servir a vários gostos. Por exemplo, se você deseja destacar os seios, ou a barriga, poderá encontrar modelos que de cropped que te ajudarão nessa missão. Temos inúmeras opções para elaborar looks criativos e super elegantes com essas peças lindas que você encontra por aqui e essas cores bastante tradicionais e super em alta nessa época do ano!',
        imagem: './tendencias/cropped.jpg',
        looks: [
            {
                img: './loja/cropped1.jpg',
                texto: 'opcao1'
            },
            {
                img: './loja/cropped1.jpg',
                texto: 'opcao1'
            },
            {
                img: './loja/cropped1.jpg',
                texto: 'opcao'
            },
            {
                img: './loja/cropped1.jpg',
                texto: 'opcao1'
            }
        ]
    }
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