# API-REST-con-Express-y-MongoDb

La API se creo utilizando la base de datos University con la collection Students( name, lastname, email, edad, carrera), consta de 9 endpoints con su respectiva definición
de ruta, el metodo mediante el cual vas a acceder y toda la funcion ( find, findOne, insertOne, insertMany, updateOne, updateOne upsert, updateMany, updateMany upsert, 
delete).

PASOS:
1. Se descargan todos los archivos del repositorio.
2. Corren la api en la terminal de visual studio code -npm run start.
3. El archivo src/router/students.js se encuentra cada uno de los endpoints de la api donde se implementa el crud de la collection.
4. para testear el funcionamiento del api puedes hacerlo con POSTMAN o con Insomnia 

COMO TESTEAR EL API CON INSOMNIA O POSTMAN:

1. Para el endpoint Find se debe poner esta ruta en insomnia: GET http://localhost:4000/students/
2. Para el enpoint findOne se debe poner esta ruta: GET http://localhost:4000/students/(id) en id pones el id de uno de los documentos ya registrado.
3. Para el endpoint InsertOne se debe poner esta ruta: POST http://localhost:4000/students/ y luego el registrar en nuevo estudiante en insomnia 
  {
    "name": "",
    "lastname": "",
    "email": "",
    "edad": "",
    "carrera": ""
  }
4. Para el endpoint InsertMany se debe poner esta ruta: POST http://localhost:4000/students/createdstudents y luego el registro de los nuevos estudiantes en insomnia
   dentro de [{},{},...]
  [{
    "name": "",
    "lastname": "",
    "email": "",
    "edad": "",
    "carrera": ""
    },{
    "name": "",
    "lastname": "",
    "email": "",
    "edad": "",
    "carrera": ""
  }]
  
 5. Para el endpoint updateOne se debe poner esta ruta: PATCH http://localhost:4000/students/(id) en id pones el id de uno de los documentos ya registrado y dentro 
 de {} pones el campo que quieras actualizar.
  {"edad": 19}. se actualizará la edad del id que se puso en la ruta.
 
 6. Para el endpoint updateOne Upsert se debe poner esta ruta: PATCH http://localhost:4000/students/upsert/(id) en id pones el id de uno de los documentos
 ya registrados y dentro de {} pones el campo que quieras actualizar, Upsert lo que hace es que busca el registro para actualizarlo y si el id no existe crea un registro
 nuevo, pero antes debes ingresar todos los campos y los valores que hay en los cumentos existentes.
 
 7.  Para el endpoint updateMany se debe poner esta ruta: PUT http://localhost:4000/students/updateMany y todos los que cumplan la condicion puesta en el endpoint 
 se actulizaran con los campos que pongas en {}.
 
 8. Para el endpoint updateMany Upsert se debe poner esta ruta: PUT http://localhost:4000/students/updateMany/upsert la diferencia de este con el anterior es que si no encuentra
 ninguno que cumpla la condicion crea un registro nuevo con los campos que ingresaste en {}.
 
 9. Para el endpoint Delete se debe poner esta ruta: DELETE http://localhost:4000/students/(id) en id pones el id de uno de los documentos ya registrados, 
 y se eliminara el resgistro que coincida con el id ingresado en la ruta.
 
 RECORDATORIO:
 Metodos de acceso
 GET - Obtener (find, findone)
 POST - Insertar (insertone, insertmany)
 PACTH - Actualizar o crear uno (updateone, updateone con upsert)
 PUT - Actualizar o crear muchos (updatemany, updatemany con upsert)
 DELETE - eliminar (delete)
