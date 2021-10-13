const Router = require('express')
const ProductController = require('./../controllers/product.controller')
const multerInstance = require('./../multer/multer')


const router = Router()

router.post('/create', multerInstance.upload.single('image'), ProductController.create)
router.get('/', ProductController.getItems)
router.get('/:id', ProductController.getOne)
router.patch('/update/:id', ProductController.update)
router.delete('/delete/:id', ProductController.delete)

module.exports = router