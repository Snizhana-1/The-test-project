

describe ('Registration on the website',()=>{
    beforeEach(()=>{
        cy.visit('https://qauto.forstudy.space/',{
            auth : {
                username: 'guest' ,
                password: 'welcome2qauto'
                }
            });
        cy.contains('Sign In').should('be.visible').click();
        cy.contains('Registration').should('be.visible').click();
    });

    context('Check the field Name',()=>{

        it ('Check empty field', ()=> {
            cy.get('#signupName').focus().blur();
            cy.contains('Name required').should('be.visible');
            cy.get('#signupName').should('have.css','border-color','rgb(220, 53, 69)');
        });

        it('Check using the wrong data', ()=> { 
            cy.get('#signupName').clear().type('@123!').blur();
            cy.contains('Name is invalid').should('be.visible');
            cy.get('#signupName').should('have.css','border-color','rgb(220, 53, 69)');
        });

        it ('Check length is less than 2 characters',()=> {
            cy.get('#signupName').clear().type('A').blur();
            cy.contains('Name has to be from 2 to 20 characters long').should('be.visible');
            cy.get('#signupName').should('have.css','border-color','rgb(220, 53, 69)');
        });

        it ('Check length is more than 20 characters',()=> {
            cy.get('#signupName').clear().type('Aaaaaaaaaaaaaaaaaaaaa').blur();
            cy.contains('Name has to be from 2 to 20 characters long').should('be.visible');
            cy.get('#signupName').should('have.css','border-color','rgb(220, 53, 69)');
        });
    })

    context('Check the field Last name',()=>{

        it ('Check empty field', ()=> {
            cy.get('#signupLastName').focus().blur();
            cy.contains('Last name required').should('be.visible');
            cy.get('#signupLastName').should('have.css','border-color','rgb(220, 53, 69)');
        });

        it('Check using the wrong data', ()=> { 
            cy.get('#signupLastName').clear().type('@123!').blur();
            cy.contains('Last name is invalid').should('be.visible');
            cy.get('#signupLastName').should('have.css','border-color','rgb(220, 53, 69)');
        });

        it ('Check length is less than 2 characters',()=> {
            cy.get('#signupLastName').clear().type('A').blur();
            cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible');
            cy.get('#signupLastName').should('have.css','border-color','rgb(220, 53, 69)');
        });

        it ('Check length is more than 20 characters',()=> {
            cy.get('#signupLastName').clear().type('Aaaaaaaaaaaaaaaaaaaaa').blur();
            cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible');
            cy.get('#signupLastName').should('have.css','border-color','rgb(220, 53, 69)');
        });
    })

    context('Check the field Email',()=>{

        it('Check using the wrong data', ()=> { 
            cy.get('#signupEmail').clear().type('email.gmail.com').blur();
            cy.contains('Email is incorrect').should('be.visible');
            cy.get('#signupEmail').should('have.css','border-color','rgb(220, 53, 69)');
        });

        it ('Check empty field', ()=> {
            cy.get('#signupEmail').focus().blur();
            cy.contains('Email required').should('be.visible');
            cy.get('#signupEmail').should('have.css','border-color','rgb(220, 53, 69)');
        });
    })

    context('Check the field Password',()=>{

        it('Check length is less than 8 characters', ()=> { 
            cy.get('#signupPassword').clear().type('123Abcd').blur();
            cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            .should('be.visible');
            cy.get('#signupPassword').should('have.css','border-color','rgb(220, 53, 69)');
        });

        it('Check length is more than 15 characters', ()=> { 
            cy.get('#signupPassword').clear().type('123Abcd123Abcd123').blur();
            cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            .should('be.visible');
            cy.get('#signupPassword').should('have.css','border-color','rgb(220, 53, 69)');
        });

        it('Check the test with a length from 8 to 15 min 1 capital letter and 1 small letter', ()=> { 
            cy.get('#signupPassword').clear().type('AbcdAbcd').blur();
            cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            .should('be.visible');
            cy.get('#signupPassword').should('have.css','border-color','rgb(220, 53, 69)');
        });

        it('Check the test with a length from 8 to 15 min 1 integer and 1 small letter', ()=> { 
            cy.get('#signupPassword').clear().type('bcd123bcd').blur();
            cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            .should('be.visible');
            cy.get('#signupPassword').should('have.css','border-color','rgb(220, 53, 69)');
        });

        it('Check the test with a length from 8 to 15 min 1 integer and 1 capital letter', ()=> { 
            cy.get('#signupPassword').clear().type('123ABC123').blur();
            cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            .should('be.visible');
            cy.get('#signupPassword').should('have.css','border-color','rgb(220, 53, 69)');
        });

        it ('Check empty field', ()=> {
            cy.get('#signupPassword').focus().blur();
            cy.contains('Password required').should('be.visible');
            cy.get('#signupPassword').should('have.css','border-color','rgb(220, 53, 69)');
        });
    })

    context('Check the field Re-enter password',()=>{

        it ('Check if the passwords do not match', ()=> {
            cy.get('#signupPassword').type('AbcdAbc123');
            cy.get('#signupRepeatPassword').type('Abcdbc23').blur();
            cy.contains('Passwords do not match').should('be.visible');
            cy.get('#signupRepeatPassword').should('have.css','border-color','rgb(220, 53, 69)');
        });

        it ('Check empty field', ()=> {
            cy.get('#signupRepeatPassword').focus().blur();
            cy.contains('Re-enter password required').should('be.visible');
            cy.get('#signupRepeatPassword').should('have.css','border-color','rgb(220, 53, 69)');
        });

    })

    context('Check the button Register',()=>{

        it('Successful registration, a new user has been created', ()=>{
            cy.get('#signupName').clear().type('Marie').blur();
            cy.get('#signupLastName').clear().type('Curie').blur();
            cy.get('#signupEmail').clear().type('marie1867curie@gmail.com').blur();
            cy.get('#signupPassword').clear().type('123Abcd123').blur();
            cy.get('#signupRepeatPassword').type('123Abcd123').blur();
            cy.get('.modal-footer > .btn').click();
        })

        it('The button is disabled if data incorrect', ()=>{
            cy.get('#signupName').clear().type('A').blur();
            cy.get('#signupLastName').clear().type('A').blur();
            cy.get('#signupEmail').clear().type('a@gmail_com').blur();
            cy.get('#signupPassword').clear().type('123123123').blur();
            cy.get('#signupRepeatPassword').type('123123123').blur();
            cy.get('.modal-footer > .btn').should('be.disabled');
        })

        it('The button is disabled if fields are empty', ()=>{
            cy.get('.modal-footer > .btn').should('be.disabled');
        })
    })
})

describe ('Login on the website',()=>{

    it('Successful login',()=>{
        cy.login('marie1867curie@gmail.com','123Abcd123');
        cy.contains('You have been successfully logged in').should('be.visible');
    })
    
})

describe ('Check a password masking',()=>{

    it ('The password should be hidden in the logs',()=>{

        cy.visit('https://qauto.forstudy.space/',{
            auth : {
                username: 'guest' ,
                password: 'welcome2qauto'
                }
            });
        cy.contains('Sign In').should('be.visible').click();
        cy.get('#signinPassword').type('123Abcd123', { sensitive: true });
    })
})