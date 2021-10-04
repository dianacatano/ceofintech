import express from 'express'; //Express me permite generar rutas mediante router
const router = express.Router(); 

// importar el modelo dollarEx 
import UvrRate from '../models/uvrrate'; 

// Agregar un DollarEx 
router.post('/p-uvrrate', async(req, res) => { 
    const body = req.body; 
    try { 
        const resUvrRate = await UvrRate.create(body); 
        res.status(200).json(resUvrRate); 
    } catch (error) { 
        return res.status(500).json({ 
            mensaje: 'Ocurrió un error', 
            error 
        }) 
    } 
}); 

// Get con parámetros 
router.get('/g-uvrrate/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const resUvrRate = await UvrRate.findOne({_id}); 
        res.json(resUvrRate); 
    } catch (error) { 
        return res.status(400).json({ 
        mensaje: 'Ocurrió un error', error 
        })
    } 
});

// Delete eliminar un registro 
router.delete('/d-uvrrate/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const resUvrRate = await UvrRate.findByIdAndDelete({_id}); 
        if(!resUvrRate){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', 
                error 
            }) 
        } 
        res.json(resUvrRate); 
    } catch (error) { 
        return res.status(400).json({ 
        mensaje: 'Ocurrió un error', error 
        }) 
    } 
});

// Put actualizar un usuario 
router.put('/u-uvrrate/:id', async(req, res) => { 
    const _id = req.params.id; 
    const body = req.body; 
    try { 
        const resUvrRate = await UvrRate.findByIdAndUpdate(
            _id, 
            body, 
            {new: true}); 
        res.json(resUvrRate); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        }) 
    } 
});


// Exportamos la configuración de express app 
module.exports = router;