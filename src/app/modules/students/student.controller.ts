import { Request, Response } from 'express';
import { StudentServices } from './student.services';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;

    const result = await StudentServices.createStudentIntoDB(student);
    res.status(200).json({
      success: true,
      message: 'Student created successfully ',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await StudentServices.getAllStudentFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved successfully',
      data: students,
    });
  } catch (err) {
    console.log(err);
  }
};

const getStudentById = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const student = await StudentServices.getStudentByIdFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student found successfully',
      data: student,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getStudentById,
};
