import express from "express";
import cors from "cors";
import LoginController from "../controller/Login.controller.js";
import SettingsController from "../controller/Settings.controller.js";

const Api = express();

Api.use(cors({
  methods: ['POST', 'PUT', 'GET', 'PATCH', 'OPTIONS'],  
  credentials: true,
  allowedHeaders: ['Authorization', 'Bearer'],
  origin:["*"]
}));
Api.use(express.json());
Api.use(express.urlencoded({extended:true}));

Api.get('/users/list', LoginController.index);
Api.post('/sistema/getstarted', SettingsController.getStarted);
Api.post('/auth/login', LoginController.Login);
Api.get('/sistema/getpassword/:id', SettingsController.CheckPassword);

export default Api;
