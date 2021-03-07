'use strict'

const todoproducto = require('../models/producto')

async function listALL (req = null){

    const listALL = await todoproducto().listALL(req)
    return listALL
}

async function agregar(req=null){
    const agregar = await todoproducto().agregar(req)
    return agregar
}

async function eliminar(req = null) {
    const eliminar = await todoproducto().eliminar(req)
    return eliminar
}
async function modificar(req = null) {
    const modificar = await todoproducto().modificar(req)
    return modificar
}



module.exports={
    listALL,
    agregar,
    eliminar,
    modificar,
}