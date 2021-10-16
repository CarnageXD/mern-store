import React, {Dispatch, SetStateAction} from 'react';
import {Box, FormControl, InputLabel, Select, SelectChangeEvent} from "@mui/material";

type CustomSelectProps = {
    setValue: Dispatch<SetStateAction<string>>
    label: string
}

const CustomSelect: React.FC<CustomSelectProps> = ({setValue, children, label}) => {
    return (
        <Box m={2}>
            <FormControl fullWidth>
                <InputLabel id="select-id">{label}</InputLabel>
                <Select variant="standard"
                        sx={{width: '110px'}}
                        label="Sort by" labelId="select-id"
                        onChange={(e: SelectChangeEvent<SetStateAction<string>>) => setValue(e.target.value)}
                >
                    {children}
                </Select>
            </FormControl>
        </Box>
    );
};

export default CustomSelect;