import express, { Router } from 'express';
import { StudentController } from './student.controller';

const router: Router = express.Router();

router.post('/create-student', StudentController.createStudent);

router.get('/', StudentController.getAllStudents);
router.get('/:studentId', StudentController.getStudentById);

export const StudentRoutes = router;
