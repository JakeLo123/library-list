function isOverdue(rentalInstance, today, limit) {
	limit = limit * 86400000;
	const dateCheckedOut = new Date(rentalInstance.children[1].innerText);
	const dateReturned = new Date(rentalInstance.children[2].innerText);
}

function checkIfOverdue(today, limit) {
	let result = 0;
	const listOfRentalInstances = document.getElementsByTagName('tr');
	for (let i = 0; i < listOfRentalInstances.length; ++i) {
		const rentalInstance = listOfRentalInstances[i];
		if(isOverdue(rentalInstance, today, limit) && rentalInstance.style.backgroundColor === 'red')

		}
	}
}

checkIfOverdue(new Date(), 14);
