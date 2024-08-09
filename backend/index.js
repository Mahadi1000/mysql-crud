import express from 'express';
import mysql2 from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "332211",
  database: "test",
});

  app.get("/", (req, res) => {
    res.json("hello! this is a server");
  });
  app.get("/books", (req, res) => {
    const q = "SELECT * FROM book";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });
  app.post("/books", (req, res) => {
     const q =
       "INSERT INTO book(`title`, `desc`, `price`, `cover`) VALUES (?)";
    
   const values = [
     req.body.title,
     req.body.desc,
     req.body.price,
     req.body.cover,
   ];
    console.log(req.body)
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

  app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = " DELETE FROM books WHERE id = ? ";

    db.query(q, [bookId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

  app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q =
      "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.price,
      req.body.cover,
    ];

    db.query(q, [...values, bookId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });


app.listen(3000, () => {
  console.log("Connected to backend.");
});