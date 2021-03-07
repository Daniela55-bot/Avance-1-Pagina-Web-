'use strict'

const todoempeno = require('../models/empeno')

async function listALL (req = null){

    const listALL = await todoempeno().listALL(req)
    return listALL
}

async function agregar(req=null){
    const agregar = await todoempeno().agregar(req)
    return agregar
}

async function eliminar(req = null) {
    const eliminar = await todoempeno().eliminar(req)
    return eliminar
}
async function modificar(req = null) {
    const modificar = await todoempeno().modificar(req)
    return modificar
}



module.exports={
    listALL,
    agregar,
    eliminar,
    modificar,
}