const dataSchema = require('../model/backend_data');
const countSchema = require('../model/count');

// Adding function
module.exports.add= async function(req, res){

    var input = req.body.value;
    try{
        await dataSchema.deleteMany({}); // Deleting the previous data
        await dataSchema.create({value: input}); // Adding the current data givrn by user

        await incrementCount(); // Increment count
        return res.status(200).json({
            message: "Data Added",
        })
    }catch(error){
        console.error("Error in add controller:", error);
        return res.status(401).json({
            message: "Error in add controller",
        })
    }
}

// Getting the value
module.exports.data = async function (req, res){
    try {
        const document = await dataSchema.findOne(); //Getting the data from db
    
        if (document) {
            // Return the data
            return res.status(200).json({
                data: document
            });
        } else {
            // Returing the error
            return res.status(401).json({
                message: "Data not exist"
            });
        }
    } catch (error) {
        return res.status(401).json({
            message: "Error in count controller",
        });
    }
}

// Updating the value
module.exports.update= async function(req, res){
    var input = req.body.value;
    try {
        const existingData = await dataSchema.findOne(); //Getting the data from db

        // If data exist then updating otherwise if=gnoring 
        if (existingData) {
            existingData.value = input;
            await existingData.save();
        }

        await incrementCount();
        return res.status(200).json({
            message: "Data updated",
        })
    } catch (error) {
        console.log("error", error);
        return res.status(401).json({
            message: "Error in update controller",
        });
    }

}

// Getting count value
module.exports.count = async function (req, res){
    try {
        const document = await countSchema.findOne();
    
        if (document) {
            return res.status(200).json({
                data: document
            });
        } else {
            return res.status(200).json({
                data: 0
            });
        }
    } catch (error) {
        return res.status(401).json({
            message: "Error in count controller",
        });
    }
}

// Increment Count value by 1
async function incrementCount() {
    try {
        const existingData = await countSchema.findOne();

        if (!existingData) {
            const newCount = new countSchema({ count: 1 });
            await newCount.save();
        } else {
            existingData.count += 1;
            await existingData.save();
        }
    } catch (error) {
        console.error("Error:", error);
    }
}
