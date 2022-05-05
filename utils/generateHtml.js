function extras (extraInfo , extraInfoVal){
    if (extraInfo === "Github"){
        return `<li class="list-group-item">${extraInfo}: <a href="https://github.com/${extraInfoVal}">${extraInfoVal}</a></li>`;
    }else{
        return `<li class="list-group-item">${extraInfo}:${extraInfoVal}</li>`;
    }
}
function generateHtml(team){
  var data = team.map(element =>   `
        <div class="col-12 col-md-6 col-lg-4 mb-5 ">
            <div class="card mx-auto mr-3 text-white" style="width: 18rem">
            <h5 class="card-header bg-primary">${element.name}<br /><br />${element.title}</h5>
            <ul class="list-group list-group-flush text-dark">
                <li class="list-group-item">ID: ${element.id}</li>
                <li class="list-group-item">Email Address: <a href="mailto:${element.email}">${element.email}</a></li>
                ${extras(element.extra,element.extraValue)}
            </ul>
            </div>
        </div>
    `);
    return`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" >
                <title>Team Profile</title>
            </head>
            <body>
            <header class="bg-danger mb-5 text-center text-white "><h1>Team Profile</h1></header>
                <div class="container">
                    <div class="row">
                    ${data.join(' ')}
                </div>
            </body>
            </html>
            `;
}

module.exports = generateHtml;
