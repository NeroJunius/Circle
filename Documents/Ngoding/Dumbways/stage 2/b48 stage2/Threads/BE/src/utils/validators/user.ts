import Joi = require("joi");


export  const userSchema = Joi.object().keys({
    fullname: Joi.string().required(),
    username: Joi.string().required().min(4).max(100),
    email: Joi.string().email().required(),
    password: Joi.string().required(), 
  });


