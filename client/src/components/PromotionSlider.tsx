import React from 'react';
import Carousel from "react-material-ui-carousel";
import {Box} from "@mui/material";

const PromotionSlider = () => {
    let items = [
        {
            title: "Nike promo",
            image: "https://i2.wp.com/rematch.net/wp-content/uploads/2019/06/Nike-Sale-Up-to-50-off-2019.png"
        },
        {
            title: "Nike promo",
            image: "https://cms-cdn.thesolesupplier.co.uk/2018/10/bee522c7b8d62650aa3c213b4a717143-1.jpg"
        },
        {
            title: "Nike promo",
            image: "https://s3.aws-k8s.generated.photos/ai-generated-photos/upscaler-uploads/677/fd8f1368-d0bd-4b6e-84fe-fee3c902f967.jpg"
        },
    ]
    return (
       <Carousel>
           {items.map(item => (
                   <Box
                       sx={{
                           height: {xs: "35vh", sm: "70vh", md: "86vh"},
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