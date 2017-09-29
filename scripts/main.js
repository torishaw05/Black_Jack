/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue (hand) {
  let player = hand;
  let playerHand = 0;
  let ace= false;

  for (var i = 0; i < player.length; i++) {
    if (player[i] === "K" || player[i] === "Q" || player[i] === "J") {
      playerHand += 10;
    } else if (player[i] === "A") {
      playerHand += 11;
      ace=true;
    } else {
      playerHand += Number(player[i]);
    }
    if(playerHand > 21 && ace === true) {
      playerHand -= 10;
    }
  }


 console.log(playerHand);
  return playerHand;
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
