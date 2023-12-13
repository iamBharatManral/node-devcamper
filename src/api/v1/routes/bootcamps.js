const express = require('express')
const {
    getAllBootcamps,
    deleteBootcampById,
    updateBootcampById,
    getBootcampById,
    createBootcamp
} = require('../controllers/bootcamps')
const router = express.Router()

router
    .get('/', getAllBootcamps)
    .post('/', createBootcamp)
    .put('/:id', updateBootcampById)
    .get('/:id', getBootcampById)
    .delete('/:id', deleteBootcampById)

module.exports = router