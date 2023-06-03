const mongoose = require("mongoose");

const mongoURI =
  "mongodb://goFood:Supriya123@ac-83caqhu-shard-00-00.czkfisd.mongodb.net:27017,ac-83caqhu-shard-00-01.czkfisd.mongodb.net:27017,ac-83caqhu-shard-00-02.czkfisd.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-g2y31k-shard-0&authSource=admin&retryWrites=true&w=majority"

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected");

    const fetched_data = await mongoose.connection.db.collection("food_items");

    const data = await fetched_data.find({}).toArray(async function (err, data) {

      const foodCategory=await mongoose.connection.db.collection("foodCategory");

      const catData = await foodCategory.find({}).toArray(function(err,catData){
      
    // foodCategory.find({}).toArray( function (err, catData){
      if (err)  console.log(err);

         else {
          global.food_items = data;
          // console.log(global.food_items);
          global.foodCategory  = catData;
        }

    })
    
      // if (err) {
      //   console.log(err);
      // } else {
      //   global.food_items = data;
      // }
    });
    // console.log(data);
  } catch (err) {
    // console.error(err);
  }
};

module.exports = mongoDB;
