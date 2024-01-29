const CartServices = require('../services/Cart.service');
const CartService = new CartServices();

exports.addNewCart = async(req , res)=> {
    try {
        let cart = await CartService.getCart({ cartItem:  req.body.cartItem, user:req.user._id , isdelete: false});
        if(cart){
            return res.json({massage:'cart ithem olredy exist...'});
        }
        cart = await CartService.addToCart({
            ...req.body,user:req.user._id
        })
        res.json({cart,massage:'Cart added sucess'});
        
    } catch (error) {
        
        console.log(error);
        res.json({message :'internal server error'});
    }
};

exports.getAllCart = async (req , res) =>
{
    try {
        let Carts = await CartService.getAllCart({user: req.user._id,isdelete: false});
        res.json(Carts);
        
    } catch (error) {
        console.log(error);
        res.json({message :'internal server error'});

    }
};

exports.updateCart = async (req, res) => {
    try {
        let cart = await CartService.getCart({user: req.user._id});
        console.log(cart);
        if(!cart){
            return res.json({message: 'Items is Not Found'});
        }
        let id = cart._id;
        // console.log("item Id => ",id);
        let userId = cart.user;
        // console.log(userId);
        let cartId = cart.cartItem;
        // console.log("cartID =>",cartId);
        cart = await CartService.updateCart(cart._id,req.body);
        res.json({cart ,message: "Cart Updated sucessfully"});
    } catch (error) {
        console.log(error);
        return res.json({message : "Internal server error From:controller"});
    }
};