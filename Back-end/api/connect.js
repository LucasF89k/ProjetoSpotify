import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://LucasF89k:LuacsF89k@cluster0.l1t7bmo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("SpotifyProjeto");
//const songCollection = await db.collection("songs").find({}).toArray();

//console.log(db);
