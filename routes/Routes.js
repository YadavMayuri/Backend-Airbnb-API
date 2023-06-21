import express from "express";
import { register } from "../controllers/UsersControllers.js";
import {  CheckvalidUser, registrationCheck } from "../middlewares/authMiddleware.js";
import {  Autocomplete, SearchByGEO, getCalender, getSearchByLocation } from "../controllers/AirbnbControllers.js";

var router = express.Router();


router.post('/register',registrationCheck,register)
router.get('/getSearchByLocation',CheckvalidUser,getSearchByLocation)
router.get('/getCalender',CheckvalidUser,getCalender)
router.get('/Autocomplete',CheckvalidUser,Autocomplete)
router.get('/SearchByGEO',CheckvalidUser,SearchByGEO)




export default router;