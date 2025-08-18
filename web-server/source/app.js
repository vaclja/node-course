import path from 'path';
import express from 'express';
import {fileURLToPath} from 'url'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDirectory = path.join(__dirname, '../public');
console.log(publicDirectory);

const app = express();

app.use(express.static(publicDirectory));
 
app.get('/weather', (req,res) =>{
    res.send({
        forecast:"polojasno",
        location:"Kravaře"
    });
});

app.listen(3000, () => {
    console.log('Server is running...')
});