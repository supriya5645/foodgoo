const express = require("express");
const router = express.Router();
router.post('/foodData',(req,res)=>{
    try {
        console.log("hi1",[global.food_items]);
        console.log("hi2",[global.foodCategory]);
        res.send([global.food_items,global.foodCategory]);
    }catch(error){
        console.error(error.message);
        res.send("Server Error")
             }
            
})

module.exports = router;


