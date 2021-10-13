import React, {ChangeEvent, useState} from "react";
import ProductItem from "./ProductItem";
import {Box, CircularProgress, Grid, IconButton, Pagination, TextField} from "@mui/material";
import {useGetProductsQuery} from "../../redux/features/api/mainApi";
import {Close} from "@mui/icons-material";
import {IProductsResponse} from "../../types/Products/products";

const ProductsList = () => {
    const [page, setPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const portionSize = 5
    const {data = {} as IProductsResponse, isLoading} = useGetProductsQuery({limit: portionSize, page: page});

    if (isLoading) return <CircularProgress color="primary"/>;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Box>
            <Box
                sx={{flexDirection: {xs: "column", sm: "row"}}}
                display={"flex"}
                justifyContent={"space-between"}
            >
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
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                <Grid container spacing={4}>
                    {
                        data.items.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))
                            .map((product) => (
                                <ProductItem key={product._id} {...product} />
                            ))}
                </Grid>
                <Pagination sx={{mb: 4, mt: 4}} page={page} onChange={handlePageChange} size={"large"}
                            count={Math.ceil(data.totalItems / portionSize)} showFirstButton
                            showLastButton/>
            </Box>
        </Box>
    );
};

export default ProductsList;
