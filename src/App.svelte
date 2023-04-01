<script>
	import "gun"
	async function requestAccount() {

if(window.ethereum){
	try {
		const accounts = await window.ethereum.request({
			method: "eth_requestAccounts",
		});
		window.ethereum.request({method:"eth_"})
		console.log(accounts)           
	} catch (error) {
		console.log(error)
	}
}

}
	const gun=Gun({peers:["http:localhost:5200/gun"],})
	var k
	var g
	gun.get("message").on((a)=>{g=a["data"]})
</script>

<h1>Üdv a DeChatban</h1>
<input bind:value={k} on:input={gun.get("message").put({"data":k})}>
<h1>{g}</h1>
<button on:click={requestAccount()}>AAA</button>
