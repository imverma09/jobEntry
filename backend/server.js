const app = require('express')()
const mongoose =  require('mongoose')

mongoose.connect('mongodb://localhost:27017/jobEntry')
.then(()=>{
    app.listen(4000 , ()=>{
         console.log('server Start');
    })
})
.catch((err)=>{
  console.error(err)
})
