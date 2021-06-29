const express = require('express');
const path = require('path');
const app = express();
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: '929e2ddedf0c4004a3e8a4b3adc9ffce',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.use(express.json());



app.get('/', (req,res)=>{
    rollbar.log('Hello world!')
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

const port = process.env.PORT || 4545
app.listen(port, ()=>{console.log(`Server jamming on ${port}`)})