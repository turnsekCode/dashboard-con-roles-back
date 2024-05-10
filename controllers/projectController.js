const Project = require("../models/Project");

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProject = async (req, res) => {
  try {
    const { title, description, url, slug } = req.body;
    const project = new Project({
      title,
      description,
      url,
      slug,
      //createdBy: req.user._id,
    });
    await project.save();
    res.status(201).json({ message: "Project created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
