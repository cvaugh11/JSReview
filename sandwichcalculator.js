function sandwichCalculator(slicesOfBread){
	var sandwiches = Math.floor(slicesOfBread / 2);

	if ((slicesOfBread > 1) && (slicesOfCheese > 0) && (slicesOfCheese < sandwiches)) {
		sandwiches = slicesOfCheese;
		console.log(sandwiches);
		return sandwiches;
	} else if ((slicesOfCheese >= sandwiches) && (slicesOfBread > 1)) {
		console.log(sandwiches);
		return sandwiches;
	} else if ((slicesOfCheese = 0) || (slicesOfBread < 2)) {
		console.log("Aint No Mo' Sammiches");
		return 0;
	}

}
console.log(sandwichCalculator());