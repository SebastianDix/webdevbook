  var main = function () {

      $.getJSON("js/cards/aceOfSpades.json", function (card) {
          let $cardPara = $("<p>").text(
              card.rank + " of " + card.suit
          )
          $("section.practice").append($cardPara);
      })

      $.getJSON("js/cards/hand.json", function (hand) {
          var $list = $("<ul>");
          hand.forEach(function (card) {
              var $card = $("<li>");
              $card.text(card.rank + " of " + card.suit);
              $list.append($card);
          })
          $("section.practice").append($list)
      })


  }
  $(document).ready(main);