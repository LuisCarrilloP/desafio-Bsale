Dadas ciertas credenciales de una base de datos se han usado para vincular y generar su respectivo API REST para posterior consumo usando JSON

Al realizar una petición HTTP y dependiendo la ruta a usar, el servicio retornara un JSON con la siguiente estructura:
[GET]...localhost/api/v1/products:
```sh 
[
    {
        "id": 5,
        "name": "ENERGETICA MR BIG",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
        "price": 1490,
        "discount": 20,
        "category": 1
    },
    .
    .
    .
    
]
```

[GET]...localhost/api/v1/products/<name>:
```sh
[
    {
        "id": 34,
        "name": "ENERGETICA MONSTER RIPPER",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/mosterriper0436.jpg",
        "price": 1990,
        "discount": 0,
        "category": 1
    },
    .
    .
    .
]
```
    
[GET]...localhost/api/v1/category:
```sh
[
    {
        "id": 1,
        "name": "bebida energetica"
    },
    {
        "id": 2,
        "name": "pisco"
    },
    .
    .
    .
]
```


[GET]...localhost/api/v1/category/<id>:
```sh
[
    {
        "id": 5,
        "name": "ENERGETICA MR BIG",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
        "price": 1490,
        "discount": 20,
        "category": 1
    },
    .
    .
    .
]
    
    

Documentación Postman: https://documenter.getpostman.com/view/21288031/2s8Yevn9LG
