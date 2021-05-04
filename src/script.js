$( document ).ready( function(){
  var player = "";
  var computer = "";
  var win = 0;
  var lose = 0;
  var equality = 0;
  var itmes = ["rock", "paper", "scissor"];

  gameView();

  // Store the Player choice
  $('#rock-col').click(function(){
    score();
    player = "rock";
    computer = itmes[Math.floor(Math.random()*itmes.length)];
    console.log(player, computer);

    // Add svg
    $( '.remove-svg' ).css( 'display', 'none' );
    playerChoice();
    computerChoice();

    // Compare the IA and Player value -> rock
    if (player === "rock" && computer === "rock") {
      equality++;
      document.getElementById("result").innerHTML = "You made equality !";
      document.getElementById("equality").innerHTML = equality;
    } else if (player === "rock" && computer === "paper") {
      lose++;
      document.getElementById("result").innerHTML = "You lose !";
      document.getElementById("lose").innerHTML = lose;
    } else if (player === "rock" && computer === "scissor") {
      win++;
      document.getElementById("result").innerHTML = "You win !";
      document.getElementById("win").innerHTML = win;
    } else {
      console.log("Not selected");
    }

  });

  $('#paper-col').click(function(){
    score();
    player = "paper";
    computer = itmes[Math.floor(Math.random()*itmes.length)];
    console.log(player, computer);

    // Add svg
    $( '.remove-svg' ).css( 'display', 'none' );
    playerChoice();
    computerChoice();

    // Compare the IA and Player value -> paper
    if (player === "paper" && computer === "paper") {
      equality++;
      document.getElementById("result").innerHTML = "You made equality !";
      document.getElementById("equality").innerHTML = equality;
    } else if (player === "paper" && computer === "scissor") {
      lose++;
      document.getElementById("result").innerHTML = "You lose !";
      document.getElementById("lose").innerHTML = lose;
    } else if (player === "paper" && computer === "rock") {
      win++;
      document.getElementById("result").innerHTML = "You win !";
      document.getElementById("win").innerHTML = win;
    } else {
      console.log("Not selected");
    }

  });

  $('#scissor-col').click(function(){
    score();
    player = "scissor";
    computer = itmes[Math.floor(Math.random()*itmes.length)];
    console.log(player, computer);

    // Add svg
    $( '.remove-svg' ).css( 'display', 'none' );
    playerChoice();
    computerChoice();

    // Compare the IA and Player value -> scissor
    if (player === "scissor" && computer === "scissor") {
      equality++;
      document.getElementById("result").innerHTML = "You made equality !";
      document.getElementById("equality").innerHTML = equality;
    } else if (player === "scissor" && computer === "rock") {
      lose++;
      document.getElementById("result").innerHTML = "You lose !";
      document.getElementById("lose").innerHTML = lose;
    } else if (player === "scissor" && computer === "paper") {
      win++;
      document.getElementById("result").innerHTML = "You win !";
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
      message.innerHTML = "You win 3 times ! Good job ! Click for new game !";
      body.style.backgroundColor = "rgba(22,22,22, 0.4)";
    } else if (lose === 3) {
      $( '#alert' ).css( 'display', 'block' );
      $('.game').css( 'display', 'none' );
      $('#score').css( 'display', 'none' );
      message.innerHTML = "You lost 3 times, the end. Click for new game !";
      body.style.backgroundColor = "rgba(22,22,22, 0.4)";
    } else {
      console.log('Error');
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
