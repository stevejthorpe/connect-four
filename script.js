(function() {
    var currentPlayer = "player1";
    var bannerBox = $(".banner-box");
    var board = $(".board");
    // var slots = $(".slot");
    var cols = $(".column");

    $(".column").on("click", function(e) {
        console.log("Running clickHandler");

        var col = $(e.currentTarget);
        console.log("Current target: ", e.currentTarget);
        var slotsInCol = col.children();
        var foundEmptySlot;

        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                foundEmptySlot = true;
                slotsInCol.eq(i).addClass(currentPlayer);
                break;
            }
        }
        if (!foundEmptySlot) {
            return;
        }

        var slotsInRow = $(".row" + i);

        function checkForVictory(slot) {
            var count = 0;
            for (var i = 0; i < slot.length; i++) {
                if (slot.eq(i).hasClass(currentPlayer)) {
                    count++;
                    if (count == 4) {
                        console.log("Slot index of winner", slot.eq(i));
                        return true;
                    }
                } else {
                    count = 0;
                }
            }
        }

        if (checkForVictory(slotsInCol)) {
            doVictoryDance(currentPlayer);
        } else if (checkForVictory(slotsInRow)) {
            doVictoryDance(currentPlayer);
        } else {
            switchPlayers();
        }
    });

    function doVictoryDance(currentPlayer) {
        console.log("WOOOOOOOOOOHOOOOOOOOO", currentPlayer, " WINS!!!!!");
        var winner;
        // var htmlForWinner = "";
        if (currentPlayer == "player1") {
            winner = "Red";
            // htmlForWinner += '<p class="winner">' + winner + " wins!!" + "</p>";
            bannerBox.addClass("on");
            // banner.addClass("one").text(winner + " wins!!");
            board.addClass("board1");
            // .html(htmlForWinner);
            // .css("color", "#d2141b");
        } else {
            winner = "Yellow";
            bannerBox.addClass("on");
            // banner.addClass("two").text(winner + " wins!!");
            board.addClass("board2");
            // .css("color", "#f5de1a");
        }

        setTimeout(function() {
            location.reload();
        }, 4700);
    }

    function switchPlayers() {
        if (currentPlayer == "player1") {
            currentPlayer = "player2";
        } else {
            currentPlayer = "player1";
        }
    }

    board.on("click", function() {
        if (currentPlayer == "player1") {
            board.css("border", "7px solid #d2141b");
        }
        if (currentPlayer == "player2") {
            board.css("border", "7px solid #f5de1a");
        }
    });
    //////////
    // KEYS //
    //////////

    $(document).on("keydown", function(evt) {
        // RIGHT ARROW
        if (evt.keyCode == 39) {
            console.log("Pressing right");
            if ($(".highlighted").length === 0) {
                cols.eq(0).addClass("highlighted");
            } else {
                $(".highlighted")
                    .next()
                    .addClass("highlighted");
                $(".highlighted")
                    .prev()
                    .removeClass("highlighted");
            }
        }
        // LEFT ARROW
        if (evt.keyCode == 37) {
            console.log("Pressing left");
            if ($(".highlighted").length === 0) {
                cols.eq(6).addClass("highlighted");
            } else {
                $(".highlighted")
                    .prev()
                    .addClass("highlighted");
                $(".highlighted")
                    .next()
                    .removeClass("highlighted");
            }
        }

        // ENTER
        if (evt.keyCode == 13) {
            console.log("Pressing enter");
            console.log("Current target: ", evt.currentTarget);

            $(".highlighted").click();
        }

        // SPACE
        if (evt.keyCode == 32) {
            console.log("Pressing enter");
            console.log("Current target: ", evt.currentTarget);

            $(".highlighted").click();
        }
        // REMOVE HIGHLIGHT
        setTimeout(function() {
            console.log("Removing highlight");
            $(".highlighted").removeClass("highligted");
        }, 3000);
    });
})();
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
////
//
//
//
//
//
//
//
//
////
//
//
//
//
//
//
//
//
//

