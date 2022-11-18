const counters = document.querySelectorAll('.counter');

AOS.init({
	delay: 1000,
	duration: 600,
});

var countOptions = {
	useEasing: true,
	separator: '',
	duration: 2000,
};

counters.forEach((counter) => {
	let count = new CountUp(counter.id, 0, counter.innerHTML, 0, 5, countOptions);

	// start the counting after 1500ms
	setTimeout(() => {
		count.start();
	}, 2000);
});
