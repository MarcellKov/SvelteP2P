async function requestAccount() {
	if(window.ethereum){
	try {
		const accounts = await window.ethereum.request({
			method: "eth_requestAccounts",
		});
		console.log(accounts)           
	} catch (error) {
		console.log(error)
	}
}

}
export {requestAccount}