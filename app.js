const player1 = ["Lionel Messi", "Cristiano Ronaldo", "Neymar", "Kylian Mbappé", "Mohamed Salah", "Robert Lewandowski", "Kevin De Bruyne", "Virgil van Dijk", "Jan Oblak", "Manuel Neuer", "N'Golo Kanté", "Harry Kane", "Sadio Mané", "Karim Benzema", "Joshua Kimmich", "Toni Kroos", "Alisson Becker"];
const player1_img = ["https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-23/ratings/common/player-headshots/158023.png", "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-23/ratings/common/player-headshots/20801.png", "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-23/ratings/common/player-headshots/190871.png", "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-23/ratings/common/player-headshots/231747.png", "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-23/ratings/common/player-headshots/209331.png", "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-23/ratings/common/player-headshots/188545.png", "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-23/ratings/common/player-headshots/192985.png", "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-23/ratings/common/player-headshots/203376.png", "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-23/ratings/common/player-headshots/200389.png", "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-23/ratings/common/player-headshots/167495.png","https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-23/ratings/common/player-headshots/215914.png","https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-23/ratings/common/player-headshots/202126.png","https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-23/ratings/common/player-headshots/208722.png","https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-23/ratings/common/player-headshots/165153.png","https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-23/ratings/common/player-headshots/212622.png","https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-23/ratings/common/player-headshots/182521.png", "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-23/ratings/common/player-headshots/212831.png"];
let club = [];
let club_name = "club";
let player;
let player_liste = 1;
let club_players = 0;
let credits = 100000000000000000000000;
const pack1_cred = 2500;
document.getElementById("ncred").innerHTML=credits;
let player_img = document.getElementById("img_player");
let pack_div = document.getElementById("pack");
let main = document.getElementById("main");
let club_container = document.getElementById("club_container");
let stock_cl = document.getElementById("stock_cl");
let perso_container = document.getElementById("perso_container");
let image_select = document.getElementById("image_select");
let selected_image = document.getElementById("selected_image");
let club_p = document.getElementById("club_name");

function openPack(pack) {
    min = Math.ceil(0);
    if (pack === 1 && credits >= pack1_cred){
        credits -= pack1_cred;
        max = Math.floor(player1.length);
        player_liste = 1;
        playerIndex = Math.floor(Math.random() * (max - min)) + min;
        player = player1[playerIndex];
        imgUrl = player1_img[playerIndex];
        player_img.src = imgUrl;
        pack_div.style.display = "flex";
        main.style.display = "none";
        stock_cl.style.display = "block";
        perso_container.style.display = "none";
    }
    document.getElementById("ncred").innerHTML=credits;
}

function vente_rapide(){
    credits += 2500;
    document.getElementById("ncred").innerHTML=credits;
    pack_div.style.display = "none";
    main.style.display = "block";
    club_players -=1;
    document.querySelector(`#club li[data-value="${pl}"]`).remove();
}

function stocker_club(){
    club.push([player_liste, playerIndex])
    pack_div.style.display = "none";
    main.style.display = "block";
    club_players +=1;
}

function manage_player(pl){
    player_img.src = pl;
    pack_div.style.display = "flex";
    main.style.display = "none";
    club_container.style.display = "none";
    stock_cl.style.display = "none";
    perso_container.style.display = "none";
}

function show_club(){
    while (club_container.firstChild) {
        club_container.removeChild(club_container.firstChild);
      }
    pack_div.style.display = "none";
    main.style.display = "none";
    club_container.style.display = "block";
    stock_cl.style.display = "none";
    perso_container.style.display = "none";
    let pimg;
    let i =-1;
    while (i <= club.length){
        i +=1
        if (club[i][0] === 1){
            pimg =document.createElement("img")
            pimg.setAttribute('src', player1_img[club[i][1]])
            pimg.setAttribute('onclick','manage_player(pimg.src);'); 
            pimg.onclick = function() {manage_player(this.src);}; 
            pimg.style.width = "91px";
            pimg.style.height = "144px";
            club_container.appendChild(pimg);
        }
        
    }
}

function retour_menu(){
    pack_div.style.display = "none";
    main.style.display = "block";
    club_container.style.display = "none";
    stock_cl.style.display = "none";
    perso_container.style.display = "none";
}

function personalisation(){
    var selectedValue = image_select.value;
    selected_image.src = selectedValue;
    let inputElement = document.getElementById("club_input");
    let inputValue = inputElement.value;
    club_p.innerHTML = inputValue;
    pack_div.style.display = "none";
    main.style.display = "none";
    club_container.style.display = "none";
    stock_cl.style.display = "none";
    perso_container.style.display = "block";
}

function probabilityFunction(number) {
    return Math.random() >= (200 / (number + 200));
  }

function lister(){
    let inputElement = document.getElementById("marche_input");
    let inputValue = inputElement.value;
    if (probabilityFunction(9)){
        credits += parseInt(inputValue);
        document.getElementById("ncred").innerHTML=credits;
        alert("L'offre est réussi");
    }
    else{
        alert("L'offre n'a pas pu aboutir");
    }
    show_club();
}
