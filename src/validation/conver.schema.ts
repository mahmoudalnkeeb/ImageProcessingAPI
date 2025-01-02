import joi from 'joi';

export default joi.object({
  format: joi.string().required(),
  quality: joi.number().required(),
  file: joi.any().required(),
});
