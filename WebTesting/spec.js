// Natthapat Wongsawatgul (6409610612)

// spec.js

// Random number for create PO number
const randomNum = Math.floor(Math.random() * 1000);

describe('Protractor test', function () {

    // Set Timeout
    var originalTimeout;
    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    it('Product Receipt Test', function () {
        browser.get('http://twms.twss.co.th:8080/twms-protractor/#/dashboard');

    // Log-in
        const user = 'consult';
        const pass = 'consult';
        browser.sleep(999);
        // Input Username
        element(by.id('i_username')).sendKeys(user).then(function () {
            console.log('Input Username : ' + user);
        });
        browser.sleep(555);
        // Input Password
        element(by.id('i_password')).sendKeys(pass).then(function () {
            console.log('Input Password : ' + pass);
        });
        browser.sleep(555);
        // Click Log-in
        element(by.css('button[class="btn btn-primary submit"]')).click().then(function () {
            console.log('Log-in success');
        });

    // Side bar inbound click
        // Click Menu
        element(by.id('menu_toggle')).click().then(function () {
            console.log('Open Menu');
        });
        browser.sleep(555);
        // Click Inbound
        element.all(by.css('i[class="fa fa-sign-in"]')).last().click().then(function () {
            console.log('Click Inbound');
        });
        browser.sleep(555);

        // CLick PO
        element(by.cssContainingText('a[href="#/purchaseorders"]', 'Purchase Order')).click().then(function () {
            console.log('Click Purchase Orders');
        });
        browser.sleep(555);

        // Close Side bar
        element.all(by.css('i[class="fa fa-sign-in"]')).last().click().then(function () {
            console.log('Close Tab Inbound');
        });
        browser.sleep(555);

        // Click "Add new record"
        element(by.id('i_create_item')).click().then(function () {
            console.log('Add new record');
        });
        browser.sleep(555);

    // Make PO
        element(by.css('span[aria-owns="i_client_listbox"]')).click().then(function () {
            console.log('Click client success');
        });
        browser.sleep(555);
        element.all(by.className("k-item ng-scope")).get(16).click().then(function () {
            console.log('Selected PTTOR Cafe AMAZON success');
        });
        browser.sleep(555);
        element(by.css('span[aria-owns="i_location_listbox"]')).click().then(function () {
            console.log('Click location success');
        });
        browser.sleep(555);
        element.all(by.className("k-item ng-scope k-state-selected k-state-focused")).get(2).click().then(function () {
            console.log('Selected ILS success');
        });
        browser.sleep(555);
        element(by.name('ref PO No.')).sendKeys('test-po-6409610612-' + randomNum).then(function () {
            console.log('Input test-po-6409610612-' + randomNum);
        });
        browser.sleep(555);
        element(by.name('PO No.')).sendKeys('test-po-6409610612-' + randomNum).then(function () {
            console.log('Input test-po-6409610612-' + randomNum);
        });
        element.all(by.className("k-icon k-i-calendar")).get(4).click().then(function () {
            console.log('Click icon PO Date Success');
        });
        browser.sleep(555);
        element.all(by.className("k-today k-state-focused")).get(0).click().then(function () {
            console.log('Click PO Date Success');
        });
        browser.sleep(555);
        element.all(by.className("k-icon k-i-calendar")).get(5).click().then(function () {
            console.log('Click icon Document Date Success');
        });
        browser.sleep(555);
        element.all(by.className("k-today k-state-focused")).get(1).click().then(function () {
            console.log('Click Document Date Success');
        });
        browser.sleep(555);
        element.all(by.className("k-icon k-i-calendar")).get(6).click().then(function () {
            console.log('Click icon Delivery Date Success');
        });
        browser.sleep(555);
        element.all(by.className("k-today k-state-selected k-state-focused")).get(2).click().then(function () {
            console.log('Click Delivery Date Success');
        });
        browser.sleep(555);
        element(by.id('i_supplier_code_insert')).sendKeys(100).then(function () {
            console.log('Input Supplier Code 100');
        });
        browser.sleep(999);
        element.all(by.className("k-item ng-scope")).get(21).click().then(function () {
            console.log('Selected Supplier Success');
        });
        browser.sleep(555);

    // Click "Add new record" to add Quantity
        element(by.id('i_create_line_item')).click().then(function () {
            console.log('Click Add new record');
        });
        browser.sleep(555);
        element(by.name('productcode')).sendKeys(100).then(function () {
            console.log('Input productCode 100');
        });
        browser.sleep(999);
        element.all(by.className("k-item")).get(55).click().then(function () {
            console.log('Selected productCode Success');
        });
        browser.sleep(555);
        element.all(by.className('k-formatted-value k-input k-valid')).sendKeys(6).then(function () {
            console.log('Input Quantity Completed');
        });
        element(by.className('k-button k-button-icontext k-primary k-grid-update')).click().then(function () {
            console.log('Click Update Success');
        });
        browser.sleep(555);

    // Save PO
        element(by.css('button[title="Save and confirm"]')).click().then(function () {
            console.log('Save & Confirm Success');
        });
        browser.sleep(999);
        var acceptAlert = protractor.ExpectedConditions;
        browser.wait(acceptAlert.alertIsPresent(), 999);
        browser.switchTo().alert().accept();


    // Click AA
        element.all(by.css('i[class="fa fa-sign-in"]')).last().click().then(function () {
            console.log('Open Inbound');
        });
        browser.sleep(555);
        element(by.cssContainingText('a[href="#/prearrivaladvises"]', 'Arrival Advices')).click().then(function () {
            console.log('Click menu Arrival Advices success');
        });
        browser.sleep(555);
        element(by.cssContainingText('span[class="k-link"]', 'Arrival Advice')).click().then(function () {
            console.log('Click tab Arrival Advices success');
        });
        browser.sleep(555);
        element.all(by.css('i[class="fa fa-sign-in"]')).last().click().then(function () {
            console.log('Close tab Inbound');
        });
        browser.sleep(555);

    // MAKE AA
        element(by.css('span[aria-owns="i_client_name_edit_listbox"]')).click().then(function () {
            console.log('Click Client success');
        });
        browser.sleep(555);
        element.all(by.className("k-item ng-scope")).get(55).click().then(function () {
            console.log('Selectd PTTOR Cafe AMAZON success');
        });
        browser.sleep(555);
        element(by.css('span[aria-owns="i_warehouse_edit_listbox"]')).click().then(function () {
            console.log('Click warehouse success');
        });
        browser.sleep(555);
        element.all(by.className("k-item ng-scope")).get(59).click().then(function () {
            console.log('Selected warehouse success');
        });
        browser.sleep(555);
        element(by.name('Doc No.')).sendKeys('test-aa-6409610612-' + randomNum).then(function () {
            console.log('Input Doc. No. test-aa-6409610612-' + randomNum);
        });
        browser.sleep(555);
        element.all(by.className("k-icon k-i-calendar")).get(3).click().then(function () {
            console.log('Click icon Document Date success');
        });
        browser.sleep(555);
        element.all(by.className("k-today k-state-focused")).get(3).click().then(function () {
            console.log('Click icon Document Date success');
        });
        browser.sleep(555);
        element(by.id("i_shipper_modal")).click().then(function () {
            console.log('Click icon find success');
        });
        browser.sleep(999);
        element(by.name("i_search_supplier_code_insert")).sendKeys('100003').then(function () {
            console.log('Input Supplier Code');
        });
        browser.sleep(555);
        element(by.name('SEARCH_insert')).click().then(function () {
            console.log('Search for Supplier Code');
        });
        browser.sleep(2555);
        element.all(by.className("glyphicon glyphicon-plus")).get(1).click().then(function () {
            console.log('Seletced Supplier success');
        });
        browser.sleep(555);
        element(by.id('create_add_po_item_btn')).click().then(function () {
            console.log('Click  Add product from PO success');
        });
        browser.sleep(555);
        element(by.id('i_refDocumentNo_search')).sendKeys('test-po-6409610612-' + randomNum).then(function () {
            console.log('Input PO No. test-po-6409610612-' + randomNum);
        });
        browser.sleep(555);
        element(by.name('b_po_search')).click().then(function () {
            console.log('Search success');
        });
        browser.sleep(2555);
        element.all(by.className("glyphicon glyphicon-plus")).get(1).click().then(function () {
            console.log('Click  icon + success');
        });
        browser.sleep(555);
        element(by.css('button[title="Save and confirm"]')).click().then(function () {
            console.log('Save & Confirm success');
        });
        browser.sleep(555);
        var acceptAlert = protractor.ExpectedConditions;
        browser.wait(acceptAlert.alertIsPresent(), 999);
        browser.switchTo().alert().accept();
        browser.sleep(555);

    // Click Product Receipt
        // Open Tab Inbound
        element.all(by.css('i[class="fa fa-sign-in"]')).last().click().then(function () {
            console.log('Open tab Inbound');
        });
        browser.sleep(555);
        // Click Product Receipt
        element.all(by.partialLinkText('Product Receipt')).first().click().then(function () {
            console.log('Click  Product Receipt success');
        });
        browser.sleep(555);
        // Close Tab Inbound
        element.all(by.css('i[class="fa fa-sign-in"]')).last().click().then(function () {
            console.log('Close tab Inbound');
        });
        browser.sleep(555);

    // Recieve Product
        // Input PO Number
        element(by.name('i_document_no_edit')).sendKeys('test-aa-6409610612-' + randomNum).then(function () {
            console.log('Input PO No. test-po-6409610612-' + randomNum);
        });
        browser.sleep(555);
        // Click Search button
        element(by.id('i_btn_search')).click().then(function () {
            console.log('Search success');
        });
        browser.sleep(555);
        // Click Icon List
        element.all(by.className('glyphicon glyphicon-list-alt')).first().click().then(function () {
            console.log('Click icon List');
        });
        browser.sleep(555);
        // Click Icon Receive
        element(by.id("i_button_receive")).click().then(function () {
            console.log('Click icon receive success');
        });
        browser.sleep(555);
        // Input Receive Quantity = 1
        element(by.className('k-input k-textbox')).sendKeys(1).then(function () {
            console.log('Input Receive Quantity = 1');
        });
        browser.sleep(555);
        // Click Icon Calendar (Round 1)
        element.all(by.className("k-icon k-i-calendar")).get(4).click().then(function () {
            console.log('Click Icon Calendar (Round 1)');
        });
        // Click Icon Calendar (Round 2)
        element.all(by.className("k-icon k-i-calendar")).get(4).click().then(function () {
            console.log('Click Icon Calendar (Round 2)');
        });
        // Selected Date
        element.all(by.className("k-state-focused")).get(12).click().then(function () {
            console.log('Selected Date success');
        });
        browser.sleep(555);
        // Click Save
        element(by.id('confirm_receive')).click().then(function () {
            console.log('Click Save success');
        });
        var acceptAlert = protractor.ExpectedConditions;
        browser.wait(acceptAlert.alertIsPresent(), 2555);
        browser.switchTo().alert().accept();
        browser.sleep(2555);
        // Click Confirm
        element(by.id("saveConfirm")).click().then(function () {
            console.log('Click CONFIRM success');
        });
        browser.sleep(555);
        // Click Status
        element(by.css("span[aria-owns='listStatus_listbox']")).click().then(function () {
            console.log('Click Status success');
        });
        browser.sleep(555);
        // Selected RECEIVE
        element.all(by.className("k-item ng-scope")).get(80).click().then(function () {
            console.log('Selected RECEIVE');
        });
        browser.sleep(555);
        // Click Search
        element(by.id('i_btn_search')).click().then(function () {
            console.log('Search success');
        });
        browser.sleep(555);
        // Click Icon List
        element.all(by.className('glyphicon glyphicon-list-alt')).first().click().then(function () {
            console.log('Click icon list');
        });
        browser.sleep(555);
        // Click Icon View
        element.all(by.className('k-button')).get(1).click().then(function () {
            console.log('Click icon view');
        });
        browser.sleep(555);
        // Click Icon Adjust
        element(by.css('button[title="Adjust"]')).click().then(function () {
            console.log('Click icon Adjust');
        });
        browser.sleep(2555);
        // Input Name
        element(by.id("i_customer_name")).sendKeys('Natthapat Wongsawatgul').then(function () {
            console.log('Input Name = Natthapat Wongsawatgul');
        });
        browser.sleep(555);
        // Input Telephone Number
        element(by.id("i_customer_tel")).sendKeys('9999').then(function () {
            console.log('Input Telephone Number = 9999');
        });
        browser.sleep(555);
        // Click Save
        element(by.id("saveAdjust")).click().then(function () {
            console.log('Save Success');
        });
        var acceptAlert = protractor.ExpectedConditions;
        browser.wait(acceptAlert.alertIsPresent(), 999);
        browser.switchTo().alert().accept();
        browser.sleep(2555);
        // Click Icon Back
        element(by.css('button[title="Back"]')).click().then(function () {
            console.log('Click icon Back');
        });
        browser.sleep(555);
        // Click Status
        element(by.css("span[aria-owns='listStatus_listbox']")).click().then(function () {
            console.log('Click Status success');
        });
        browser.sleep(555);
        // Selected COMPELTE
        element.all(by.className("k-item ng-scope")).get(83).click().then(function () {
            console.log('Selected COMPELTE');
        });
        browser.sleep(2555);
        // Click Search
        element(by.id('i_btn_search')).click().then(function () {
            console.log('Search Success');
        });
        browser.sleep(2555);

        // Check Status is COMPLETE?
        expect(element(by.className('label label-COMPLETED')).getText()).toEqual('COMPLETED');
        browser.sleep(2555);

    // Log out
        // Click User Profile Icon
        element.all(by.css('a[class="user-profile dropdown-toggle ng-binding"]')).click().then(function () {
            console.log('Click icon user profile success');
        });
        // Click Log-out
        element.all(by.css('i[class="fa fa-sign-out pull-right"]')).click().then(function () {
            console.log('Log out Success');
        });
        browser.sleep(555);

    });

});