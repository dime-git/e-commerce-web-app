import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Dimitar',
      email: 'admin@example.com',
      password: bcrypt.hashSync('12345'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'john@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Slim shirt',
      slug: 'slim-shirt',
      category: 'Shirts',
      image: '/images/slimshirt.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Ralph Lauren',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Fit shirt',
      slug: 'fit-shirt',
      category: 'Shirts',
      image: '/images/fitshirt.jpg',
      price: 35,
      countInStock: 0,
      brand: 'Levis',
      rating: 3.8,
      numReviews: 15,
      description: 'high quality shirt',
    },
    {
      // _id: '3',
      name: 'Fit pants',
      slug: 'fit-pants',
      category: 'Pants',
      image: '/images/fitpants.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Replay',
      rating: 4.8,
      numReviews: 15,
      description: 'high quality pants',
    },
    {
      // _id: '4',
      name: 'Slim pants',
      slug: 'slim-pants',
      category: 'Pants',
      image: '/images/slimpants.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Kangol',
      rating: 3.6,
      numReviews: 150,
      description: 'high quality pants',
    },
  ],
};

export default data;
