import React from 'react';
import {InputLabel, FormControl, MenuItem, TextField , Select, FormHelperText, Button} from '@material-ui/core'
import {Autocomplete} from '@material-ui/lab';
import chevroninput from '../../images/chevroninput.svg'

function InputText(props){
    const {name, label, type, value, placeholder, onChange, errorsMessage, disabled, error,  handleBlur} = props
    return (
        <TextField 
            className='custom_text_input'
            type={type}
            name={name}
            error={error}
            id="outlined-basic" 
            label={label}
            variant="outlined"
            value={value}
            helperText={errorsMessage}
            disabled={disabled}
            fullWidth={true}
            onChange={onChange}
            placeholder={placeholder}
            onBlur={handleBlur}
            // inputProps={{ style: { fontSize: '9px', height: '48px !important'}}}
        />
    )
}

function InputSelect(props){
    const {name, label, value, placeholder, disabled, onChange, options, getOptionLabel, error, errorsMessage} = props
    return (
        <Autocomplete
            popupIcon={<img style={{margin : '0 8px'}} src={chevroninput} alt='chevron'/>}
            id={name}
            autoComplete
            openOnFocus
            options={options}
            getOptionLabel={getOptionLabel}
            // onChange={(e,val)=>console.log(val, e.target.name)}
            onChange={onChange}
            style={{ width: '100%'}}
            disabled={disabled}
            value={value}
            renderInput={(params) => 
            <TextField 
                {...params} 
                className='custom_text_input'  
                helperText={errorsMessage} 
                placeholder={placeholder} 
                label={label} 
                variant="outlined" 
                error={error}
            />}
        />
    )
}




export {InputText, InputSelect};