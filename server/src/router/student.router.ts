import { Router } from 'express';
import { CreateStudent, readStudent, updateStudent, deleteStudent } from '../controller/student.controller';
const router = Router();

router.post('/create-student', CreateStudent);
router.get('/read-student', readStudent);
router.put('/update-student/:id', updateStudent);
router.delete('/delete-student/:id', deleteStudent);

export default router;