import React from 'react';
import StudentCard from './components/StudentCard';

import student1 from '../app/images/student1.jpg';
import student2 from '../app/images/student2.jpg';
import student3 from '../app/images/student3.jpg';

const StudentsPage: React.FC = () => {
  const students = [
    {
      name: 'SUMRA AWAN',
      age: 20,
      rollNumber: '5555',
      studentClass: 'Monday',
      shift: '2:00pm-5:00pm',
      serialNumber: '101',
      imageSrc: student1,
    },
    {
      name: 'MAHNOOR JAVED',
      age: 22,
      rollNumber: '5556',
      studentClass: 'Monday',
      shift: '2:00pm-5:00pm',
      serialNumber: '102',
      imageSrc: student2,
    },
    {
      name: 'BILQEES QADIR',
      age: 18,
      rollNumber: '5557',
      studentClass: 'Monday',
      shift: '2:00pm-5:00pm',
      serialNumber: '103',
      imageSrc: student3,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-sky-300 via-violet-400 to-sky-200 min-h-screen flex flex-col items-center justify-center py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Student ID Cards</h1>
      <div className="flex flex-wrap justify-center">
        {students.map((student, index) => (
          <StudentCard key={index} {...student} />
        ))}
      </div>
    </div>
  );
};

export default StudentsPage;
