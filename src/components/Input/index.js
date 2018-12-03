import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const InputWrapper = styled('div')({
  width: '100%',
});

const LabelElement = styled('label')({
  width: '100%',
});
const InputElement = styled('input')({
  width: '100%',
});

const ErrorWrapper = styled('div')({
  width: '100%',
});

const Input = ({
  type,
  name,
  value,
  onChange,
  title,
  placeholder,
  labelStyles,
  ...props
}) => (
  <InputWrapper>
    <LabelElement htmlFor={name} {...labelStyles}>
      {title}
    </LabelElement>
    <InputElement
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
    <ErrorWrapper />
  </InputWrapper>
);

Input.propTypes = {};

Input.default = {
  type: 'text',
};
export default Input;
