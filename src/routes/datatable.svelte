<!-- see https://vincjo.fr/svelte-simple-datatables/#/
This is not working yet, but could be good
We could have a form on the side that is populated by whatever row is highlighted, then have the edit and entry function as seen in the video at https://www.youtube.com/watch?v=Rr2kKjYIYRM -->

<script>
    import { collection, getDocs } from "firebase/firestore";
    import { db } from "../firestore.js";

    let labs = []
    getDocs(collection(db, "lab")).then(data => {
            labs = data.docs
        })  
    import { Datatable } from 'svelte-simple-datatables'

    const settings = { columnFilter: true }
    let rows
    let lab = {}
    let id = ''
    let value = ''
</script>

<Datatable settings={settings} data={labs} bind:dataRows={rows}>
    <thead>
        <th data-key="first_name">First Name</th>
        <th data-key="last_name">Last Name</th>

    </thead>
    <tbody>
    {#if rows}
    
        {#each rows as row}
        row={row.data()}
        <tr>
            <td>{row.testID}</td>
            <td>{row.value}</td>
        </tr>
        {/each}
    {/if}
    </tbody>
</Datatable>

<style>
    td{text-align:center;padding:4px 0}
</style>