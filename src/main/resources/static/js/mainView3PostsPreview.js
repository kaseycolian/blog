// function loadDoc(){

// const xhr = new XMLHttpRequest();
// xhr.onready = () => {

// 	if (xhr.status === 404){
// 		const notFoundRes = JSON.parse(xhr.responseText);
// 		console.log(notFoundRes);
// 		window.alert("nothing to load!");
// 	}

// 	if (xhr.status === 200) {
// 		console.log(loaded);
// 		const res = JSON.parse(xhr.responseText);
// 	}

// 	xhr.open('GET', '/blogPost' + blogId, true);
// 	xhr.send();

// 	}
// }


const getBlogs = () => fetch("/blogPost/");