QUnit.test( "find the best place to buy some avocados", function( assert ) {

    var avocadosString = avocados("1 for R3, 2 for R7, 3 for R10, 5 for R14.50.");

    assert.equal("1 for R3, 2 for R7, 3 for R10, 5 for R14.50.", avocados);
});