//////////////
// Diagonals//
//////////////
// var rightUp = $(".slot")
//     .eq(i)
//     .add(slots.eq(i + 5))
//     .add(slots.eq(i + 10))
//     .add(slots.eq(i + 15));
// console.log("rightUp: ", rightUp);
//
// var rightDown = $(".slot")
//     .eq(i)
//     .add(slots.eq(i + 7))
//     .add(slots.eq(i + 14))
//     .add(slots.eq(i + 21));
// console.log("rightDown: ", rightDown);
//
// checkDiagonals(rightUp, rightDown);
//
// function checkDiagonals(rU, rD) {
//     var countRightUp = 0;
//     console.log("countRightUp", countRightUp);
//     var countRightDown = 0;
//     console.log("countRightDown", countRightDown);
//
//     for (var i = 0; i < 41; i++) {
//         if (rU.eq(i).hasClass(currentPlayer)) {
//             countRightUp++;
//             if (countRightUp == 4) {
//                 doVictoryDance(currentPlayer);
//                 // console.log("Slot index of winner", rU.eq(i));
//                 return true;
//             }
//         } else {
//             countRightUp = 0;
//         }
//         if (rD.eq(i).hasClass(currentPlayer)) {
//             countRightDown++;
//             if (countRightDown == 4) {
//                 console.log("Slot index of winner", rD.eq(i));
//                 doVictoryDance(currentPlayer);
//                 return true;
//             }
//         } else {
//             countRightDown = 0;
//         }
//     }
// }

// var p1Slots = $(".player1");
// // console.log("Player 1 slots: ", p1Slots);
// var p2Slots = $(".player2");
// // console.log("Player 2 slots: ", p2Slots);
//
// // Get player positions
// var p1Positions = $(".slot").filter(function() {
//     return $(this).hasClass("player1");
// });
// var p2Positions = $(".slot").filter(function() {
//     return $(this).hasClass("player2");
// });
// // console.log("Player 1 Positions: ", p1Positions);
// // console.log("Player 2 Positions: ", p2Positions);
//
// // Log player indexes
// var p1Index = $(".player1").index(".slot");
// // console.log("Player 1 Index: ", p1Index);

// // console.log("Checking diagonals");
// // console.log("Target col: ", col.index(), "Row: ", slotsInRow.index());
// // console.log("Col: ", cols.index());
// // console.log("Row: ", slotsInRow.index());
//
// // console.log(e.currentTarget);
//
// var rightDown = [];
// var rightUp = [];
// var junk = [];
//
// // Get index of eaach slot.
// var index = col.index() * 6 + slotsInRow.index();
// console.log("Index: ", index);
// // Add index class to all slots
// slots.each(function(i) {
//     $(this).addClass("index" + i);
// });
//
// // slots.addClass("index" + index);
// // console.log(slots);
//
// // Divide board unto UpRight and Down Right
//
// // Up and right increses by 5
// // Take starting slot and get the next three;
//
// for (var s = 0; s < slots.length; s++) {
//     console.log("Building");
//     if (index < 42 && index > -1) {
//         rightUp = [[index], [index + 5], [index + 10], [index + 15]];
//         console.log("rightUp Object: ", rightUp);
//     }
//     if (rightUp[0] - rightUp[3] > 1) {
//         console.log("Sum: ", rightUp[0] - rightUp[-1] > 1);
//     }
//     if (index[s] < 42 && index[s] > -1) {
//         rightDown = [[index], [index + 7], [index + 14], [index + 21]];
//         console.log("rightDown Object: ", rightDown);
//     }
// }

// console.log(index.eq());

// Down and right increases by 7
// Take starting slot and get the next three
// console.log("rightDown Object: ", rightDown);

// console.log("Current Target", e.currentTarget);

// Check they are in contiguous columns.
// if (rightDown.index(0) - rightDown.index(4) > 1) {
//     console.log("Not contiguous");
//     junk = rightDown.add().eq();
//     console.log("Junk: ", junk);
// }

// var possCombos = [
//     [0, 7, 14, 21],
//     [1, 8, 15, 22],
//     [2, 9, 16, 23],
//     [3, 8, 13, 18],
//     [4, 9, 14, 19],
//     [5, 10, 15, 20],
//     [6, 13, 20, 27],
//     [7, 14, 21, 28],
//     [8, 15, 22, 29],
//     [9, 14, 19, 24],
//     [10, 15, 20, 25],
//     [11, 16, 21, 26],
//     [12, 19, 26, 33],
//     [13, 20, 27, 34],
//     [14, 21, 28, 35],
//     [15, 20, 25, 30],
//     [16, 21, 26, 31],
//     [17, 22, 27, 32],
//     [18, 25, 32, 39],
//     [19, 26, 33, 40],
//     [20, 27, 34, 41],
//     [21, 26, 31, 36],
//     [22, 27, 32, 37],
//     [23, 28, 33, 38]
// ];

