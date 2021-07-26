const { Router } = require('express');
const router = Router();
router.get('/', (req,res)=>{
    const mensaje={
        api: "chat",
        desarrollador: "Marcela",
        clase: "Programacion Movil II",
    };
    res.status(200).json(mensaje);
});
module.exports=router;