//create count in database
if(localStorage.getItem("count")==null){
	localStorage.setItem("count",0)
}
//Update HTML to match Count
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count")
}

update()

// Add one to Count
function plusOne() {
localStorage.setItem("count",Number(localStorage.getItem("count"))+1)

update()
}

// Rest Button
function reset(){
	if(confirm("Are you sure you want to rest?")){
		localStorage.setItem("count",0)
		update()}

}