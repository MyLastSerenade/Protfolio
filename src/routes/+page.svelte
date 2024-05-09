<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	const images: string[] = [
		'https://utfs.io/f/df9d30c7-76ed-4e94-a1b9-d14497c0d069-jin30y.png',
		'https://utfs.io/f/90bb3279-4907-4bee-a0d5-2b0c474f1184-sb7weg.png',
		'https://utfs.io/f/e5b5c7a3-ad54-4339-83f8-f8e64aa39a3e-sb7wfb.png',
		'https://utfs.io/f/e4ac85e9-f264-4aa1-9578-568b8cda6638-hv8iwq.jpg'
	];
</script>

<div class="flex h-full w-full">
	{#each images as image, index}
		<Card {index} {image}></Card>
	{/each}
</div>
