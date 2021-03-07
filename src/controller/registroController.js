'use strict'

const todoregistro = require('../models/registro')

async function listALL (req = null){

    const listALL = await todoregistro().listALL(req)
    return listALL
}

async function agregar(req=null){
    const agregar = await todoregistro().agregar(req)
    return agregar
}

async function eliminar(req = null) {
    const eliminar = await todoregistro().eliminar(req)
    return eliminar
}
async function modificar(req = null) {
    const modificar = await todoregistro().modificar(req)
    return modificar
}



module.exports={
    listALL,
    agregar,
    eliminar,
    modificar,
}