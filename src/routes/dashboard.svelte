<script context="module">

</script>
    
<script>
    import { collection, getDocs } from "firebase/firestore";
    import { db } from "../firestore.js";
    import Lab from './lab.svelte'
    
    let labs = []


    getDocs(collection(db, "lab")).then(data => {
            labs = data.docs
        })
        
        

</script>

<div id="labs" class="overflow-x-auto m-6">
    <h1 class="text-2xl font-bold">Lab Values</h1>
    <table class="table w-auto">
          <!-- head -->
    <thead>
        <tr>
            <th>Test ID</th>
            <th>Value</th>
        </tr>
    </thead>
    {#each labs as lab}
        <Lab id={lab.testID} lab={lab.data()}/>

    {/each}
</table>
</div>