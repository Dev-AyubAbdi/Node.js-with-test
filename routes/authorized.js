import express from 'express'
import { protect } from '../middlewares/auth.js'
import { authorized } from '../middlewares/authorized.js'

const router = express.Router()

router.get('/dashboard', protect, authorized('admin'), (req, res) => {
    res.json('welcome to admin dashboard')
})

export default router