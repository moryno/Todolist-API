// jshint esversion:6
const router = require("express").Router();
const Todo = require("../models/Todo");


router.get("/",( req, res)=>{
    Todo.find((err, results)=>{
        if(err) throw new Error(err);
        res.send(results);
    })
});     

router.post("/", (req, res)=>{
    console.log(req.body)
    Todo.create(req.body, (err, result)=>{
        if(err) throw new Error(err);
        res.send(result);
    })
});

router.put("/:id", (req, res)=>{
    Todo.findOneAndUpdate({_id:req.params.id}, req.body,{new:true}, (err, result)=>{
        if(err) throw new Error(err);
        res.send(result);
    });
});

router.delete("/:id", (req, res)=>{
    Todo.findOneAndRemove({_id: req.params.id}, (err, result)=>{
        if(err) throw new Error(err);
        res.send("Successfully deleted.");
    })
})

module.exports = router;