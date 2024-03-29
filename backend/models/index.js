const mongoose = require('mongoose');

const brandSchema = require('./brands');
const consolesSchema = require('./consoles');
const gamesSchema = require('./games');
const userSchema = require('./user');
const shoppingCartSchema = require('./shoppingCart');
const cartItemSchema = require('./cartItem');
const categorySchema = require('./category');
const accessorySchema = require('./accessories');

const Brands = mongoose.model('Brand', brandSchema);
const Consoles = mongoose.model('Consoles', consolesSchema);
const Games = mongoose.model('Games', gamesSchema);
const User = mongoose.model('User', userSchema);
const CartItem = mongoose.model('CartItem', cartItemSchema)
const Category = mongoose.model('Category', categorySchema)
const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema)
const Accessory = mongoose.model('accessories', accessorySchema)

module.exports = {
    Brands,
    Consoles,
    Games,
    User,
    CartItem,
    Category,
    ShoppingCart,
    Accessory,
}