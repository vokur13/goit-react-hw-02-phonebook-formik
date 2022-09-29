import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const Label = styled.label`
  display: block;
  width: 100%;
  padding: ${props => `${props.theme.space[1]}px`};
`;

export const Input = styled(Field)`
  width: 75%;
  padding: ${props => `${props.theme.space[1]}px`};
  &:not(:last-child) {
    margin-bottom: ${props => `${props.theme.space[2]}px`};
  }
`;

export const Error = styled(ErrorMessage)`
  color: ${props => props.theme.colors.red};
`;
