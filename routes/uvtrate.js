import express from 'express'; //Express me permite generar rutas mediante router
const router = express.Router(); 

// importar el modelo uvtrate 
import UvtRate from '../models/uvtrate'; 

// Agregar un registro 
router.post('/p-uvtrate', async(req, res) => { 
    const body = req.body; 
    try { 
        const resUvtRate = await UvtRate.create(body); 
        res.status(200).json(resUvtRate); 
    } catch (error) { 
        return res.status(500).json({ 
            mensaje: 'Ocurrió un error', 
            error 
        }) 
    } 
}); 

// Get con parámetros 
router.get('/g-uvtrate/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const resUvtRate = await UvtRate.findOne({_id}); 
        res.json(resUvtRate); 
    } catch (error) { 
        return res.status(400).json({ 
        mensaje: 'Ocurrió un error', error 
        })
    } 
});

// Delete eliminar un registro 
router.delete('/d-uvtrate/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const resUvtRate = await UvtRate.findByIdAndDelete({_id}); 
        if(!resUvtRate){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', 
                error 
            }) 
        } 
        res.json(resUvtRate); 
    } catch (error) { 
        return res.status(400).json({ 
        mensaje: 'Ocurrió un error', error 
        }) 
    } 
});

// Put actualizar un registro 
router.put('/u-uvtrate/:id', async(req, res) => { 
    const _id = req.params.id; 
    const body = req.body; 
    try { 
        const resUvtRate = await UvtRate.findByIdAndUpdate(
            _id, 
            body, 
            {new: true}); 
        res.json(resUvtRate); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        }) 
    } 
});


// Exportamos la configuración de express app 
module.exports = router;