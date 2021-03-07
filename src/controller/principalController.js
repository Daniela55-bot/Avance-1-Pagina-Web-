'use strict'

const todoprincipal = require('../models/principal')

async function listALL (req = null){

    const listALL = await todoprincipal().listALL(req)
    return listALL
}

async function agregar(req=null){
    const agregar = await todoprincipal().agregar(req)
    return agregar
}

async function eliminar(req = null) {
    const eliminar = await todoprincipal().eliminar(req)
    return eliminar
}
async function modificar(req = null) {
    const modificar = await todoprincipal().modificar(req)
    return modificar
}



module.exports={
    listALL,
    agregar,
    eliminar,
    modificar,
}