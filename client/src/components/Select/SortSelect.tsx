import React, {Dispatch, SetStateAction} from 'react';
import {MenuItem} from "@mui/material";
import CustomSelect from "./Select";

type CustomSelectProps = {
    setValue: Dispatch<SetStateAction<string>>
}

const SortSelect: React.FC<CustomSelectProps> = ({setValue}) => {
    return (
        <CustomSelect label="Sort by" setValue={setValue}>
            <MenuItem sx={{display: 'flex !important'}} value="newest">Newest</MenuItem>
            <MenuItem sx={{display: 'flex !important'}} value="lowest">Low {'>'} High</MenuItem>
            <MenuItem sx={{display: 'flex !important'}} value="highest">High {'>'} Low</MenuItem>
            <MenuItem sx={{display: 'flex !important'}} value="category">Category</MenuItem>
        </CustomSelect>
    );
};

export default SortSelect;