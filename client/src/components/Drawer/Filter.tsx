import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import {Button, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import {FilterAlt} from "@mui/icons-material";


export default function Filter() {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleDrawer = () => () => {
        setIsOpen(prev => !prev);
    };

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
                <Box width="320px">
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
                </Box>
            </Drawer>
        </Box>
    );
}

