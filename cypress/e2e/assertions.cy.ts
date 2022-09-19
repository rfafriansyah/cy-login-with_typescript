
it("test cases", function() {
  cy.visit("https://example.cypress.io")

  // Inplicit Assertions
  
  cy.contains("get").click()
  cy.get('#query-btn')
    .should("contain", "Button")
    .and("have.class", "query-btn btn btn-primary")
    .and("be.visible")
    .and("be.enabled")

    cy.get('#query-btn').invoke("attr", "id")
      .should("eq", "query-btn")


    // Explicit Assertions

    //expect
    let name = "Rhama"
    expect(name).to.be.equal("Rhama")

    // assert
    assert.equal(4, 4, "eq")
})