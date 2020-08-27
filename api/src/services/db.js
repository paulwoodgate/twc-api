'use strict';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({
  path: './config.env',
});
export function connectToDB() {
  mongoose.connect(
    process.env.MONGODB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
      if (error) {
        console.log('Unable to connect to database');
        throw error;
      } else {
        console.log(`Connected to MongoDB! at ${process.env.MONGODB_URL}`);
      }
    }
  );
}

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
