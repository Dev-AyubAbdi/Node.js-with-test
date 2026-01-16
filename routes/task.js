import express from 'express'
import { CreateTask } from '../controllers/task.js'
import { protect } from '../middlewares/auth.js'
const router = express.Router()

router.post('/create', protect, CreateTask) 

export default router 