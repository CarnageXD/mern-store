import React, {Dispatch, SetStateAction} from 'react';
import {MenuItem} from "@mui/material";
import CustomSelect from "./Select";

type CustomSelectProps = {
    setValue: Dispatch<SetStateAction<string>>
}

const SortSelect: React.FC<CustomSelectProps> = ({setValue}) => {
    return (
        <CustomSelect label="Filter" setValue={setValue}>
            <MenuItem sx={{display: 'flex !important'}} value="Lifestyle">Lifestyle</MenuItem>
            <MenuItem sx={{display: 'flex !important'}} value="Running">Running</MenuItem>
            <MenuItem sx={{display: 'flex !important'}} value="Basketball">Basketball</MenuItem>
            <MenuItem sx={{display: 'flex !important'}} value="Jordan">Jordan</MenuItem>
            <MenuItem sx={{display: 'flex !important'}} value="Tennis">Tennis</MenuItem>
            <MenuItem sx={{display: 'flex !important'}} value="Track">Track</MenuItem>
        </CustomSelect>
    );
};

export default SortSelect;