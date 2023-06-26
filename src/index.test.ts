//1:Importar las bibliotecas
import request from 'supertest'
import App from './Router'

describe (
    //Caracteristicas de nombre de la prueba
    'GET/',
    ()=>{
        let app:App
        beforeAll(
            ()=>{
                app=new App()
                app.start()
            }
        )
        afterAll(// se ejecuta despues de la prueba
            app.close()
        )
        //declarar la prueba
        test(
            'Debe devolver un mensaje',
            async ()=>{
                const res =await request(app.app).get('/')
                expect (res.statusCode).toEqual(200)
                expect(res.text).toEqual('Bienvenido a Typescript')
            }
        )
    }
)