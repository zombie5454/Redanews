import express from 'express';
import cors from 'cors';
import db from './db.js';
import routes from './routes/index.js';
import newsAPI from './newsAPI.js';


const app = express();
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // 处理 OPTIONS 请求（预检请求）
    if (req.method === 'OPTIONS') {
      return res.sendStatus(204);
    }
  
    next();
  });
app.use(express.json());
app.use('/', routes);

db.connect();

const port = process.env.PORT || 4000

app.listen(port, () => {
 console.log(`Server is up on port ${port}.`);
});

