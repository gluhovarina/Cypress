describe('Проверка формы логина', function(){
    it('Позитивный тест-кейс: верный логин, верный пароль', function(){
        cy.visit ('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').click();
    })

    it('Проверка логики восстановления пароля', function(){
        cy.reload();
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('aaaa@aaaa.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').click();
    })


    it('Негативный тест-кейс: верный логин, неверный пароль', function(){
        cy.visit ('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();
    })

    it('Негативный тест-кейс: неверный логин, верный пароль', function(){
        cy.visit ('https://login.qa.studio/');
        cy.get('#mail').type('aaaa@aaaa.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();
    })

    it('Негативный тест-кейс: невалидный логин, верный пароль', function(){
        cy.visit ('https://login.qa.studio/');
        cy.get('#mail').type('aaaaaaaa.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').click();
    })

    it('Позитивный тест-кейс: привидение к строчным буквам в логине', function(){
        cy.visit ('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').click();
    })

})



