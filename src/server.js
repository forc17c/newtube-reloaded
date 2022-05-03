import express from "express"; // const express = require("express"); 와 같다.

const PORT = 4000;

const app = express();

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening); // app.listen(4000, () => console.log("Server listening on port 4000")); 로 쓸 수 있다.
