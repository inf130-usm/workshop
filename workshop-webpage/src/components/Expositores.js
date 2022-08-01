import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "../App.css";

function createData(picture, name, details) {
    return { picture, name, details };
}

const expositoresleft = [
    createData("lucy-temple.png", "Lucy Temple", "Universidad de Krems, Austria"),
    createData("kenneth-pugh.jpg", "Kenneth Pugh", "Senador Congreso Nacional de Chile"),
    createData("ariel-pasini.jpg", "Ariel Pasini", "Universidad Nacional de La Plata"),
    createData("daniel-benavides.jpg", "Luis Daniel Benavides", "Escuela Colombiana de Ingeniería Julio Garavito"),
    createData("elsa-estevez.jpg", "Elsa Estévez", "Universidad Nacional de La Plata"),
    createData("tomasz-janowski.jpg", "Tomasz Janowski", "U. Técnica de Gdansk, Polonia"),
    createData("sabrina-callegaro.jpg", "Sabrina Callegaro", "Pontifical Catholic University of the Rio Grande do Sul"),
    createData("humberto-farias.jfif", "Humberto Farias", "Universidad Técnica Federico Santa María, Chile"),
    createData("aurora-sanchez.jpg", "Aurora Sánchez Ortíz", "Universidad Católica del Norte, Chile"),
    createData("pablo-bahamondes.jpeg", "Pablo Bahamondes", "Gerente de Operaciones y Desarrollo"),
    createData("ivan-poduje.jpg", "Ivan Poduje", ""),
    createData("claudia-santiago.png", "Claudia Santiago", "Escuela Colombiana de Ingeniería, Colombia"),
];
const expositoresright = [
    createData("marijn-janssen.jpg", "Marijn Janssen", "TU Delft, Nederlands"),
    createData("luiza-schuch.jpg", "Luiza Schuch de Azambuja", "U. de Tallin, Estonia"),
    createData("gabriela-diaz.jpg", "Gabriela Diaz", "Universidad Nacional del Sur"),
    createData("magdalena-ciesielska.jpg", "Magdalena Ciesielska", "U. Técnica de Gdansk, Polonia"),
    createData("marco-peres.png", "Marco Peres", "Universidad Externado de Colombia"),
    createData("edimara-luciano.jpg", "Edimara Luciano", "Pontifical Catholic University of the Rio Grande do Sul"),
    createData("rocio-muñoz.jpg", "Rocío Muñoz", "Universidad Nacional de La Plata"),
    createData("mauricio-solar.png", "Mauricio Solar", "Universidad Técnica Federico Santa María, Chile"),
    createData("sergio-zuñiga.jpeg", "Sergio Zuñiga", "Gerente Comercial"),
    createData("carlos-orellana.jpeg", "Carlos Orellana", "Ex gerente de ITS del Ministerio de Transporte"),
    createData("no-picture.png", "Lorena Santana", ""),
];

function Expositores() {
    return (
        <div className='body expositores-container' id="expositores">
            <Card variant='outlined' style={{backgroundColor: "#3b4a53", margin: "2rem"}}>
                <CardContent>
                    <label className='schedule-title'>Expositores</label>
                </CardContent>
                <CardContent>
                    <div className='table-container'>
                        <div className='flex'>
                            <div className="table">
                                {expositoresleft.map(function(expositor) {
                                    return(
                                        <div className="table-row">
                                            <div className='exp-picture-container' style={{"backgroundImage": `url("./exp-${expositor.picture}")`}}>
                                                {/*<img className="exp-picture" src={`/exp-${expositor.picture}`} alt={`Expositor ${expositor.name}`}/>*/}
                                            </div>
                                            <div className="exp-details">
                                                <div className="">
                                                    {expositor.name}
                                                </div>
                                                <div className="">
                                                    {expositor.details}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="table">
                                {expositoresright.map(function(expositor) {
                                    return(
                                        <div className="table-row">
                                            <div className='exp-picture-container' style={{"backgroundImage": `url("./exp-${expositor.picture}")`}}>
                                                {/*<img className="exp-picture" src={`/exp-${expositor.picture}`} alt={`Expositor ${expositor.name}`}/>*/}
                                            </div>
                                            <div className="exp-details">
                                                <div className="">
                                                    {expositor.name}
                                                </div>
                                                <div className="">
                                                    {expositor.details}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Expositores;
