function avocados(avaocadosString){
  	var avo = avaocadosString
  		.split(",");
  	


  	var avoList = [];
  	for (var i = 0; i < avo.length; i++) {
  		var avoString = avo[i];
  			//.replace("for", "");

  		console.log(avoString);

  		var quantity = avoString[i]
  		
  		var item = quantity.split(" ");

        var quantityName = item[0];
        if (parseInt(item[0])){
            quantityName = item[0] + " " + item[1];
        }
        var price = item[item.length];

  

        avoList.push({
        	quantity : quantity,
            price : price
        })

  	};

  	return avoList;	
}




    