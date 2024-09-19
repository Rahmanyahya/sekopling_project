import { Router } from "express";
import {CreateSiswa, deleteStudent, readStudent, updateStudent} from "../controller/student.controller"
import {createValidation, updateValidation} from "../middleware/studentMiddleware"
const router = Router();

router.post(`/`, [createValidation], CreateSiswa)

router.get(`/`, readStudent)

router.get(`/:id`, [updateValidation], updateStudent)

router.delete(`/:id`, [deleteStudent], deleteStudent)

export default router