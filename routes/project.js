/**
 *  all the endpoints related to the project are here
 *  endpoints -- > /project/*
 */

const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project_controller');
const issueController =require('../controllers/issue_controller');
console.log('say hi from project routes');

router.post('/create', projectController.create);
router.get('/:id', projectController.project);
router.get('/:id/author',issueController.author);
router.get('/:id/title',issueController.title);
router.get('/:id/filter',issueController.filter);
    
module.exports  = router;

