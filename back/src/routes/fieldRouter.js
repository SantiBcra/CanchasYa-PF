const { allFieldsHr, getByIdHr, postFieldHr } = require("../handlers");
const { Router } = require("express");
// const {auth}=require('../middlewares/auth');

const fieldRouter = Router();
fieldRouter.get("/", allFieldsHr);
fieldRouter.get("/:id", getByIdHr);
fieldRouter.post("/", postFieldHr);

module.exports = fieldRouter;
