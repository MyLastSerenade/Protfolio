<script lang="ts">
	import { onMount } from 'svelte';
	import { cardindex } from './cardstore';
	export let index: number;
	export let image: string;
	let root: HTMLHtmlElement | null;

	onMount(() => {
		if (document) {
			const img: HTMLImageElement | null = document.getElementById('img') as HTMLImageElement;
			root = document.querySelector(':root');
			if (root) {
				const widthValue = img.width + 8;
				root.style.setProperty('--widthValue', `${widthValue}px`);
				console.log('imgwidth', img?.width);
			}
		}
	});

	function dropCurtain(e: MouseEvent) {
		const bg: HTMLImageElement | null = document.getElementById('img') as HTMLImageElement;
		if (root) {
			root.style.setProperty('--topValue', String(bg?.height || 0));
		}
		$cardindex = index;
		const curtainElement = document.getElementById('curtain' + index);
		if (curtainElement) {
			let currentPosition = parseInt(curtainElement.style.top) || 0;
			const targetPosition = bg?.height || 0;

			const interval = setInterval(() => {
				if (currentPosition >= targetPosition) {
					clearInterval(interval);
				} else {
					currentPosition += 10;
					curtainElement.style.top = currentPosition + 'px';
				}
			}, 5);
		}
	}

	function raiseCurtain() {
		$cardindex = -1;
		const curtainElement = document.getElementById('curtain' + index);
		if (curtainElement) {
			let currentPosition = parseInt(curtainElement.style.top) || 0;
			const targetPosition = 0;

			const interval = setInterval(() => {
				if (currentPosition <= targetPosition) {
					clearInterval(interval);
				} else {
					currentPosition -= 10;
					curtainElement.style.top = currentPosition + 'px';
				}
			}, 5);
		}
	}
</script>

<div class="xl:mt-8 h-[1080px] w-full">
	<div class="container">
		<div
			id="bg"
			class="bg"
			on:mouseenter={(e) => dropCurtain(e)}
			on:mouseleave={() => raiseCurtain()}
			role="button"
			tabindex="0"
		>
			<div id={'curtain' + index} class="curtain rounded-xl"></div>

			<img
				class="min-h-full min-w-full rounded-xl border-4 border-gray-300"
				id="img"
				style="position: absolute;"
				src={image}
				alt="test"
			/>
		</div>
		<div class="hider h-full w-full bg-black"></div>
	</div>
</div>

<style>
	.container {
		position: relative;
		max-height: max-content;
		height: 100%;
		width: 100%;
		background-color: transparent;
	}

	.bg {
		position: relative;
		height: 100%;
		width: 100%;
		background-color: transparent;
		opacity: 1;
		z-index: 1000;
	}

	.curtain {
		position: absolute;
		z-index: 998;
		opacity: 0.9;
		top: 0px;
		height: 100%;
		width: var(--widthValue);
		background-color: black;
	}

	.hider {
		position: absolute;
		top: var(--topValue);
		left: 0;
		z-index: 1000;
	}

	img {
		z-index: 997;
	}
</style>
