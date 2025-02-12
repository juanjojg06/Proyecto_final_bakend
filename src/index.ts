
import express from "express";
import cors from 'cors';
const app = express();
app.use(cors());
import bodyParser, { json } from 'body-parser';
const jsonParser = bodyParser.json();

import * as db from './db-connection';

/*--------Funcion aleatoria----------------------------------------------------------------------------------  */
-


    /*-------- llamada para las preguntas faciles----------------------------------------------------------------------------------  */
    app.get('/Preguntas/facil/:num_pregunta', async (req, res) => {

        console.log(`Petecion recibida al endpoint /alumnos `)
        try {
            let num_pregunta = req.params.num_pregunta
            let db_respuesta = await db.query(`SELECT * FROM Facil WHERE id=${num_pregunta};`);
            console.log(db_respuesta.rows);
            res.json(db_respuesta.rows);



        } catch (err) {
            console.error(err);
            res.status(500).send('Internal Serve Error')

        }
    });

/*------------ llamada para las preguntas medias--------------------------------------------------------------------------  */

app.get('/Preguntas/medias/:num_pregunta', async (req, res) => {

    console.log(`Petecion recibida al endpoint /alumnos `)
    try {
        let num_pregunta = req.params.num_pregunta
        let db_respuesta = await db.query(`SELECT * FROM Medio WHERE id=${num_pregunta};`);
        console.log(db_respuesta.rows);
        res.json(db_respuesta.rows);



    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Serve Error')

    }
});

/*------------ llamada para las preguntas Dificiles--------------------------------------------------------------------------  */
app.get('/Preguntas/dificil/:num_pregunta', async (req, res) => {

    console.log(`Petecion recibida al endpoint /alumnos `)
    try {
        let num_aleatorio = req.params.num_pregunta
        let db_respuesta = await db.query(`SELECT * FROM dificil WHERE id=${num_aleatorio};`);
        console.log(db_respuesta.rows);
        res.json(db_respuesta.rows);



    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Serve Error')

    }
});
/*----Enseñar preguntas ya introducidas----------------------*/
app.get('/anyadir', async (req, res) => {
    console.log(`Petecion recibida al endpoint /alumnos `)
    try {

        let db_respuesta = await db.query("SELECT * FROM anyadir;");
        console.log(db_respuesta.rows);
        res.json(db_respuesta.rows);

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Serve Error')

    }

});

/*---llamada post para añadir preguntas---------------------------------------------------------------------------------------------------  */
app.post('/anyadir', jsonParser, async (req, res) => {
    console.log(req.body)
    try {
        let newdata = {
            Pregunta: `${req.body.Pregunta} `,
            Respuesta1: req.body.Respuesta1,
            Respuesta2: req.body.Respuesta2,
            Respuesta3: req.body.Respuesta3,
            Respuesta4: req.body.Respuesta4,
            Respuesta_correcta: req.body.Respuesta_correcta,
        };

        res.json(newdata);
        let query = `INSERT INTO anyadir ( Pregunta,  Respuesta1,Respuesta2, Respuesta3,Respuesta4,Respuesta_correcta) 
        VALUES ('${req.body.Pregunta}', '${req.body.Respuesta1}', '${req.body.Respuesta2}', '${req.body.Respuesta3}', '${req.body.Respuesta4}', '${req.body.Respuesta_correcta}' );`;
        console.log(query);
        let db_response = await db.query(query);
        console.log(db_response);





    } catch (err) {

        console.error(err);
        res.status(500).send('Internal Serve Error')

    }
});

/*---llamada post para mostrar user---------------------------------------------------------------------------------------------------  */
app.get('/user', async (req, res) => {
    console.log(`Petecion recibida al endpoint /alumnos `)
    try {

        let db_respuesta = await db.query("SELECT * FROM usuarios;");
        console.log(db_respuesta.rows);
        res.json(db_respuesta.rows);

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Serve Error')

    }

});

/*---llamada post para añadir user---------------------------------------------------------------------------------------------------  */
app.post('/user', jsonParser, async (req, res) => {
    console.log(`petecionn recibida 
        Body: ${JSON.stringify(req.body)}`);
    try {
        let query = `INSERT INTO usuarios ( email,  name, puntos) 
        VALUES ('${req.body.email}', '${req.body.name}', 0 );`;

        let db_response = await db.query(query);
        console.log(db_response);




    } catch (err) {

        console.error(err);
        res.status(500).send('Internal Serve Error')

    }
});
/*---llamada post para auctualizar puntos user---------------------------------------------------------------------------------------------------  */
app.post('/puntos', jsonParser, async (req, res) => {
    console.log(`petecionn recibida 
        Body: ${JSON.stringify(req.body)}`);
    try {
        let query = `UPDATE usuarios
        SET puntos = ${req.body.puntos_actulizados}
        WHERE email = '${req.body.email}'
        and puntos < ${req.body.puntos_actulizados}
        ;`;

        let db_response = await db.query(query);
        console.log(db_response);




    } catch (err) {

        console.error(err);
        res.status(500).send('Internal Serve Error')

    }
});
/*----Enseñar preguntas ya introducidas----------------------*/
app.get('/juego_user/:num_pregunta', async (req, res) => {
    console.log(`Petecion recibida al endpoint /alumnos `)
    try {
        let num_aleatorio = req.params.num_pregunta
        let db_respuesta = await db.query(`SELECT * FROM anyadir WHERE id=${num_aleatorio};`);
        console.log(db_respuesta.rows);
        res.json(db_respuesta.rows);

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Serve Error')

    }

});
/*---------------------------------------------------------------------------*/ 
app.get('/num_usuario', async (req, res) => {
    console.log(`Petecion recibida al endpoint /alumnos `)
    try {

        let db_respuesta = await db.query("SELECT COUNT(*) FROM anyadir;");
        console.log(db_respuesta.rows[0]);
        res.json(db_respuesta.rows[0]);

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Serve Error')

    }

});

/*----------------------------------*/

/*---------------------------------------------------------------------------*/ 
app.get('/ranking', async (req, res) => {
    console.log(`Petecion recibida al endpoint /alumnos `)
    try {

        let db_respuesta = await db.query("SELECT * FROM usuarios ORDER BY puntos DESC;");
        console.log(db_respuesta.rows);
        res.json(db_respuesta.rows);

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Serve Error')

    }

});




/*------------ ⚠️⚠️puertos⚠️⚠️⚠️⚠️⚠️--------------------------------------------------------------------------  */

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}
    ENDPOINTS:
   -GET  /Preguntas/facil/:num_pregunta
   -GET  /Preguntas/medias/:num_pregunta
   -GET  /Preguntas/dificil/:num_pregunta
   -GET  /anyadir (Para mirar las preguntas añadidas )
   -GET  /user (Para mostrar usuarios)
   -POST /anyadir (Para añadir preguntas)
   -POST /user (Para añadir usuarios)
   -POST /puntos (Para actualizar los puntos)
`));