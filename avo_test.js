QUnit.test( "find the best place to buy some avocados", function( assert ) {

    var avocadosString = avocados("1 for R3, 2 for R7, 3 for R10, 5 for R14.50.");

     var expectedAvo = [
      {
        "quantity": 1,
        "price": "R3"
      },
      {
        "quantity": 2,
        "price": "R7"
      },
      {
        "quantity": 3,
        "price": "R10"
      },
      {
        "quantity": 5,
        "price": "R14.50"
      }
    ];


    assert.equal(expectedAvo, avocadosString);
});
