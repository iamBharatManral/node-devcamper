const getAllBootcamps = (req, res) => {
    res.send({msg: 'All Bootcamps'})
}

const createBootcamp = (req, res) => {
    res.send({msg: 'Create new Bootcamp'})
}

const updateBootcampById = (req, res) => {
    res.send({msg: 'Update Bootcamp'})
}

const getBootcampById = (req, res) => {
    res.send({msg: 'Get bootcamp'})
}

const deleteBootcampById = (req, res) => {
    res.send({msg: 'Delete bootcamp'})
}

module.exports = {
    getAllBootcamps,
    createBootcamp,
    updateBootcampById,
    getBootcampById,
    deleteBootcampById
}

