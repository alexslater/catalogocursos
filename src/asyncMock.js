// Mock del backend para el proyecto.

const cursos = [
    {
        "id": 1,
        "nombre_curso": "Introducción a la programación",
        "horas": 40,
        "valor": 250000
    },
    {
        "id": 2,
        "nombre_curso": "Filosofía del arte",
        "horas": 20,
        "valor": 150000
    },
    {
        "id": 3,
        "nombre_curso": "Teoría musical",
        "horas": 40,
        "valor": 300000
    },
    {
        "id": 4,
        "nombre_curso": "Bajo eléctrico",
        "horas": 20,
        "valor": 140000
    },
    {
        "id": 5,
        "nombre_curso": "Programación en ReactJS",
        "horas": 30,
        "valor": 180000
    },
    {
        "id": 6,
        "nombre_curso": "Excel básico",
        "horas": 10,
        "valor": 40000
    },
    {
        "id": 7,
        "nombre_curso": "Mindfulness",
        "horas": 20,
        "valor": 25000
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
 
export const getCurso = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(cursos[id])
            reject("Error al obtener el curso")
        }, 600)
    })

}