import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

import ProductForm from './ProductForm.jsx';

import { axiosReq } from '../../../controllers/apiReq.mjs';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axiosReq('get', '/api/products/get', {}, {}, 3000)
      .then(res => {
        console.log('Products with signed URLs:', res.data.products);
        setProducts(res.data.products);
      })
      .catch(error => console.error(error));
  }, []);

  const removeProduct = async barcode => {
    await axiosReq('delete', `/api/products/delete/${barcode}`, {barcode}, {}, 3000).then(res => console.log(res.data)).then(() => {
      let updatedProductList = [...products].filter(product => product.barcode !== barcode);
      setProducts(updatedProductList);
    });
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleAddProduct = async product => {
    // Aquí puedes llamar a tu función de añadir productos en tu API
    const formData = new FormData();
    formData.append('barcode', product.barcode);
    formData.append('name', product.name);
    if (product.image) {
      formData.append('image', product.image);
    }

    const response = await axiosReq('post', '/api/products/add', formData, { headers: { 'Content-Type': 'multipart/form-data' } }, 3000);
    // Agrega el nuevo producto a la lista de productos
    setProducts([...products, response.data.product]);
    toggleModal();
  };

  const handleEditProduct = async product => {
    // Aquí puedes llamar a tu función de editar productos en tu API
    const formData = new FormData();
    formData.append('barcode', product.barcode);
    formData.append('name', product.name);
    console.log(product.image)
    if (product.image) {
      formData.append('image', product.image);
    }

    await axiosReq('patch', `/api/products/update/${product.barcode}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } }, 10000);
    // Actualiza el producto en la lista de productos
    setProducts(products.map(p => (p.barcode === product.barcode ? product : p)));
    toggleModal();
  };


  return (
    <section className='w-full h-full bg-zinc-200 rounded-md'>
      <Container fluid>
        <div className="float-end">
          <Button color="success" onClick={() => { setSelectedProduct(null); toggleModal(); }}>Añadir Producto</Button>
        </div>
        <Table className="mt-4">
          <thead>
            <tr>
              <th width="20%">Código de Barras</th>
              <th width="20%">Nombre</th>
              <th width="20%">Imagen</th>
              <th width="10%">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td style={{ whiteSpace: 'nowrap' }}>{product.barcode}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{product.name}</td>
                <td>
                  {product.image && ( // Muestra la imagen si hay una URL
                    <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '50px', maxHeight: '50px' }} />
                  )}
                </td>
                <td>
                  <ButtonGroup>
                    <Button size="sm" color="primary" onClick={() => { setSelectedProduct(product); toggleModal(); }}>Edit</Button>
                    <Button size="sm" color="danger" onClick={() => removeProduct(product.barcode)}>Delete</Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>{selectedProduct ? 'Editar Producto' : 'Añadir Producto'}</ModalHeader>
        <ModalBody>
          <ProductForm
            selectedProduct={selectedProduct}
            onSave={product => {
              if (selectedProduct) {
                handleEditProduct(product);
              } else {
                handleAddProduct(product);
              }
            }}
            toggleModal={toggleModal}
          />
        </ModalBody>
      </Modal>
    </section>
  );
}

export default ProductList;
