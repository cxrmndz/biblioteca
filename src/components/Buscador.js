import React, {useState, useEffect} from 'react'
import {libros} from "../mocks/Datos";
import {Libro} from "./Libro";

export function Buscador() {

    const [libro, setLibros] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const mostrarDatos = async () => {
        setLibros(libros);
    }

    const buscar = (e) => {
        setBusqueda(e.target.value)
    }

    const results = !busqueda ? libro : libro.filter((dato) => dato.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase()))

    useEffect(() => {
        mostrarDatos()
    }, [])

    return (
        <>
            <input value={busqueda} onChange={buscar} type="text" placeholder="Buscar..." className="buscador"/>
            <div key={results.id} className="listado">
                {results.sort((a, b) => a.titulo > b.titulo ? 1 : -1).map((element) => {
                        return (
                            <div key={element.id} className="listado__item">
                                <Libro titulo={element.titulo} genero={element.genero} anio={element.anio}
                                       isbn={element.isbn}
                                       id={element.id} idAutor={element.idAutor} idImagen={element.idImagen}/>
                            </div>
                        )
                    }
                )}
            </div>
        </>
    )
}