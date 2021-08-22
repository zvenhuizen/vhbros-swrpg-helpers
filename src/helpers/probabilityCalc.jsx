let blues = ['','','aa','a','sa','s'];
let blacks = ['','','f','f','t','t'];
let greens = ['','s','s','ss','a','a','sa','aa'];
let purples = ['','f','ff','t','t','t','tt','ft'];
let yellows = ['','s','s','ss','ss','a','sa','sa','sa','aa','aa','!'];
let reds = ['','f','f','ff','ff','t','t','ft','ft','tt','tt','des'];
let whites = ['dsp','dsp','dsp','dsp','dsp','dsp','dspdsp','lsp','lsp','lsplsp','lsplsp','lsplsp']

/* function getAllResults(diceArray, probabilityFunction, context) {
      if (!context) {context = this};

      let p = [] -> WHAT EXACTLY IS P's PURPOSE? WHAT IS THE VARIABLE P STANDING FOR?
      let maxIndex = diceArray.length - 1
      let lens = [] -> WHAT EXACTLY IS LENS' PURPOSE? WHAT IS THE VARIABLE STANDING IN FOR?

      for(let i = diceArray.length; i--) {
        lens[i] = diceArray[i].length; // lens[i] is now equal to diceArray[i] sides of the dice

        function dive(d) { --> WHY THE NAME DIVE? WHAT IS THE PURPOSE OF THE FUNCTION? --> WHY THE PARAMETER D? WHAT DOES D STAND FOR?

          let a = diceArray[d] --> According to this line, d must be an integer from 0 to maxIndex
          let len = lens[d] --> len is now equal to an integer of sides of the dice at diceArray[d]

          if (d == maxIndex) { --> In otherwords, if we are on the last die in the diceArray

            for(let side = 0; side < len; side++) { --> flip through all sides of the dice at diceArray[maxIndex]

              p[d] = a[side], probabilityFunction.apply(context, p);  --> STILL NOT 100% CLEAR ON WHAT p IS STANDING IN FOR
                                                                      --> According to docs... this is passing an array of arguments to the probabilityFunction
                                                                      --> Not sure what context/this means or is doing
                                                                      --> Nor am I sure how the right info is being passed into p and onto probabilityFunction
                                                                      --> It assigns a[side] to p[maxIndex] and applies the function every iteration of side
            }
          }
          else { --> If we are not on the last die in the diceArray
            for(let side = 0; side < len; side++) { --> this section will go from first die to last die
              p[d] == a[i], dive(d+1); --> go one step further into the diceArray, getting closer to the last die
            }
          }
          p.pop(); --> remove the last element of the array being created at p --> WHY DO WE NEED TO REMOVE THAT ELEMENT? WHAT IS P DOING?
                    --> I THINK p.pop() IS GIVING US OUR RETURN VALUE FOR THE DIVE FUNCTION, AND REMOVING IT SO IT DOESN'T GET RETURNED TWICE
                    --> BECAUSE DIVE IS CALLED AGAIN AT THE END OF THE ELSE STATEMENT, p.pop() ONLY RUNS AFTER THE LOOP AT MAX INDEX IS RUN
                    --> STILL NOT 100% CLEAR ON WHAT VALUE I WILL BE GETTING FROM THIS... CAN'T WAIT TO CONSOLE.LOG THE CRAP OUT OF THIS SUCKER!
        }
        dive(0) --> CALLS DIVE(0) FOR EVERY ITERATION OF diceArray, STARTING THE PROCESS OF ITERATING ALL THE OTHER DICE EVERY TIME diceArray IS ITERATED
      }
    }

*/

function successProbability(sets,f,context){//don't like the use of sets since Set() is already a react concept.
    if (!context) {
        context=this;//have no clue what this is doing
    }

    var 
      p = [],
      max = sets.length - 1, //how many dice are you passing? One less to get last index of the array.
      lens = [];//Lens can be any variable name, which I validated. Needs to be change since lens is already a concept in react.

    for (var i = sets.length; i--;) //iterate backwards through the dice rolled starting with the last die
        lens[i] = sets[i].length; //sets lens equal to the length of whatever array you are on in sets.

        function dive(d) {//d will be passed the same array of dice as your roll only with names that are singular instead of plural
          //not sure of the significance of a singular name instead of the plural
          var
            a = sets[d],
            len = lens[d]; //sets len equal to the number of side on the die array you are currently passing to dive()

          if (d == max) { //if you are on your last die to iterate through
            for (var i = 0; i < len; i++) //iterate through each side of that last die until you hit the max sides of the die
              p[d] = a[i],
              f.apply(context, p);
          } 
          else {
            for (var i = 0; i < len; i++) //iterate through each side of the die until you hit the max sides of the die
              p[d] = a[i],
              dive(d + 1); //increment the element of the sets array you have currently passed to the function
              p.pop(); //this removes the last element from the p array and returns the value to the caller
          }
        }

    dive(0);
}

successProbability( [yellows,yellows,greens,greens], function(yellow,yellow,green,green){

    // Your function is yielded unique combinations of values from the arrays
    console.log(yellow,yellow,green,green);
});