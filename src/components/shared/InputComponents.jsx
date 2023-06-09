import React from "react";
import {
  Checkbox,
  FormControl,
  TextField,
  FormControlLabel,
  FormHelperText,
  FormLabel,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import chevroninput from "../../images/chevroninput.svg";
import CurrencyTextField from '@unicef/material-ui-currency-textfield'


function InputText(props) {
  const {
    name,
    label,
    type,
    value,
    placeholder,
    onChange,
    helperText,
    disabled,
    error,
    handleBlur,
    pattern,
    onFocus,
    readOnly
  } = props;
  return (
    <TextField
      className="custom_text_input"
      type={type}
      name={name}
      error={error}
      pattern={pattern}
      id={name}
      label={label}
      variant="outlined"
      readOnly={readOnly}
      value={value}
      helperText={helperText}
      disabled={disabled}
      fullWidth={true}
      onChange={onChange}
      placeholder={placeholder}
      onBlur={handleBlur}
      inputProps={{
        autoComplete : "chrome-off",
      }}
      onFocus={onFocus}
      {...props}
    />
  );
}

function InputTextCurrency(props) {
  return (
    <CurrencyTextField
      className="custom_text_input"
      variant="outlined"
      outputFormat="number"
      fullWidth={true}
      {...props}
    />
  );
}

function InputTextArea(props) {
  const {
    name,
    label,
    type,
    value,
    placeholder,
    onChange,
    helperText,
    disabled,
    error,
    handleBlur,
    rows,
  } = props;
  return (
    <TextField
      className="custom_text_input"
      inputProps={{
        autoComplete : "chrome-off",
      }}
      type={type}
      name={name}
      error={error}
      multiline
      rows={rows}
      id="outlined-basic"
      label={label}
      variant="outlined"
      value={value}
      helperText={helperText}
      disabled={disabled}
      fullWidth={true}
      onChange={onChange}
      placeholder={placeholder}
      onBlur={handleBlur}
      {...props}
    />
  );
}

function InputSelect(props) {
  const {
    name,
    label,
    value,
    placeholder,
    disabled,
    onChange,
    options,
    getOptionLabel,
    error,
    helperText,
    getOptionSelected,
    onOpen,
    onInputChange,
    defaultValue,
    renderOption,
    multiple,
    filterSelectedOptions
  } = props;
  const filterOpt = { ...props };
  delete filterOpt.getOptionLabel;
  delete filterOpt.getOptionSelected;
  delete filterOpt.value;
  delete filterOpt.onInputChange;
  delete filterOpt.onOpen;
  delete filterOpt.defaultValue;
  delete filterOpt.renderOption;
  delete filterOpt.multiple;
  delete filterOpt.filterSelectedOptions;
  return (
    <Autocomplete
      popupIcon={
        <img style={{ margin: "0 8px" }} src={chevroninput} alt="chevron" />
      }
      id={name}
      onOpen = {onOpen}
      openOnFocus
      options={options}
      getOptionLabel={getOptionLabel}
      getOptionSelected ={getOptionSelected}
      onInputChange={onInputChange}
      onChange={onChange}
      style={{ width: "100%" }}
      disabled={disabled}
      value={value}
      renderOption={renderOption}
      multiple ={multiple}
      defaultValue={defaultValue}
      filterSelectedOptions={filterSelectedOptions}
      renderInput={(params) => (
        <TextField
        {...params}
          className="custom_text_input"
          variant="outlined"
          helperText={helperText}
          placeholder={placeholder}
          label={label}
          error={error}
          {...filterOpt}
        />
      )}
    />
  );
}

function InputCheckbox(props) {
  const {
    labelPlacement,
    value,
    label,
    name,
    onChange,
    color,
    labelColor,
    error,
    helperText,
    legend,
    id,
    disabled
  } = props;
  return (
    <FormControl error={error} style={{ marginBottom: 20 }}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormControlLabel
        name={name}
        onChange={onChange}
        style={{ color: labelColor, fontSize: 14 }}
        value={value}
        control={<Checkbox style={{ color: color }} />}
        label={label}
        labelPlacement={labelPlacement}
        id={id}
        disabled={disabled}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}

export { InputText, InputSelect, InputTextArea, InputCheckbox, InputTextCurrency };
