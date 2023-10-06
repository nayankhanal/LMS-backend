const Syllabus = require("../models/Syllabus");

const studySyllabus = async (req, res) => {
  const { id } = req.params;

  const study = await Syllabus.findAll({ where: { courseId: id } });
  res.send(study);
};

module.exports = { studySyllabus };
