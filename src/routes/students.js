const express = require ('express')
const client = require ('../utils/connectdb/conn')
const {ObjectId} = require("mongodb")

/* crear un nuevo objeto ruta. */
const students = express.Router()

// endpoint Find Students
// Para probar el funcionamiento de la API ingrese: http://localhost:4000/students/
students.get("/", async(req, res)=>{
    try {
        await client.connect()
        const results = await client.db("University").collection("Students").find({}).toArray()
        if(Array.isArray(results)>= 1){
            res.status(200).json({
                status: 200,
                amount_results: results.length,
                data: results
            })
        }else{
            res.status(404).json({
                status: 404,
                message: "Students not found"
            })
        }
    } finally {
        await client.close()
        
    }
})

// endpoint FindOne Student
// Para probar el funcionamiento de la API ingrese: http://localhost:4000/students/id
students.get("/:id", async(req, res)=>{
    let id = req.params.id
    try {
        await client.connect()
        const result = await client.db("University").collection("Students").findOne({_id: new ObjectId(id)})
        if(result){
            res.status(200).json({
                status: 200,
                data: result
            })
        }else{
            res.status(404).json({
                status: 404,
                message: "Student not found"
            })
        }
    } finally {
        await client.close()
    }
})

// endpoint InsertOne studiant
// Para probar el funcionamiento de la API ingrese: http://localhost:4000/students/
// Luego digite el nuevo student {}
students.post("/", async(req, res)=>{
    const body = req.body
    try {
        await client.connect()
        const result = await client.db("University").collection("Students").insertOne(body)
        if(result){
            res.status(201).json({
            status: 201,
            message: 'created student',
            data: result
        })
    }else{
        res.status(400).json({
            status: 400,
            message: "student not created"
        })
    }
    } finally {
        await client.close()
    }
})

// endpoint InsertMany Students
// Para probar el funcionamiento de la API ingrese: http://localhost:4000/students/createdstudents
// Luego digite los nuevos students [{},{}]
students.post("/createdstudents", async(req, res)=>{
    const body = req.body
    try {
        await client.connect()
        const result = await client.db("University").collection("Students").insertMany(body)
        if(result){
            res.status(201).json({
            status: 201,
            message: 'created students',
            data: result
        })
    }else{
        res.status(400).json({
            status: 400,
            message: "students not created"
        })
    }
    } finally {
        await client.close()
    }
})


// endpoint UpdateOne student
// Para probar el funcionamiento de la API ingrese: http://localhost:4000/students/id
// Luego digite los campos que desea acualizar {}
students.patch("/:id", async(req, res)=>{
    const id = req.params.id
    const body = req.body
    try {
        await client.connect()
        const result = await client.db("University").collection("Students").updateOne(
                {_id: new ObjectId(id)},{$set:body});
        if(result){
            res.status(201).json({
            status: 201,
            message: 'update student',
            data: result
        })
    }else{
        res.status(400).json({
            status: 400,
            message: "student not created"
        })
    }
    } finally {
        await client.close()
    }
})

// endpoint UpdateOne con Upsert student
// Para probar el funcionamiento de la API ingrese: http://localhost:4000/students/upsert/id
// Luego digite los nuevos campos para actualizar o crear {}
students.patch("/upsert/:id", async(req, res)=>{
    const id = req.params.id
    const body = req.body
    try {
        await client.connect()
        const result = await client.db("University").collection("Students").updateOne(
                {_id: new ObjectId(id)},{$set:body},{upsert: true});
        if(result){
            res.status(201).json({
            status: 201,
            message: 'update student with upsert',
            data: result
        })
    }else{
        res.status(400).json({
            status: 400,
            message: "student not created"
        })
    }
    } finally {
        await client.close()
    }
})

// endpoint UpdateMany students
// Para probar el funcionamiento de la API ingrese: http://localhost:4000/students/updateMany
// Luego digite el campo que desea actualizar en todos los documentos que cumplan la condicion {}
students.put("/updateMany", async(req, res)=>{
    const body = req.body
    try {
        await client.connect()
        const result = await client.db("University").collection("Students").updateMany({edad:{$eq:17}},{$set:body});
        if(result){
            res.status(201).json({
            status: 201,
            message: 'update students',
            data: result
        })
    }else{
        res.status(400).json({
            status: 400,
            message: "students not created"
        })
    }
    } finally {
        await client.close()
    }
})


// endpoint UpdateMany con upsert Students
// Para probar el funcionamiento de la API ingrese: http://localhost:4000/students/updateMany/upsert
// Luego cree el json con todos los campos del documento {}
students.put("/updateMany/upsert", async(req, res)=>{
    const body = req.body
    try {
        await client.connect()
        const result = await client.db("University").collection("Students").updateMany({edad:{$eq:17}},{$set:body},{upsert: true});
        if(result){
            res.status(201).json({
            status: 201,
            message: 'update students',
            data: result
        })
    }else{
        res.status(400).json({
            status: 400,
            message: "students not created"
        })
    }
    } finally {
        await client.close()
    }
})


// endpoint DeleteOne student
// Para probar el funcionamiento de la API ingrese: http://localhost:4000/students/id
students.delete("/:id", async(req, res)=>{
    const id = req.params.id
    try {
        await client.connect()
        const result = await client.db("University").collection("Students").deleteOne({"_id": new ObjectId(id)})
        if(result){
            res.status(200).json({
                status: 200,
                message: 'delete student'
            })
        }else{
            res.status(404).json({
                status: 404,
                message: 'student not delete'
            })
        }
    } finally{
        await client.close()
    }
})

// Exportando la ruta de students
module.exports = students