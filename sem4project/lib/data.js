import clientPromise from "./dbConnect";

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
        throw new Error("Could not connect to database")
    }
};

(async () => {
    await init()
    
})()

export async function getStudent(a){
    try{
        if(!student) await init()
        const result = await student
            .find({})
            .toArray()

        return {student: result}
    }catch(error){
        return {error: 'Could not get student'}
    }
}
