import * as React from 'react';
import { MenuItem, InputLabel, FormControl, Select } from '@material-ui/core';

const selectBox = ({field, setField, onChange}) => {

    return (
        <FormControl sx={{ m: 1, minWidth: 120}} size="smail" >
            <InputLabel id="demo-simple-select-autowidth-label">분야</InputLabel>
            <Select
                labelId='demo-simple-select-autowidth-label'
                id='demo-simple-select-autowidth'
                value={field}
                label="Field"
                onChange={onChange}
                autoWidth
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={field}>{field}</MenuItem>
                <MenuItem value={field}>{field}</MenuItem>
            </Select>
        </FormControl>
    );
}

export default selectBox;
