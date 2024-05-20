<script lang="ts">
	import { goto } from "$app/navigation";

</script>

<div class="relative flex flex-row gap-2 text-2xl">
    <button on:click={() => goto('/')} class="icon">arrow_back</button>
    <p>back</p>
</div>

<style>
    .icon {
        font-family: "Material Symbols Outlined";
        font-weight: 900;
    }

</style>