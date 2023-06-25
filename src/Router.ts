import swaggerUi from 'swagger-ui-express'
import express,{Application, Request, Response} from 'express'
import { swaggerSpec } from './swagger.conf'
class App{
//Atributos
app:any
private server:any

constructor(){
   
    this.app=express()
    this.app.use(express.json())//capacidad de generar archivos json
    this.app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(swaggerSpec)
    )
    this.routes()//definir los diferentes puntos de entrada a mi proyecto
}

private routes():void{
    this.app.get(
       "/", //la ruta primero la url, la funcion de callbackq s eva aejecutar
        (req:Request, res:Response)=>{
            res.send("Bienvenido a typescript")
        }
    
       )

}
public start():void{// iniciar el servidor
   this.server= this.app.listen(3001,
        ()=>{console.log("El servidor está escuchando en el puerto 3001")}        //funcion de callback se ejecuta una vez se inicie el servidor
        )

}
    public close():void{
        this.server.close()
    }
}

export default App//cunado yo llame esta clase ya esta creado este modulo