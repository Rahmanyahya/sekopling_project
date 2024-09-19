import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const CreateSchemaStudent = Joi.object({
    name: Joi.string().required(),
    no_hp: Joi.string().length(10).required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
    absen: Joi.number().required(),
})

const createValidation = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const validate = CreateSchemaStudent.validate(req.body)
    if (validate.error){
        return res.status(400).json({

            message: validate
            .error
            .details
            .map(item => item.message)
            .join()
        })

    }
    return next()
}

const UpdateSchemaStudent = Joi.object({
    name: Joi.string().required(),
    no_hp: Joi.string().length(10).required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
    absen: Joi.number().required(),
})

const updateValidation = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const validate = UpdateSchemaStudent.validate(req.body)
    if (validate.error) {
        return res.status(400).json({
            message: validate
            .error
            .details
            .map(item => item.message).join()
        })
    }
    return next()
}

const deleteSchemaStudent = Joi.object({
    name: Joi.string().required(),
    no_hp: Joi.string().length(10).required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required(), 
    absen: Joi.number().required()
})

const deleteValidation = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const validate = deleteSchemaStudent.validate(req.body)
    if (validate.error) {
        return res.status(400).json({
            message: validate
            .error
            .details
            .map(item => item.message).join()
        })
    }

    return next()
}

export {createValidation, updateValidation, deleteValidation}
