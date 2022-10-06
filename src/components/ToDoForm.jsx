import React, { useState } from "react";
// Import component Button dari MUI
import Button from "@mui/material/Button";
// Import component TextField dari MUI (kali ini kita gunakan destructuring)
import { Box, TextField, Typography } from "@mui/material";

// Karena sudah pasti ada data yang akan diterima, tampung propsnya dulu yah !
export default function ToDoForm(props) {
  // input form, awalanya kosong
  const [inputData, setInputData] = useState("");

  // fungsi untuk menghandle perubahan dari si input !
  const inputOnChangeHandler = (event) => {
    // mengambil dari "DOM"
    setInputData(event.target.value);
  };

  const formOnSubmitHandler = (event) => {
    // supaya tidak refresh
    // *tolong keluar dari kelakuan normal anda !
    event.preventDefault();
    // Panggil props fnAddTodo
    props.fnAddTodos(inputData);
    // kosongin isi input data
    setInputData("");
  };

  return (
    <Box sx={{ p: 2, border: "1px dashed grey" }}>
      <Typography variant="h5">Component ToDoForm</Typography>
      <form
        style={{
          margin: "0.5em 0em",
          // Tambah css agar bisa sama besar component TextField dan Button
          display: "flex",
        }}
        onSubmit={formOnSubmitHandler}
      >
        {/* Ganti input menjadi TextField */}
        <TextField
          type="text"
          style={{ marginRight: "0.5em" }}
          value={inputData}
          onChange={inputOnChangeHandler}
          // ini prop (attribute) baru
          label="Input kerjaan baru"
          size="small"
          variant="filled"
        />
        {/* Ganti button menjadi Button dengan opsi baru */}
        <Button type="submit" variant="contained" size="large">
          Tambah kerjaan
        </Button>
      </form>
    </Box>
  );
}
