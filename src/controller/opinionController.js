'use strict'

const todoopinion = require('../models/opinion')

async function listALL (req = null){

    const listALL = await todoopinion().listALL(req)
    return listALL
}

async function agregar(req=null){
    const agregar = await todoopinion().agregar(req)
    return agregar
}

async function eliminar(req = null) {
    const eliminar = await todoopinion().eliminar(req)
    return eliminar
}
async function modificar(req = null) {
    const modificar = await todoopinion().modificar(req)
    return modificar
}



module.exports={
    listALL,
    agregar,
    eliminar,
    modificar,
}