let sizeOfArray = 0;
let txtInput;
let arrIdx;
let changedInput;
let getInput = document.getElementById("task-input")
let addTodo = document.getElementById("add-todos");

addTodo.addEventListener("click", function(e){
	e.preventDefault()
	if(sizeOfArray <= 28){
		sizeOfArray = document.querySelectorAll(".check-it").length;

		getList = document.getElementById("task-listing");
		getTxtNode = document.createTextNode(changedInput)

		addLIList = document.createElement("LI")
		if (changedInput !== null){
			addLIList.classList.add('check-it')

			getList.appendChild(addLIList)

			getListLIs = addLIList.innerHTML += 
						`
						<p>
							<label>
					        	<input type="checkbox">
					        	<span></span>
					      	</label>
					    </p> 
					    <div class="label-it">${changedInput}</div>
					    <div class="delete-it">
							X
					    </div>

					    `
			document.querySelectorAll(".check-it").forEach(function(elem, idx){

				elem.children[0].children[0].children[0].addEventListener("click", function(e){

					if(elem.children[0].children[0].children[0].checked) {
						document.querySelectorAll(".label-it")[idx].classList.add('style-toggle')

					} else {
						document.querySelectorAll(".label-it")[idx].classList.remove('style-toggle')
					}
				});
			});

			document.querySelectorAll(".delete-it").forEach(function(elem, idx){
				let wasteBin = document.querySelectorAll(".check-it")[idx]
				elem.addEventListener("click", function(e){
					sizeOfArray--; 
					document.getElementById('task-listing').removeChild(wasteBin)
				});
			});
		} else {
			alert("Please add something")
		}
	} else {
		alert(`Max Length of Tasks has been met! \nThe max length: ${sizeOfArray}`)
	}
});


getInput.addEventListener("change", function(e){
	e.preventDefault()

	changedInput = document.getElementById("task-input").value
});


