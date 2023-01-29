/// <reference types ="Cypress" />

describe("Probando Endpoint para consultar clientes", () => {
  it("Get Client By id", () => {
      cy.request({
        url: "http://localhost:8000/empleado/1",
        method: "GET",
      }).then((response) => {
        expect(response.status).to.eq(200);
      });

  });
});