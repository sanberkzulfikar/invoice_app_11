// components/Button.jsx
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  ${props => props.customStyles}
`;

const Button = ({ children, customStyles, ...props }) => {
  return (
    <StyledButton customStyles={customStyles} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
