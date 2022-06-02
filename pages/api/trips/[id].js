import prisma from "../../../lib/prisma";

export default async function handler(req,res){
if(req.method === 'GET'){

    const trip = await prisma.trip.findUnique({
        where :{
         id: parseInt(req.query.id)
        }
    })

    if(!trip){
        res.status(400).json({message:'Trip not found'})
    }

    res.status(200).json(trip)
}
}