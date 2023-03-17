import react, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { BsPlusSquareFill } from "react-icons/bs";

import { SidebarContext } from "../../../../controllers/contexts/SidebarContextProvider";
import GetProducts from "./GetProducts";
import UpdateProducts from "./UpdateProducts";
import DeleteProducts from "./DeleteProducts";

const Products = () => {

    const { setOptions } = useContext(SidebarContext);

    useEffect(() => {
      const options = [
        { id: 1, title: "Agregar Producto", icon: <BsPlusSquareFill />, linkTo: '/products/add' },
        { id: 2, title: "Gestionar Productos", icon: <BsPlusSquareFill />, linkTo: '/products/add' }
      ];
      setOptions(options);
    }, [setOptions]);

    return (
      <>
        <main className='bg-[#FFFEF9] grid grid-cols-12 py-6'>
          <article className='col-start-3'>
            <section>
              <h2 className=''>Productos</h2>
              <GetProducts />
              <UpdateProducts />
              <DeleteProducts />
            </section>
          </article>
        </main>
      </>
    );
}

export default Products;