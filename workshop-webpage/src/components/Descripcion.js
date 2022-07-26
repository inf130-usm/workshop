import React, {useState} from 'react';
import "../App.css";

const Descripcion = () => {
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
                    En el workshop participarán connotados invitados internacional, tales como el Dr. Marijn Jenssen de la Universidad Delft de Tecnología (Nederlands), Dr. Tomasz Janowski de la Univ. Técnica de Gdansk (Polonia), la Dra. Lucy Temple, directora del proyecto ERASMUS+ sobre Smart Cities (SC), de la Universidad de Krems (Austria), y muchos otros importantes expertos europeos en el tema.
                </p>
                <p>
                    El workshop tiene como objetivo convocar a los principales actores nacionales a nivel local y/o regional que tengan participación ya sea en la definición/implementación/ejecución/control de los proyectos relacionados con SC y/o participación en la toma de decisión de este tipo de proyectos a nivel público/privado.
                </p>
                <p>
                    Otro de los objetivos del workshop es entender los principales problemas en el desarrollo de SC, detectar actores y stakeholders, mostrar proyectos importantes, conocer fondos de financiamiento, etc.
                </p>
                <p>
                    Este tema transversal cubre temáticas técnicas como IA, data mining, ciberseguridad, sensores remotos, que son fundamentales para el desarrollo de SC, como también otras áreas como leyes, capacidad de gestión, urbanismo, transporte público, ciclovías, luminarias inteligentes, conectividad, movilidad, etc.
                    {showMore ? <></> : <span className='readmore' onClick={() => {setShowMore(true)}}> ...Ver más</span>}
                </p>
                {showMore ?
                <>
                    <p>
                        En el workshop participarán connotados invitados internacional, tales como el Dr. Marijn Jenssen de la Universidad Delft de Tecnología (Nederlands), Dr. Tomasz Janowski de la Univ. Técnica de Gdansk (Polonia), la Dra. Lucy Temple, directora del proyecto ERASMUS+ sobre Smart Cities (SC), de la Universidad de Krems (Austria), y muchos otros importantes expertos europeos en el tema.
                    </p>
                    <p>
                        El workshop tiene como objetivo convocar a los principales actores nacionales a nivel local y/o regional que tengan participación ya sea en la definición/implementación/ejecución/control de los proyectos relacionados con SC y/o participación en la toma de decisión de este tipo de proyectos a nivel público/privado.
                    </p>
                    <p>
                        Otro de los objetivos del workshop es entender los principales problemas en el desarrollo de SC, detectar actores y stakeholders, mostrar proyectos importantes, conocer fondos de financiamiento, etc.
                    </p>
                    <p>
                        Este tema transversal cubre temáticas técnicas como IA, data mining, ciberseguridad, sensores remotos, que son fundamentales para el desarrollo de SC, como también otras áreas como leyes, capacidad de gestión, urbanismo, transporte público, ciclovías, luminarias inteligentes, conectividad, movilidad, etc.
                        <span className='readmore' onClick={() => {setShowMore(false)}}> ...Ver menos</span>
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
