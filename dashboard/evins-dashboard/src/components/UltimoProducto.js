import React from 'react';
import { useEffect, useState } from 'react';


function UltimoProducto(){
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/product/api`)
            .then(response => response.json())
            .then(data => {
                setProductos(data.products[data.products.length-1])
            })
            .catch(error => console.error(error))
    }, [])


    return(
        <div className="col-mb-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto Creado : {productos.product_name}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 30 +'rem'}} src={`http://localhost:3001/images/productos/${productos.image}`} alt=" Imágen usuario "/>
                    </div>
                    <p>{productos.descript}</p>
                </div>
            </div>
        </div>
    )
}

export default UltimoProducto;
