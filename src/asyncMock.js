//Mock API

const categorias = [
    {
        "id_cat": 1,
        "categoria": "Programación"

    },
    {
        "id_cat": 2,
        "categoria": "Arte"
    },
    {
        "id_cat": 3,
        "categoria": "Música"
    },
    {
        "id_cat": 4,
        "categoria": "Bienestar"
    }
]

const cursos = [
    {
        "id": 1,
        "nombre_curso": "Introducción a la programación",
        "horas": 40,
        "valor": 250000,
        "categoria": "Programación"
    },
    {
        "id": 2,
        "nombre_curso": "Filosofía del arte",
        "horas": 20,
        "valor": 150000,
        "categoria": "Arte"

    },
    {
        "id": 3,
        "nombre_curso": "Teoría musical",
        "horas": 40,
        "valor": 300000,
        "categoria": "Música"
    },
    {
        "id": 4,
        "nombre_curso": "Bajo eléctrico",
        "horas": 20,
        "valor": 140000,
        "categoria": "Música"
    },
    {
        "id": 5,
        "nombre_curso": "Programación en ReactJS",
        "horas": 30,
        "valor": 180000,
        "categoria": "Programación"
    },
    {
        "id": 6,
        "nombre_curso": "Excel básico",
        "horas": 10,
        "valor": 40000,
        "categoria": "Programación"
    },
    {
        "id": 7,
        "nombre_curso": "Mindfulness",
        "horas": 20,
        "valor": 25000,
        "categoria": "Bienestar"
    }
]

export const getCursos = () => {   
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(cursos) 
            reject("Error al obtener los cursos.")  
        }, 600)
        
    })   

}

export const getCategorias = () => {

    // Retorna el listado de categorías que está en la BD.

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categorias)
            reject("Error al obtener el listado de categorias")
        }
    )
    }, 600)

}

export const getCursosCategoria = (categoria) => {

    // Retorna todos los productos en una categoría definida
    let cursos_categoria = []
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for(const c of cursos) {
                if(categoria === c.categoria)
                    cursos_categoria.push(c)
            }
            resolve(cursos_categoria)
            reject("Error al obtener los cursos!")
        })
    }, 600)

}

export const getCurso = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(cursos[id])
            reject("Error al obtener el curso")
        }, 600)
    })

}