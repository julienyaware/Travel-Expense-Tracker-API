import prisma from "../../../lib/prisma"

export default async function handler(req,res){
    if(req.method === 'GET'){
        const expense = await prisma.expenses.findUnique({
            where : {
                id : parseInt(req.query.id)
            }
        })

        if(!expense){
            res.status(400).json({
                message: 'Expense Not found'
            })
        }

        res.status(200).json(expense)
    }
}