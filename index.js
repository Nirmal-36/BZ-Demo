import express from 'express';
import { getLCS, getSubsetSum } from './util.js';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    console.log(req.query.s1, req.query.s2);
    res.send('Welcome to the homepage!');
});

app.get('/lcs', getLCS)
app.get('/subsetSum', getSubsetSum)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;