<script>
	import "gun"
	import Register from "./Register.svelte";

</script>



<div class="landing_container">
<div class="landing_welcome">
<div class="welcome_body">

<input type="text" placeholder="Username" id="inpb">
<div class="line">
<input type="password" placeholder="Password" id="pw">
<button on:click={()=>{document.getElementById("pw").type="text"}}></button>
</div>
<button>LOGIN</button>

</div>
</div>
</div>






