import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Box } from '../Box';
import { Label, Input, Error } from './ContactForm.styled';
import { Button } from '../Button';

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(7).required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const nameId = nanoid();
  const numberID = nanoid();

  //   state = { name: '', number: '' };

  //   handleChange = e => {
  //     const { name, value } = e.target;
  //     this.setState({ [name]: value });
  //   };

  //   checkChange = e => {
  //     const { name } = e.target;
  //     return !this.state[name] ? false : true;
  //   };

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     const { name, number } = e.target.elements;
  //     console.log(name.value, number.value);
  //     this.props.onSubmit({});
  //         this.resetForm();
  //   };

  //   resetForm = () => {
  //     this.setState({ name: '', number: '' });
  //   };

  return (
    <Box
      display="block"
      p={2}
      mb={4}
      bg="bgComponent"
      width="50%"
      borderRadius="normal"
      boxShadow="basic"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <Label htmlFor={nameId}>Name</Label>
          <Input
            type="text"
            name="name"
            id={nameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            //   value={name.value}
            //   onChange={handleChange}
          />
          <Error component="div" name="name" />
          <Label htmlFor={numberID}>Number</Label>
          <Input
            type="tel"
            name="number"
            id={numberID}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            //   value={number}
            //   onChange={handleChange}
          />
          <Error component="div" name="number" />
          {/* <Button type="submit" disabled={!this.state.name}> */}
          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </Box>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
