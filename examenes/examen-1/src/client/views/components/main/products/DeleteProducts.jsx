import React, { useState } from 'react';

import { makeRequest } from '../../../../controllers/routes.mjs';

const DeleteProducts = () => {
  const [barcode, setBarcode] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        makeRequest('delete', `/products/delete/${barcode}`, {barcode}, {}, 3000).then(res => console.log(res.data));
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