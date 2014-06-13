var data;
var show_date;
var show_featured;

function get_state(name) {
	var state = localStorage.getItem(name);	
	if (state === null) {
		state = false;
	} else {
		state = JSON.parse(state);
	}
	return state;
}

function toggle() {
	//console.log(this.id);
	var state = get_state(this.id);
	state = ! state;
	localStorage.setItem(this.id, state);

	if (this.id == 'show_featured') {
		show('show_featured', 'featured');
	}
	if (this.id == 'show_date') {
		show('show_date', 'date');
	}
}

function show(id, cls) {
	var state = get_state(id);
	var elements = document.getElementsByClassName(cls);
	for (var i=0; i < elements.length; i++) {
		elements[i].style.display = state ? 'inline' : 'none';
	};
}


function on_load() {
	show_date     = document.getElementById('show_date');
	show_date.addEventListener('click', toggle);
	show('show_date', 'date');
	show_featured = document.getElementById('show_featured');
	show_featured.addEventListener('click', toggle);
	show('show_featured', 'featured');
}

on_load();

