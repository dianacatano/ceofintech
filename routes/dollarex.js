import express from 'express'; //Express me permite generar rutas mediante router
const router = express.Router(); 

// importar el modelo dollarEx 
import DollarEx from '../models/dollarex'; 

// Agregar un DollarEx 
router.post('/p-dollarex', async(req, res) => { 
    const body = req.body; 
    try { 
        const resDollarEx = await DollarEx.create(body); 
        res.status(200).json(resDollarEx); 
    } catch (error) { 
        return res.status(500).json({ 
            mensaje: 'Ocurrió un error', 
            error 
        }) 
    } 
}); 

// Get con parámetros 
router.get('/g-dollarex/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const resDollarEx = await DollarEx.findOne({_id}); 
        res.json(resDollarEx); 
    } catch (error) { 
        return res.status(400).json({ 
        mensaje: 'Ocurrió un error', error 
        })
    } 
});

// Get con todos los registros 
router.get('/g-dollarex', async(req, res) => { 
    try { 
        const resDollarEx = await DollarEx.find(); 
        res.json(resDollarEx); 
    } catch (error) { 
        return res.status(500).json({ 
        mensaje: 'Ocurrió un error', error 
        })
    } 
});


// Delete eliminar un usuario 
router.delete('/d-dollarex/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const resDollarEx = await DollarEx.findByIdAndDelete({_id}); 
        if(!resDollarEx){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', 
                error 
            }) 
        } 
        res.json(resDollarEx); 
    } catch (error) { 
        return res.status(400).json({ 
        mensaje: 'Ocurrió un error', error 
        }) 
    } 
});

// Put actualizar un usuario 
router.put('/u-dollarex/:id', async(req, res) => { 
    const _id = req.params.id; 
    const body = req.body; 
    try { 
        const resDollarEx = await DollarEx.findByIdAndUpdate(
            _id, 
            body, 
            {new: true}); 
        res.json(resDollarEx); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        }) 
    } 
});


// Exportamos la configuración de express app 
module.exports = router;