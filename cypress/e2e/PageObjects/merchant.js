/* eslint-disable cypress/no-unnecessary-waiting */
class Merchants{


    //customer
    customertab = "//li[@class='sidebar__nav__item']//a[@class='sidebar__nav__item__link'][normalize-space()='Customers']" //xpath
    addcustomerbtn = "//button[normalize-space()='Add Customer']"
    firstNameField = "#first_name"
    lastnameField = "#last_name"
    emailFields = "input[placeholder='@yourmail.com']"
    inputphonenumber = "input[placeholder='Your/ Your Business contact number']"
    addressone = "#address_one"
    cityField = "#city"
    city = "Lagos"
    countryField = "input[id*='react-select'][id*='input']"
    stateField = "//div[contains(@class,'form-group-select__value-container css-hlgwow')]"
    Addcustomer = "//button[contains(@type,'submit')][normalize-space()='Add Customer']"
    //users
    usertab = "//a[@href='/Users/all'][normalize-space()='Users']" ///xpath
    adduserbtn = "//button[normalize-space()='Add User']" //xpath
    emailField = "input[placeholder='Type Here']"
    chooseuserroles = "//div[@class='form-group-select__input-container css-19bb58m']"
    adduser = "button[type='submit']"
    //payouts
    payoutBtn= "//li[@class='sidebar__nav__item']//a[@class='sidebar__nav__item__link'][normalize-space()='Payout']"
    ViewPayoutInformation= "//tbody/tr[1]/td[1]"
    payoutInfo= "//div[@class='info__section ']"

    usercreation(){
        cy.wait(50000)
        cy.xpath(this.usertab).click()
        cy.xpath(this.adduserbtn).click()
        const email = generateEmail();
        cy.get(this.emailField).type(email)
        function generateEmail() {
        const domains = ['blusalt.com'];
        const name = Math.random().toString(36).substring(2, 10); // random string
        const domain = domains[Math.floor(Math.random() * domains.length)];
        return `${name}@${domain}`;
        }
        console.log(this.emailinput); // e.g. abcd1234@mailinator.com
        cy.xpath(this.chooseuserroles).click()
        cy.get('.form-group-select--is-multi__option, .css-10wo9uf-option')
        .first()
        .click({ force: true });
        cy.get(this.adduser).click()
        cy.contains('New Customer Added').should('be.visible')
    }

    customercreation(){
        cy.wait(4000)
        cy.xpath(this.customertab).click()
        cy.xpath(this.addcustomerbtn).click()
        const firstNames = ['John', 'Grace', 'Chinonso', 'Elijah', 'Ada', 'David'];
        const lastNames = ['Okafor', 'Smith', 'Johnson', 'Bello', 'Taylor', 'Ogunleye'];
        const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
        const firstName = getRandomItem(firstNames);
        const lastName = getRandomItem(lastNames);
        cy.log(`Random Full Name: ${firstName} ${lastName}`);
        cy.get(this.firstNameField).type(firstName)
        cy.get(this.lastnameField).type(lastName)
        const email = generateEmail();
        cy.get(this.emailFields).type(email)
        function generateEmail() {
        const domains = ['blusalt.com'];
        const name = Math.random().toString(36).substring(2, 10); // random string
        const domain = domains[Math.floor(Math.random() * domains.length)];
        return `${name}@${domain}`;
        }
        console.log(this.emailinput); // e.g. abcd1234@mailinator.com
        const phone = generatePhoneNumber();
        cy.get(this.inputphonenumber).type(phone)
        function generatePhoneNumber() {
        const prefixes = ['070', '080', '081', '090', '091'];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const number = Math.floor(10000000 + Math.random() * 90000000); // 8-digit suffix
        return prefix + number;
        }
       console.log(this.Phonenuminput); // e.g. 08123456789
        cy.get(this.addressone).type('Yelena, Lagos State, Nigeria.')
        cy.get(this.cityField).type(this.city)
        cy.wait(2000)
        cy.contains('Country')
           .parent()
           .find('input')
           .type('Nigeria')
        cy.contains('[role="option"]', 'Nigeria').click()
        cy.xpath(this.stateField, { timeout: 20000 })
          .click()
          .type('Lagos')
        cy.contains('[role="option"]', 'Lagos').click()
        cy.xpath(this.Addcustomer).click()
        cy.contains('New Customer added').should('be.visible')
    }

    payoutPage(){
        cy.xpath(this.payoutBtn).click()
        cy.xpath(this.ViewPayoutInformation).click()
        cy.xpath(this.payoutInfo).should('be.visible')
        

        


    }
}

export default Merchants
