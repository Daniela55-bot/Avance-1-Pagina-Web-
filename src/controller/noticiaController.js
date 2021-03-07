'use strict'

const todonoticia = require('../models/noticia')

async function listALL (req = null){

    const listALL = await todonoticia().listALL(req)
    return listALL
}

async function agregar(req=null){
    const agregar = await todonoticia().agregar(req)
    return agregar
}

async function eliminar(req = null) {
    const eliminar = await todonoticia().eliminar(req)
    return eliminar
}
async function modificar(req = null) {
    const modificar = await todonoticia().modificar(req)
    return modificar
}



module.exports={
    listALL,
    agregar,
    eliminar,
    modificar,
}