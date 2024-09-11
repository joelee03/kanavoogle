const Project = require('../models/Project');

// Controller to get all projects (for the three projects below the carousel)
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find(); // Fetch all projects from MongoDB
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error });
  }
};

// Controller to update a project (admin only)
exports.updateProject = async (req, res) => {
  const { id } = req.params; // The project's ID (can be passed as a route parameter)
  const { title, description, link } = req.body;

  try {
    // Find the project by ID and update it
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { title, description, link },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json({ message: 'Project updated successfully', project: updatedProject });
  } catch (error) {
    res.status(500).json({ message: 'Error updating project', error });
  }
};
