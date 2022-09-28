
function loadHome(){

    var table = document.getElementById("tabela-corpo");
    getData().data.forEach(item => {

        var newRow = `<tr class="table-style" onclick="changeFocusChampion(event)">
                    <th scope="row">${item.edition}</th>
                    <td>${item.winner}</td>
                    <td>${item.coach}</td>
                    <td class="text-center"><img src="${item.winnerImage}" alt="" height="30" width="50"></td>
                    <td class="text-center"><img src="${item.viceImage}" alt="" height="30" width="50"></td>
                </tr>`
                table.insertAdjacentHTML('beforebegin', newRow);
    })
}



function getData(){
    return {
        data: [
            {
                edition: 5,
                winner: "PSG",
                vice: "Chelsea",
                coach: "Eduardo da Silva",
                winnerImage: "./assets/img/escudos-small/Paris_Saint-Germain_F.C..svg",
                viceImage: "./assets/img/escudos-small/Chelsea_FC.svg",
                bestScorer: "N'Doye",
                bestScorerClubImage: "./assets/img/escudos-small/FC_Copenhagen_logo.svg",
                bestAssistant: "N/A",
                bestAssistantClubImage: "",
            },
            {
                edition: 4,
                winner: "Bayern München",
                vice: "Borussia Dortmund",
                coach: "Pep Guardiola",
                winnerImage: "./assets/img/escudos-small/Logo_FC_Bayern_München_(2002–2017).svg",
                viceImage: "./assets/img/escudos-small/Borussia_Dortmund_logo.svg",
                bestScorer: "N'Doye",
                bestScorerClubImage: "./assets/img/escudos-small/FC_Copenhagen_logo.svg",
                bestAssistant: "N/A",
                bestAssistantClubImage: ""
            },
            {
                edition: 3,
                winner: "Milan",
                vice: "Manchester United",
                coach: "Victor Nascimento",
                winnerImage: "./assets/img/escudos-small/Logo_of_AC_Milan.svg",
                viceImage: "./assets/img/escudos-small/Manchester_United_FC_crest.svg",
                bestScorer: "N'Doye",
                bestScorerClubImage: "./assets/img/escudos-small/FC_Copenhagen_logo.svg",
                bestAssistant: "N/A",
                bestAssistantClubImage: ""
            },
            {
                edition: 2,
                winner: "Liverpool",
                vice: "Bayern München",
                coach: "Brendan Rogers",
                winnerImage: "./assets/img/escudos-small/Liverpool_FC.svg",
                viceImage: "./assets/img/escudos-small/Logo_FC_Bayern_München_(2002–2017).svg",
                bestScorer: "N'Doye",
                bestScorerClubImage: "./assets/img/escudos-small/FC_Copenhagen_logo.svg",
                bestAssistant: "N/A",
                bestAssistantClubImage: ""
            },
            {
                edition: 1,
                winner: "Lazio",
                vice: "Manchester United",
                coach: "Eduardo da Silva",
                winnerImage: "./assets/img/escudos-small/SS_Lazio.svg",
                viceImage: "./assets/img/escudos-small/Manchester_United_FC_crest.svg",
                bestScorer: "N'Doye",
                bestScorerClubImage: "./assets/img/escudos-small/FC_Copenhagen_logo.svg",
                bestAssistant: "N/A",
                bestAssistantClubImage: ""
            }
        ]
    }
}