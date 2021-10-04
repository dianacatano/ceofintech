import express from 'express'; //Express me permite generar rutas mediante router
const router = express.Router(); 

// importar el modelo user 
import Suscriber from '../models/suscriber'; 

// Agregar un Suscriber 
router.post('/p-suscriber', async(req, res) => { 
    const body = req.body; 
    try { 
        const resSuscriber = await Suscriber.create(body); 
        res.status(200).json(resSuscriber); 
    } catch (error) { 
        return res.status(500).json({ 
            mensaje: 'Ocurrió un error', 
            error 
        }) 
    } 
}); 

// Get con parámetros 
router.get('/g-suscriber/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const resSuscriber = await Suscriber.findOne({_id}); 
        res.json(resSuscriber); 
    } catch (error) { 
        return res.status(400).json({ 
        mensaje: 'Ocurrió un error', error 
        })
    } 
});

// Delete eliminar un usuario 
router.delete('/d-suscriber/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const resSuscriber = await Suscriber.findByIdAndDelete({_id}); 
        if(!resSuscriber){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', 
                error 
            }) 
        } 
        res.json(resSuscriber); 
    } catch (error) { 
        return res.status(400).json({ 
        mensaje: 'Ocurrió un error', error 
        }) 
    } 
});

// Put actualizar un usuario 
router.put('/u-suscriber/:id', async(req, res) => { 
    const _id = req.params.id; 
    const body = req.body; 
    try { 
        const resSuscriber = await Suscriber.findByIdAndUpdate(
            _id, 
            body, 
            {new: true}); 
        res.json(resSuscriber); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        }) 
    } 
});


    // Exportamos la configuración de express app 
module.exports = router;