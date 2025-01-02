import joi from 'joi';

export default joi.object({
  width: joi.number().required(),
  height: joi.number().required(),
  x: joi.number().required(),
  y: joi.number().required(),
  file: joi.any().required(),
});
