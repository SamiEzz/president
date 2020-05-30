const onglets = document.querySelectorAll('.nav-item');

function getMyStackHTML(){
    var numberOfCard = 5;
    var cards = ["2.ca","2.co","2.tr","jo","5.co"];
    var htmlHead= "<nav class='nav nav-pills nav-justified'>";
    var htmlFooter= "</nav><h5 class='card-title'>Select cards</h5>   <p class='card-text'></p>   <a href='#' class='btn btn-primary'>Throw</a>";
    var htmlBody= "";
    var html = "";
    html=html.concat(htmlHead);
    for (let index = 0; index < cards.length; index++) {
        const element = cards[index];
        var dotindex = element.indexOf(".");
        var number = element.slice(0,dotindex);
        var symbol = element.slice(dotindex+1,element.length); 
        /**
         * HTML Body
         */
        htmlBody=htmlBody.concat("<div class='card' style='display:inline-block'><a class='nav-item nav-link' href='#'>");
        htmlBody=htmlBody.concat(number);
        htmlBody=htmlBody.concat("<br><img style='height:100px' src='img/cards/");
        htmlBody=htmlBody.concat(symbol);
        htmlBody=htmlBody.concat(".png'><br>");
        htmlBody=htmlBody.concat(number);
        htmlBody=htmlBody.concat("</a></div>");
        /*
        htmlBody=htmlBody.concat("<a class='nav-item nav-link' href='#'>");
        htmlBody=htmlBody.concat(number);
        htmlBody=htmlBody.concat("<br><img style='width:150px' src='img/cards/");
        htmlBody=htmlBody.concat(symbol);
        htmlBody=htmlBody.concat(".png'></a>");
        */
        
    }
    html=html.concat(htmlBody);
    html=html.concat(htmlFooter);
    //console.log(html);
    return html;
}

function getHistoryOfActionsHTML(){
    //this.classList.toggle("active");
    var tableStack = [["2.pi"],["9.ca","9.co","9.tr"],["10.ca","10.co","10.tr"],["2.ca","2.co","2.tr"]];
    tableStack = tableStack.reverse();
    var numberOfActions = tableStack.length;
    
    
    var html = "";
    for (let index = 0; index < tableStack.length; index++) {
        var htmlHead= "<div class='col'>";
        var htmlFooter= "</div>";
        var htmlBody= "";
        html=html.concat(htmlHead);
        for (let jndex = 0; jndex < tableStack[index].length; jndex++) {
            
            const element = tableStack[index][jndex];
            var dotindex = element.indexOf(".");
            var number = element.slice(0,dotindex);
            var symbol = element.slice(dotindex+1,element.length); 
            
            htmlBody=htmlBody.concat("<div class='card' style='display:inline-block'><a class='' href='#'>");
            htmlBody=htmlBody.concat(number);
            htmlBody=htmlBody.concat("<br><img style='width:50px' src='img/cards/");
            htmlBody=htmlBody.concat(symbol);
            htmlBody=htmlBody.concat(".png'></a></div>");
        }
        html=html.concat(htmlBody);
        html=html.concat(htmlFooter);
        
    }
    //console.log(html);
    
    return html;
}

function activateNavItem(){
    onglets.forEach(onglet => onglet.classList.remove("active"));
    this.classList.toggle("active");
    console.log("clicked");
}
onglets.forEach(onglet => onglet.addEventListener('click',activateNavItem));
