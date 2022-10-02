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

const initialValues = { name: '', number: '' };

export const ContactForm = ({ onSubmit }) => {
  const nameID = nanoid();
  const numberID = nanoid();
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

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
        <Form>
          <Label htmlFor={nameID}>Name</Label>
          <Input
            type="text"
            name="name"
            id={nameID}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // value={name}
            // onChange={this.handleChange}
          />
          <Error component="div" name="name" />
          <Label htmlFor={numberID}>Number</Label>
          <Input
            type="tel"
            name="number"
            id={numberID}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            //     value={number}
            //     onChange={this.handleChange}
          />
          <Error component="div" name="number" />
          <Button type="submit">Add contact</Button>
          {/* <Button type="submit" disabled={!values}>
            Add contact
          </Button> */}
        </Form>
      </Formik>
    </Box>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
