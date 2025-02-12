"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
app.use(cors_1.default());
var body_parser_1 = __importDefault(require("body-parser"));
var jsonParser = body_parser_1.default.json();
var db = __importStar(require("./db-connection"));
/*--------Funcion aleatoria----------------------------------------------------------------------------------  */
-
/*-------- llamada para las preguntas faciles----------------------------------------------------------------------------------  */
app.get('/Preguntas/facil/:num_pregunta', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var num_pregunta, db_respuesta, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Petecion recibida al endpoint /alumnos ");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                num_pregunta = req.params.num_pregunta;
                return [4 /*yield*/, db.query("SELECT * FROM Facil WHERE id=" + num_pregunta + ";")];
            case 2:
                db_respuesta = _a.sent();
                console.log(db_respuesta.rows);
                res.json(db_respuesta.rows);
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.error(err_1);
                res.status(500).send('Internal Serve Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/*------------ llamada para las preguntas medias--------------------------------------------------------------------------  */
app.get('/Preguntas/medias/:num_pregunta', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var num_pregunta, db_respuesta, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Petecion recibida al endpoint /alumnos ");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                num_pregunta = req.params.num_pregunta;
                return [4 /*yield*/, db.query("SELECT * FROM Medio WHERE id=" + num_pregunta + ";")];
            case 2:
                db_respuesta = _a.sent();
                console.log(db_respuesta.rows);
                res.json(db_respuesta.rows);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                console.error(err_2);
                res.status(500).send('Internal Serve Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/*------------ llamada para las preguntas Dificiles--------------------------------------------------------------------------  */
app.get('/Preguntas/dificil/:num_pregunta', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var num_aleatorio, db_respuesta, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Petecion recibida al endpoint /alumnos ");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                num_aleatorio = req.params.num_pregunta;
                return [4 /*yield*/, db.query("SELECT * FROM dificil WHERE id=" + num_aleatorio + ";")];
            case 2:
                db_respuesta = _a.sent();
                console.log(db_respuesta.rows);
                res.json(db_respuesta.rows);
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                console.error(err_3);
                res.status(500).send('Internal Serve Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/*----Enseñar preguntas ya introducidas----------------------*/
app.get('/anyadir', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var db_respuesta, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Petecion recibida al endpoint /alumnos ");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db.query("SELECT * FROM anyadir;")];
            case 2:
                db_respuesta = _a.sent();
                console.log(db_respuesta.rows);
                res.json(db_respuesta.rows);
                return [3 /*break*/, 4];
            case 3:
                err_4 = _a.sent();
                console.error(err_4);
                res.status(500).send('Internal Serve Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/*---llamada post para añadir preguntas---------------------------------------------------------------------------------------------------  */
app.post('/anyadir', jsonParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newdata, query, db_response, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req.body);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                newdata = {
                    Pregunta: req.body.Pregunta + " ",
                    Respuesta1: req.body.Respuesta1,
                    Respuesta2: req.body.Respuesta2,
                    Respuesta3: req.body.Respuesta3,
                    Respuesta4: req.body.Respuesta4,
                    Respuesta_correcta: req.body.Respuesta_correcta,
                };
                res.json(newdata);
                query = "INSERT INTO anyadir ( Pregunta,  Respuesta1,Respuesta2, Respuesta3,Respuesta4,Respuesta_correcta) \n        VALUES ('" + req.body.Pregunta + "', '" + req.body.Respuesta1 + "', '" + req.body.Respuesta2 + "', '" + req.body.Respuesta3 + "', '" + req.body.Respuesta4 + "', '" + req.body.Respuesta_correcta + "' );";
                console.log(query);
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                console.log(db_response);
                return [3 /*break*/, 4];
            case 3:
                err_5 = _a.sent();
                console.error(err_5);
                res.status(500).send('Internal Serve Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/*---llamada post para mostrar user---------------------------------------------------------------------------------------------------  */
app.get('/user', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var db_respuesta, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Petecion recibida al endpoint /alumnos ");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db.query("SELECT * FROM usuarios;")];
            case 2:
                db_respuesta = _a.sent();
                console.log(db_respuesta.rows);
                res.json(db_respuesta.rows);
                return [3 /*break*/, 4];
            case 3:
                err_6 = _a.sent();
                console.error(err_6);
                res.status(500).send('Internal Serve Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/*---llamada post para añadir user---------------------------------------------------------------------------------------------------  */
app.post('/user', jsonParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("petecionn recibida \n        Body: " + JSON.stringify(req.body));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "INSERT INTO usuarios ( email,  name, puntos) \n        VALUES ('" + req.body.email + "', '" + req.body.name + "', 0 );";
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                console.log(db_response);
                return [3 /*break*/, 4];
            case 3:
                err_7 = _a.sent();
                console.error(err_7);
                res.status(500).send('Internal Serve Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/*---llamada post para auctualizar puntos user---------------------------------------------------------------------------------------------------  */
app.post('/puntos', jsonParser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("petecionn recibida \n        Body: " + JSON.stringify(req.body));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = "UPDATE usuarios\n        SET puntos = " + req.body.puntos_actulizados + "\n        WHERE email = '" + req.body.email + "'\n        and puntos < " + req.body.puntos_actulizados + "\n        ;";
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                console.log(db_response);
                return [3 /*break*/, 4];
            case 3:
                err_8 = _a.sent();
                console.error(err_8);
                res.status(500).send('Internal Serve Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/*----Enseñar preguntas ya introducidas----------------------*/
app.get('/juego_user/:num_pregunta', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var num_aleatorio, db_respuesta, err_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Petecion recibida al endpoint /alumnos ");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                num_aleatorio = req.params.num_pregunta;
                return [4 /*yield*/, db.query("SELECT * FROM anyadir WHERE id=" + num_aleatorio + ";")];
            case 2:
                db_respuesta = _a.sent();
                console.log(db_respuesta.rows);
                res.json(db_respuesta.rows);
                return [3 /*break*/, 4];
            case 3:
                err_9 = _a.sent();
                console.error(err_9);
                res.status(500).send('Internal Serve Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/*---------------------------------------------------------------------------*/
app.get('/num_usuario', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var db_respuesta, err_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Petecion recibida al endpoint /alumnos ");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db.query("SELECT COUNT(*) FROM anyadir;")];
            case 2:
                db_respuesta = _a.sent();
                console.log(db_respuesta.rows[0]);
                res.json(db_respuesta.rows[0]);
                return [3 /*break*/, 4];
            case 3:
                err_10 = _a.sent();
                console.error(err_10);
                res.status(500).send('Internal Serve Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/*----------------------------------*/
/*---------------------------------------------------------------------------*/
app.get('/ranking', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var db_respuesta, err_11;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Petecion recibida al endpoint /alumnos ");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db.query("SELECT * FROM usuarios ORDER BY puntos DESC;")];
            case 2:
                db_respuesta = _a.sent();
                console.log(db_respuesta.rows);
                res.json(db_respuesta.rows);
                return [3 /*break*/, 4];
            case 3:
                err_11 = _a.sent();
                console.error(err_11);
                res.status(500).send('Internal Serve Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/*------------ ⚠️⚠️puertos⚠️⚠️⚠️⚠️⚠️--------------------------------------------------------------------------  */
var port = process.env.PORT || 3000;
app.listen(port, function () { return console.log("App listening on PORT " + port + "\n    ENDPOINTS:\n   -GET  /Preguntas/facil/:num_pregunta\n   -GET  /Preguntas/medias/:num_pregunta\n   -GET  /Preguntas/dificil/:num_pregunta\n   -GET  /anyadir (Para mirar las preguntas a\u00F1adidas )\n   -GET  /user (Para mostrar usuarios)\n   -POST /anyadir (Para a\u00F1adir preguntas)\n   -POST /user (Para a\u00F1adir usuarios)\n   -POST /puntos (Para actualizar los puntos)\n"); });
