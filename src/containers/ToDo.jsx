import React, { useState, useEffect, useReducer } from "react";
// Import ToDoForm dan ToDoTable
import ToDoForm from "../components/ToDoForm.jsx";
import ToDoTable from "../components/ToDoTable.jsx";
// Import component Typography dari MUI
import { Box, Typography } from "@mui/material";
// import Tulisan from "../components/Tulisan.jsx";
// Import si fungsi ToDoReducer
import ToDoReducer from "../reducers/ToDoReducers.js";

// Di luar function (Initial datanya)
const firstTodos = [
  { id: 1, name: "Review DOM", isCompleted: false },
  { id: 2, name: "Belajar Nge-React", isCompleted: false },
  { id: 3, name: "Belajar Component React", isCompleted: false },
];

export default function ToDo() {
  // Sekarang state kita berbentuk array of object !
  // useState indexnya 2 :
  // 0 : nama variabel state
  // 1 : setter dari statenya
  // const [todos, setTodos] = useState([
  //   { id: 1, name: "Review DOM", isCompleted: false },
  //   { id: 2, name: "Belajar Nge-React", isCompleted: false },
  //   { id: 3, name: "Belajar Component React", isCompleted: false },
  // ]);

  // useReducer !
  const [todos, dispatch] = useReducer(ToDoReducer, firstTodos);

  const addTodos = (newTodo) => {
    // // Logic untuk membuat id terbaru
    // // ambil dari object paling akhir punya id, tambahkan 1
    // const newId = todos[todos.length - 1].id + 1;

    // // asumsi todo yang baru adalah suatu string (nama dari todo)
    // const objTodo = {
    //   id: newId,
    //   name: newTodo,
    //   isCompleted: false,
    //   const newTodos = [...todos, objTodo];
    //   setTodos(newTodos);
    // };

    dispatch({
      type: "add",
      name: newTodo,
    });
  };

  // Fungsi ini akan membuat sebuah array yang baru
  // dan memodifikasi satu baris data yang ditemukan
  // untuk membuat isCompleted nya menjadi true
  // berdasarkan idTodo yang diterima
  const completeTodo = (idTodo) => {
    // manipulasi array dan membuat suatu array yang baru
    // const newTodos = todos.map((todo) => {
    //   // logic
    //   if (todo.id === idTodo) {
    //     todo.isCompleted = true;
    //   }
    //   // map harus ada return
    //   return todo;
    // });
    // // ganti state todos dengan setTodos
    // setTodos(newTodos);

    dispatch({
      type: "complete",
      id: idTodo,
    });
  };

  // Di development useEffect ini pertama kali terjadi, akan terpanggil 2 kali
  // Pertama di mounting akan terpanggil 1x
  // unMounting kemudian mounting sekali lagi
  useEffect(
    // Callback (fungsi)
    () => {
      // oh di dalam sini kita bisa menggunakan DOM
      // kalau ingin fetch data bisa fetch data
      // dkk
      const changeTitle = `Count: ${todos.length}`;
      console.log(changeTitle);
      document.title = changeTitle;
    },
    // kalau misalnya kita lagi ambbil data dari luar
    // awalnya pasti 0
    // tiba tiba datanya ada ( > 0 )
    // kalau tidak hati hati menggunakan useEffect
    // bisa terjadi INFINITE CALL
    [todos.length]
  );

  // useEffect(() => {}, []);

  // render
  return (
    <>
      <Box
        sx={{
          p: 2,
          border: "1px dashed grey",
          backgroundColor: "#f1f1f1",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Ganti div menjadi Typography */}
        <Typography variant="h5">Container ToDo</Typography>
        {/* Kita tambahkan component ToDoForm dan ToDoTable */}
        {/* Jangan lupa untuk passing props todos ke dalam ToDoTable */}
        <ToDoForm fnAddTodos={addTodos} />
        {/* Jangan lupa tambahkan props fnCompleteToDo ke dalam table */}
        <ToDoTable todos={todos} fnCompleteTodo={completeTodo} />
        {/* <Tulisan>
          {/* Di sini saya kasih si " children " / ngeslot si children */}
        {/* <h1>Tulisan</h1> */}
        {/* </Tulisan> */}
      </Box>
    </>
  );
}
