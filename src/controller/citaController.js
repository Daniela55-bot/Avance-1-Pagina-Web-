'use strict'

const todocita = require('../models/cita')

async function listALL (req = null){

    const listALL = await todocita().listALL(req)
    return listALL
}

async function agregar(req=null){
    const agregar = await todocita().agregar(req)
    return agregar
}

async function eliminar(req = null) {
    const eliminar = await todocita().eliminar(req)
    return eliminar
}
async function modificar(req = null) {
    const modificar = await todocita().modificar(req)
    return modificar
}



module.exports={
    listALL,
    agregar,
    eliminar,
    modificar,
}