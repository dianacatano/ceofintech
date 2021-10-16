import express from 'express'; //Express me permite generar rutas mediante router
const router = express.Router(); 

// importar el modelo user 
import Contact from '../models/contact'; 

// Agregar un Contact 
router.post('/p-contact', async(req, res) => { 
    const body = req.body; 
    try { 
        const resContact = await Contact.create(body); 
        res.status(200).json(resContact); 
    } catch (error) { 
        return res.status(500).json({ 
            mensaje: 'Ocurrió un error', 
            error 
        }) 
    } 
}); 

// Get con parámetros 
router.get('/g-contact/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const resContact = await Contact.findOne({_id}); 
        res.json(resContact); 
    } catch (error) { 
        return res.status(400).json({ 
        mensaje: 'Ocurrió un error', error 
        })
    } 
});

// Get con todos los registros 
router.get('/g-contact', async(req, res) => { 
    try { 
        const resContact = await Contact.find(); 
        res.json(resContact); 
    } catch (error) { 
        return res.status(500).json({ 
        mensaje: 'Ocurrió un error', error 
        })
    } 
});

// Delete eliminar un registro 
router.delete('/d-contact/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const resContact = await Contact.findByIdAndDelete({_id}); 
        if(!resContact){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', 
                error 
            }) 
        } 
        res.json(resContact); 
    } catch (error) { 
        return res.status(400).json({ 
        mensaje: 'Ocurrió un error', error 
        }) 
    } 
});


// Exportamos la configuración de express app 
module.exports = router;