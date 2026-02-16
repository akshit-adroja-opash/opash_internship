
import { RequestHandler } from "express";


export const logger: RequestHandler = (req, res, next) => {
  
  console.log("----- NEW REQUEST -----");
  
  console.log("Method:", req.method);
  
  console.log("URL:", req.originalUrl);
  
  console.log("Body:", req.body);
  
  console.log("Time:", new Date().toISOString());
  
  console.log("-----------------------");

  next();
};
