import axios from "axios";

let serverURL = process.env.REACT_APP_SERVER || `http://localhost:4000`;

if(process.env.REACT_APP_MODE == "full-stack")
  serverURL = "/"


console.log(`process.env.REACT_APP_SERVER = ${process.env.REACT_APP_SERVER}`)
console.log(`REACT_APP_MODE = ` + process.env.REACT_APP_MODE)
console.log(`my server is on ${serverURL}`)

const instance =  axios.create({
  baseURL: serverURL,
});

export default instance;

// instance.get('/hi').then((data) => console.log(data));
