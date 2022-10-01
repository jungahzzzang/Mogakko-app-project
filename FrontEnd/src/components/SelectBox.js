import * as React from 'react';
import { MenuItem, InputLabel, FormControl, Select } from '@material-ui/core';

export default function SelectBox() {
    const [field, setField ] = React.useState('');

    const handleChange = (event) => {
        setField(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120}} size="smail" >
            <InputLabel id="demo-simple-select-autowidth-label">분야</InputLabel>
            <Select
                labelId='demo-simple-select-autowidth-label'
                id='demo-simple-select-autowidth'
                value={field}
                label="Field"
                onChange={handleChange}
                autoWidth
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={backEnd}>백엔드</MenuItem>
                <MenuItem value={frontEnd}>프론트엔드</MenuItem>
            </Select>
        </FormControl>
    );
}
