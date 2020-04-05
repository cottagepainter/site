var Pathname = {
	normalize: (x) => {
		return (x === "/" ? x : x.replace(/\/$/, ""))
	},

	basename: (x) => {
		return (x === "/" ? x : x.replace(/^.+\//,""))
	},

	dirname: (x) => {
		return (x === "/" ? x : x.replace(/[^/]+$/,""));
	},
}

class Vector {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}

	set coordinates(V) {
		this.x = V.x;
		this.y = V.y;
	}

	get angle() {
		let a = Math.atan2(this.y,this.x) * (180/Math.PI);
		return (a >= 0 ? a : 360 - (-a))
	}

	get length() {
		return Math.sqrt((this.x*this.x) + (this.y*this.y))
	}

	add(V) {
		return new Vector(this.x + V.x, this.y + V.y)
	}

	subtract(V) {
		return new Vector(this.x - V.x, this.y - V.y)
	}

	scale(a) {
		return new Vector(this.x * a, this.y * a)
	}

	slope(V) {
		return (V.y - this.y) / (V.x - this.x)
	}
}
