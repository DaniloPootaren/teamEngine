
describe("Examine the creation of employees", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/#/create");
  });

  it("validates empty submitted fields properly", () => {
    cy.get("[data-cy=saveButton]").click();
    cy.get("[data-cy=firstNameErrorMessage]").should("contain", "Required");
    cy.get("[data-cy=surnameErrorMessage]").should("contain", "Required");
    cy.get("[data-cy=emailErrorMessage]").should("contain", "Required");
    cy.get("[data-cy=ageErrorMessage]").should("contain", "Required");
    cy.get("[data-cy=statusErrorMessage]").should("contain", "Required");
    cy.get("[data-cy=jobTitleErrorMessage]").should("contain", "Required");
  });

  it("validates too long submitted values properly", () => {
    cy.get("[data-cy=firstNameInput]").type(
      "JohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohn"
    );
    cy.get("[data-cy=surnameInput]").type(
      "DoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoe"
    );
    cy.get("[data-cy=emailInput]").type(
      "JohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohn.doe@example.com"
    );
    cy.get("[data-cy=jobTitleInput]").type(
      "JohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohn.doe@example.com"
    );
    cy.get("[data-cy=surnameInput]").click();
    cy.get("[data-cy=firstNameErrorMessage]").should(
      "contain",
      "The maximum number of characters is 255"
    );
    cy.get("[data-cy=surnameErrorMessage]").should(
      "contain",
      "The maximum number of characters is 255"
    );
    cy.get("[data-cy=emailErrorMessage]").should(
      "contain",
      "The maximum number of characters is 255"
    );
    cy.get("[data-cy=jobTitleErrorMessage]").should(
      "contain",
      "The maximum number of characters is 255"
    );
  });

  it("validates invalid email address properly", () => {
    cy.get("[data-cy=firstNameInput]").type("John");
    cy.get("[data-cy=surnameInput]").type("Doe");
    cy.get("[data-cy=emailInput]").type("john.doe.example.com");
    cy.get("[data-cy=ageInput]").type("35");
    cy.get("[data-cy=statusInput]").select('ACTIVE');
    cy.get("[data-cy=jobTitleInput]").type("Software Engineer");
    cy.get("[data-cy=emailErrorMessage]").should("contain", "Invalid email address");
  });

  it("creates an employee properly", () => {
    cy.get("[data-cy=firstNameInput]").type("John");
    cy.get("[data-cy=surnameInput]").type("Doe");
    cy.get("[data-cy=emailInput]").type("john.doe@example.com");
    cy.get("[data-cy=ageInput]").type("35");
    cy.get("[data-cy=statusInput]").select('ACTIVE');
    cy.get("[data-cy=jobTitleInput]").type("Software Engineer");
    cy.get("[data-cy=saveButton]").click();

    cy.window()
      .its("store")
      .invoke("getState")
      .then(state => {
        expect(
          state.employees.employees_records.map(employee => ({
            firstName: employee.firstName,
            surname: employee.surname,
            email: employee.email,
            age: employee.age,
            jobTitle: employee.jobTitle,
            status: employee.status
          }))
        ).to.eql([
          {
            firstName: "Abe",
            surname: "Simpson",
            email: "abe.simpson@example.com",
            age: 33,
            jobTitle: "Work grouch",
            status: "ACTIVE",
          },
          {
            firstName: "John",
            surname: "Doe",
            email: "john.doe@example.com",
            age: "35",
            jobTitle: "Software Engineer",
            status: "ACTIVE"
          },
        ]);
      });
  });
});
