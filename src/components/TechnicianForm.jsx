import React, { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';

const initialState = {
  nombre: '',
  apellido: '',
  telefono: '',
  dni: '',
  direccion: '',
};

const TechnicianForm = ({ onSubmit, mode, technicianToModify }) => {
  const [values, handleInputChange, resetValues, setAllValues] =
    useForm(initialState);
  const [specializations, setSpecializations] = useState([]);

  useEffect(() => {
    if (mode === 'Modify') {
      setAllValues(technicianToModify);
      setSpecializations(technicianToModify.especializaciones);
    }
  }, [technicianToModify, mode]);

  const handleSpecializationChange = ({ target }) => {
    if (target.checked && specializations.indexOf(target.value) === -1) {
      setSpecializations([...specializations, target.value]);
      return;
    }
    if (!target.checked) {
      setSpecializations(specializations.filter((x) => x !== target.value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      values.nombre.length === 0 ||
      values.apellido.length === 0 ||
      values.telefono.length === 0 ||
      values.dni.length === 0 ||
      values.direccion.length === 0
    ) {
      return;
    }
    onSubmit({ ...values, especializaciones: specializations });
    resetValues();
    setSpecializations([]);
  };

  return (
    <form action="">
      <input
        type="text"
        name="nombre"
        id="name"
        placeholder="Name"
        value={values.nombre}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="apellido"
        id="surname"
        placeholder="Surname"
        value={values.apellido}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="telefono"
        id="phone"
        placeholder="Phone number"
        value={values.telefono}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="dni"
        id="dni"
        placeholder="DNI"
        value={values.dni}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="direccion"
        id="address"
        placeholder="Address"
        value={values.direccion}
        onChange={handleInputChange}
      />
      <label>
        <input
          type="checkbox"
          name="a"
          id="a"
          value="A"
          checked={!!specializations.find((x) => x === 'A')}
          onChange={handleSpecializationChange}
        />
        A
      </label>
      <label>
        <input
          type="checkbox"
          name="b"
          id="b"
          value="B"
          checked={!!specializations.find((x) => x === 'B')}
          onChange={handleSpecializationChange}
        />
        B
      </label>
      <label>
        <input
          type="checkbox"
          name="c"
          id="c"
          value="C"
          checked={!!specializations.find((x) => x === 'C')}
          onChange={handleSpecializationChange}
        />
        C
      </label>
      <label>
        <input
          type="checkbox"
          name="d"
          id="d"
          value="D"
          checked={!!specializations.find((x) => x === 'D')}
          onChange={handleSpecializationChange}
        />
        D
      </label>

      <button type="submit" onClick={handleSubmit}>
        {mode} Technician
      </button>
    </form>
  );
};

export default TechnicianForm;
