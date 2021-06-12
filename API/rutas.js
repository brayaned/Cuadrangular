const router  = require('express').Router()
const conexion = require('./config/conexion')

// peticiones 
// peticion get para seleccionar todos los equipos
router.get('/', (req, res) =>{
    let sql = 'select * from equipo'
    conexion.query(sql, (err, rows, fields) =>{
        if(err){
            throw err
        }else{
            res.json(rows)
        }
    })
})

// peticion get para seleccionar todos los equipos ordenados por sus puntos
router.get('/puntos', (req, res) =>{
    let sql = 'select * from equipo order by puntos desc'
    conexion.query(sql, (err, rows, fields) =>{
        if(err){
            throw err
        }else{
            console.log('ountos agregados')
            res.json(rows)
        }
    })
})

// peticion get para seleccionar un equipo
router.get('/:id', (req, res) =>{
    const {id} = req.params
    let sql = 'select * from equipo where id = ?'
    conexion.query(sql,[id], (err, rows, fields) =>{
        if(err){
            throw err
        }else{
            res.json(rows)
        }
    })
})


// agregar un equipo
router.post('/', (req, res) =>{
    const {nombre} = req.body
    let sql = `insert into equipo(nombre, partidos_jugados, partidos_ganados, partidos_empatados, partidos_perdidos, goles_favor, goles_contra, puntos) values ('${nombre}', 0, 0, 0, 0, 0, 0, 0)`
    conexion.query(sql, (err, rows, fields) =>{
        if(err){
            throw err
        }else{
            console.log('equipo agregado')
            res.json({status: 'Equipo agregado con exito'})
        }
    })
})


// agregar partido ganado
router.put('/partido_ganado/:id', (req, res) =>{
    const {id} = req.params
    const {goles_favor} = req.body
    const {goles_contra} = req.body

    let sql = `update equipo set puntos = puntos + 3, partidos_jugados = partidos_jugados + 1, partidos_ganados = partidos_ganados +1,
                goles_favor = goles_favor + ${goles_favor}, goles_contra = goles_contra + ${goles_contra} where id = ${id} `
    conexion.query(sql, (err , rows, fields) =>{
        if(err){
            throw err
        }else{
            res.json({status: 'Partido ganado, actualizado correctamente'})
        }
    })
})


// agregar partido empatado
router.put('/partido_empatado/:id', (req, res) =>{
    const {id} = req.params
    const {goles_favor} = req.body
    const {goles_contra} = req.body

    let sql = `update equipo set puntos = puntos + 1, partidos_jugados = partidos_jugados + 1, partidos_empatados = partidos_empatados +1,
                goles_favor = goles_favor + ${goles_favor}, goles_contra = goles_contra + ${goles_contra} where id = ${id} `
    conexion.query(sql, (err , rows, fields) =>{
        if(err){
            throw err
        }else{
            console.log('entra empate')
            res.json({status: 'Partido empatado, actualizado correctamente'})
        }
    })
})


// agregar partido perdido
router.put('/partido_ganado/:id', (req, res) =>{
    const {id} = req.params
    const {goles_favor} = req.body
    const {goles_contra} = req.body

    let sql = `update equipo set  partidos_jugados = partidos_jugados + 1, partidos_perdidos = partidos_perdidos +1,
                goles_favor = goles_favor + ${goles_favor}, goles_contra = goles_contra + ${goles_contra} where id = ${id} `
    conexion.query(sql, (err , rows, fields) =>{
        if(err){
            throw err
        }else{
            res.json({status: 'Partido perdido, actualizado correctamente'})
        }
    })
})

module.exports = router
