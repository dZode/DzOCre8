const Tech = require("../models/Tech.model");

module.exports.getAll = function (req, res) {
  Tech.find()
    .then((techs) => res.json(techs))
    .catch((err) => res.json(err));
};

module.exports.create = (req, res) => {
  Tech.create(req.body)
    .then((tech) => res.json(tech))
    .catch((err) => res.json(err));
};

module.exports.getOne = (req, res) => {
  Tech.findById(req.params.id)
    .then((tech) => res.json(tech))
    .catch((err) => res.json(err));
};

module.exports.update = (req, res) => {
  Tech.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((tech) => res.json(tech))
    .catch((err) => res.json(err));
};

module.exports.delete = (req, res) => {
  Tech.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: "Success" }))
    .catch((err) => res.json(err));
};
