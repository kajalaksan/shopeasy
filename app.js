const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const name =  "kajalaksan";

app.get("/", (req, res) => {
res.send(`Welcome to ShopEasy from ${name}`);
})

const server=app.listen(PORT, () =>{
console.log(`Server is running on port ${PORT}` );

})

module.exports={app,server,name}

