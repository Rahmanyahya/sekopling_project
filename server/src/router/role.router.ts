import express from "express";
import { authorization } from '../middleware/role.middleware'
import { Role } from '@prisma/client'

const router = express.Router();

router.get('/sekretaris-only', authorization([Role.Admin]), (req, res) => {
    res.send(" this route is for Admin only ")
})

router.get('/bendahara-only', authorization([Role.Admin]), (req, res) => {
    res.send("this route is for Bendahara only")
})

router.get('/ketua-kelas-only', authorization([Role.Admin]), (req, res) => {
    res.send( "this route is for Ketua Kelas only" )
})

export default router;