import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import React from 'react';
import "./Location.css"

interface ILocation {
  label: string
  menuA: string
  menuB:string
  menuC?:string
 
}


export default function EventLocation({label, menuA, menuB,  menuC }:ILocation) {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 400 }}>
        <InputLabel id="demo-simple-select-standard-label" className='Input-label'>{label}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Location"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>{menuA}</MenuItem>
          <MenuItem value={20}>{menuB}</MenuItem>
          <MenuItem value={30}>{menuC}</MenuItem>
        </Select>
      </FormControl>
      </div>
  );
}