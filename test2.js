describe('Проверка оформления заказа', function() {
    it('Один автотест', function() {
       cy.visit('https://testqastudio.me/');
       cy.get('.post-11096 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link').click();
       cy.get('.summary > [action="https://testqastudio.me/product/%d0%b1%d1%80%d0%be%d0%bc%d0%bc%d1%81-%d0%b4%d0%b2%d1%83%d1%85%d0%bc%d0%b5%d1%81%d1%82%d0%bd%d0%b0%d1%8f-%d0%ba%d1%80%d0%be%d0%b2%d0%b0%d1%82%d1%8c/"] > .product-button-wrapper > .quantity > .increase > svg').click();
       cy.get('.summary > [action="https://testqastudio.me/product/%d0%b1%d1%80%d0%be%d0%bc%d0%bc%d1%81-%d0%b4%d0%b2%d1%83%d1%85%d0%bc%d0%b5%d1%81%d1%82%d0%bd%d0%b0%d1%8f-%d0%ba%d1%80%d0%be%d0%b2%d0%b0%d1%82%d1%8c/"] > .product-button-wrapper > .quantity > .increase > svg').click();
       cy.get('.summary > [action="https://testqastudio.me/product/%d0%b1%d1%80%d0%be%d0%bc%d0%bc%d1%81-%d0%b4%d0%b2%d1%83%d1%85%d0%bc%d0%b5%d1%81%d1%82%d0%bd%d0%b0%d1%8f-%d0%ba%d1%80%d0%be%d0%b2%d0%b0%d1%82%d1%8c/"] > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
       cy.get('.woocommerce-breadcrumb > [href="https://testqastudio.me"]').click();
       cy.get('.post-11090 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link').click();
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg > [x1="6"]').click();
       cy.get('.header-right-items > .header-cart > a > .counter').click();
       cy.get('.woocommerce-mini-cart__buttons > [href="https://testqastudio.me/cart/"]').click();
       cy.get('.checkout-button').click();
       cy.get('#billing_first_name').type('Aaaa');
       cy.get('#billing_last_name').type('Bbbb');
       cy.get('#billing_address_1').type('Gagarina street 6');
       cy.get('#billing_city').type('Самара');
       cy.get('#billing_state').type('Самарская');
       cy.get('#billing_postcode').type('000000');
       cy.get('#billing_phone').type('+77777777777');
       cy.get('#billing_email').type('gluhova.arina@yandex.ru');
       cy.get('#place_order').click();
    })
})

