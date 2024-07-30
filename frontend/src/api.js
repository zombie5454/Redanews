import axios from "axios";

let frontendURL = process.env.REACT_APP_frontendURL || `http://localhost:4000`;

if(process.env.NODE_ENV == "production")
  frontendURL = "/"

console.log(`my server is on ${process.env.REACT_APP_frontendURL}`)
console.log(`my server is on ${frontendURL}`)

const instance =  axios.create({
  baseURL: frontendURL,
});

export default instance;

// instance.get('/hi').then((data) => console.log(data));
