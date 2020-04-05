class Scroll {
	constructor(e) {
		let weight = 0;
		this.up   = (e.deltaY <= -weight);
		this.down = (e.deltaY >= weight);
	}
}

class Touch extends Vector {
	constructor(e) {
		super(e.touches[0].clientX, e.touches[0].clientY);
	}
}

class Swipe extends Vector{
	constructor(e) {
		this.timestamp = performance.now();

		// position
		this.start = new Touch(e);
		this.end = undefined;
		this.x = 0;
		this.y = 0;
	
		// direction
		this.up = false;
		this.down = false;
		this.left = false;
		this.right = false;

		// feel
		this.velocity = 0;
		this.duration = 0;
	}

	update(e) {
		this.duration = performance.now() - this.timestamp;
		this.end = new Touch(t);	
		this.coordinates = this.end.subtract(this.start);
		this.direction = this.angle;
		this.velocity = (this.length / this.duration);
	}

	set direction(angle) {
		if(angle < 45 && angle >= 315)
			this.right = true;
		else if(angle < 135 && angle >= 45)
			this.up = true;
		else if(angle < 270 && angle >= 135)
			this.left = true;
		else if(angle < 315 && angle >= 270)
			this.down = true;
		else
			return
	}
}
