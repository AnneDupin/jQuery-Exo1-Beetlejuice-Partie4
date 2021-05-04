$( document ).ready( function(){
  var player = ""; // Joueur.euse P1
  var computer = ""; // IA1
  var victoire = 0; // Victoire
  var defaite = 0; // Defaite
  var egalite = 0; // == 
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
      egalite++; // egalite 
      document.getElementById("result").innerHTML = "Vous êtes à egalite avec Beetlejuice !";
      document.getElementById("egalite").innerHTML = egalite;
    } else if (player === "rock" && computer === "paper") {
      defaite++;
      document.getElementById("result").innerHTML = "Perdu !";
      document.getElementById("defaite").innerHTML = defaite;
    } else if (player === "rock" && computer === "scissor") {
      victoire++;
      document.getElementById("result").innerHTML = "Bravo !";
      document.getElementById("victoire").innerHTML = victoire;
    } else {
      console.log("Not selected");
    }

  });

  $('#paper-col').click(function(){
    score();
    player = "paper";
    computer = items[Math.floor(Math.random()*items.length)];
    console.log(player, computer);

    // AJOUTER .SVG
    $( '.remove-svg' ).css( 'display', 'none' );
    playerChoice();
    computerChoice();

  // Comparer AI et la valeur player > Si PAPIER est choisi
    if (player === "paper" && computer === "paper") {
      egalite++;
      document.getElementById("result").innerHTML = "Vous êtes à egalite avec Beetlejuice !";
      document.getElementById("egalite").innerHTML = egalite;
    } else if (player === "paper" && computer === "scissor") {
      defaite++;
      document.getElementById("result").innerHTML = "Perdu !";
      document.getElementById("defaite").innerHTML = defaite;
    } else if (player === "paper" && computer === "rock") {
      victoire++;
      document.getElementById("result").innerHTML = "Bravo !";
      document.getElementById("victoire").innerHTML = victoire;
    } else {
      console.log("Not selected");
    }

  });

  $('#scissor-col').click(function(){
    score();
    player = "scissor";
    computer = items[Math.floor(Math.random()*items.length)];
    console.log(player, computer);

    // AJOUTER .SVG
    $( '.remove-svg' ).css( 'display', 'none' );
    playerChoice();
    computerChoice();

  // Comparer AI et la valeur player > Si CISEAUX est choisi
    if (player === "scissor" && computer === "scissor") {
      egalite++;
      document.getElementById("result").innerHTML = "Vous êtes à egalite avec Beetlejuice !";
      document.getElementById("egalite").innerHTML = egalite;
    } else if (player === "scissor" && computer === "rock") {
      defaite++;
      document.getElementById("result").innerHTML = "Perdu !";
      document.getElementById("defaite").innerHTML = defaite;
    } else if (player === "scissor" && computer === "paper") {
      victoire++;
      document.getElementById("result").innerHTML = "Bravo !";
      document.getElementById("victoire").innerHTML = victoire;
    } else {
      console.log("Not selected");
    }
  });

  // AJOUTER LE .SVG
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

  // CACHER LE .SVG
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

  // MESSAGE EN CAS DE VICTOIRE OU DE PERTE
  function score() {
    var message = document.querySelector('.alert-message');
    var body = document.querySelector('body');
    if (victoire === 3) {
      $( '#alert' ).css( 'display', 'block' );
      $('.game').css( 'display', 'none' );
      $('#score').css( 'display', 'none' );
      message.innerHTML = "Tu as gagné 3 fois ! Tu restes avec Lydia Deetz !";
      body.style.backgroundColor = "rgba(22,22,22, 0.4)";
    } else if (defaite === 3) {
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

  // Charger une nouvelle partie
  $('.btn').click(function() {
    location.reload();
  });

});