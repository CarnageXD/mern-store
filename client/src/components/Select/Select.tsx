import React, {Dispatch, SetStateAction} from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

type CustomSelectProps = {
    value: string,
    setValue: Dispatch<SetStateAction<string>>
}

const CustomSelect: React.FC<CustomSelectProps> = ({value, setValue}) => {
    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel id="select-id">Sort by</InputLabel>
                <Select variant="standard"
                        sx={{width: '110px'}}
                        label="Sort by" labelId="select-id"
                        onChange={(e: SelectChangeEvent<SetStateAction<string>>) => setValue(e.target.value)}
                >
                    <MenuItem sx={{display: 'flex !important'}} value="newest">Newest</MenuItem>
                    <MenuItem sx={{display: 'flex !important'}} value="lowest">Low {'>'} High</MenuItem>
                    <MenuItem sx={{display: 'flex !important'}} value="highest">High {'>'} Low</MenuItem>
                    <MenuItem sx={{display: 'flex !important'}} value="category">Category</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default CustomSelect;