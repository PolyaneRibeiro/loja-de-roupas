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
        value: 'R$199,99',
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

export const mockProduto = {
    roupa: 'BODY SUÉCIA',
    valor: 'R$199,99',
    img: './body.jpg',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus nulla viverra, cursus nulla eu, ultricies nulla. Nulla facilisi. Nam felis massa, gravida non condimentum eget, vulputate eget eros. Maecenas id nibh eget urna venenatis hendrerit nec ac nibh. Proin fermentum erat eu mi dictum congue'
}


export const Submit = (page) => {

    if (typeof window !== "undefined") {
        window.location.href = page
    }

}