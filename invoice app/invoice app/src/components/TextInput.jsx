// components/TextInput.jsx

import React from 'react';
import styled from 'styled-components';


const StyledInput = styled.input`
  font-size: 1rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  line-height: 1.5;
  display: block;
  width: 100%;
  margin-bottom: 1rem; // space below the input

  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  // Allow for custom styles via props
  ${props => props.customStyles}
`;

// The React component that uses the styled input
const TextInput = ({ customStyles, ...props }) => {
  return <StyledInput customStyles={customStyles} {...props} />;
};

export default TextInput;
