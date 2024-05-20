<script lang="ts">
	import Back from "$lib/components/Back.svelte";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

    let ready: boolean = false;

    onMount(() => {
        ready = true;
    })

</script>

<div class="relative h-full w-full bg-gradient-to-r from-gray-900 to-black">
    <Back />
    {#if ready}
	<h1 class="relative left-[15%] top-[20%] text-9xl font-bold"
    transition:fly={{x:500}}>Lorem ipsum</h1>
	<p class="relative left-[20%] top-[21%] w-1/3 text-lg font-medium"
    transition:fly={{y:500}}>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quisquam laborum tempora
		expedita ex rem officiis veniam nam illum cum, delectus obcaecati, porro beatae eveniet repellat
		eos maiores placeat perspiciatis?
	</p>

	<h1 class="relative left-[65%] top-[40%] text-7xl font-bold"
    transition:fly={{x:500}}>Lorem ipsum</h1>
	<p class="relative left-[40%] top-[41%] w-1/3 text-lg font-medium"
    transition:fly={{y:500}}>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quisquam laborum tempora
		expedita ex rem officiis veniam nam illum cum, delectus obcaecati, porro beatae eveniet repellat
		eos maiores placeat perspiciatis?
	</p>
    {/if}
</div>
