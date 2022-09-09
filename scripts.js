function togglePrice(){
		
	let priceObj = {
		annually: [199.99, 249.99, 399.99],
		monthly: [19.99, 24.99, 39.99]
	}
		 
	let priceArray = document.getElementsByClassName('currentPrice');
		
		for (i=0;i<priceArray.length; i++){
			let currentPrice = priceArray[i].innerText;
			if (currentPrice<100){
			 	priceArray[i].innerText = priceObj.annually[i];

			} else {
			 	priceArray[i].innerText = priceObj.monthly[i];
			}
		}
	}

function keyFunc(e){
	e.preventDefault();
	if (e.charCode===13 || e.charCode===32){
		togglePrice();
		document.getElementById("inputCheckBox").checked = !document.getElementById("inputCheckBox").checked;
	}
} 

function keyFuncBtn(e) {
	e.preventDefault();
	if (e.charCode===13 || e.charCode===32){
		console.log('keyboard pressed..')
		//some code in case of 'space', 'enter' pressed..
		// ...
		//
		
		return false;
	}
	return false;

}