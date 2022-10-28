import React from "react";

const RowCliente = ({ cliente }) => {

    const modificarCliente = () => {
        console.log("Modificando...");
    }

    const eliminarCliente = () => {
        console.log("Eliminando...");
    }

    return (
        <tr Key={cliente.idCliente}>
            <td>
                <button className="button is-small is-info mr-1" title="Modificar" onClick={()=>modificarCliente()}>
                    <span className="icon is-small">
                        <i className="fas fa-edit"></i>
                    </span>
                </button>
                <button className="button is-small is-danger" title="Eliminar" onClick={()=>eliminarCliente()}>
                    <span className="icon is-small">
                        <i className="fas fa-trash-alt"></i>
                    </span>
                </button>
            </td>
            <td>{cliente.Nombre}</td>
            <td>{cliente.Telefono}</td>
            <td>{cliente.Email}</td>
            <td>{cliente.Grupo}</td>
        </tr>
    );
}
export default RowCliente;