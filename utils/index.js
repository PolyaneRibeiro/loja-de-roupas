import { useRouter } from "next/router"

export const mockPecasExclusivas = [
    {
        roupa: 'BODY SUÉCIA',
        valor: 'R$199,99',
        img: './body.jpg'
    },
    {
        roupa: 'BLAZER EUROPA',
        valor: 'R$209,90',
        img: './blazer.jpg'
    },

    {
        roupa: 'BOTA CHICO BENTO',
        valor: 'R$199,99',
        img: './bota.jpg'
    },
    {
        roupa: 'JEANS MOM',
        valor: 'R$149,99',
        img: './jeans.jpg'
    },
]

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
