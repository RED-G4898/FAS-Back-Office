import React, { useState } from 'react';

import { makeRequest } from '../../../../controllers/routes.mjs';

const AddProducts = () => {

    const [barcode, setBarcode] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        makeRequest('post', '/products/add', {barcode, name}, {}, 5000).then(res => console.log(res.data));
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