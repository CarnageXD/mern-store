import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import {IconButton, TextField} from "@mui/material";
import {Close} from "@mui/icons-material";

type SearchPropsType = {
    value: string,
    setValue: Dispatch<SetStateAction<string>>
}

const Search: React.FC<SearchPropsType> = ({value, setValue}) => {

    return (
        <TextField
            variant={"standard"}
            placeholder="Search..."
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            InputProps={{
                endAdornment:
                    <IconButton onClick={() => setValue('')}>
                        <Close fontSize={"small"}/>
                    </IconButton>
            }}
        >
        </TextField>
    );
};

export default Search;