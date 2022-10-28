import React, { useState } from "react";
import RowCliente from "./RowCliente";

const TablaCliente = () => {

    const [clientesList, setsClientesList] = useState([
        {

            "Nombre": "Alejandro Tonato",
            "Telefono": "1234567890",
            "Email": "alejoups@gmail.com",
            "Grupo": "Sk"
        },
        {
            "Nombre": "Patricio Tonato",
            "Telefono": "1234567891",
            "Email": "patoups@gmail.com",
            "Grupo": "Th"
        },
        {
            "Nombre": "Ramiro Tonato",
            "Telefono": "1234567892",
            "Email": "ramiroups@gmail.com",
            "Grupo": "Th"
        }
    ]);


    return (
        <div className="table-container">
            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Acciones</th>
                        <th>Nombre</th>
                        <th>Telefono</th>
                        <th>Email</th>
                        <th>Grupo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientesList.map(cliente => (
                            <RowCliente cliente={cliente} Key={cliente.idCliente} />
                        ))
                    }
                </tbody>
            </table>
        </div>

    );
}

export default TablaCliente;