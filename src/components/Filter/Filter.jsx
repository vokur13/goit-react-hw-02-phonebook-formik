import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Box } from '../Box';
import { Label, Input, Error } from './Filter.styled';

let schema = yup.object().shape({
  value: yup.string(),
});

export const Filter = ({ value, onChange }) => {
  const filterID = nanoid();

  return (
    <Box
      display="block"
      p={2}
      mb={3}
      bg="bgComponent"
      width="50%"
      borderRadius="normal"
      boxShadow="basic"
    >
      <Formik
        initialValues={{ value: '' }}
        validationSchema={schema}
        onSubmit={(values, actions) => {}}
      >
        <Form autoComplete="off">
          <Label htmlFor={filterID}>Find contacts by name</Label>
          <Input
            id={filterID}
            type="text"
            name="value"
            value={value}
            onChange={onChange}
          />
          <Error component="div" name="value" />
        </Form>
      </Formik>
    </Box>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
