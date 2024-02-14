import express from "express";


const router = express.Router();

router.get('/login', function(req, res) {
    res.render('auth/login',{
        autenticado: true
    })
});

router.post('/', function(req, res) {
    res.json({msg:'Hola mundo'})
});



export default router;