import express from 'express'
import { countByCity, countByType, createHotel, deleteHotel, getAllHotel, getHotel, getHotelRooms, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from "../Utils/verifyToken.js"

const router = express.Router();

//C
router.post("/", verifyAdmin, createHotel)
//U
router.put("/:id", verifyAdmin, updateHotel)
//D
router.delete("/:id", verifyAdmin, deleteHotel)
//GET
router.get("/find/:id", getHotel)
//GET ALL
router.get("/", getAllHotel);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router