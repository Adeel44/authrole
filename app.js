const express=require('express');
const user=require('./routes/user');
  const ticket_booking=require('./routes/ticket_booking');
  const flight_reschedule=require('./routes/flight_reschedule');
const app=express();
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/airline',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, (error , clint)=>{
        if(error){
       return console.log("Unable  to conect to db")
        }
        console.log("BD conect")
  })



app.use(express.json());
app.use('/createuser',user);
app.use('/ticket_booking',ticket_booking);
app.use('/flight_reschedule',flight_reschedule);





app.listen(3000 , (req , res)=>{
  console.log("server is running on 3000")
})







