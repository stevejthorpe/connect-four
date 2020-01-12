-   players move by selecting columns.
    i.e by click.

1. HTML/css

-   Get this done asap.
-   slot
-   board
    -   Grid with 42 slots
    -   7 columns with 6 slots is easiest.
        -   Click events on columns
        -   Identify rows using classes

2. Javascript
    1. Know whose turn it is
    2. column selection
        - find lowest selected slot in current columns
        - add current players class to it.
    3. Check for victory
        - Check vertically
        - Check horizontally
        - Check diagonally (tricky part)
    4. If victory show message
    5. Reset
    6. If no victory swap players

## Strategies for diagonal victories

Some Strategies (using classes) will need a big list (top down, left to right).

```js
var slots = $(".slots");
var cols = $(".column");

cols.eq(x).children().eq(x);
cols.eq(x).find(".slot").(y);
// But watch out for the negative numbers (with jQuery .eq())
```

(plus and minus 7)

and if I wanted slot 6 `slot[6]`.

Basically, our code needs some representation of the game state.

1.  HARDEST The "X"

-   Start with a piece you have just placed on the board.
-   Get a set of element left down wards. If no win, do the three other diagonals.
-   But will have to go the full diagonal
-
-   We know the column already, and can use `col.index()` to get the row.

2. HARD Just look for 3s'

3. 7's.

-   Down and to right increases by 7
-   Up and to right increases by 5

-   But there is a flaw, can get compicated a slot 16 for example.

-   Will need to add a check that thay are in contiguous columns.
-   Subtract index of start from end. If the remainder is greater than 1, they are not in contiguois columns.

*   If you add a column increas 7 to 8
*   If you add a row increase 5 to 6

```js
var s = $(".slots");
var c = $(".column");

slots.eq(16).parent().index()

cols.eq(x).children().eq(x);
cols.eq(x).find(".slot").(y);

```

4. EASIEST

-   Only 24 sets of diagonal victories possible.

```js
var victories = [[0, 7, 14, 21], [1, 8, 15, 22]];
```

If the currentPlayer is in all of the indexes of one array, they win.

## Animations

-   CSS transitions or Animations
-   jQuery's animate method
-   Ticker style animations.

-   Pieces drop off the board.
-   Winning pieces grow until screen filled. Then winner message appears.
-   Stack of chips on the side of the board
-   Pieces under pointer.
-   User feedback on move about to make.

*   After a player wins, visually indicate which four pieces on the board satisfied the victory condition

## Bonus Features

Allow players to play using only their keyboard - Will need to indicate which column visually.

allow a single player to play against the computer

## Presentation
