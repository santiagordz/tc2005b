const preguntas = [
  {
    id: 1,
    pregunta: "¿Qué beneficios encuentras en el estilo MVC?",
    respuesta: `El patrón arquitectónico MVC (Modelo-Vista-Controlador) presenta varios beneficios, entre los que destacan:
    Separación de responsabilidades: el patrón MVC separa las responsabilidades del modelo de datos, la vista que se presenta al usuario y el controlador que maneja la lógica de la aplicación. Esto permite una mayor organización del código, una mayor facilidad para hacer cambios y una mayor reutilización del código.
    
    Facilidad de mantenimiento: como el código está organizado de manera clara y separada, es más fácil mantener la aplicación a largo plazo, hacer cambios y agregar nuevas características.
    
    Escalabilidad: el patrón MVC se puede aplicar a aplicaciones de cualquier tamaño, lo que lo hace muy escalable. Además, la separación de responsabilidades hace que sea fácil agregar nuevos componentes y características a la aplicación sin afectar el resto de la misma.`,
  },
  {
    id: 2,
    pregunta: "¿Encuentras alguna desventaja en el estilo arquitectónico MVC?",
    respuesta: ` Aunque el patrón MVC tiene muchos beneficios, también tiene algunas desventajas, entre las que se encuentran:
    Curva de aprendizaje: el patrón MVC puede ser difícil de entender al principio, especialmente para desarrolladores nuevos o inexpertos.
    
    Complejidad: la separación de responsabilidades puede hacer que el patrón MVC sea más complejo que otros patrones, especialmente para aplicaciones pequeñas.
    
    Sobrecarga inicial: la implementación del patrón MVC puede ser más compleja que otros patrones, lo que puede aumentar el tiempo de desarrollo inicial de la aplicación.`,
  },
];

module.exports = class Pregunta {
  static fetchAll() {
    return preguntas;
  }
};
