import {faker }from "@faker-js/faker";

module.exports = {
    nombres:faker.name.firstName(),
    apellido:faker.name.lastName(),
    phone:faker.phone.number(),
    email:faker.internet.email()
}