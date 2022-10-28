import React from "react";
import TablaCliente from "../Components/clientes/TablaCliente";
import ToolbarCliente from "../Components/clientes/ToolBarCliente";
import Layout from "../Components/commons/Layout";
import Modal from "../Components/commons/Modal";

const Clientes = () => {
    return (
        <Layout>
            <div className="panel">
                <div className="panel-heading">
                    Clientes
                </div>
                <div className="box">
                    <ToolbarCliente/>
                    <TablaCliente />
                </div>
            </div>
            <Modal/>
        </Layout>
    )
}

export default Clientes;