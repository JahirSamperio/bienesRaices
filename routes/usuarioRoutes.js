import express from "express";


const router = express.Router();

router.get('/', function(req, res) {
    res.json({msg:'Hola mundo'})
});

router.post('/', function(req, res) {
    res.json({msg:'Hola mundo'})
});



export default router;