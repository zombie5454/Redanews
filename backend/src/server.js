import express from 'express';
import cors from 'cors';
import db from './db.js';
import routes from './routes/index.js';
import newsAPI from './newsAPI.js';
import path from "path"

const app = express();
if(!process.env.MODE)
  process.env.MODE = "backend"
console.log("open mode : " + process.env.MODE)

if(!process.env.MODE || process.env.MODE == "backend"){
  app.use(cors());
  app.use(express.json());
  app.use('/', routes);
}

else if(process.env.MODE == "full-stack"){
  app.use(express.json());
  app.use('/', routes);
  const __dirname = path.resolve()
  app.use(express.static(path.join(__dirname, "../frontend", "build")))
  app.get("/*", function (req, res){
    res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"))
  })
}

db.connect();

const port = process.env.PORT || 4000

app.listen(port, () => {
 console.log(`Server is up on port ${port}.`);
});

