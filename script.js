
function loadHome(){

    var table = document.getElementById("tabela-corpo");
    getData().data.forEach(item => {

        var newRow = `<tr class="table-style" onclick="loadCard(event)">
                    <th scope="row">${item.edition}</th>
                    <td>${item.winner}</td>
                    <td>${item.coach}</td>
                    <td class="text-center"><img src="${item.winnerImage}" alt="" height="${item.tableImageHeight}" width="${item.tableImageWidth}"></td>
                    <td class="text-center"><img src="${item.viceImage}" alt="" height="${item.viceTableImageHeight}" width="${item.viceTableImageWidth}"></td>
                </tr>`
                table.insertAdjacentHTML('beforebegin', newRow);
    })
}


function loadCard(event){

    var dataLenght = getData().data.length;
    var currentClickedRowEdition = event.path[1].getElementsByTagName('th')[0].innerText
    var info = getData().data[(dataLenght - currentClickedRowEdition)];


    var card = 
    `<div class="card card-style" style="width: 22rem;">
    <img src="${info.winnerImage}" height="${info.bigImageHeight}" width="${info.bigImageWidth}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title text-center">${info.winner}</h5>
    </div>
    <ul class="list-group">
      <li class="list-group-item table-card"> 
        <span style="color: #ab85db;">Vice Campeão:</span> 
        ${info.vice}
        <td class="text-center"><img src="${info.viceImage}" alt="" height="30" width="30"></td>
      </li>
      <li class="list-group-item table-card"> 
        <span style="color: #ab85db;">Artilheiro:</span> 
        ${info.bestScorer}
        <td class="text-center"><img src="${info.bestScorerClubImage}" alt="" height="30" width="30"></td>
      </li>
      <li class="list-group-item table-card">  
        <span style="color: #ab85db;">Assistências:</span> 
        ${info.bestAssistant}
        <td class="text-center"><img src="${info.bestAssistantClubImage}" alt="" height="30" width="30"></td>
      </li>
      <li class="list-group-item table-card"> 
        <span style="color: #ab85db;">Treinador:</span> 
        ${info.coach}
      </li>
    </ul>
  </div>`

  var cardSpace = document.getElementById("cardSpace");
  
  cardSpace.replaceChildren();
  cardSpace.insertAdjacentHTML('afterbegin', card);

}



function getData(){
    return {
        data: [
            {
                edition: 5,
                winner: "PSG",
                vice: "Chelsea",
                coach: "Mauricio Pocchetino",
                winnerImage: "./assets/img/escudos-small/Paris_Saint-Germain_F.C..svg",
                tableImageHeight: 30,
                tableImageWidth: 30,
                bigImageHeight: 200,
                bigImageWidth: 200,
                viceImage: "./assets/img/escudos-small/Chelsea_FC.svg",
                viceTableImageHeight: 30,
                viceTableImageWidth: 30,
                bestScorer: "Lukaku",
                bestScorerClubImage: "./assets/img/escudos-small/Chelsea_FC.svg",
                bestAssistant: "Verrati",
                bestAssistantClubImage: "./assets/img/escudos-small/Paris_Saint-Germain_F.C..svg",
            },
            {
                edition: 4,
                winner: "Bayern München",
                vice: "Borussia Dortmund",
                coach: "Pep Guardiola",
                winnerImage: "./assets/img/escudos-small/Logo_FC_Bayern_München_(2002–2017).svg",
                tableImageHeight: 30,
                tableImageWidth: 30,
                bigImageHeight: 200,
                bigImageWidth: 200,
                viceImage: "./assets/img/escudos-small/Borussia_Dortmund_logo.svg",
                viceTableImageHeight: 30,
                viceTableImageWidth: 30,
                bestScorer: "Arjen Robben",
                bestScorerClubImage: "./assets/img/escudos-small/Logo_FC_Bayern_München_(2002–2017).svg",
                bestAssistant: "N/A",
                bestAssistantClubImage: "./assets/img/placeholderna.jpg"
            },
            {
                edition: 3,
                winner: "Milan",
                vice: "Manchester United",
                coach: "Victor Nascimento",
                winnerImage: "./assets/img/escudos-small/ac-milan.svg",
                tableImageHeight: 30,
                tableImageWidth: 30,
                bigImageHeight: 200,
                bigImageWidth: 100,
                viceImage: "./assets/img/escudos-small/Manchester_United_FC_crest.svg",
                viceTableImageHeight: 30,
                viceTableImageWidth: 30,
                bestScorer: "N/A",
                bestScorerClubImage: "./assets/img/placeholderna.jpg",
                bestAssistant: "N/A",
                bestAssistantClubImage: "./assets/img/placeholderna.jpg"
            },
            {
                edition: 2,
                winner: "Liverpool",
                vice: "Bayern München",
                coach: "Brendan Rogers",
                winnerImage: "./assets/img/escudos-small/Liverpool_FC.svg",
                tableImageHeight: 30,
                tableImageWidth: 30,
                bigImageHeight: 200,
                bigImageWidth: 200,
                viceImage: "./assets/img/escudos-small/Logo_FC_Bayern_München_(2002–2017).svg",
                viceTableImageHeight: 30,
                viceTableImageWidth: 30,
                bestScorer: "N/A",
                bestScorerClubImage: "./assets/img/placeholderna.jpg",
                bestAssistant: "N/A",
                bestAssistantClubImage: "./assets/img/placeholderna.jpg"
            },
            {
                edition: 1,
                winner: "Lazio",
                vice: "Manchester United",
                coach: "Eduardo da Silva",
                winnerImage: "./assets/img/escudos-small/SS_Lazio.svg",
                tableImageHeight: 30,
                tableImageWidth: 50,
                bigImageHeight: 200,
                bigImageWidth: 200,
                viceImage: "./assets/img/escudos-small/Manchester_United_FC_crest.svg",
                viceTableImageHeight: 30,
                viceTableImageWidth: 30,
                bestScorer: "N'Doye",
                bestScorerClubImage: "./assets/img/escudos-small/FC_Copenhagen_logo.svg",
                bestAssistant: "N/A",
                bestAssistantClubImage: "./assets/img/placeholderna.jpg"
            }
        ]
    }
}