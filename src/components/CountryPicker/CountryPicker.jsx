import React from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import classes from '../CountryPicker/CountryPicker.module.css';

const CountrPicker = (props) => {
    return (
        <div> 
            <FormControl className={classes.formControl}> 
                <NativeSelect> 
                    <option value='global'> GLOBAL </option>
                    {/* {props.country.map(country => {
                        <option  value={country.name}> {country.name} </option>
                    })} */}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountrPicker;