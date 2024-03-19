const products= [
    {
        "id": "1",
        "nombre": "Yerbera de cerámica",
        "descripcion": "Yerbera de cerámica con diseño tradicional.",
        "precio": 1200.00,
        "imagen": "https://www.latiendarafaela.com.ar/media/productos/WhatsApp_Image_2021-04-27_at_2.33.09_PM_5.jpeg",
        "categoria": "yerberas",
        "stock": 7
        
    },
    {
        "id": "2",
        "nombre": "Mate de calabaza",
        "descripcion": "Mate tradicional hecho a mano con calabaza natural.",
        "precio": 1500.00,
        "imagen": "https://acdn.mitiendanube.com/stores/001/104/123/products/1x1-imperial-cueroliso-virolaapliques-50888c50b785b4a69f16964523815846-1024-1024.png",
        "categoria": "mates",
        "stock": 10
    },
    {
        "id": "3",
        "nombre": "Termo de acero inoxidable",
        "descripcion": "Termo de acero inoxidable de alta calidad con capacidad de 1 litro.",
        "precio": 2000.00,
        "imagen": "https://acdn.mitiendanube.com/stores/001/104/123/products/termomediamanija1-26f4ffa3da8ea6bfde16576491960196-1024-1024.jpg",
        "categoria": "termos",
        "stock": 5
    },
]

export const getProducts = () =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}

export const getProductByID = (productId) =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=> prod.id===productId))
        }, 500)
    })
}