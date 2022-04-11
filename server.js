const express = require('express')
const connectDB = require('./config/connectDB')
const User = require('./models/User')
require('dotenv').config({ path:"./config/.env" })
const app = express()
app.use(express.json())

connectDB()



/// CRUD 
/// POST GET PUT DELETE

app.post('/add',async(req,res)=>{
    const {name,email,age}=req.body
    try {
        const newUser = new User({
          name,
          email,
          age
        })
        await newUser.save()
        res.send(`${name} was successfully added to the database`)
    } catch (error) {
        console.log(error.message)
    }
})

app.get('/get',async(req,res)=>{
    try {
        const users =await User.find()
        res.send(users)
    } catch (err) {
        console.log(error.message)
        
    }
})

app.delete('/del/:id',async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.send('deleted')
    } catch (error) {
        console.log(error.message)
        
    }
})

app.put('/edit/:id',async(req,res)=>{
    try {
        const editedUser =await User.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
       res.send(editedUser)
    } catch (error) {
        console.log(error.message)
        
    }
})
const PORT =process.env.PORT || 5000

app.listen(PORT,err=>err?console.error(err):console.log(`Server running on port ${PORT}`))

