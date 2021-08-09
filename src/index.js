const express = require('express');
const path = require('path');
const handlebar = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const route = require('./resources/routes');

const PORT = 8080;
// using css and img with Static npm and node-sass
               app.use(express.static(path.join(__dirname, 'public')));
               // set views in project
               app.engine(
                   '.hbs',
                   handlebar({
                       extname: '.hbs',
                   }),
               );
                  app.set('view engine', '.hbs');
                  app.set('views', path.join(__dirname, 'resources/views'));
                  // set logger
                  app.use(morgan('tiny'));
                  // add middleware
                  app.use(
                      express.urlencoded({
                          extended: true,
                      }),
                  );
                  app.use(express.json());
                  
               // Routes init
               route(app);

app.listen(PORT, () => {
    console.log(`This app render in port local with http://localhost:${PORT}`);
});
