const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CategorySchema=new Schema(
    {
        name:{type:String, required: true}
    }
)

const ProductSchema=new Schema(
    {
        name:{type: String, trquired:true},
        adjective:{type: String, trquired:true},
        description:{type: String, trquired:true},
        price:{type: String, trquired:true},
        category:{type: String, trquired:true},
        
    }
)

module.exports=mongoose.model('Product', ProductSchema);