describe ("Search for the elements" , () => {
    beforeEach(()=>{
        cy.visit("https://lms.ithillel.ua/auth");
    });

    it("Search for the button - Login with Google ", () => {
        cy.get('.page-login__sso-link--google').should('be.visible').click();
    });


    it("Search for the button - Login with Apple ", () => {
        cy.get('.page-login__sso-link--apple').should('be.visible').click();
    });


    it("Search for the button - Forgot your password? ", () => {
        cy.get('.page-access-shell__restore').should('be.visible').click();
    });


    it("Search for the button - Support ", () => {
        cy.get('.page-access-shell__support').should('be.visible').click();
    });
})

//Optimized code:

describe ('Optimized code for the same test', () => {
    beforeEach(()=>{
        cy.visit("https://lms.ithillel.ua/auth");
    });

    const buttons=[
        {selector: '.page-login__sso-link--google', name: 'Login with Google'},
        {selector: '.page-login__sso-link--apple', name: 'Login with Apple'},
        {selector: '.page-access-shell__restore', name: 'Forgot your password?'},
        {selector: '.page-access-shell__support', name:'Support'}
    ];

    buttons.forEach(({ selector , name })=>{
        it (`Search for the button - ${name}` , () => {
            cy.log(`Searching for: ${name}`);
            cy.get(selector).should('be.visible').click();
        });
    });       
});