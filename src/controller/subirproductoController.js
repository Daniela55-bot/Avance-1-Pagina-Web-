'use strict'

const todosubirproducto = require('../models/subirproducto')

async function listALL (req = null){

    const listALL = await todosubirproducto().listALL(req)
    return listALL
}

async function agregar(req=null){
    const agregar = await todosubirproducto().agregar(req)
    return agregar
}

async function eliminar(req = null) {
    const eliminar = await todosubirproducto().eliminar(req)
    return eliminar
}
async function modificar(req = null) {
    const modificar = await todosubirproducto().modificar(req)
    return modificar
}



module.exports={
    listALL,
    agregar,
    eliminar,
    modificar,
}