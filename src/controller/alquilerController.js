'use strict'

const todoalquilar = require('../models/alquiler')

async function listALL (req = null){

    const listALL = await todoalquilar().listALL(req)
    return listALL
}

async function agregar(req=null){
    const agregar = await todoalquilar().agregar(req)
    return agregar
}

async function eliminar(req = null) {
    const eliminar = await todoalquilar().eliminar(req)
    return eliminar
}
async function modificar(req = null) {
    const modificar = await todoalquilar().modificar(req)
    return modificar
}



module.exports={
    listALL,
    agregar,
    eliminar,
    modificar,
}