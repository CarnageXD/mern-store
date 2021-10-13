
const ProductService = require('./../services/product.service')

class ProductController {
    async create(req, res) {
        try {
            const payload = {
                ...req.body,
                image: req.file.path,
            }
            const product = await ProductService.create(payload)
            res.status(201).json(product)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    async getItems(req, res) {
        try {
            return res.json(await ProductService.getItems(req.query))
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    async getOne(req, res) {
        try {
            return res.json(await ProductService.getOne(req.params.id))
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }
    async update(req, res) {
        try {
            const updatedProduct = await ProductService.update(req.params.id, req.body)
            return res.json(updatedProduct)
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }
    async delete(req, res) {
        try {
            await ProductService.delete(req.params.id)
            return res.json('Product was successfully deleted')
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
    }
}

module.exports = new ProductController()