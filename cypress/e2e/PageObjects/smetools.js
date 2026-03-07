import { faker } from "@faker-js/faker"

/* eslint-disable cypress/no-unnecessary-waiting */
class Smetools{

    // invoice
    invoicetab = "//a[@href='/invoice/all'][normalize-space()='Invoice']" //xpath
    crreateinvoicebtn = "//span[normalize-space()='Create Invoice']" //xpath
    selectcutomer = "//div[@id='customer']//div[@class='form-group-select__input-container css-19bb58m']" //xpath
    issuedate = "input[placeholder='Pick Date'][name='issued_date']"
    selecttoday = ".react-datepicker__today-button"
    paymentdue = "input[placeholder='Pick Date'][name='due_date']"
    descriptionField = "#description"

    //product
    createproductbtn = "//span[normalize-space()='Create Products']" //xpath
    nameField = "#name"
    description = "testing"
    amountField = "#amount"
    amount = "50000"
    goods = "#true"
    addproducerbtn = "//button[normalize-space()='Add Product']" //xpath

    //subscription
    subscriptiontab = "//li[@class='sidebar__nav__item']//a[@class='sidebar__nav__item__link'][normalize-space()='Subscription']"
    createsubscriptionbtn = "//button[normalize-space()='Create Subscription']" //xpath
    plandropdown = "//div[@id='plan']//div[contains(@class,'form-group-select__input-container css-19bb58m')]" //xpath
    customrrdetails = "//body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/div[2]/div[1]/form[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]" //xpath
    createsubscription = "//button[contains(@type,'submit')][normalize-space()='Create Subscription']" //xpath
    
    //plans
    planstab = "//div[@role='tablist']//a[normalize-space()='Plans']" //xpath
    createplanbtn = "//button[normalize-space()='Create Plan']" //xpath
    plannameField = "input[placeholder='Create a name for your plan']"
    createplan = "//button[@type='submit'][normalize-space()='Create Plan']"     //xpath

    //tax
    taxtab = "//body/div[@id='root']/div[@id='app-container']/div/div/section/div/div/div/div/div[3]/a[1]"
    createtaxbtn = '//button[normalize-space()="Create Tax"]'
    taxnameField = "#name"
    country = "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)"
    taxrate = "#rate"
    rate ="29"
    taxvariant = '//div[contains(@class,"col-12 pb-5")]//div[contains(@class,"form-group-select__input-container css-19bb58m")]'
    createtax = '//button[contains(@type,"submit")][normalize-space()="Create Tax"]' //xpath

    //coupon
    coupontab = "//div[@role='tablist']//a[normalize-space()='Coupon']"
    createcouponbtn = "//span[normalize-space()='Create Coupon']"
    chooseproducts = "//div[@class='form-group-select--is-multi__input-container css-19bb58m']"
    couponcode = "//div[@class='flex__start input-wrapper ']//input[@id='couponCode']"
    numberavail = "//input[@id='numberAvailable']"
    startdate = "//input[@name='startDate']"
    enddate = "//input[@name='endDate']"
    discountvalue = "//input[@id='discountValue']"
    todaycolumn = "//div[@class='react-datepicker__today-button']"
    createcoupon = "//button[contains(text(),'Create Coupon')]"

    //storefrontproducts
    storefronttab = "//a[@href='/storefront/online'][normalize-space()='Storefront']" //xpath
    productstab = "//a[@aria-current='page'][normalize-space()='Products']" //xpath
    adddproductsbtn = "//button[normalize-space()='Add Product']" //xpath
    catergorydropdown = "div[id='category'] div[class='form-group-select__value-container css-hlgwow']"
    stocksField = "#stocks"
    stocks = "30"
    taxField = "div[id='TaxId'] div[class='form-group-select__value-container css-hlgwow']"
    createproducts = "button[class='btn btn--sm btn--complementary-5 px-3'] span"
   

    Invoicecreation(){
        cy.wait(4000)
        cy.xpath(this.invoicetab).click()
        cy.wait(3000)

    }

