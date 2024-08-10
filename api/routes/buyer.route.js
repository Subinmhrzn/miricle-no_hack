import express from 'express';
import { bsignin, bsignup } from '../controllers/buyer.controllers';

const router = express.Router();

router.post("/bsignup",bsignup)
router.post("/bsignin",bsignin)

export default router;