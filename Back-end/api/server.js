import express from "express";
import { artistArray } from "../../Front-end/src/assets/assets/database/artists";
import { songsArray } from "../../Front-end/src/assets/assets/database/songs";
import

const app = express();
const PORT = 3000;

app.get("/", (request, resoponse) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e ' /songs' ");
});

app.get("/artists", (request, resoponse) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", (request, resoponse) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
