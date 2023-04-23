// import { getStudent } from "@/lib/data";

// const handler = async (req, res) => {
//     if(req.method === "GET"){
//         try{
//             const {student, error} = await getStudent()
//             if (error) throw new Error(error)

//             return res.status(200).json({student})
//         }catch(error){
//             return res.status(500).json({error: error.message})
//         }
//     }

//     res.setHandler("Allow", ["GET"])
//     res.status(425).end(`Method ${req.method} Not Allowed`)
       
// }

// export default handler
import clientPromise from './../../../lib/dbConnect';

let client
let db
let student

async function init(){
    if(db) return
    try{
        client = await clientPromise
        db = client.db("logins")
        student = db.collection("student")
    }catch(error){
        console.log(error)
        throw new Error("Could not connect to database")

    }
};

const handler = async (req, res) => {
    try{
        if(!student) await init()
        const result = await student
            .find({
                'Email': 'bibek.poudel@student.ku.edu.np',
                'Password': 'asdas#7yhnM'
            })
            .toArray()
        return res.status(200).json({student: result})
    }catch(error){
        return res.status(500).json({error: 'Could not get student'})
    }
}

export default handler

