import { Router, Request, Response } from "express";
import { customAdhkar, getAdhkar } from "../controller/adhkarController";
const route = Router();

route.route("/").get(customAdhkar, getAdhkar);
export default route;
