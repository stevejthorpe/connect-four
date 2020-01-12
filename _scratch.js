// Run through each posCombo array and check if player has those index id's for each 4.
// For each player, run through their occupied slots
// Check these indexes against each array of poss combinations.
// Set counter to 0
// If any array has all 4 numbers found, return winner.
// If not, reset counter.
//
// function checkDiagonal(pos, arr) {
//     for (p = 0; p < pos.length; p++) {
//         for (var i = 0; i < arr.length; i++) {
//             // console.log(arr);
//         }
//     }
// }
//
// checkDiagonal(p1Positions, possCombos);

// var p1Index = p1Positions
//     .filter(function() {
//         return $(this).index(".slot");
//     })
//     .toArray();

// var p1Index = $(".slot").map(function() {
//     return $(".slot").hasClass("player1");
// });

// console.log("Player 1 Index: ", p1Index);

// var p1Log = p1Positions.indexOf(".slot");
// console.log("p1Log", $(".player1").index(".slot"));

// function findDiagonals(arr) {
//     var slot;
//     var counter = [];
//     for (var s = 0; s < slots.length; s++) {
//         if (typeof arr == "object") {
//             for (var i = 0; i < arr.length; i++) {
//                 var winningCombo = arr[i];
//                 console.log(arr[i]);
//                 console.log("WinningCombo: ", winningCombo);
//             }
//             for (var w = 0; w < winningCombo.length; w++) {
//                 if (slot.classList(currentPlayer)) {
//                     console.log("Found match");
//                 }
//                 console.log("hmm");
//             }
//         }
//     }
// }
// findDiagonals(possCombos);

// console.log(slots.eq(0));

// for (var s = 0; s < slots.length; s++) {
//     if (this.hasClass == "player1") {
//         p1Positions.add().index(".slot");
//     }
// }
// $(document).on("click", function() {
//     p1Log.add($(".player1").index(".slot"));
//     return p1Log;
// });
