import React, {useState} from 'react';
import {Box, Button, CircularProgress, MenuItem, TextField, Typography} from "@mui/material";
import {IAdminAddProduct} from "../../types/Admin/admin";
import {useAddProductMutation} from "../../redux/features/api/mainApi";
import {useAppDispatch} from "../../hooks/redux-hooks";
import {setErrorSnackbar, setSuccessSnackbar} from "../../redux/features/snackbarSlice";

const AddProductForm = () => {
    const [product, setProduct] = useState<IAdminAddProduct>({
        title: '',
        description: '',
        category: '',
        price: '',
        image: '',
        sex: '',
        sizes: '37, 38, 39, 40, 41, 42, 43, 44',
    })

    const dispatch = useAppDispatch()

    const [addProduct, {isLoading}] = useAddProductMutation()

    const handleChange = (e: any) => {
        if (e.target.name === 'image') {
            setProduct({...product, [e.target.name]: e.target.files[0]})
        } else setProduct({...product, [e.target.name]: e.target.value})

    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const formData = createFormData()
        addProduct(formData).unwrap()
            .then(() => {
                dispatch(setSuccessSnackbar("Products was successfully created"))
                setProduct({
                    title: '',
                    description: '',
                    category: '',
                    price: '',
                    image: '',
                    sex: '',
                    sizes: '',
                })
            })
            .catch(e => dispatch(setErrorSnackbar(e.data.message)))
    }

    const createFormData = () => {
        const formData = new FormData()
        formData.append("title", product.title)
        formData.append("description", product.description)
        formData.append("category", product.category)
        formData.append("price", product.price)
        formData.append("sex", product.sex)
        formData.append("sizes", product.sizes)
        formData.append("image", product.image)
        return formData
    }

    if (isLoading) return <CircularProgress color={"primary"}/>
    return (
        <Box width={"300px"}>
            <Typography gutterBottom variant="h4">Create product: </Typography>
            <Box
                onSubmit={handleSubmit}
                display={"flex"}
                flexDirection={"column"}
                component={"form"}
                autoComplete="off"
                sx={{
                    '& > :not(style)': {m: 1, width: '25ch'},
                }}
            >
                <TextField
                    required
                    onChange={handleChange}
                    variant={"standard"}
                    label="Title"
                    id="title"
                    name="title"
                    value={product.title}
                />
                <TextField required onChange={handleChange} variant={"standard"} label="Description"
                           multiline={true} rows={3}
                           id="description"
                           name="description"
                           value={product.description}
                />
                <TextField required onChange={handleChange} variant={"standard"} label="Category" id="category"
                           name="category"
                           select
                           value={product.category}
                >
                    <MenuItem value="Lifestyle">Lifestyle</MenuItem>
                    <MenuItem value="Running">Running</MenuItem>
                    <MenuItem value="Basketball">Basketball</MenuItem>
                    <MenuItem value="Jordan">Jordan</MenuItem>
                    <MenuItem value="Tennis">Tennis</MenuItem>
                    <MenuItem value="Track">Track</MenuItem>
                </TextField>
                <TextField required onChange={handleChange} variant={"standard"} label="Price"
                           id="price"
                           name="price"
                           type="number"
                           value={product.price}
                />
                <TextField required onChange={handleChange} variant={"standard"} label="Sex"
                           id="sex"
                           name="sex"
                           select
                           value={product.sex}
                >
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"female"}>Female</MenuItem>
                </TextField>
                <TextField required onChange={handleChange} variant={"standard"} label="Sizes"
                           id="sizes"
                           name="sizes"
                           placeholder={"Format: '37, 38, 39...' "}
                           value={product.sizes}
                />
                <input
                    required
                    onChange={handleChange}
                    type="file"
                    accept={'image/*'}
                    name="image"
                    id="image"
                />
                <Button type={"submit"} variant={"contained"}>Submit product</Button>
            </Box>
        </Box>
    );
};

export default AddProductForm;