export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  address: string;
  contactNo: string;
};
export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  email: string;
  dateOfBirth?: string;
  bloodGroup?: 'A+' | 'A-' | 'AB+' | 'AB-' | 'B+' | 'B-' | 'O+' | 'O-';
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg: string;
  isActive: 'active' | 'blocked';
};
