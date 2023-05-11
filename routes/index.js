const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controllers');
const issueController  =require('../controllers/issue_controller');


router.get('/' , homeController.home);
router.use('/project', require('./project'));
router.post('/:id/issue/create',issueController.create);
// router.get('/:id/search',issueController.author);


module.exports  = router;