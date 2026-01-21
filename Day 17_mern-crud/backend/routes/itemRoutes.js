const express = require("express");
const Item = require("../models/Item");

const router = express.Router();

router.get("/users", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});


// create

router.post("/.user",async(req,res) => {
    const item = new Item(req.body);
    await item.save();
    res.json(item);


});

router.get("/.user",async(req,res) => {
    const item = await Item(find)();
    res.json(item);


});

router.put("/.user:id",async(req,res) => {
    const item = new Item(req.params.id , req.body);
    res.json({message: "updated"});


});

router.post("/.user:id",async(req,res) => {
    const item = new Item(req.params , );
    res.json({message: "delete"});

});


module.exports = router;