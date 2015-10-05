var MyOtherFileModule = (function(){

  // public variables

  var getpubOne = 1;
  }
  var pubTwo = 2;
  var pubThree = 3;

  // public methods

  // private functions and variables

  var _privateOne = 4;
  var _privateTwo = 5;


  //return and reveal
  return {
    showPubOne: function(){
      return pubOne;
    },
    showPubTwo: function(){
      return pubTwo;
    },
    alterPubOne: function(val){
      return pubOne = val;
    },
    showPubThree: function(){
      return pubThree;
    }

  }

})();