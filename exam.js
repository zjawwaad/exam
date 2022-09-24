
function removesubscribe (element){
    let policyContainer = document.querySelector (".nevermissbox");
    policyContainer.classList.add("hideElement");
}


function counter(element){
    var target = element.parentElement.querySelector(".score");
    var toNum = parseFloat(target.innerText);
    target.innerText = toNum + 1;
}

setTimeout(
	function(){
    alert("The Ninjas have won!");
    }
  ,5000 /// milliseconds = 5 seconds
);