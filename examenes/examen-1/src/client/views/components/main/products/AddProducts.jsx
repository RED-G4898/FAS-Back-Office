import React, { useState } from 'react';

import axios  from 'axios';

const AddProducts = () => {

    const [barcode, setBarcode] = useState('');
    const [name, setName] = useState('');

    const API_URL = 'http://localhost:3000/fas/api/products/add';

    const addProduct = async () => {
    await axios.post(API_URL, { barcode, name }, { timeout: 3000 })
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            if (error.response) {
                console.error(`Error: ${error.response.status} - ${error.response.data}`);
            } else if (error.request) {
                console.error('Error: No se pudo obtener una respuesta del servidor');
            } else {
                console.error(`Error: ${error.message}`);
            }
        });
};

    const handleSubmit = e => {
        e.preventDefault();
        addProduct();
    }



    return (
        <main className='bg-[#FFFEF9] grid grid-cols-12 py-6'>
            <form className='col-span-8 col-start-3 col-end-10'  onSubmit={ handleSubmit }>
                <fieldset>
                    <legend className='text-gray-900 text-2xl border-solid border-b-4'>Añadir Nuevo Producto</legend>
                    <label htmlFor="">Código de Barras: </label>
                    <input type="text" onChange={(e) => {setBarcode(e.target.value)}}/><br/><br/>
                    <label htmlFor="">Nombre comercial: </label>
                    <input type="text" onChange={(e) => {setName(e.target.value)}}/><br/><br/>

                    <button type='submit'>Guardar</button>
                </fieldset>
            </form>
        </main>
    );
}

export default AddProducts;