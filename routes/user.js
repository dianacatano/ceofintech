import express from 'express'; //Express me permite generar rutas mediante router
const router = express.Router(); 

// importar el modelo user 
import User from '../models/user'; 

// Agregar un user 
router.post('/p-user', async(req, res) => { 
    const body = req.body; 
    try { 
        const resUser = await User.create(body); 
        res.status(200).json(resUser); 
    } catch (error) { 
        return res.status(500).json({ 
            mensaje: 'Ocurrió un error', 
            error 
        }) 
    } 
}); 

// Get con parámetros 
router.get('/g-user/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const resUser = await User.findOne({_id}); 
        res.json(resUser); 
    } catch (error) { 
        return res.status(400).json({ 
        mensaje: 'Ocurrió un error', error 
        })
    } 
});

// Delete eliminar un usuario 
router.delete('/d-user/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const resUser = await User.findByIdAndDelete({_id}); 
        if(!resUser){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', 
                error 
            }) 
        } 
        res.json(resUser); 
    } catch (error) { 
        return res.status(400).json({ 
        mensaje: 'Ocurrió un error', error 
        }) 
    } 
});

// Put actualizar un usuario 
router.put('/u-user/:id', async(req, res) => { 
    const _id = req.params.id; 
    const body = req.body; 
    try { 
        const resUser = await User.findByIdAndUpdate(
            _id, 
            body, 
            {new: true}); 
        res.json(resUser); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        }) 
    } 
});


    // Exportamos la configuración de express app 
module.exports = router;