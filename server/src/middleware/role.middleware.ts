import { Request, Response, NextFunction } from "express";
import { Role } from "@prisma/client"; 

export const authorization = (allowedRoles: Role[]) => {
    return (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const userRole = (req as any).user.role;

        if(!allowedRoles.includes(userRole)){
            return res.status(403).json({message: "Acces denied"});
        }
        next();
    }
}