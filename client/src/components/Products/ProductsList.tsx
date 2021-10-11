import React, {ChangeEvent, useState} from "react";
import ProductItem from "./ProductItem";
import {Box, CircularProgress, Grid, IconButton, TextField} from "@mui/material";
import {useGetProductsQuery} from "../../redux/features/api/mainApi";
import {Close} from "@mui/icons-material";

const ProductsList = () => {
    const [searchValue, setSearchValue] = useState('')
    const {data = [], isLoading} = useGetProductsQuery();

    if (isLoading) return <CircularProgress color="primary"/>;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    return (
        <Box>
            <Box
                sx={{flexDirection: {xs: "column", sm: "row"}}}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}>
                <Box>
                    <TextField
                        variant={"standard"}
                        sx={{
                            width: "300px",
                            mb: 4,
                        }}
                        placeholder="Search..."
                        value={searchValue}
                        onChange={handleChange}
                        InputProps={{
                            endAdornment:
                                <IconButton onClick={() => setSearchValue('')}>
                                    <Close fontSize={"small"}/>
                                </IconButton>
                        }}
                    >
                    </TextField>

                </Box>
                Filter
                Sort by
            </Box>
            <Grid container spacing={4}>
                {
                    data.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase())).map((product) => (
                        <ProductItem key={product._id} {...product} />
                    ))}
            </Grid>
        </Box>
    );
};

export default ProductsList;
