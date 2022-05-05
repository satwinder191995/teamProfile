// Manager class starts here
const employee = require ("./employee");
class manager extends employee{
    constructor(name,id ,email,office)
    {
        super (name,id,email);
        this.title = "Manager";
        this.extra = "Office Number"
        this.extraValue = office;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.extraValue;
    }
    
}

module.exports = manager;