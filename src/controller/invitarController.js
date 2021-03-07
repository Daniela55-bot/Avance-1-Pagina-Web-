'use strict'

const todoinvitar = require('../models/invitar')

async function listALL (req = null){

    const listALL = await todoinvitar().listALL(req)
    return listALL
}

async function agregar(req=null){
    const agregar = await todoinvitar().agregar(req)
    return agregar
}

async function eliminar(req = null) {
    const eliminar = await todoinvitar().eliminar(req)
    return eliminar
}
async function modificar(req = null) {
    const modificar = await todoinvitar().modificar(req)
    return modificar
}



module.exports={
    listALL,
    agregar,
    eliminar,
    modificar,
}