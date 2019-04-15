class Scroll {
	constructor(e) {
		let weight = 0;
		this.up   = (e.deltaY <= -weight);
		this.down = (e.deltaY >= weight);
	}
};
