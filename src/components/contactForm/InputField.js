import React from 'react';

const InputField = ({
  className,
  label,
  type,
  name,
  value,
  onChange,
  isRequired,
  placeholder,
  darkMode,
}) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={isRequired}
        placeholder={placeholder}
        className={darkMode === 'true' ? 'reverse' : ''}
      />
    </div>
  );
};

export default InputField;
