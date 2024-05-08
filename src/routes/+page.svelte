<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	const images: string[] = [
		'https://utfs.io/f/c52ff83b-d823-411e-a074-cdb0ba74c879-l6h7kv.jpg',
		'https://utfs.io/f/738b4624-6007-4192-a3d0-7fda7d3503b0-joq18b.jpg',
		'https://utfs.io/f/dba35f3d-8b9f-4611-aec7-f6687bda3864-1d.png',
		'https://utfs.io/f/e4ac85e9-f264-4aa1-9578-568b8cda6638-hv8iwq.jpg'
	];
</script>

<div class="flex h-full w-full">
	{#each images as image, index}
		<Card {index} {image}></Card>
	{/each}
</div>
