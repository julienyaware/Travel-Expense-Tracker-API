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
if(req.method === 'PUT'){
    const {user, name, startDate, endDate} = req.body 

    await prisma.trip.update({
        data : {
         user,
         name,
         startDate,
         endDate
        },
        where : {
         id: parseInt(req.query.id),
        }
    })

    return res.status(200).end()
}

if(req.method === 'DELETE'){
    await prisma.trip.delete({
        where: {
            id: parseInt(req.query.id)
        }
    })
   return  res.status(200).end()
   }

res.status(405).json({
    message: 'Method not allowed'
})

}