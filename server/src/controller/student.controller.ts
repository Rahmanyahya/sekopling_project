import { Request, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../db";
import { error } from "console";

/** Schema untuk Create  */
const CreateSiswa = async (req: Request, res:Response) => {
    try {
        const {
        namaSiswa,
        emailSiswa,
        passwordSiswa,
        noHpSiswa,
        absenSiswa
        } = req.body

        const checkAccount = await prisma.siswa.findFirst({
            where: {
                nama: namaSiswa,
                email: emailSiswa,
                no_hp: noHpSiswa,
                absen: absenSiswa,
            },
        });

        if(checkAccount)
            return res.status(404).json({message: "Account not found"})

        const encryptedPassword = bcrypt.hash(
            passwordSiswa, Number(process.env.saltround),
            async (error, _) => {
                if (error) throw new Error("an error occurred please try again")
            }
        )
        
        const newSiswa = await prisma.siswa.create({
            data: {
                nama: String(namaSiswa),
                no_hp: String(noHpSiswa),
                email: String(emailSiswa),
                password: String(passwordSiswa),
                absen: Number(absenSiswa),
                role: "User",
            }
        })
    }catch (error){

        console.log(error);

        return res.status(500).json({error: error})

    }
}

/** Schema untuk Read */
const readStudent = async (req: Request, res: Response) => {
    try{
        const search = req.query.search
        const allStudent = await prisma.siswa.findMany({
            where: {
                OR: [
                    {name: {contains: search?.toString() || ""}}
                ]
            }
        })
        return res.status(200).json({
            message: `student has been succes`,
            data: allStudent
        })
    }catch(error){
        res.status(500).json(error)
    }
}

/** Schema untuk Update */
const updateStudent = async (req: Request, res:Response) => {
    try{
        const id = req.params.id
        const newData = req.body

        const findSiswa = await prisma.siswa
        .findFirst({
            where: {id: Number(id)}
        })

        if(!findSiswa) {
            return res.status(200).json ({
                message: "student not found"
            })
        }

        /** read property */
        const {
            namaSiswa,
            emailSiswa,
            passwordSiswa,
            noHpSiswa,
            absenSiswa
            } = req.body

        /** update student */
        const saveSiswa = await prisma.siswa.update({
            where: {id: Number(id)},
            data: {
                nama: String(newData.nama),
                absen: Number(newData.absen),
                email: String()
            }
        })
    }catch(error){
        return res.status(500);
    }
}

/** Schema untuk Delete */
const deleteStudent = async (req: Request, res: Response) => {
    try{
        const id = req.params.id

        /** check existing student*/
        const findStudent = await prisma.siswa.findFirst({
            where: {
                id: Number(id)
            }
        })

        if(!findStudent) {
            return res.status(200).json({
                message: `student is not found`
            })

            /** delete student */
            const saveStudent = await prisma.siswa.delete({
                where: {id: Number(id)}
            })
            return res.status(200).json ({
                message: `student has been removed`,
                data: saveStudent
            })
        }
    }catch(error){
        return res.status(500).json(error)
    }
}

export {CreateSiswa, readStudent ,updateStudent, deleteStudent}