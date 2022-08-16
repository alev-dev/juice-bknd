const { Router } = require('express');
const router = Router();
const { getAll, getOne, create, update, delete: deleteProduct } = require('../../controllers/product');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteProduct);

module.exports = router;