// function checkDiagonals(arr) {
//     var count = 0;
//     if (typeof arr == "object") {
//         // Loop through all slots
//         for (var s = 0; s < slots.length; s++) {
//             console.log(arr[s]);
//             // For each slot loop through array
//             for (var n = 0; n < arr.length; n++) {
//                 console.log(arr[n]);
//                 // Check to see if slots of currentPlayer match array
//                 if (slots.hasClass(currentPlayer) == arr[n][m]) {
//                     console.log("Match");
//                 }
//             }
//         }
//     }
// }
// checkDiagonals(possCombos);

// for (var s = 0; s <= slots.length; s++) {
//
//
//     // if ((slots.eq(0).parent().index() - slots.eq(3).parent().index()) = 1) {
//     //     console.log("Colomns linked");
//     // }
// }
// console.log("rightDown list 2: ", rightDown);

// var slotsInDiag;
//
// var slots = $(".slot");
// // var cols = $(".column");
//
// for (var s = 0; s <= slots.length; s++) {
//     slotsInDiag = slots
//         .eq(s)
//         .add(slots.eq(s + 7))
//         .add(slots.eq(s + 14))
//         .add(slots.eq(s + 21));
//     console.log("Slots in diag: ", slotsInDiag.eq(s));
//
//     // if ((slots.eq(s).parent().index() - slots.eq(s + 1).parent().index()) = 1) {
//     //     console.log("Colomns linked");
//     // }
// }
// console.log("slotsInDiag list 2: ", slotsInDiag);
//
// var slotsInRow = $(".row" + i);
// // console.log("slotsInRow: ", slotsInRow);
// // console.log("slotsInCol: ", slotsInCol);

// if (
//     slots
//         .eq(s)
//         .parent()
//         .index() -
//         slots
//             .eq(s + 1)
//             .parent()
//             .index() =
//     1
// ) {
//     console.log("Colomns linked");
// }

// var possCombos = [
//     [0, 7, 14, 21],
//     [1, 8, 15, 22],
//     [2, 9, 16, 23],
//     [3, 8, 13, 18],
//     [4, 9, 14, 19],
//     [5, 10, 15, 20],
//     [6, 13, 20, 27],
//     [7, 14, 21, 28],
//     [8, 15, 22, 29],
//     [9, 14, 19, 24],
//     [10, 15, 20, 25],
//     [11, 16, 21, 26],
//     [12, 19, 26, 33],
//     [13, 20, 27, 34],
//     [14, 21, 28, 35],
//     [15, 20, 25, 30],
//     [16, 21, 26, 31],
//     [17, 22, 27, 32],
//     [18, 25, 32, 39],
//     [19, 26, 33, 40],
//     [20, 27, 34, 41],
//     [21, 26, 31, 36],
//     [22, 27, 32, 37],
//     [23, 28, 33, 38]
// ];

// function checkDiagonal() {
//     // for every direction
//     // for every coordinate
//     // check whether the next 3 elements in this direction exist and are the same
//     var maxx = 7;
//     var maxy = 6;
//
//     var directions = [[1, 0], [1, -1], [1, 1], [0, 1]];
//
//     for (var d in directions) {
//         var dx = d[0];
//         var dy = d[1];
//
//         for (var x = 0; x < maxx; x++) {
//             for (y = 0; y < maxy; y++) {
//                 var lastx = x + 3 * dx;
//                 var lasty = y + 3 * dy;
//                 if (
//                     0 <= lastx &&
//                     lastx < maxx &&
//                     0 <= lasty &&
//                     lasty < maxy
//                 ) {
//                     var w = board[x][y];
//                     if (
//                         w != " " &&
//                         w == board[x + dx][y + dy] &&
//                         w == board[x + 2 * dx][y + 2 * dy] &&
//                         w == board[lastx][lasty]
//                     ) {
//                         console.log(w);
//                         return w;
//                     }
//                 }
//             }
//         }
//     }
//     console.log("No diagonal winner");
//     return " "; // no winner
// }
