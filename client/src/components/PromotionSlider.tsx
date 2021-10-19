import React from 'react';
import Carousel from "react-material-ui-carousel";
import {Box} from "@mui/material";

const PromotionSlider = () => {
    let items = [
        {
            title: "Nike promo",
            image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-shoe-releases-06032020-1593546250.jpg"
        },
        {
            title: "Nike promo",
            image: "https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F11%2Fnike.jpg&signature=5709e93e20918cda02ef67130225d2e6"
        },
        {
            title: "Nike promo",
            image: "https://i2.wp.com/rematch.net/wp-content/uploads/2019/06/Nike-Sale-Up-to-50-off-2019.png"
        },
    ]
    return (
        <Carousel>
            {items.map(item => (
                <Box key={item.image}
                     sx={{
                         height: {xs: "35vh", sm: "70vh", md: "85vh"},
                         backgroundImage: `url(${item.image})`,
                         backgroundSize: "cover",
                         backgroundPosition: "center",
                     }}
                />
            ))}
        </Carousel>
    );
};

export default PromotionSlider;