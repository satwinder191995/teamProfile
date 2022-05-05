// Employee class starts here
const employee = require ("./employee");
class intern extends employee{
    constructor(name,id ,email,school)
    {
       
        super (name,id,email);
        this.title = "Intern";
        this.extra = "School"
        this.extraValue = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.extraValue;
    }
}

module.exports = intern;