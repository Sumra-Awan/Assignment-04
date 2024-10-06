import Image, { StaticImageData } from 'next/image';
import { AcademicCapIcon, ClockIcon, IdentificationIcon, UserIcon } from '@heroicons/react/24/outline';

interface StudentProps {
  name: string;
  age: number;
  rollNumber: string;
  studentClass: string;
  shift: string;
  serialNumber: string;
  imageSrc: StaticImageData;
}

const StudentCard: React.FC<StudentProps> = ({
  name,
  age,
  rollNumber,
  studentClass,
  shift,
  serialNumber,
  imageSrc,
}) => {
  return (
    <div className="bg-pink-100 shadow-lg rounded-lg p-4 m-4 w-80 h-60 flex flex-col justify-between border border-gray-300 transition-transform transform hover:scale-105">
      <div className="flex items-center space-x-4">
        <Image
          src={imageSrc}
          alt={`${name}'s Image`}
          width={60}
          height={60}
          className="rounded-full border-2 border-gray-300"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800 tracking-wide">{name}</h2>
          <p className="text-sm text-gray-700 flex items-center mt-1">
            <IdentificationIcon className="h-4 w-4 mr-1 text-gray-600" />
            <span className="font-medium">Roll Number:</span> {rollNumber}
          </p>
        </div>
      </div>
      <div className="text-xs text-gray-600 mt-2 space-y-1">
        <p className="flex items-center">
          <UserIcon className="h-4 w-4 mr-1 text-gray-600" />
          <span className="font-medium">Age:</span> {age}
        </p>
        <p className="flex items-center">
          <AcademicCapIcon className="h-4 w-4 mr-1 text-gray-600" />
          <span className="font-medium">Class:</span> {studentClass}
        </p>
        <p className="flex items-center">
          <ClockIcon className="h-4 w-4 mr-1 text-gray-600" />
          <span className="font-medium">Shift:</span> {shift}
        </p>
        <p className="flex items-center">
          <UserIcon className="h-4 w-4 mr-1 text-gray-600" />
          <span className="font-medium">Serial Number:</span> {serialNumber}
        </p>
      </div>
    </div>
  );
};

export default StudentCard;
