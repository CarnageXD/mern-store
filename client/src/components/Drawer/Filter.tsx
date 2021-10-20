import * as React from 'react';
import {Dispatch, SetStateAction, useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import {Button, TextField, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import {FilterAlt} from "@mui/icons-material";
import {IProductFilters} from "../../types/Products/products";
import FilterSelect from "../Select/FilterSelect";


interface FilterPropsType {
    setFilters: Dispatch<SetStateAction<IProductFilters>>
    setPage: Dispatch<SetStateAction<number>>
}

const Filter: React.FC<FilterPropsType> = ({setFilters, setPage}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const [category, setCategory] = useState('')

    const toggleDrawer = () => () => {
        setIsOpen(prev => !prev);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setFilters({min, max, category})
        setPage(1)
    }

    const handleClearFilter = () => {
        setMin(0)
        setMax(0)
        setFilters({})
    }

    return (
        <Box>
            <Button style={{padding: 12, marginLeft: 8}} size="large" onClick={toggleDrawer()}>
                Filter
                <FilterAlt/>
            </Button>
            <Drawer
                anchor={"right"}
                open={isOpen}
                onClose={toggleDrawer()}
            >
                <Box component="form" width="320px" onSubmit={handleSubmit}>
                    <Typography
                        align={"center"}
                        onClick={toggleDrawer()}
                        color="inherit"
                        p={2}
                        sx={{cursor: 'pointer'}}
                    >
                        Back
                    </Typography>
                    <Divider/>

                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Typography sx={{mt: 2}} align="center" variant="h5">Categories</Typography>
                        <FilterSelect setValue={setCategory}/>
                    </Box>

                    <Divider/>
                    <Typography sx={{mt: 2}} align="center" variant="h5">Price</Typography>
                    <Box display="flex" justifyContent="center" mt={1} sx={{"& > *": {width: 100, m: 2}}}>
                        <TextField
                            onChange={(e) => setMin(+e.target.value)}
                            type="number"
                            label="min"
                        />
                        <TextField
                            onChange={(e) => setMax(+e.target.value)}
                            type="number"
                            label="max"
                        />
                    </Box>
                    <Divider/>
                    <Button name="clear" onClick={() => handleClearFilter()}
                            style={{padding: 4, marginTop: 12, width: '100%'}}
                            size="large">Clear filter</Button>
                    <Button name="search" onClick={() => setIsOpen(false)} type="submit"
                            style={{padding: 4, marginTop: 12, width: '100%'}}
                            size="large">SEARCH</Button>
                </Box>
            </Drawer>
        </Box>
    );
}

export default Filter

