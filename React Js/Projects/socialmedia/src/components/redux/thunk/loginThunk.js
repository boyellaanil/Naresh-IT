import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "./../apiCalls";

let loginValidation = createAsyncThunk("auth/login", async (data) => {
  let users = await fetchUsers();
  console.log(users.data);
  let singleUser = users.data.find(
    (value) => value.email === data.email && value.password === data.password
  );
  console.log(singleUser);
  if (singleUser) {
    sessionStorage.setItem("id", singleUser.id);
    return singleUser.id;
  }
});
export default loginValidation;
