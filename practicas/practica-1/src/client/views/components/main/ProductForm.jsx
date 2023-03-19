import React, { useState, useEffect } from 'react';
import { Button, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const ProductForm = ({ selectedProduct, onSave, toggleModal }) => {
  const [barcode, setBarcode] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (selectedProduct) {
      setBarcode(selectedProduct.barcode);
      setName(selectedProduct.name);
    } else {
      setBarcode('');
      setName('');
    }
  }, [selectedProduct]);

  const validateForm = () => {
    const errors = {};
    if (!barcode) errors.barcode = 'El código de barras es obligatorio';
    if (!name) errors.name = 'El nombre es obligatorio';
    return errors;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  

  const handleSubmit = () => {
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      onSave({ barcode, name, image });
      setBarcode('');
      setName('');
      setImage(null);
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <>
      <FormGroup>
        <Label for="barcode">Código de Barras</Label>
        <Input
          type="text"
          name="barcode"
          id="barcode"
          value={barcode}
          onChange={e => setBarcode(e.target.value)}
          invalid={!!formErrors.barcode}
        />
        {formErrors.barcode && <FormFeedback>{formErrors.barcode}</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label for="name">Nombre</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          invalid={!!formErrors.name}
        />
        {formErrors.name && <FormFeedback>{formErrors.name}</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label for="image">Imagen</Label>
        <Input
          type="file"
          name="image"
          id="image"
          onChange={handleImageChange}
        />
      </FormGroup>
      <Button color="primary" onClick={handleSubmit}>{selectedProduct ? 'Guardar Cambios' : 'Añadir Producto'}</Button>{' '}
      <Button color="secondary" onClick={toggleModal}>Cancelar</Button>
    </>
  );
};

export default ProductForm;
