const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

async function authMiddleware(req, res, next) {
   const token = req.headers.authorization?.split(" ")[1];
   if (!token) {
      return res.status(401).json({
         message: "Unauthorized access , token is missing",
         status: "failed"
      })
   }
   try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.userId)

      if (!user) {
         return res.status(401).json({
            message: "User no longer exists",
            status: "failed"
         })
      }

      req.user = user;
      next();


   } catch (error) {
      return res.status(401).json({
         message: "Invalid token",
      })
   }


}
module.exports = { authMiddleware };