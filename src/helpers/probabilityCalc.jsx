let blues = ['','','aa','a','sa','s'];
let blacks = ['','','f','f','t','t'];
let greens = ['','s','s','ss','a','a','sa','aa'];
let purples = ['','f','ff','t','t','t','tt','ft'];
let yellows = ['','s','s','ss','ss','a','sa','sa','sa','aa','aa','!'];
let reds = ['','f','f','ff','ff','t','t','ft','ft','tt','tt','des'];
let whites = ['dsp','dsp','dsp','dsp','dsp','dsp','dspdsp','lsp','lsp','lsplsp','lsplsp','lsplsp']

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