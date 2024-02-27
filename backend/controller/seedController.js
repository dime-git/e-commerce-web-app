import Product from '../models/productModel.js';
import User from '../models/userModel.js';

export const seedController = async (req, res) => {
  try {
    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(data.products);

    await User.deleteMany({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdProducts, createdUsers });
  } catch (error) {}
};
