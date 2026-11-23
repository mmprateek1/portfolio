import { projects } from '../data/projectsData.js';

export const getProjects = async (req, res) => {
  try {
    const { category, featured } = req.query;
    let filtered = [...projects];

    if (category && category !== 'All') {
      filtered = filtered.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));
    }

    if (featured === 'true') {
      filtered = filtered.filter(p => p.featured === true);
    }

    return res.status(200).json({
      success: true,
      count: filtered.length,
      data: filtered,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve projects.',
    });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = projects.find(p => p.id === id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: `Project with id '${id}' not found.`,
      });
    }

    return res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve project details.',
    });
  }
};
