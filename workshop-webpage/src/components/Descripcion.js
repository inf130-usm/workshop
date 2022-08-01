import React, {useState} from 'react';
import "../App.css";

function Descripcion () {
    const [showMore, setShowMore] = useState(false);
    const linestyle = {
        background: '#d3d3d3',
        color: '#d3d3d3',
        border: '1px solid #d3d3d3',
        height: '3px',
        marginLeft: '5rem',
        marginRight: '5rem',
    }
    return (
        <div className='body descripcion'>
            <div>
                <hr style={linestyle}/>
                <p className='desc-titulo'>
                    WORKSHOP
                </p>
                <p className='desc-titulo' id="descripcion">
                    "DESAFÍOS Y OPORTUNIDADES DEL DESARROLLO DE SMART CITY EN CHILE”
                </p>
                <hr style={linestyle}/>
                <p>
                    En el workshop participarán connotados invitados internacional, tales como el Dr. Marijn Jenssen
                    de la Universidad Delft de Tecnología (Nederlands), Dr. Tomasz Janowski de la Univ. Técnica de
                    Gdansk (Polonia), el senador Kenneth Pugh del congreso nacional, el arquitecto y magister en
                    Desarrollo Urbano Iván Poduje, la directora del proyecto ERASMUS+ sobre Smart Cities (SC), Lucy
                    Temple, de la Universidad de Krems (Austria), y muchos otros importantes expertos europeos y
                    nacionales en el tema.
                </p>
                <p>
                    El workshop tiene como objetivo convocar a los principales actores nacionales a nivel local y/o regional que tengan participación ya sea en la definición / implementación / ejecución/ control de los proyectos relacionados con SC y/o participación en la toma de decisión de este tipo de proyectos a nivel público/privado.
                </p>
                <p>
                    Otro de los objetivos del workshop es entender los principales problemas en el desarrollo de SC, detectar actores y stakeholders, mostrar proyectos importantes, conocer fondos de financiamiento, etc.
                </p>
                <p>
                    Este tema transversal cubre temáticas técnicas como IA, data mining, ciberseguridad, sensores remotos, que son fundamentales para el desarrollo de SC, como también otras áreas como leyes, capacidad de gestión, urbanismo, transporte público, ciclovías, luminarias inteligentes, conectividad, movilidad, etc.
                    {showMore ? <></> : <span className='readmore' onClick={function() {setShowMore(true)}}> ...Ver más</span>}
                </p>
                {showMore ?
                <>
                    
                    <p>
                        El proyecto CAP4CITY en el que se enmarca este workshop es financiado por ERASMUS+ que
                        comenzó el 2018. El consorcio está formado por 12 universidades de 8 países de Europa y América
                        Latina. El proyecto tiene como objetivo desarrollar competencias en el área de ciudades
                        inteligentes y sostenibles mediante el desarrollo de contenidos didácticos y resultados de
                        aprendizaje basados ​​en TIC para mejorar la calidad del aprendizaje, las herramientas didácticas, las
                        metodologías y los enfoques pedagógicos en Europa y América Latina en diferentes niveles de
                        educación.
                    </p>
                    <p>
                        La motivación del proyecto abarca la creciente necesidad de nuevas capacidades para ciudades
                        inteligentes y sostenibles y la gobernanza pública en el mundo digital y la necesidad de una
                        educación coherente, completa e intensiva en datos, adecuada para abordar los problemas
                        recurrentes que se presentan en la implementación de ciudades inteligentes y sostenibles.
                    </p>
                    <p>
                        Además, uno de los objetivos clave es compartir conocimientos, experiencias, buenas prácticas y
                        desarrollar iniciativas conjuntas sobre ciudades inteligentes y sostenibles entre socios académicos ubicados en diferentes ciudades y países de Europa y América Latina, todos apoyados por su
                        ecosistema local de ciudades inteligentes y sostenibles.
                    </p>
                    <p>
                        En este proyecto se desarrollaron diversos MOOC, los cuales han sido desarrollados por una red
                        internacional e interdisciplinaria de universidades y partes interesadas relacionadas con las
                        ciudades inteligentes y el plan de estudios ha sido diseñado y validado a través de un enfoque
                        transdisciplinario con sesiones interactivas entre profesionales, académicos, partes interesadas
                        locales y estudiantes de diferentes campos y sectores para ofrecer el curso más actualizado para
                        desarrollar las competencias de los estudiantes sobre ciudades inteligentes y sostenibles y los
                        desafíos de gobernanza relacionados.
                    </p>
                    <p>
                        Cada MOOC proporciona una descripción general de la variedad de temas relevantes para la
                        creación de capacidades para las Ciudades Inteligentes y Sostenibles. Estos videos tienen el
                        objetivo de despertar su interés y funcionan como una invitación a seguir estudiando los temas
                        que resulten estimulantes. Cada video también incluye materiales de aprendizaje para que explore
                        más el tema. Si está interesado en continuar con su experiencia de aprendizaje, siga los resultados
                        de CAP4CITY donde puede encontrar un conjunto completo de materiales para explorar.
                        <span className='readmore' onClick={function(){setShowMore(false)}}> ...Ver menos</span>
                    </p>
                </>
                :
                    <></>
                }
            </div>
        </div>
    );
}

export default Descripcion;
