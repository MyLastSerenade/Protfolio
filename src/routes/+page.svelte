<script lang="ts">
	import Card from '$lib/components/Card.svelte';

	$: innerWidth = 0;

	const images: string[] = [
		'https://utfs.io/f/df9d30c7-76ed-4e94-a1b9-d14497c0d069-jin30y.png',
		'https://utfs.io/f/28398481-2171-48bf-80fc-f24ad80677da-3vnu4g.jpg',
		'https://utfs.io/f/e5b5c7a3-ad54-4339-83f8-f8e64aa39a3e-sb7wfb.png',
		'https://utfs.io/f/e4ac85e9-f264-4aa1-9578-568b8cda6638-hv8iwq.jpg'
	];

</script>

<svelte:window bind:innerWidth />
<!--
{#if innerWidth > 1280}
	<div class="flex h-full w-full">
		{#each images as image, index}
			<Card {index} {image}></Card>
		{/each}
	</div>
{:else if innerWidth <= 1280}
	<div class="grid grid-cols-2 h-full w-full">
		{#each images as image, index}
		<div>
			<Card {index} {image}></Card>
		</div>
		{/each}
	</div>
{/if}
-->
<div class="flex h-full w-full">
	{#each images as image, index}
		<Card {index} {image}></Card>
	{/each}
</div>
