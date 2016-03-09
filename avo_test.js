 var expectedAvo = [
      {
        "quantity": 1,
        "price": 3
      },
      {
        "quantity": 2,
        "price": 7
      },
      {
        "quantity": 3,
        "price": 10
      },
      {
        "quantity": 5,
        "price": 14.50
      }
    ];


QUnit.test( "find the best place to buy some avocados", function( assert ) {

    var avocadosString = avocados("1 for R3, 2 for R7, 3 for R10, 5 for R14.50")

    assert.deepEqual(expectedAvo, avocadosString);
});

QUnit.test( "Price Per Avo for each deal", function( assert ) {
 
 var price = pricePerAvo(expectedAvo);

  assert.equal(expectedAvo, ["3, 3.5, 3.3, 2,9"]);
})


QUnit.test( "find the cheapest deal", function( assert ) {

  assert.equal();
})

QUnit.test( "find the most expensive deal", function( assert ) {

  assert.equal();
})

QUnit.test( "find the average price across all the deals", function( assert ) {

  assert.equal();
})