import React, { useState } from 'react';
import axios from 'axios';

const DeleteProducts = () => {
  const [barcode, setBarcode] = useState('');

    const API_URL = `http://localhost:3000/fas/api/products/delete/${barcode}`;

    const updateProduct = async () => {
    await axios.delete(API_URL, { barcode }, { timeout: 3000 })
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
        updateProduct();
    }



    return (
        <main className='bg-[#FFFEF9] grid grid-cols-12 py-6'>
            <form className='col-span-8 col-start-3 row-start-2 col-end-10'  onSubmit={ handleSubmit }>
                <fieldset>
                    <legend className='text-gray-900 text-2xl border-solid border-b-4'>Eliminar </legend>
                    <label htmlFor="">Código de Barras: </label>
                    <input type="text" onChange={(e) => {setBarcode(e.target.value)}}/><br/><br/>

                    <button type='submit'>Guardar</button>
                </fieldset>
            </form>
        </main>
    );
}

export default DeleteProducts