    addprducts(){
        cy.wait(4000)
        cy.xpath(this.invoicetab).click()
        cy.wait(3000)
        cy.xpath("//div[@role='tablist']//a[normalize-space()='Products']").click()
        cy.xpath(this.createproductbtn).click()
        const productName = faker.commerce.productName();
        cy.get(this.nameField).type(productName)
        cy.get(this.descriptionField).type(this.description)
        cy.get(this.amountField).type(this.amount)
        cy.get(this.goods).click()
        cy.get('input[type="file"][accept="image/*"]').attachFile('FRAGRANCE BY ELLA.jpg');
        cy.xpath(this.addproducerbtn).click()
        //cy.contains('New Product Added').should('be.visible')
    }

    subscriptioncreation(){
        cy.wait(5000)
        cy.xpath(this.subscriptiontab).click()
        cy.wait(4000)
        cy.xpath(this.createsubscriptionbtn).click()
        cy.xpath(this.plandropdown).click()
        cy.contains('just').click()
        cy.xpath(this.customrrdetails).click()
        cy.get('.form-group-select--is-multi__option, .css-10wo9uf-option')
        .first()
        .click({ force: true });
        cy.contains('tst').click()
        cy.xpath(this.createsubscription).click()
        cy.contains('Subscription Successful!').should('be.visible')
    } 

    plancreation(){
        cy.xpath(this.subscriptiontab).click()
        cy.wait(4000)
        cy.xpath(this.planstab).click()
        cy.xpath(this.createplanbtn).click()
        cy.get(this.plannameField).type(faker.commerce.productName())
        cy.get(this.descriptionField).type(this.description)
        cy.get(this.amountField).type(this.amount)
        cy.xpath('//input[@id="subscription_type"]').click()
        cy.get('[role="option"]').contains('One Off').click()
        cy.xpath("//body/div/div/div[contains(@role,'dialog')]/div[contains(@role,'document')]/div/section/div/div[@id='modal--main-section']/form/div/div[5]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]").click()
        cy.get('[role="option"]').contains('Daily').click()
        cy.xpath(this.createplan).click()
        //cy.contains('Plan Created!').should('be.visible')
    }

    taxcreation(){
        cy.wait(4000)
        cy.xpath(this.subscriptiontab).click()
        cy.wait(4000)
        cy.xpath(this.taxtab).click()
        cy.xpath(this.createtaxbtn).click()
        cy.get(this.taxnameField).type('tefere')
        cy.get(this.country).click()
        cy.wait(2000)
        cy.get('.form-group-select--is-multi__option, .css-10wo9uf-option')
        .first()
        .click({ force: true });
        cy.get(this.taxrate).type(this.rate)
        cy.xpath(this.taxvariant).click()
        cy.get('.form-group-select--is-multi__option, .css-10wo9uf-option')
        .first()
        .click({ force: true });
        cy.xpath(this.createtax).click()
        //cy.contains('Tax Created!').should('be.visible')
    }

    couponcreation(){
        cy.wait(4000)
        cy.xpath(this.subscriptiontab).click()
        cy.wait(4000)
        cy.xpath(this.coupontab).click()
        cy.xpath(this.createcouponbtn).click()
        cy.xpath(this.chooseproducts).click()
        cy.wait(2000)
        cy.contains('hen').click()
        const coupon = faker.string.alphanumeric(8).toUpperCase(); // e.g., 'A1B2C3D4'
        cy.xpath(this.couponcode).type(coupon)
        cy.xpath(this.numberavail).type('40')
        cy.xpath(this.startdate).click()
        cy.xpath(this.todaycolumn).click()
        cy.xpath(this.discountvalue).type('500')
        cy.xpath(this.createcoupon).click()
        cy.contains('Coupon Created!').should('be.visible')
    }

    productcreation(){
        cy.wait(4000)
        cy.xpath(this.storefronttab).click()
        cy.wait(4000)
        cy.get('div[role="tablist"] a[href="/storefront/products"]').click();
        cy.xpath(this.adddproductsbtn).click()
        cy.xpath('//input[@id="category-input"]').click()
        cy.contains('HOLA').click()
        
        cy.get(this.descriptionField).type(this.description)
        cy.get(this.stocksField).type(this.stocks)
        cy.get(this.taxField).click()
        cy.get('.form-group-select--is-multi__option, .css-10wo9uf-option')
        .first()
        .click({ force: true });
        cy.get(this.createproducts).click()
    }
    


}


export default Smetools
