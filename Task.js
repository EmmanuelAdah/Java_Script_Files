for (let index = 1; index <= 10; index++){
	let sum = 0;
	if (index % 4 == 0){
		if (index == 4){
			for (let count = 1; count <= 5; count++){
			sum += Math.pow(index, count);
			}
		} else {
			for (let count = 1; count <= 5; count++){
			sum += Math.pow(index, count);
			}
		};
		process.stdout.write(sum + " ")
	}
	};
