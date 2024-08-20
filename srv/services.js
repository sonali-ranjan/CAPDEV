const cds = require('@sap/cds');

const logger = cds.log('Log');// to replace console.log

module.exports = cds.service.impl(function(){
    console.log("I'm in anonymous function 😉");
    const {Books} = cds.entities('BooksService');
    // this.on('READ', (req, next) => {
    //     logger("***************");
    //     return next(); //return is needed as arrow function here uses block statement
    // });

    this.after('READ', Books, (data, req) => {
        console.log(data);
        data.map(books => books.booksAvailable >= 1 ? books.inStock = true : books.inStock = false);
    })
})