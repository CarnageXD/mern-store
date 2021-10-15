import React, {useState} from "react";
import ProductItem from "./ProductItem";
import {Box, CircularProgress, Grid, Pagination} from "@mui/material";
import {useGetProductsQuery} from "../../redux/features/api/mainApi";
import {IProductsResponse} from "../../types/Products/products";
import Search from "../Search/Search";
import Select from "../Select/Select";
import Filter from "../Drawer/Filter";

const ProductsList = () => {
    const [searchValue, setSearchValue] = useState('')
    const [sortValue, setSortValue] = useState('Newest')
    const [page, setPage] = useState(1)
    const portionSize = 6
    const {data = {} as IProductsResponse, isLoading} = useGetProductsQuery(
        {limit: portionSize, page: page, order: sortValue}
    );

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    if (isLoading) return <CircularProgress color="primary"/>;
    return (
        <Box width="100%" display="flex" flexDirection="column" alignItems="center">
            <Box mb={4} width="100%" flexDirection={{xs: "column", md: "row"}}
                 display="flex" justifyContent="space-between">
                <Search value={searchValue} setValue={setSearchValue}/>
                <Box mt={2} display="flex" alignItems="center" justifyContent="space-between">
                    <Select value={sortValue} setValue={setSortValue}/>
                    <Filter/>
                </Box>
            </Box>

            <Grid container spacing={4}>
                {
                    data.items.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((product) => (
                            <ProductItem key={product._id} {...product} />
                        ))
                }
            </Grid>


            <Pagination sx={{mb: 4, mt: 4}} page={page} onChange={handlePageChange} size={"large"}
                        count={Math.ceil(data.totalItems / portionSize)} showFirstButton
                        showLastButton/>
        </Box>
    );
};

export default ProductsList;
