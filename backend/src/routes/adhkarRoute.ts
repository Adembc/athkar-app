import { Router, Request, Response } from "express";
import { getAdhkar } from "../controller/adhkarController";
const route = Router();

route.route("/").get(getAdhkar);
export default route;
