class Element {
	constructor(id) {
		this.id = id;
		this.html = document.getElementById(id);
	}
}
 
class Elements {
	constructor(classname) {
		this.classname = classname;
	}

	get() {
		return document.getElementsByClassName(this.classname);
	}
}

class Menu extends Element {
	constructor(id) {
		super(id);
	}

	get links() {
		return Array.from(this.html.querySelectorAll("a"))
	}

	get hrefs() {
		return this.links.map(x => { return Pathname.normalize(x.pathname) })
	}

	get position() {
		return this.hrefs.findIndex(x => { return $g.location.startsWith(x) })
	}

	get length() {
		return this.links.length
	}

	get current() {
		return this.links[this.position]
	}

	get next() {
		let x = this.links[this.position + 1];
		return (x ? x : this.links[this.length-1])
	}

	get previous() {
		let x = this.links[this.position - 1];
		return (x ? x : Pathname.dirname(this.hrefs[0]))
	}

	handleEvent(e) {
		switch(e.type) {
		case "wheel":
			let x = new Scroll(e);
			if(x.up)   window.location.href = this.previous;
			if(x.down) window.location.href = this.next;
			break
		}

		
	}
}
