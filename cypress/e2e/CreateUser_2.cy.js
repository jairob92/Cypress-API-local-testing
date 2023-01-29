const userData=require('../fixtures/userdata')

describe("Test API clientes [Create]", () => {
    it("Create new client with data faker", () => {
        cy.request({
          url: "http://localhost:8000/empleado/",
          method: "POST",
          body: userData
        }).then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body).to.have.property('id')
          expect(response.body).to.have.property('nombres', userData.nombres)

        });
  
    });
  });