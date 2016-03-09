function avocados(avaocadosString){
  	var avo = avaocadosString
  		.split(", ");
  	 
	var avoList = [];

   	for (var i = 0; i < avo.length; i++) {
  		var avoString = avo[i];

  		var item = avoString
        .split(" for");

      // var quantity = avoString.split("for")[0];
      // var price = avoString.split("for")[1];
        var quantity = item[0];
        if (parseInt(item[0])){
            quantity = Number(item[0]);
        }


      var number = item[1]
        .split("R")
        .slice(" ");

      var price = Number(number[1]);    

      avoList.push({
        quantity : quantity,
        price : price
      })

  	};
      
  	return avoList;	
}




    