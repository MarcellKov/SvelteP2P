<script>
	import "gun"
	import Register from "./Register.svelte";
    
	
</script>


<div class="landing_container">
<div class="landing_welcome">
<div class="welcome_body">

<input type="text" placeholder="Username" class="inpb">
<div class="line"> 
<input type="password" placeholder="Password" class="inpb" name="pw" id="pw" >
<!-- svelte-ignore a11y-click-events-have-key-events -->
<button on:mousemove={()=>{document.getElementById("pw").type="text"}} on:mouseleave={()=>{document.getElementById("pw").type="password"}} id="eye">
</div>
<div id="login" on:pointerover={()=>{document.getElementById("login").style.boxShadow='inset -5px -5px 10px #25252573, inset 6px 6px 3px #25252573 ';}} on:pointerleave={()=>{document.getElementById("login").style.boxShadow="-8px -8px 8px #ffffff73,  7px 7px 3px #25252573 "}}>
<button id="lp">LOGIN</button>
</div>
</div>
</div>
</div>

