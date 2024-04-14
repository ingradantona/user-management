import { IconButton, InputAdornment, InputLabel, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { DefaultInputProps } from './types';
import { InputTheme, LabelTheme } from '../../../assets/styles/shared';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { FormGroup } from '../FormGroup';

export function DefaultInput({
  label,
  placeholder,
  width,
  error,
  removeError,
  isMultiline,
  shrink,
  rows,
  small,
  line,
  adornment,
  type,
  toggleShowPassword,
  showPassword,
  disabled,
  ...rest
}: DefaultInputProps) {
  const useWidth = width;
  const isPassword = showPassword ? 'text' : 'password';
  const [showError, setShowError] = useState(error ? true : false);

  useEffect(() => {
    setShowError(error ? true : false);
  }, [error]);

  const handleInputChange = () => {
    if (error && removeError) {
      removeError(error);
    }
  };

  const inputProps = {
    ...rest,
  };

  const InputIcon = () => {
    return showPassword ? <MdVisibility /> : <MdVisibilityOff />;
  };

  const renderEndAdornment = () => {
    if (type === 'password') {
      return (
        <InputAdornment position="end">
          {type !== 'password' ? (
            adornment
          ) : (
            <IconButton
              aria-label="toggle password visibility"
              onClick={toggleShowPassword}
              edge="end"
            >
              <InputIcon />
            </IconButton>
          )}
        </InputAdornment>
      );
    }
  };

  return (
    <FormGroup error={error}>
      <InputLabel sx={LabelTheme()}>{label}</InputLabel>
      <TextField
        type={type === 'password' ? isPassword : type}
        variant="outlined"
        placeholder={placeholder}
        rows={rows}
        sx={InputTheme()}
        style={{ width: useWidth }}
        error={showError}
        onChange={handleInputChange}
        inputProps={inputProps}
        InputProps={{
          endAdornment: renderEndAdornment(),
        }}
        multiline={isMultiline}
        InputLabelProps={{ shrink }}
        size={small ? 'small' : 'medium'}
        disabled={disabled ? disabled : false}
      />
    </FormGroup>
  );
}
