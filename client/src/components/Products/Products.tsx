import React, {useState} from "react";
import ProductItem from "./ProductItem";
import {Box, CircularProgress, Grid, Pagination, Typography} from "@mui/material";
import {useGetProductsQuery} from "../../redux/features/api/mainApi";
import {IProductFilters, IProductsResponse} from "../../types/Products/products";
import Search from "../Search/Search";
import SortSelect from "../Select/SortSelect";
import Filter from "../Drawer/Filter";

const Products = () => {
    const [page, setPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [sortValue, setSortValue] = useState('Newest')
    const [filters, setFilters] = useState({} as IProductFilters)
    const portionSize = 9

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const {data = {} as IProductsResponse, isLoading} = useGetProductsQuery(
        {limit: portionSize, page: page, order: sortValue, filters});

    if (isLoading) return <CircularProgress color="primary"/>;
    return (
        <Box width="100%" display="flex" flexDirection="column" alignItems="center">
            <Box mb={4} width="100%" flexDirection={{xs: "column", md: "row"}}
                 display="flex" justifyContent="space-between">
                <Search value={searchValue} setValue={setSearchValue}/>
                <Box mt={2} display="flex" alignItems="center" justifyContent="space-between">
                    <SortSelect setValue={setSortValue}/>
                    <Filter setPage={setPage} setFilters={setFilters}/>
                </Box>
            </Box>

            <Grid container spacing={4}>
                {
                    data.items.length > 0 ?
                        data.items.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))
                            .map((product) => (
                                <ProductItem key={product._id} {...product} />
                            ))
                        :
                        <Typography sx={{pl: '1.5rem'}} gutterBottom variant="h5">No products</Typography>
                }
            </Grid>

            <Pagination sx={{mb: 4, mt: 4}} page={page} onChange={handlePageChange} size={"large"}
                        count={Math.ceil(data.totalItems / portionSize)}
                        showFirstButton
                        showLastButton/>

        </Box>
    );
};

export default Products;
