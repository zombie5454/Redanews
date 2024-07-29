import express from 'express';
import cors from 'cors';
import db from './db.js';
import routes from './routes/index.js';
import newsAPI from './newsAPI.js';


const app = express();
//app.use(cors());
/*app.use(cors({
  origin: '*', // 或者設置具體的來源
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers',
  credentials: true,
  maxAge: 7200
}));*/
// Set middleware of CORS 
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  res.setHeader("Access-Control-Max-Age", 7200);

  // 處理預檢請求
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

