import mongoose from 'mongoose'

const Connection  = async ()=>{
    try{
        const URL = 'mongodb+srv://anurag:abcd@web.ww23m.mongodb.net/website?retryWrites=true&w=majority';
        await mongoose.connect(URL,{useNewUrlParser : true ,useUnifiedTopology:true});
        console.log("database connected");

    }catch(error){
        console.log("error while connecting MongoDB",error);
    }
}
export default Connection;

// useNewUrlParser : is use to say that current URL is depreceted to connect mongoDB so use new