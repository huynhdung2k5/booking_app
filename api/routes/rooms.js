import express from 'express'
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom, updateRoomAvailability } from '../controllers/room.js';
import { verifyAdmin } from "../Utils/verifyToken.js";

const router = express.Router();

//C
router.post("/:hotelid", verifyAdmin, createRoom);
//U
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);
//D
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET
router.get("/:id", verifyAdmin, getRoom);
//GET ALL
router.get("/", getAllRoom);

export default router