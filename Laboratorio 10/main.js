const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write(
      `
            <h1>Home Page</h1>
            <hr>
            <a href="/laboratorio1-santiago">LAB 1 - Santiago</a>
            <a href="/laboratorio1-juanpablo">LAB 1 - Juan Pablo</a>
            <a href="/post">POST</a>
            `
    );
  } else if (req.url === "/laboratorio1-santiago") {
    res.write(
      `
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <header>
            <h2>
                Santiago Rodriguez Murialdo<br />A01704109<br />santiromur@gmail.com
            </h2>
            <hr>
            </header>
        <section>
        <ul>
            <li>
                <strong>¿Cuál es la diferencia entre Internet y la World Wide Web?</strong>
                <p>
                    Internet es una inmensa red de computadoras alrededor de todo el mundo conectadas entre sí.
                    <br>
                    En cambio, la web (la World Wide Web) es una enorme colección de páginas que se asienta sobreesa red de computadoras.            
                </p>
            </li>
            <li>
                <strong>¿Cuáles son las partes de un URL?</strong>
                <p>
                    URL significa Uniform Resource Locator y es la dirección única y específica que se asigna a cada uno de los recursos disponibles de la World Wide Web para que puedan ser localizados por el navegador y visitados por los usuarios.
                    <br><br>
                    Ya hemos hablado de que la dirección URL será la encargada de guiar al navegador hacia la información que demanda el navegante. Pero esta dirección contiene diferentes partes o informaciones, cada una con unas funciones determinadas. El formato de las URL suele ser el siguiente: https://www.edix.com/es/instituto/videos-gratis/
                    <br><br>
                    A partir del ejemplo, estos son los elementos de la URL:
                    <br>
                    <ul>
                    <li>Host: normalmente, para el protocolo http, el host es: www. <br></li>
                    <li>Dominio: corresponde con el nombre del dominio de cada sitio web, como: edix.com. <br></li>
                    <li>Puerto: define el nombre del puerto según el host. Para el protocolo http, el puerto por defecto es 80, pero esta parte suele omitirse. <br></li>
                    <li>Directorio (o ruta): define el camino que se debe seguir en el servidor. Por ejemplo: blog. <br></li>
                    <li>Nombre de archivo: define más detalladamente las características del documento: videos-gratis. <br></li>
                    </ul>
                </p>
            </li>
            <li>
                <strong>¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</strong>
                <p>
                    Los métodos PUT, POST y DELETE se pueden utilizar para modificar los recursos de objeto de negocio y los recursos de estructura de objeto. Sin embargo, las reglas empresariales de un objeto pueden impedir que se actualice mediante una solicitud de la API de REST. Por ejemplo, una solicitud DELETE en un recurso de orden de trabajo puede fallar si las validaciones del objeto de negocio impiden las supresiones a causa del estado actual del objeto de negocio.
                </p>
            </li>
            <li>
                <strong>¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?</strong>
                <p>
                    Post
                </p>
            </li>
            <li>
                <strong>¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</strong>
                <p>
                    Get
                </p>
            </li>
            <li>
                <strong>Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</strong>
                <p>
                    Código 200: esto no es un error HTTP, sino todo lo contrario. Significa que la página ha cargado de forma correcta.
                    En general todos los códigos de estado que sean 2XX (un 2 seguido de 2 números) indican que la carga ha ido bien.
                    <br>
                    Por tanto, si el HTTP status de tu página web es 200 todo va como la seda. 
                </p>
            </li>
            <li>
                <strong>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?</strong>
                <p>
                    No, ya que el error 404 es posiblemente el error más común. Indica que la página que se está tratando de cargar no se ha encontrado. <br>
                    Esto puede ocurrir porque hemos escrito mal la dirección de la página web que queremos cargar, que hemos cargado la página a través de un enlace erróneo, o que la página sí que existió en su momento pero ahora ya no.
                </p>
            </li>
            <li>
                <strong>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</strong>
                <p>
                    Si, ya que indica un error interno, lo que se puede traducir que la página web tiene algún error en el código, por lo que el servidor no puede generar el código HTML para devolver al usuario.
                    Por ejemplo, si en un WordPress existe un error de php, se podría producir ese http error 500.
                </p>
            </li>
            <li>
                <strong>¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.</strong>
                <p>
                    Los tags y atributos desaprobados son partes del estándar HTML cuyo uso ya no es recomendado. Esto sucede dado que el estándar es actualizado de vez en cuando (por ejemplo, de la versión 3.0 a la 4.0) y alguno tags o características del lenguaje son agregada, removidas o desaprobadas.
                    <br><br>
                    Ejemplos:
                    <ul>
                        <li>applet</li>
                        <li>dir</li>
                        <li>isindex</li>
                        <li>menu</li>
                    </ul>
                </p>
            </li>
            <li>
                <strong>¿Cuáles son las diferencias principales entre HTML 4 y HTML5?</strong>
                <p>
                    <ul>
                        <li>Compatibilidad</li>
                        <li>Soporte Multimedia</li>
                        <li>Mejor rendimiento y soporte movil</li>
                        <li>Mejor control de formularios</li>
                        <li>Almacenamiento en la web</li>
                    </ul>
                </p>
            </li>
            <li>
                <strong>¿Qué componentes de estructura y estilo tiene una tabla?</strong>
                <p>
                    Una tabla HTML (table) es un conjunto de celdas (td o th) organizadas en filas (tr) que a su vez se organizan en grupos de filas (thead, tbody o tfoot). Además, la tabla puede tener una leyenda (caption) y hacer referencia a las columnas (col y colspan).
                    <br><br>
                    <img style="width: 1000px;" src="https://francescricart.com/wp-content/uploads/2018/02/thead-tbody-tfoot-caption.jpg" alt="">
                </p>
            </li>
            <li>
                <strong>¿Cuáles son los principales controles de una forma HTML5?</strong>
                <p>
                    <ul>
                        <li><strong>Type:</strong>Varios controles comparten la etiqueta input. En estos casos, el valor atributo type distingue si se trata de un formulario de texto, de opción, etc.</li>
                        <li><strong>Name:</strong>Con este atributo asignamos un nombre al control. Es importante, porque al recoger los datos, podremos hacerlo a través del nombre. Además, los controles sin nombre no envían sus datos.</li>
                        <li><strong>Value:</strong>En controles como líneas de texto, establece el valor inicial, por lo que el usuario lo puede cambiar. En otros, como botones, establece el texto que se muestra. En controles de opción, el atributo determina el valor de cada opción.</li>
                        <li><strong>Disabled:</strong>Permite deshabilitar un control, impidiendo que el usuario interactúe con él. Se utiliza con el valor disabled (disabled="disabled").</li>
                        <li><strong>Readonly:</strong>Hace que al control sea de sólo lectura, es decir, que no se pueda cambiar su valor. Se utiliza con el valor readonly (readonly="readonly").</li>
                    </ul>
                </p>
            </li>
            <li>
                <strong>¿Qué tanto soporte HTML5 tiene el navegador que utilizas? Puedes utilizar la siguiente página para descubrirlo: <a>http://html5test.com/</a></strong>
                <p>
                    Tiene 476 de 555 posibles puntos, un gran puntaje compadardo con otros navegadores.
                </p>
            </li>
            <li>
                <strong>¿Cuál es el ciclo de vida de los sistemas de información?</strong>
                <p>
                    <ul>
                        <li><strong>Fase de planificación.</strong> En esta fase se prepara el diseño y posterior implementación del sistema. Es necesario definir el alcance del proyecto, justificarlo y escoger una metodología para su desarrollo. También es preciso asociar las diferentes actividades a plazos de tiempo y designar roles y responsabilidades.</li>
                        <br><li><strong>Fase de análisis.</strong> Una vez que el equipo de proyecto se decide por una metodología de desarrollo determinada, da comienzo la segunda etapa en el ciclo de vida de un sistema de información. Es la que tiene que ver con el análisis y donde se busca concretar una serie de requisitos, que son los que regirán el nuevo sistema o los cambios a introducir en el antiguo, si con el proyecto se busca su actualización.</li>
                        <br><li><strong>Fase de diseño.</strong> En este estadio el equipo de proyecto tendrá que determinar cómo el nuevo sistema de información cumplirá con los requisitos aplicables. Es por ello que, a estas alturas del ciclo de vida de un sistema de información conviene identificar soluciones potenciales, evaluarlas y elegir la más conveniente. Ésta será o la más efectiva, o la más eficiente en costes o la menos compleja. Una vez completadas esas tareas, habrá que continuar haciendo la selección tecnológica de software y hardware, desarrollando las especificaciones para las distintas aplicaciones y obteniendo aprobación de la gerencia para poder proceder a la implementación del nuevo sistema.</li>
                        <br><li><strong>Fase de desarrollo.</strong> El desarrollo software marca un antes y un después en la vida del sistema y significa, además, el inicio de la producción. El cambio es una constante durante esta etapa, en la que suele ser recomendable poner el foco en la formación y capacitación de los usuarios y el equipo técnico.</li>
                        <br><li><strong>Fase de integración y periodo de pruebas.</strong> El objetivo de esta etapa es corroborar que el diseño propuesto cumple con los requisitos de negocio establecidos. Puede ser necesario repetir las pruebas tantas veces como haga falta para evitar errores y, de hecho, conviene que el usuario final dé su conformidad con el resultado. Por último, este estadio concluye con la verificación y validación, que ayudan a asegurar la compleción del programa con éxito.</li>
                        <br><li><strong>Fase de implementación.</strong> En esta etapa del ciclo de vida de un sistema de información hay que proceder a la instalación del hardware y software elegidos, crear las aplicaciones correspondientes, someterlas a pruebas, crear la documentación pertinente y capacitar a los usuarios. La conversión de datos es importante en este estadio, en el que ya se empieza a trabajar en el nuevo sistema.</li>
                        <br><li><strong>Fase de mantenimiento. </strong> Esta etapa del ciclo de vida de un sistema de información está relacionada con las operaciones del día a día. Por lo general, consiste en introducir los ajustes necesarios para mejorar el rendimiento y corregir los problemas que puedan surgir. Una vez concluye la etapa de implementación se suele abrir un periodo de operación supervisada, durante el que las actividades de mantenimiento cobran una especial importancia, al orientarse a hacer backups, dar soporte a los usuarios, resolver fallos, optimizar el sistema para cuestiones relacionadas con la seguridad o la velocidad y revisar el software para garantizar la alineación con las metas del negocio.</li>
                    </ul>
                    <br>
                    <img src="https://www.gestiopolis.com/wp-content/uploads/2015/07/ciclo-de-vida-de-un-sistema-de-informacion-2.jpg" alt="">
                </p>
            </li>
            <li>
                <strong>¿Cuál es el ciclo de desarrollo de sistemas de información?</strong>
                <p>
                    <ul>
                        <li><strong>Fase de planeación. </strong>En esta etapa del ciclo de vida de un sistema se especifica un plan para el proyecto que guiará a todos los interesados o stakeholders a conseguir el producto especificado en el levantamiento de requerimientos.
                        Los stakeholders corresponden a los interesados o participantes del proyecto, es decir, todas las personas involucradas en un proyecto de desarrollo de software.</li> <br>
                        <li><strong>Fase de diseño. </strong>En esta fase del ciclo de vida de sistemas, los analistas o ingenieros de software crean un modelo abstracto del sistema a construir basado en los requerimientos funcionales y no funcionales planteados en la especificación de requerimientos. Este modelo proporciona detalles sobre arquitectura del software, estructuras de datos, interfaces y componentes que se necesitan para implementar el sistema.</li> <br>
                        <li><strong>Fase de desarrollo. </strong>En esta fase del ciclo de vida de un sistema, se genera el código fuente en el lenguaje de programación escogido. Aquí también puede definirse la parametrización del software.
                        Para el desarrollo del código se pueden utilizar herramientas denominadas IDE (Integrated Development Environment) o entornos de desarrollo integrado, que sirven para codificar de manera más fácil y práctica.
                        En esta fase también pueden realizarse pruebas unitarias que definirán la versatilidad del sistema y su capacidad de detección de fallos.</li> <br>
                        <li><strong>Fase de implementación</strong>En esta fase del ciclo de vida de sistemas se lleva a cabo la puesta en marcha del producto de software. <br> Después de implementar el sistema en el negocio, se debe entender que existe la posibilidad de fallos y, por ello, hay que tener implementado un plan de pruebas, de soporte y de mantenimiento.</li>
                    </ul>
                </p>
            </li>
        </ul>
        <hr>
        <p>Está bonito verdad profe?</p>
        <input type="radio">
        <label for="radio">Si</label>
        </section>
        <footer>
            <hr>
            Usando: <strong>Visual Studio Code</strong>
        </footer>
    </body>
    `
    );
  } else if (req.url === "/laboratorio1-juanpablo") {
    res.write(
      `
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <header>
                <h1 class="text-danger">¿Quién soy yo?</h1>
                <p style="font-size: 13px;">Presentado por Juan Pablo Cabrera <br> Matrícula: A01661090 <br>
                <a href="https://github.com/JP-coder2000" style="font-size:13px">Link de Github</a>
                </p>
        
            </header>
            <div>
                <p>
                Mi nombre es Juan Pablo Cabrera, soy actualmente alumno del Tecnológico de Monterrey, tengo 20 años y hasta hace unos años estaba perdido. <br>
                Yo no tenía ni idea de lo que iba a hacer con mi vida o con la vida en general, hasta que un día un profesor me invitó a una conferencia de programación, y desde ahí supe que tenía que estudiar eso (aunque no supiera absolutamente nada), pero creo que lo estoy haciendo lo mejor que puedo y siento que cada vez me vuelvo mejor.
                </p>
                <p>
                    En cuanto a mi persona en partícular, soy una persona calmada, que me gusta dicertirme y hacer mucho deporte.
                </p>
            </div>
            <hr>
            <strong class="text-danger">Pregutnas de laboratorio...</strong>
            <ol>
                <li><details>
                <summary>¿Cuál es la diferencia entre Internet y la World Wide Web? </summary>
                <p>El internet es la infraestructura que conecta los dispositivos y les permite comunicarse, mientras que la World Wide Web (WWW) es un servicio que corre en el internet y otorga información y herramientas.</p>
                </details></li>
        
                <li><details>
                <summary>¿Cuáles son las partes de un URL?</summary>
                <p>
                    Las partes principales de un URL son:<br><br>
                    1. Protocolo: El protocolo utilizado para acceder al recurso, como HTTP o HTTPS. <br>
                    2. Nombre de dominio: El nombre de dominio de la página web. <br>
                    3. Puerto: El número de puerto utilizado para acceder al recurso. Por lo general, el puerto por defecto para HTTP es el 80 y para HTTPS es el 443.<br>
                    4. Ruta: La ruta o la ubicación del archivo o recurso dentro del servidor.<br>
                    5. Parámetros: Los parámetros adicionales que se utilizan para identificar o filtrar el contenido, separados por signos de interrogación y ampersand.<br>
                    6. Fragmento: El identificador del fragmento de la página web, separado por un signo de almohadilla.<br><br>
                    Cabe señalar que no todas las partes son necesarias en todas las URL, y algunas partes pueden ser opcionales o estar ausentes dependiendo de la página web y la forma en que se acceda a ella.</p>
                </details></li>
        
        
                <li><details>
                <summary>¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</summary>
                <p>
                    Los métodos HTTP se utilizan para indicar la acción que se debe realizar en un recurso web. El propósito de cada uno es el siguiente: <br><br>
                    <ol>
                        <li>GET: Solicita una representación del recurso especificado. No debe tener ningún efecto secundario.</li>
                        <li>HEAD: Solicita la misma respuesta que GET, pero sin el cuerpo de la respuesta.</li>
                        <li>POST: Envía datos para que el recurso los procese. Puede tener un efecto secundario, como crear un nuevo recurso o actualizar uno existente.</li>
                        <li>PUT: Reemplaza completamente el recurso especificado con los datos enviados. Si el recurso no existe, se puede crear uno nuevo.</li>
                        <li>PATCH: Modifica parcialmente el recurso especificado con los datos enviados.</li>
                        <li>DELETE: Elimina el recurso especificado.</li>
                    </ol>
                </p>
                </details></li>
        
                <li><details>
                <summary>¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?</summary>
                <p>
                    El método HTTP que se debe utilizar al enviar un formulario HTML que contiene información sensible, como un nombre de usuario y una contraseña, es el método POST.<br>
        
                    Esto se debe a que el método POST envía los datos del formulario en el cuerpo de la solicitud HTTP, lo que los hace menos visibles y menos propensos a ser interceptados por un tercero.<br> Además, el método POST no almacena los datos enviados en el historial del navegador, lo que ayuda a mantener la privacidad y la seguridad del usuario.
                </p>
                </details></li>
        
                <li><details>
                <summary>¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</summary>
                <p>Cuando se accede a una página a través de un URL en un navegador web, se utiliza el método HTTP GET por defecto.</p>
                </details></li>
        
                <li><details>
                <summary>Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</summary>
                <p>
                    Un servidor web que devuelve una respuesta HTTP con código 200 significa que la solicitud HTTP fue exitosa y que el servidor ha devuelto correctamente el recurso solicitado.<br>
        
                    El código de respuesta HTTP 200 se conoce como "OK" y se utiliza para indicar que la solicitud ha sido procesada correctamente por el servidor y que se ha devuelto una respuesta exitosa al cliente.
                    
                    </p>
                </details></li>
                
                <li><details>
                <summary>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?</summary>
                <p>Sí, el error 404 es una respuesta HTTP que indica que el servidor no ha encontrado el recurso solicitado. Esto puede ocurrir si se ha eliminado o movido una página, o si se ha cambiado la estructura del sitio web sin actualizar los enlaces correspondientes.</p>
                </details></li>
        
                <li><details>
                <summary>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</summary>
                <p>Sí, El error 500 es una respuesta HTTP que indica que se ha producido un error interno en el servidor, lo que puede deberse a una variedad de problemas, como errores de programación, problemas de configuración del servidor, errores en la base de datos, entre otros.
        
                </p>
                </details></li>
        
                <li><details>
                <summary>¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.</summary>
                <p>
                    Un atributo HTML5 que está depreciado o desaprobado (deprecated) significa que se trata de un atributo que, aunque todavía puede funcionar en algunos navegadores, ya no se recomienda su uso debido a que se considera obsoleto o se ha sustituido por otra tecnología más moderna y efectiva.<br>
        
                    Por mencionar algunos elementos de HTML4 que en se encuentran depreciados en HTML5:<br>
                    <ul>
                        <li>El elemento "center"</li>
                        <li>El atributo "align" de los elementos "div", "h1", "h2", "h3", "h4", "h5", "h6", "p", "table", "img" y otros
                        </li>
                        <li>El atributo "height" del elemento "table"</li>
                        <li>El atributo "width" del elemento "applet"</li>
                    </ul>
                </p>
                </details></li>
        
        
                <li><details>
                <summary>¿Cuáles son las diferencias principales entre HTML 4 y HTML5?</summary>
                <p>
                    <ol>
                        <li>
                        Mayor soporte multimedia: HTML5 tiene soporte integrado para audio y video, lo que permite reproducir estos tipos de archivos sin necesidad de complementos o plugins de terceros.
                        </li>
                        <li>
                        Nuevos elementos semánticos: HTML5 introduce nuevos elementos semánticos, como "header", "nav", "footer", "article" y "section", que ayudan a describir el contenido de una página de manera más clara y significativa para los motores de búsqueda y para los usuarios.
                        </li>
                        <li>
                        Formularios mejorados: HTML5 introduce nuevas funciones y tipos de entrada de formulario, como validación de campos de entrada, calendarios y selección de fecha, y nuevas opciones para campos de selección.
                        </li>
                        <li>
                        Responsive design: HTML5 tiene características incorporadas que facilitan la creación de diseños responsivos, que se ajustan automáticamente al tamaño de la pantalla del dispositivo utilizado para acceder al sitio.
                        </li>
                        <li>
                        Mejoras de accesibilidad: HTML5 incluye nuevas características que mejoran la accesibilidad para personas con discapacidades, como soporte para etiquetas de encabezado, descripciones de contenido, y una estructura semántica más clara.
                        </li>
                        <li>
                        Mejoras de rendimiento: HTML5 incluye mejoras en la forma en que se cargan los recursos y se gestionan las conexiones, lo que permite una carga más rápida de la página y un mejor rendimiento en general.
                        </li>
                    </ol>
                </p>
                </details></li>
                
        
                <li><details>
                <summary>¿Qué componentes de estructura y estilo tiene una tabla?</summary>
                <p>
                    <ol>
                        <li>&lt;table&gt;: elemento principal que define la tabla.</li>
                        <li>&lt;tr&gt;: fila de la tabla.</li>
                        <li>&lt;th&gt;: celda de encabezado (header cell).</li>
                        <li>&lt;td&gt;: celda de datos (data cell).</li>
                        <li>&lt;caption&gt;: título o leyenda de la tabla.</li>
                        <li>border: atributo para establecer el borde de la tabla.</li>
                        <li>cellspacing: atributo para establecer el espacio entre celdas.</li>
                        <li>cellpadding: atributo para establecer el espacio interno de las celdas.</li>
                        <li>width y height: atributos para establecer el ancho y alto de la tabla.</li>
                    </ol>
                <p>El estilo de una tabla se puede definir mediante CSS, utilizando selectores para los elementos mencionados anteriormente y propiedades como border, padding, background-color, entre otras.</p></p>
                </details></li>
        
        
                <li><details>
                <summary>¿Cuáles son los principales controles de una forma HTML5?</summary>
                <p>
                    <ol>
                        <li>Input: permite al usuario introducir datos de diferentes tipos, como texto, números, fechas, etc.</li>
                        <li>Textarea: un área de texto de varias líneas que permite al usuario ingresar texto más largo.</li>
                        <li>Select: proporciona una lista desplegable de opciones para que el usuario seleccione.</li>
                        <li>Checkbox: permite al usuario seleccionar una o varias opciones de una lista.</li>
                        <li>Radio: permite al usuario seleccionar una opción exclusiva de una lista.</li>
                        <li>Button: un botón que se utiliza para enviar el formulario o realizar una acción específica.</li>
                      </ol>
                      
                </p>
                </details></li>
        
        
                <li><details>
                <summary>¿Qué tanto soporte HTML5 tiene el navegador que utilizas? (Chrome)</summary>
                <p>
                    Chrome tiene un amplio soporte para HTML5, ya que fue uno de los primeros navegadores en adoptar y promover el estándar. La mayoría de las funciones y características de HTML5 están disponibles en las versiones actuales de Chrome. Sin embargo, es posible que algunas características específicas de HTML5 no sean compatibles con versiones antiguas del navegador o requieran la activación de configuraciones especiales.
                </p>
                </details></li>
                <br><br>
                
                <strong class="text-danger">Sobre el ciclo de vida y desarrollo de los sistemas de información:</strong>
        
                <li><details>
                    <summary>¿Cuál es el ciclo de vida de los sistemas de información?</summary>
                    <p>
                        Aunque existen diferentes metodologías y modelos para el ciclo de vida de los sistemas de información, a continuación se presentan las fases comunes que se pueden encontrar en la mayoría de ellos:<br>
                        <ol>
                            <li>Planificación: se define el problema a resolver y se establecen los objetivos y requerimientos del sistema.</li>
                            <li>Análisis: se realiza un estudio detallado de la situación actual y se identifican las necesidades y oportunidades para el nuevo sistema.</li>
                            <li>Diseño: se define la arquitectura y estructura del sistema, se elabora el diseño detallado de cada componente y se establece el plan de implementación.</li>
                            <li>Desarrollo: se construye el sistema mediante la codificación y pruebas de los diferentes componentes.</li>
                            <li>Implementación: se realiza la instalación y puesta en marcha del sistema en el ambiente de producción.</li>
                            <li>Operación y mantenimiento: se asegura el correcto funcionamiento del sistema y se realizan las tareas de mantenimiento y soporte necesarias para garantizar su continuidad.</li>
                            <li>Evaluación: se realiza una evaluación del sistema en operación para determinar si cumple con los objetivos y requerimientos establecidos, y se identifican oportunidades de mejora.</li>
                          </ol>
                          
                    </p>
                </details></li>
        
                <li><details>
                    <summary>¿Cuál es el ciclo de desarrollo de sistemas de información?</summary>
                    <p>
                        El ciclo consta de varias etapas que se realizan en un orden secuencial, y puede variar según la metodología utilizada. A continuación se presentan las etapas comunes del ciclo de desarrollo de sistemas de información:<br>
                        <ol>
                            <li>Identificación de necesidades: se identifican las necesidades del usuario y se determina la viabilidad del proyecto.</li>
                            <li>Análisis de requisitos: se recopilan, documentan y validan los requisitos funcionales y no funcionales del sistema.</li>
                            <li>Diseño del sistema: se diseña la arquitectura y la estructura del sistema, se desarrollan los modelos y se especifican los detalles técnicos.</li>
                            <li>Implementación: se lleva a cabo la construcción y la integración de los componentes del sistema.</li>
                            <li>Pruebas: se realizan pruebas para asegurarse de que el sistema cumple con los requisitos y especificaciones.</li>
                            <li>Despliegue: se instala el sistema en el ambiente de producción y se realiza la migración de datos.</li>
                            <li>Mantenimiento: se llevan a cabo las actividades necesarias para mantener y mejorar el sistema a lo largo de su vida útil.</li>
                          </ol>                                
                    </p>
                </details></li>  
            </ol>
            <strong class="text-danger">¿Te sirvió esta información?</strong><br><br>
            <button type="button" class="btn btn-success">Sí</button>
            <button type="button" class="btn btn-danger">No</button>
            <br> <br>
            <strong class="text-danger">Preguntas del laboratorio 3</strong><br>
            <ol>
                <li><details>
                    <summary>Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS? </summary>
                    <p>
                    Es una herramienta que nos sirve para anular las reglas de estilo existenes y aplicar nuevas reglas de estilo. A mi parecer, deberíamos de evitar usar !important ya que u uso excesivo puede dificultar la lectura y el mantenimiento del código.
                    </p>
                </details></li>
                <li><details>
                    <summary>Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?</summary>
                    <p>
                        Porque puede afectar la legibilidad del contenido y la experiencia del usuario al interactuar con la página.
                    </p>
                </details></li>
                <li><details>
                    <summary> 
                        Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?</summary>
                    <p>
                        Yo recomendaría siempre manejarse por % ya que de esta manera podemos hacer que nuestra página se vuelva "responsive" a los cambios de tamaño que puede sufrir la pantalla en la que estamos viendo nuestro programa.
                    </p>
                </details></li>
                <li><details>
                    <summary>¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?</summary>
                    <p>
                        Porque tiene que renderizar menos css, lo que lo lleva a ser mas rápido.
                    </p>
                </details></li>
            </ol>      
            <footer style="margin-top: 120px; margin-left: 95px;">Esta página se hizo con el editor de texto VISUAL STUDIO CODE</footer>
        </body>
        `
    );
  } else if (req.url === "/post" && req.method == "GET"){
    res.write(
        `
        <form method="POST" action="/post">
            <fieldset>
                <legend>QUIEN ES MEJOR?</legend>
                <div>
                    <input type="radio" id="santiago" name="valor" value="santiago">
                    <label for="santiago">Santiago</label>
                    <input type="radio" id="juan-pablo" name="valor" value="juan-pablo">
                    <label for="juan-pablo">Juan Pablo</label>
                </div>
            </fieldset>
            <button>SUBMIT</button>
        </form>
        `
    )
  } else if (req.url === '/post' && req.method == "POST"){
    const datos = []
    req.on('data', (data) => {
        datos.push(data)
    });
    return req.on('end', () => {
        const Complete_Data = Buffer.concat(datos).toString().split('=')[1];
        if (Complete_Data === "santiago"){
            res.write(`<h1>MUY BIEN!!!</h1>`)
        }
        else if (Complete_Data === 'juan-pablo'){
            res.write(`<h1>MUY MAL!!</h1>`)
        }
    })
  }
  res.end();
});

server.listen(3000);
