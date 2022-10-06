import React from "react";
// Import Component MUI disini
import {
  Box,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";

export default function ToDoTable(props) {
  // Perhatikan fungsi ini tidak menerima event
  const btnOnClickHandler = (todoId) => {
    // di sini kita akan memanggil props fnCompleteTodo
    // beserta value todoId akan dilempar
    props.fnCompleteTodo(todoId);
  };

  return (
    // Gunakan Component MUI di sini
    <Box sx={{ p: 2, border: "1px dashed grey" }}>
      <Typography variant="h5">Component ToDoTable</Typography>
      <Table sx={{ maxWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Asumsi nama props adalah todos */}
          {props.todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell>{todo.id}</TableCell>
              <TableCell>{todo.name}</TableCell>
              <TableCell>
                {todo.isCompleted ? "Selesai" : "Belum Selesai"}
              </TableCell>
              {/* Nanti kita akan kembali ke sini lagi */}
              <TableCell>
                {todo.isCompleted ? (
                  ""
                ) : (
                  // onClick di sini akan menggunakan fungsi arrow
                  // untuk bisa memanggil fungsi btnOnClickHandler
                  // sambil passing value todo.id
                  <Button
                    variant="contained"
                    onClick={() => btnOnClickHandler(todo.id)}
                  >
                    Selesaikan
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
