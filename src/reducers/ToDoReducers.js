// 2 parameter: state, action
export default function ToDoReducers(todos, action) {
  // kondisi berdasarkan property di dalam action <===== Object
  // Asumsi property di dalam action yang bersifat kondisi namanya adalah "type"
  switch (action.type) {
    case "add":
      const newId = todos[todos.length - 1].id + 1;
      // ASUMSI pada saat menggunakan action.type nambahkan
      // harus memiliki action.name
      const objTodo = {
        id: newId,
        name: action.name,
        isCompleted: false,
      };
      return [...todos, objTodo];

    case "complete":
      // ASUMSI pada saat menggunakan action.type adalah Selesaikan
      // Harus memiliki action.id
      const newTodos = todos.map((todo) => {
        if (todo.id === action.id) {
          todo.isCompleted = true;
        }
        return todo;
      });
      // Return si state baru
      return newTodos;

    // apabila aksi yang dilakukan adalah salah
    default: {
      // Memberikan return Error
      throw Error("Unknown Action");
    }
  }
}
