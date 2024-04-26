const mongoose = require('mongoose');

const uri = 'mongodb+srv://realaaditya5:yFfZfLs51SXj1sCV@clusterpizza.wkdrxps.mongodb.net/PizzaDetail?retryWrites=true&w=majority&appName=ClusterPizza';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Pizza MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

const pizzaSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

const pizzasData = [
  { name: 'Margherita', description: 'Tomato sauce, mozzarella, basil', price: 8.99 },
  { name: 'Pepperoni', description: 'Tomato sauce, mozzarella, pepperoni', price: 10.99 },
  { name: 'Vegetarian', description: 'Tomato sauce, mozzarella, bell peppers, onions, olives', price: 9.99 },
  { name: 'Hawaiian', description: 'Tomato sauce, mozzarella, ham, pineapple', price: 11.99 },
  { name: 'Meat Lovers', description: 'Tomato sauce, mozzarella, pepperoni, sausage, bacon', price: 12.99 },
  { name: 'BBQ Chicken', description: 'BBQ sauce, mozzarella, chicken, red onions, cilantro', price: 11.99 },
  { name: 'Buffalo Chicken', description: 'Buffalo sauce, mozzarella, chicken, red onions, ranch drizzle', price: 11.99 },
  { name: 'Mushroom', description: 'Tomato sauce, mozzarella, mushrooms, onions, olives', price: 9.99 },
  { name: 'Supreme', description: 'Tomato sauce, mozzarella, pepperoni, sausage, bell peppers, onions, olives', price: 12.99 },
  { name: 'Four Cheese', description: 'Tomato sauce, mozzarella, cheddar, parmesan, feta', price: 10.99 }
];

Pizza.insertMany(pizzasData)
  .then(() => console.log('Pizza data added successfully'))
  .catch(err => console.error('Error adding pizza data:', err));
