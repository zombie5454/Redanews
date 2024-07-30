import express from 'express';
import cors from 'cors';
import db from './db.js';
import routes from './routes/index.js';
import newsAPI from './newsAPI.js';
import path from "path"

const app = express();

console.log("open mode : " + process.env.MODE)

if(process.env.MODE == "backend"){
  // Set middleware of CORS munally
  /*app.use((req, res, next) => {
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
  });*/

  app.use(cors());
/*app.use(cors({
  origin: '*', // 或者設置具體的來源
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers',
  credentials: true,
  maxAge: 7200
}));*/
}

app.use(express.json());
app.use('/', routes);

if(process.env.MODE == "full-stack"){
  const __dirname = path.resolve()
  app.use(express.static(path.join(__dirname, "../frontend", "build")))
  app.get("/*", function (req, res){
    res.sendFile(path.join(__dirname, "../frontend", "build", index.html))
  })
}

db.connect();

const port = process.env.PORT || 4000

app.listen(port, () => {
 console.log(`Server is up on port ${port}.`);
});

