const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const verifyAdmin = require('../middleware/verifyAdmin');

// Route to get all projects (for the three projects below the carousel)
router.get('/projects', projectController.getProjects);

// Route to update a project (admin only)
router.put('/projects/:id', verifyAdmin, projectController.updateProject);

module.exports = router;
