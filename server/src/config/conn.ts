import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(`${process.env.ATLAS_URI}`, (err) => {
    if (!err) {
        console.log('MongoDB connection successful');
    } else {
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;