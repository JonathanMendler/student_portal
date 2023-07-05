import axios from "axios";
import { useState } from "react";
import { StudentsShow } from "./StudentsShow";
import { Modal } from "./Modal";

export function Content() {
  const [students, setStudents] = useState([]);
  const [isStudentsShowVisible, setIsStudentsShowVisible] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({});

  const handleShowStudent = (student) => {
    console.log("handleShowStudent", student);
    setIsStudentsShowVisible(true);
    setCurrentStudent(student);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsStudentsShowVisible(false);
  };

  return (
    <div>
      <Modal show={isStudentsShowVisible} onClose={handleClose}>
        <h1>Test</h1>
        <StudentsShow student={currentStudent} />
      </Modal>
    </div>
  );
}
