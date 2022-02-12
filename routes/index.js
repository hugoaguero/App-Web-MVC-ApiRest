const express = require("express");
const router = express.Router();

const items = [
    { id: 0, name: 'Name'}
];

const IndexController = require('../controllers/index');

router.get('/', IndexController.index);

router.get('/products', IndexController.products);

router.post('/new-product', IndexController.newItems);

module.exports = router;
