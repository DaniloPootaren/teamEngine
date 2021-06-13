describe("Examine employees list content and functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/#/view");
  });
  it("contains correct information", () => {
    cy.get("[data-cy=header]").should("contain", "View Employees");
  });
  it("shows edit dialog", () => {
    cy.get("[data-cy=editEmployeeDialog]").click();
  });
  it("shows delete confirmation dialog", () => {
    cy.get("[data-cy=deleteEmployeeDialog]").click();
  });

  it("updates current employee details", () => {
    cy.get("[data-cy=editEmployeeDialog]").click();

    cy.get("[data-cy=firstNameInput]").focus().clear().type("John");
    cy.get("[data-cy=surnameInput]").focus().clear().type("Doe");
    cy.get("[data-cy=emailInput]").focus().clear().type("john.doe@example.com");
    cy.get("[data-cy=ageInput]").focus().clear().type("35");
    cy.get("[data-cy=statusInput]").select('ACTIVE');
    cy.get("[data-cy=jobTitleInput]").focus().clear().type("Software Engineer");
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
  it("delete current employee", () => {
    cy.get("[data-cy=deleteEmployeeDialog]").click();
    cy.get("[data-cy=deleteEmployee]").click();

    cy.window()
      .its("store")
      .invoke("getState")
      .then(state => {
        expect(
          state.employees.employees_records
        ).to.eql([]);
      });
  });
});
