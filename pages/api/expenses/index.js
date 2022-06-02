import prisma from "../../../lib/prisma";

export default async function handler(req,res){
    if(req.method === 'GET'){
        const expenses = await prisma.expenses.findMany()
        res.status(200).json(expenses)
        return
    }

    if(req.method === 'POST'){
        const {trip,name,date,amount,currency} = req.body

        if(!trip){
            res.status(400).json({
                message: 'Missing required parameter trip'
            })
        }

        if(!name){
            res.status(400).json({
                message: 'missing required parameter name'
            })
        }

        await prisma.expenses.create({
            data : {
                trip,
                name,
                date,
                amount,
                currency
            }
        })

        return res.status(200).end()
    }

    res.status(405).json({
        message: 'Method not allowed'
    })


}