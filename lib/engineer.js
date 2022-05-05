// Engineer class starts here
const employee = require ("./employee");
class engineer extends employee{
    constructor(name,id ,email,github)
    {
        super (name,id,email);
        this.title = "Engineer";
        this.extra = "Github";
        this.extraValue = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.extraValue;
    }
}

module.exports = engineer;