const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')

router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find()
        res.json(blogs)
    } catch (err) {
        res.json({message: err})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
        res.json(blog)
    } catch (err) {
        res.json({message: err})
    }
})

router.post('/', async (req, res) => {
    const blog = new Blog({
        title: req.body.title,
        description: req.body.description
    })

    try {   
        const b1 = await blog.save()
        res.json(b1)
    } catch(err) {
        res.json({message: err})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
        const b1 = await blog.remove()
        res.json(b1)
    } catch (err) {
        res.json({message: err})
    }
})

module.exports = router