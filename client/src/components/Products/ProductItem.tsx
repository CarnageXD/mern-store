import React from 'react';
import {Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {IProduct} from "../../types/Products/products";
import {AddCircleOutline} from "@mui/icons-material";
import {useHistory} from "react-router-dom";

const ProductItem:React.FC<IProduct> =
    ({image, price, sex, description, category, _id, title}) => {
    const history = useHistory()
    return (
        <Grid item xs={12} sm={6} md={4} onClick={() => history.push(`/detailed/${_id}`)}>
            <Card>
                <CardActionArea sx={{display: "block !important"}}>
                    <CardMedia
                        component={"img"}
                        image={process.env.REACT_APP_API_URL + image}
                    />
                    <CardContent>
                        <Typography variant={"h5"}>{title}</Typography>
                        <Typography color={"silver"}>{category}</Typography>
                        <Typography variant={"h5"}>{price}$</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default ProductItem;