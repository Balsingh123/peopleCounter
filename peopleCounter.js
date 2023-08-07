let count=0
function increment(){
	count=count+1
	document.getElementById("cnt").textContent=count
	
}
function save(){
	
	document.getElementById("s_id").textContent+=count+" - "
	count=0
}