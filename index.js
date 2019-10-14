const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const homeRoutes = require('./routes/home');
const cardRoutes = require('./routes/card');
const addRoutes = require('./routes/add');
const coursesRoutes = require('./routes/courses');

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

app.use('/', homeRoutes);
app.use('/add', addRoutes);
app.use('/courses', coursesRoutes);
app.use('/card', cardRoutes);

const PORT = process.env.PORT || 3000;



const password = 'MNRgatjbTQr2IIsH';
const url = 'mongodb+srv://Antoni:MNRgatjbTQr2IIsH@cluster0-6tec7.mongodb.net/test?retryWrites=true&w=majority';
// 'mongodb+srv://Anthoni:DrjQYDuSoz1RzWpU@cluster0-8ugov.mongodb.net/shop' - i've forgot account from this db


//MOngoDB

async function start() {
  try {
  const url = 'mongodb+srv://Antoni:MNRgatjbTQr2IIsH@cluster0-6tec7.mongodb.net/shop';
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useFindAndModify: false
    });
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
  
}

start();


