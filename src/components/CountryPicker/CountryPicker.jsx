import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import classes from '../CountryPicker/CountryPicker.module.css';

const CountrPicker = (props) => {
    return (
        <div> 
            <FormControl className={classes.formControl}> 
                <NativeSelect defaultValue='' onChange={(e) => props.handleChange(e.target.value)}> 
                    <option value='global'> Global </option>
                    {props.countryName.map((country,i) => 
                        <option key={i} value={country}> {country} </option>
                    )}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountrPicker;