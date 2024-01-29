// const products = require('../public/product.json');
const ProductServices = require('../services/product_1.service');
const productService = new ProductServices();


exports.getAllProduct = async (req, res) => {
    let products = await productService.getAllProducts({ isDelete: false });
    res.json({ Product: products });
};

exports.getProduct = async (req, res) => {
    // console.log(req.params.id);                              // result get by default string in object 
    // let id = +req.params.id;                                 //  OR  id = Number(req.params.id)  --> this is for convert string to number 
    // let product = product.find((e)=>{e.id === id})           // e = element for get specific field from product.json in Array form
    let id = req.query.productID;
    let getProduct = await productService.getProductById(id);
    if (!getProduct) {
        res.json({ message: "Product is Not Found..." });
    }
    // For get specific field otherwise not use
    let showProduct = {
        id: getProduct._id,
        title: getProduct.title,
        price: getProduct.price
    };
    // console.log(showProduct);
    res.json({ product: showProduct });
};

exports.addProduct = async (req, res) => {
    // console.log(req.body);
    // products.push(req.body);
    let product = await productService.getProduct({ title: req.body.title, isDelete: false });
    if (product) {
        return res.json({ message: 'Product is alredy exist.' });
    }
    let newProduct = await productService.addNewProduct({ ...req.body });
    // newProduct.save();
    res.json({ Product: newProduct, message: "product is successfully added..." });
};

exports.replaceProduct = async (req, res) => {
    let id = +req.params.id;
    let index = products.findIndex((e) => e.id === id);
    let repProduct = products[index];
    // console.log(repProduct);
    products.splice(index, 1, { ...req.body })
    res.json({ message: "Product is replaced...." });
};

exports.updateProduct = async (req, res) => {
    // let id = +req.params.id;
    let id = req.query.productID;
    let Updtproduct = await productService.getProductById(id);
    if (!Updtproduct) {
        res.json({ message: "Product is Not Found..." });
    }
    Updtproduct = await productService.updateProduct(id, { ...req.body });
    // product = await products.findByIdAndUpdate(id,{$set : {...req.body }},{new : true});
    // console.log(UpdtProduct);
    // products.splice(index, 1, { ...UpdtProduct, ...req.body })
    res.json({ Updtproduct, message: "Product is Updated...." });
};

exports.deleteProduct = async (req, res) => {
    // let id = +req.params.id;
    // let index = products.findIndex((e) => e.id === id);
    let id = req.query.productID;
    let dltProduct = await productService.getProductById(id);
    if (!dltProduct) {
        res.json({ message: "Product is Not Found..." });
    }
    dltProduct = await productService.updateProduct(id, { isDelete: true });
    // products.splice(index, 1)
    res.json({ dltProduct, message: "Product is Deleted...." });
};