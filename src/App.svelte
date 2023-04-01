<script>
	import "gun"
	
	
	import {requestAccount} from "./webfunctions"
	const gun=Gun({peers:["http:localhost:5200/gun"],})
	var k
	var g
	gun.get("message").on((a)=>{g=a["data"]})
</script>

<h1>Üdv a DeChatban</h1>
<input bind:value={k} on:input={gun.get("message").put({"data":k})}>
<h1>{g}</h1>
<button on:click={requestAccount}>METAMASK LOGIN</button>
