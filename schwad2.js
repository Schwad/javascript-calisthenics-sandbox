var MyOtherFileModule = (function(){
  var pubOne = 1;
  var pubTwo = 2;
  var pubThree = 3;
  var _privateOne = 4;
  var _privateTwo = 5;

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