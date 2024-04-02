const express = require('express');
const router = express.Router();
const api_controller = require("../controller/api_controllers");

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.get('/count', api_controller.count);
router.get('/data', api_controller.data);
router.post('/add', api_controller.add);
router.post('/update', api_controller.update);

module.exports = router;