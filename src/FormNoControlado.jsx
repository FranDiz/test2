import { useRef, useState } from "react"

const FormNoControlado = () =>{
    const formulario = useRef(null)
    const [valido, esValido] = useState('');

    const handleSubmit = e => {
        console.log("click")
        e.preventDefault()
        const datos = new FormData(formulario.current)
        console.log(datos)
        
        const objetoDatos = Object.fromEntries([...datos.entries()])
        console.log(objetoDatos)
        const {tareas, descripcion, estado} = objetoDatos
        if(!tareas.trim()){
            esValido("No es valido")
            return
        }else{
            esValido("OK")
        }
        if(!descripcion.trim()){
            esValido("No es valido")
            return
        }else{
            esValido("OK")
        }
        if(!estado.trim()){
            esValido("No es valido")
            return
        }else{
            esValido("OK")
        }
    }
    return(
        <>
        <form onSubmit={handleSubmit} ref={formulario}>
            <input
                name="tareas"
                placeholder="Nombre de la tarea"
                type="text"
                className="form-control mb-2"
                defaultValue="Tarea1"
            />
            <textarea
                name="descripcion"
                placeholder="Introduce la descripcion de la tarea"
                className="form-control mb-2"
                defaultValue="Descripcion de la tarea"
            />
            <select
                name="estado"
                className="form-control mb-2"
                defaultValue="Pendiente">
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
            </select>
            <button
                type="submit"
                className="btn btn-primary">
                    Boton
            </button>
        </form>
        <p>{valido}</p>
        </>
    )
}
export default FormNoControlado