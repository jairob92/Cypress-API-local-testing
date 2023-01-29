//const faker = require('faker');

import {faker }from "@faker-js/faker";
const nombres = faker.name.firstName()
const apellido= faker.name.lastName()
const phone = faker.phone.number()
const email=faker.internet.email()

describe("Probando Endpoint para consultar clientes", () => {
    it("Get Client By id", () => {
        cy.request({
          url: "http://localhost:8000/empleado/",
          method: "POST",
          body: {
            nombres: nombres,
            apellidos:apellido,
            Telefono: phone,
            email: email
        }
        }).then((response) => {
          expect(response.status).to.eq(201);
        });
  
    });
  });