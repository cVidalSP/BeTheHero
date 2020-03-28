const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', ()=>{
    beforeEach(async () => {
        // Antes de se iniciar um teste, 
        // é aconselhavel zerar o banco para que outras informacoes de outros testes nao influenciem no mesmo.
        await connection.migrate.rollback(); //Derruba todas as migrations q possam existir de um teste anterior.
        await connection.migrate.latest();   //Sobe novas migrations.
    })

    afterAll(async ()=>{
        await connection.destroy();
    })

    it('should be able to create a new ONG', async ()=>{
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "Ong",
	        email: "Ong@gmail.com",
	        whatsapp: "1140028922",
            city: "Rio do Sul",
            uf: "SC"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})