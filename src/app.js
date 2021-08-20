const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const route = require('./routes');

const app = express();
const port = 3000;

//Morgan
app.use(morgan('combined'));

//express-handlebars
app.engine(
    'hbs',
    exphbs({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, '/resources/views'));

//Routes init
route(app);

      app.listen(port, () => {
          console.log(`Example app listening at http://localhost:${port}`);
      });
