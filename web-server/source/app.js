import path from 'path';
import express from 'express';
import {fileURLToPath} from 'url'; 
import hbs from 'hbs';


// Define paths for static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define paths for handlebars
const publicDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const templatePath = path.join(__dirname, '../templates/partials');

console.log(publicDirectory);

//init express and set paths
const app = express();
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(templatePath);

// Setup static directory to serve
app.use(express.static(publicDirectory));

app.get('', (req,res)=>{
    res.render('index', {
        title: 'Weather',
        name: 'Jan Vaclavik'
    });
});

app.get('/about', (req,res) =>{
    res.render('about', {
        title:'About me',
        name: 'Jan Vaclavik'
    });
})

app.get('/help', (req, res)=> {
    res.render('help', {
        title: 'Help page',
        paragraph: 'This is a help page, please refer to this page if you need any help.',
        name: 'Jan Vaclavik'
    });
});

app.get('/weather', (req,res) =>{
    if(!req.query.address){
        return res.send({
            error:'You must provide an address'
        })
    };
    res.send({
        forecast:"polojasno",
        location:"Kravaře",
        address:req.query.address

    });
});
app.get('/products', (req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'You must provide a search term'
        })
    }
    console.log(req.query); 
    res.send({
        products:[]
    });
});

app.get('/help/*', (req,res)=>{
    res.render('404',{
        title:'404 page',
        name: 'Jan Vaclavik',
        errorMessage:'404 on help page could not be found'
    })
})

app.get('*', (req, res) =>{
    res.render('404', {
        title:'404',
        name: 'Jan Vaclavik',
        errorMessage: 'Page not found'
    })
});

app.listen(3000, () => {
    console.log('Server is running...')
});