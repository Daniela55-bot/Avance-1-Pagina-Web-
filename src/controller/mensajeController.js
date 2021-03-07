'use strict'

const todomensaje = require('../models/mensaje')

async function listALL (req = null){

    const listALL = await todomensaje().listALL(req)
    return listALL
}

async function agregar(req=null){
    const agregar = await todomensaje().agregar(req)
    return agregar
}

async function eliminar(req = null) {
    const eliminar = await todomensaje().eliminar(req)
    return eliminar
}
async function modificar(req = null) {
    const modificar = await todomensaje().modificar(req)
    return modificar
}



module.exports={
    listALL,
    agregar,
    eliminar,
    modificar,
}