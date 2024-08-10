import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

function GetStudent() {
  const [userForm, setUserForm] = useState([]);

  // const deleteStudent = (_id) => {
  //   axios
  //     .delete("http://localhost:4000/students/delete-student/" + _id)
  //     .then(() => {
  //       console.log("Data successfully deleted!");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  useEffect(() => {
    axios
      .get("http://localhost:5000/students/all")
      .then((res) => {
        setUserForm(res.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Roll no</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userForm.map((users, index) =>{
            return (
              <tr key={index}>
                <th scope="row">{users._id}</th>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.rollno}</td>
               
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default GetStudent;