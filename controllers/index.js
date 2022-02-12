const index = (req, res) => {
    res.render(`index`, {
        title: 'WebStore'
    });
};

const products = (req, res, next) => {
    res.render('products', {
        title: 'List of Products',
        items: items
    });
};

const items = [
    { id: 0, name: 'Name'}
];

const newItems = (req, res, next) => {
    // const newItem = req.body.newItem;
    const { newItem } = req.body;
    items.push({
        id: items.length + 1,
        name: newItem
    });
    res.redirect('/products');
};

module.exports = {
    index,
    products,
    newItems
};