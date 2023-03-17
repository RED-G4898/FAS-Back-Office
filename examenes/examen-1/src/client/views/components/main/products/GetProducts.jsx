import React, { useEffect, useState } from 'react';

import { makeRequest } from '../../../../controllers/routes.mjs';

const GetProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    makeRequest('get', '/products/get', {}, {}, 3000).then(res => setProducts(res.data.products))
    .catch(error => console.error(error));
  },[])

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th className='border-solid border-2 border-neutral-900'>Código de Barras</th>
            <th className='border-solid border-2 border-neutral-900'>Nombre</th>
          </tr>
        </thead>
        <tbody>
      {products.map((product, key) => {
          return (
            <tr key={key}>
              <td className='border-solid border-2 border-neutral-900'>{product.barcode}</td>
              <td className='border-solid border-2 border-neutral-900'>{product.name}</td>
            </tr>
          )
        })}
        </tbody>
        </table>
    </section>
  )
}

export default GetProducts