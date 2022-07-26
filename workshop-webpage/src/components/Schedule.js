import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "../App.css";

function createData(hour, activity, participant) {
    return { hour, activity, participant };
}

const rowsjuevesAM = [
    createData("08:30 - 09:00", "Registro", "UTFSM - UCN"),
    createData("09:00 - 09:30", "Introducción y contexto general", "Lucy Temple, U. de Krems, Austria"),
    createData("09:30 - 10:30", "Developments in smartness of cities: opportunities and limitations", "Marijn Janssen, TU Delft, Nederlands"),
    createData("10:30 - 10:45", "Coffee Break", ""),
    createData("10:45 - 11:15", "Políticas Públicas en Ciberseguridad en Chile", "Senador Kenneth Pugh, Congreso Nacional de Chile"),
    createData("11:15 - 11:40", "Ingeniería del Tiempo: “Sistema Integral para la seguridad comunal, Smart City” Demostración del caso Municipalidad de Providencia", "Sergio Zuñiga (Gerente Comercial) y Pablo Bahamondes (Gerente de Operaciones y Desarrollo)"),
    createData("11:40 - 12:10", "Roadmap on SCC development", "Luiza Schuch de Azambuja, U. de Tallin, Estonia"),
];
const rowsjuevesPM = [
    createData("12:10 - 14:00", "Lunch", ""),
    createData("14:00 - 15:30", "Panel on curriculum development", "Lucy Temple, DUK - Ariel Pasini, UNLP - Gabriela Diaz, UNS - Daniel Benavides, ECI"),
    createData("15:30 - 16:00", "Movilidad inteligente ", "Carlos Orellana"),
    createData("16:00 - 17:00", "Train the trainers", "Magdalena Ciesielska, U. Técnica de Gdansk, Polonia - Elsa Estevez, UNLP, Argentina"),
    createData("17:00 - 17:15", "Coffe Break", ""),
    createData("17:15 - 17:45", "Tendencias de Liderazgo para Ciudades Inteligentes y Sostenibles ", "Marco Peres, U. Externado de Colombia"),
];

const rowsviernesAM = [
    createData("09:00 - 09:45", "Governance in SC", "Tomasz Janowski, U. Técnica de Gdansk, Polonia"),
    createData("09:45 - 10:45", "Desafíos en urbanidad para una ciudad inteligente", "Iván Poduje"),
    createData("10:45 - 11:00", "Coffee Break", ""),
    createData("11:00 - 12:30", "Panel on Teaching cases", "Edimara Luciano - Luis Daniel Benavides, UCI - Sabrina Callegaro, PUCRS - Rocio Muñoz, UNLP - Gabriela Diaz, UNS - Humberto Farias, UTFSM-ULS"),
]

const rowsviernesPM = [
    createData("12:30 - 14:00", "Lunch", ""),
    createData("14:00 - 14:30", "MOOC development + Showcase", "TUDelft + DUK"),
    createData("14:30 - 16:00", "SSC curriculum- applying concepts on undergraduate, specializations and masters in SSC", "Elsa Estevez, UNS - Mauricio Solar, UTFSM - Luiza Schuck Azambuja, Taltech - Aurora sanchez, UCN"),
    createData("16:00 - 16:15", "Coffee Break", ""),
    createData("16:15 - 17:30", "Future development is SSC (Companies and Academia) Panel ", "Mauricio Solar, Marijin Jenssen, Elsa Estevez, Marco Peres, Iván Poduje, Lorena Santana"),
    createData("17:30 - 18:00", "Clausura", ""),
]

const Schedule = () => {
    let even = false;
    return (
        <div className='body schedule-container' id="programa">
            <Card variant='outlined' style={{backgroundColor: "#3b4a53", margin: "2rem"}}>
                <CardContent>
                    <label className='schedule-title'>Jueves 4 de agosto</label>
                </CardContent>
                <CardContent>
                    <div className='table-container'>
                        <div className="flex">
                            <div className="table">
                                <div className="table-row table-titles">
                                    <div className="table-hour">
                                        Hora
                                    </div>
                                    <div className="table-activity">
                                        Actividad
                                    </div>
                                    <div className="table-participant">
                                        Participantes
                                    </div>
                                </div>
                                {rowsjuevesAM.map((row) => {
                                    even = !even;
                                    return(
                                        <div className={even ? "table-row even-row" : "table-row"}>
                                            <div className="table-element table-hour">
                                                {row.hour}
                                            </div>
                                            <div className="table-element table-activity">
                                                {row.activity}
                                            </div>
                                            <div className="table-element table-participant">
                                                {row.participant}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='vline'></div>
                            <div className="table">
                                <div className="table-row table-titles">
                                    <div className="table-hour">
                                        Hora
                                    </div>
                                    <div className="table-activity">
                                        Actividad
                                    </div>
                                    <div className="table-participant">
                                        Participantes
                                    </div>
                                </div>
                                {even = false}
                                {rowsjuevesPM.map((row) => {
                                    even = !even;
                                    return(
                                        <div className={even ? "table-row even-row" : "table-row"}>
                                            <div className="table-element table-hour">
                                                {row.hour}
                                            </div>
                                            <div className="table-element table-activity">
                                                {row.activity}
                                            </div>
                                            <div className="table-element table-participant">
                                                {row.participant}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <p className='table-caption'>*Las charlas en inglés tendrán traducción simultánea al español.</p>
                    </div>
                </CardContent>
            </Card>
            <Card variant='outlined' style={{backgroundColor: "#3b4a53", margin: "2rem"}}>
                <CardContent>
                    <label className='schedule-title'>Viernes 5 de agosto</label>
                </CardContent>
                <CardContent>
                    <div className="table-container">
                        <div className='flex'>
                            <div className="table">
                                <div className="table-row table-titles">
                                    <div className="table-hour">
                                        Hora
                                    </div>
                                    <div className="table-activity">
                                        Actividad
                                    </div>
                                    <div className="table-participant">
                                        Participantes
                                    </div>
                                </div>
                                {even = false}
                                {rowsviernesAM.map((row) => {
                                    even = !even;
                                    return(
                                        <div className={even ? "table-row even-row" : "table-row"}>
                                            <div className="table-element table-hour">
                                                {row.hour}
                                            </div>
                                            <div className="table-element table-activity">
                                                {row.activity}
                                            </div>
                                            <div className="table-element table-participant">
                                                {row.participant}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='vline'></div>
                            <div className="table">
                                <div className="table-row table-titles">
                                    <div className="table-hour">
                                        Hora
                                    </div>
                                    <div className="table-activity">
                                        Actividad
                                    </div>
                                    <div className="table-participant">
                                        Participantes
                                    </div>
                                </div>
                                {even = false}
                                {rowsviernesPM.map((row) => {
                                    even = !even;
                                    return(
                                        <div className={even ? "table-row even-row" : "table-row"}>
                                            <div className="table-element table-hour">
                                                {row.hour}
                                            </div>
                                            <div className="table-element table-activity">
                                                {row.activity}
                                            </div>
                                            <div className="table-element table-participant">
                                                {row.participant}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <p className='table-caption'>*Las charlas en inglés tendrán traducción simultánea al español.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Schedule;
