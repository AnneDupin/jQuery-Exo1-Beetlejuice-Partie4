$( document ).ready( function(){
  var player = ""; // Joueur.euse P1
  var computer = ""; // IA1
  var win = 0; // Victoire
  var lose = 0; // Defaite
  var equality = 0; // == 
  var items = ["rock", "paper", "scissor"]; // Tableau : Pierre Papier Ciseaux

  gameView(); // PARTIE

  // Stocker le choix du joueur

  $('#rock-col').click(function(){ // Si je clique sur pierre
    score(); // afficher le score 
    player = "rock"; // si personne clique sur la pierre
    computer = items[Math.floor(Math.random()*items.length)];
    // Ordinateur = [Rock, Papier, Ciseaux] / MF retourne un nombre entier pendant
    // que Math.R va renvoyer à un nombre flottant entre 0 et 1.
    console.log(player, computer);

    // Ajouter svg / format photo
    $( '.remove-svg' ).css( 'display', 'none' ); //La méthode .css() est un moyen pratique pour obtenir une propriété de style de l'élément correspondant sélectionné
    playerChoice(); //choix joueur.euse
    computerChoice(); // choix joueur.euse

    // Comparer AI et la valeur player > Si PIERRE est choisi
    if (player === "rock" && computer === "rock") { //si player = strictement égal à "pierre" et AI aussi
      equality++; // Egalité 
      document.getElementById("result").innerHTML = "Vous êtes à égalité avec Beetlejuice !";
      document.getElementById("equality").innerHTML = equality;
    } else if (player === "rock" && computer === "paper") {
      lose++;
      document.getElementById("result").innerHTML = "Perdu !";
      document.getElementById("lose").innerHTML = lose;
    } else if (player === "rock" && computer === "scissor") {
      win++;
      document.getElementById("result").innerHTML = "Bravo !";
      document.getElementById("win").innerHTML = win;
    } else {
      console.log("Not selected");
    }

  });

  $('#paper-col').click(function(){
    score();
    player = "paper";
    computer = items[Math.floor(Math.random()*items.length)];
    console.log(player, computer);

    // Add svg
    $( '.remove-svg' ).css( 'display', 'none' );
    playerChoice();
    computerChoice();

  // Comparer AI et la valeur player > Si PAPIER est choisi
    if (player === "paper" && computer === "paper") {
      equality++;
      document.getElementById("result").innerHTML = "Vous êtes à égalité avec Beetlejuice !";
      document.getElementById("equality").innerHTML = equality;
    } else if (player === "paper" && computer === "scissor") {
      lose++;
      document.getElementById("result").innerHTML = "Perdu !";
      document.getElementById("lose").innerHTML = lose;
    } else if (player === "paper" && computer === "rock") {
      win++;
      document.getElementById("result").innerHTML = "Bravo !";
      document.getElementById("win").innerHTML = win;
    } else {
      console.log("Not selected");
    }

  });

  $('#scissor-col').click(function(){
    score();
    player = "scissor";
    computer = items[Math.floor(Math.random()*items.length)];
    console.log(player, computer);

    // Add svg
    $( '.remove-svg' ).css( 'display', 'none' );
    playerChoice();
    computerChoice();

  // Comparer AI et la valeur player > Si CISEAUX est choisi
    if (player === "scissor" && computer === "scissor") {
      equality++;
      document.getElementById("result").innerHTML = "Vous êtes à égalité avec Beetlejuice !";
      document.getElementById("equality").innerHTML = equality;
    } else if (player === "scissor" && computer === "rock") {
      lose++;
      document.getElementById("result").innerHTML = "Perdu !";
      document.getElementById("lose").innerHTML = lose;
    } else if (player === "scissor" && computer === "paper") {
      win++;
      document.getElementById("result").innerHTML = "Bravo !";
      document.getElementById("win").innerHTML = win;
    } else {
      console.log("Not selected");
    }
  });

  // Add the svg
  function computerChoice() {
    switch (computer) {
      case "rock":
        $( '#rock-IA' ).css( 'display', 'block' );
        break;
      case "paper":
        $( '#paper-IA' ).css( 'display', 'block' );
        break;
      case "scissor":
        $( '#scissors-IA' ).css( 'display', 'block' );
        break;
    }
  }

  // Hide the svg
  function playerChoice() {
    switch (player) {
      case "rock":
        $( '#rock-P1' ).css( 'display', 'block' );
        break;
      case "paper":
        $( '#paper-P1' ).css( 'display', 'block' );
        break;
      case "scissor":
        $( '#scissors-P1' ).css( 'display', 'block' );
        break;
    }
  }

  // Show a message if the player win or lose
  function score() {
    var message = document.querySelector('.alert-message');
    var body = document.querySelector('body');
    if (win === 3) {
      $( '#alert' ).css( 'display', 'block' );
      $('.game').css( 'display', 'none' );
      $('#score').css( 'display', 'none' );
      message.innerHTML = "Tu as gagné 3 fois ! Tu restes avec Lydia Deetz !";
      body.style.backgroundColor = "rgba(22,22,22, 0.4)";
    } else if (lose === 3) {
      $( '#alert' ).css( 'display', 'block' );
      $('.game').css( 'display', 'none' );
      $('#score').css( 'display', 'none' );
      message.innerHTML = "Tu as perdu 3 fois ! Tu repars avec Beetlejuice !";
      body.style.backgroundColor = "rgba(22,22,22, 0.4)";
    } else {
      // console.log('Error');
    }
  }

  function gameView() {
    $('#game__choice').click(function(){
      $( '#game__info' ).css( 'display', 'none' );
      $( '#game__match' ).css( 'display', 'flex' );
    });
  }

  // reload for new game
  $('.btn').click(function() {
    location.reload();
  });

});