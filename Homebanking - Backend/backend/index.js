const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(bodyparser.json());

//Conexao com Database

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "homebanking",
    port: 3306,
});

// Checando conexao

db.connect((err) => {
    if (err) {
        console.log("Err");
    }
    {
        console.log("Database connected");
    }
});

app.listen(3000, () => {
    console.log("server running");
});

// Pegar todos as movimentacoes

app.get("/movements_list", (req, res) => {
    let query = `SELECT * FROM movements_list ORDER by id DESC`;
    db.query(query, (err, result) => {
        if (err) {
            console.log(err, "err");
        }
        if (result.length >= 0) {
            res.send({
                message: "all movements",
                data: result,
            });
        }
    });
});

// Pegar uma unica movimentação

app.get("/movements_list/:id", (req, res) => {
    let gID = req.params.id;
    let query = `SELECT * FROM movements_list WHERE id = ${gID}`;
    db.query(query, (err, result) => {
        if (err) {
            console.log(err, "err");
        }

        if (result.length > 0) {
            res.send({
                message: "get single movements",
                data: result,
            });
        } else {
            res.send({
                message: "data not found",
            });
        }
    });
});

// Inserir depositos

app.post("/movements_list", (req, res) => {
    let deposit_fund = req.body.name_fund;
    let amount_fund = req.body.deposit;

    let insert_deposit = `INSERT INTO movements_list (name_fund, deposit) VALUES ('${deposit_fund}', '${amount_fund}') `;
    db.query(insert_deposit, (err, result) => {
        if (err) {
            console.log(err, "err");
        }

        if (deposit_fund == "" || amount_fund < 0) {
            res.send({
                message: "fill in the fields deposit or number negative",
            });
        } else if (result) {
            res.send({
                message: "Confirmed deposit",
            });
        } else {
            res.send({
                message: "Wrong",
            });
        }
    });
});

// Editar unico deposito

app.put("/movements_list/:id", (req, res) => {
    let gID = req.params.id;
    let deposit_fund = req.body.name_fund;
    let amount_fund = req.body.deposit;

    let update_query = `update movements_list set name_fund = '${deposit_fund}', deposit = '${amount_fund}' WHERE id = '${gID}'`;

    db.query(update_query, (err, result) => {
        if (err) {
            console.log(err, "err");
        }

        res.send({
            message: "Update fund",
        });
    });
});

app.delete("/movements_list/:id", (req, res) => {
    let gID = req.params.id;

    let delete_query = `delete from movements_list where id = '${gID}'`;

    db.query(delete_query, (err, result) => {
        if (err) {
            console.log(err, "err");
        }

        res.send({
            message: "Deleted fund",
        });
    });
});
