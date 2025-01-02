import joi from 'joi';

export default joi.object({
  text: joi.string().required(),
  x: joi.number().required(),
  y: joi.number().required(),
  file: joi.any().required(),
});
