const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");
const manager = require("./lib/manager");
const intern = require("./lib/intern");
const engineer = require("./lib/engineer");
const generateHtml = require("./utils/generateHtml")
const allMembers = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the team manager name",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter the manager name');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "empID",
            message: "Enter the manager employee ID ",
            validate: empIDInput => {
                if (empIDInput) {
                  return true;
                } else {
                  console.log('Please enter the manager employee ID');
                  return false;
                }
              }
            
        },
        {
            type: "input",
            name: "empEmail",
            message: "Enter the manger employee email address ",
            validate: empEmailInput => {
                if (empEmailInput) {
                  return true;
                } else {
                  console.log('Please enter the manager employee email address');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "empOfficeNum",
            message: "Enter the manager employee office number",
            validate: empOfficeNumInput => {
                if (empOfficeNumInput) {
                  return true;
                } else {
                  console.log('Please enter the manager office number');
                  return false;
                }
              }
        }

    ])
};

const addMember = (memberInfo) => {
    let extraInfo = "";
    let extraName = "";
    if (memberInfo === "Engineer"){
        extraInfo = "Github Username";
        extraName = "github";
    }else if(memberInfo === "Intern"){
        extraInfo = "School name";
        extraName = "school";
    }else {
        extraInfo = "exit"
    }
    inquirer.prompt([
        {
        type: "input",
        name: "memberName",
        message: `Enter the ${memberInfo} members name `,
        validate: memberNameInput => {
            if (memberNameInput) {
              return true;
            } else {
              console.log(`Please enter the ${memberInfo} members name`);
              return false;
            }
          }
        },
        {
            type: "input",
            name: "memberId",
            message: `Enter the ${memberInfo} members Id `,
            validate: memberIdInput => {
                if (memberIdInput) {
                  return true;
                } else {
                  console.log(`Please enter the ${memberInfo} members Id`);
                  return false;
                }
              }
            },
            {
                type: "input",
                name: "memberEmail",
                message: `Enter the ${memberInfo} member email `,
                validate: memberEmailInput => {
                    if (memberEmailInput) {
                      return true;
                    } else {
                      console.log(`Please enter the ${memberInfo} member email`);
                      return false;
                    }
                  }
                },
                {
                    type: "input",
                    name: memberInfo,
                    message: `Enter the ${memberInfo} member ${extraInfo} `,
                    validate: extraInfoInput => {
                        if (extraInfoInput) {
                          return true;
                        } else {
                          console.log(`Please enter the ${memberInfo} member ${extraInfo}`);
                          return false;
                        }
                      }
                    },

    ]).then(value  => {
      var {memberName,memberId,memberEmail} = value;
  let employee;
  if( value.Engineer){
  employee = new engineer (memberName,memberId,memberEmail,value.Engineer);
   allMembers.push(employee);
  }else if (value.Intern){
    employee = new intern (memberName,memberId,memberEmail,value.Intern);
   allMembers.push(employee);
  }else {
  }
    memberType();

    }
    )
};
const writeFile = data => {
  return new Promise((resolve ,reject) => {
    fs.writeFile('./dist/teamProfile.html',data, err => {
      if (err){
        reject(err);
        return;
      }
      resolve({
        ok:true,
        message:'File created!'
      })
    })
  })
}

const memberType = () =>{
  inquirer.prompt([
     {
         // type: "list",
         type:"list",
         name: "memberInfo",
         message: "addMember",
         choices: [
          "Engineer",
          "Intern",
          "Finish building by team"
         ]
     }
 ]).then(data => {
   var {memberInfo} =data;
   if (memberInfo === "Finish building by team"){
     fileData =  generateHtml(allMembers);
     return writeFile(fileData)

   }else if(memberInfo === "Engineer" || memberInfo === "Intern"){
     addMember(memberInfo);
   }else{
    return writeFile(fileData)
   }
 })
 };



function init(){
promptUser()
.then(answers => {
  var{name , empID ,empEmail,empOfficeNum} = answers;
  let employee ;
  employee = new manager(name,empID,empEmail,empOfficeNum);
  allMembers.push(employee);
memberType();
})


}



init();
