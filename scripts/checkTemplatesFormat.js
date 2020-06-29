const Joi = require('@hapi/joi');
const templates = require('../templates/list.json');

const semverRegexp = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;


const templateSchema = Joi.object({
  name: Joi.string().max(60).required(),
  description: Joi.string().max(250).required(),
  repoUrl: Joi.string().uri({ scheme: 'https' }).required(),
  exportPackageUrl: Joi.string().uri({ scheme: 'https' }).required(),
  imageUrl: Joi.string().uri({ scheme: 'https' }).required(),
  author: Joi.object({
    name: Joi.string().max(60).required(),
    email: Joi.string().email().required()
  }).required(),
  lastUpdate: Joi.date().required(),
  forVersion: Joi.string().regex(semverRegexp).required(),
  name: Joi.string().max(60).required(),
  technology: Joi.string().max(40).required(),
});

const templateValid = (template) => {
  const result = templateSchema.validate(template);

  if (result.error) {
    console.error(result.error.message);
    return false;
  }
  return true;
};

const templateIsValid = () => {
  if (!Array.isArray(templates)) {
    console.error('Extensions are not valid array');
    return false;
  }

  // template names lowercased extensions' names so we need them to be unique
  const uniqueResult = Joi
    .array()
    .unique((a, b) =>
      a.name.toLocaleLowerCase() === b.name.toLocaleLowerCase())
    .validate(templates)
  if (uniqueResult.error) {
    console.error(`Multiple templates with same name (case is ignored) are not supported.`);
    return false;
  }

  for (const template of templates) {
    if (!templateValid(template)) {
      console.log(`Tested template ${template.name ? template.name : JSON.stringify(template, 2)}.`);
      return false;
    }
  }

  console.info('Templates format is valid.')
  return true;
};

if (templateIsValid()) {
  return 0;
} else {
  process.exit(1);
}

module.exports = {
  templateIsValid,
}