<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { tick } from 'svelte';

	export let text: string = "";
	export let duration = 0.3;
	let _class: string = "";
	export { _class as class };

	let visible = true;
	let useSlot = false;

	const startLoop = async () => {
		while (true) {
			visible = true;
			await tick();
			await new Promise(r => setTimeout(r, (text.length || 20) * (duration + 0.05) * 1000));

			visible = false;
			await tick();
			await new Promise(r => setTimeout(r, 1000));
		}
	};

	$: useSlot = !text;

	startLoop();
</script>

{#if visible}
	{#if useSlot}
		<!-- Pakai slot -->
		<Motion
			initial={{ opacity: 0, filter: "blur(4px)", rotateX: 90, y: 5 }}
			transition={{ ease: "easeOut", duration }}
			animate={{ opacity: 1, filter: "blur(0px)", rotateX: 0, y: 0 }}
			let:motion
		>
			<div use:motion class="inline-block whitespace-pre tracking-[-1.8px]">
				<slot />
			</div>
		</Motion>
	{:else}
		<!-- Pakai text -->
		<div class="inline-block whitespace-pre tracking-[-1.8px]">
			{#each text.split("") as item, index}
				<Motion
					initial={{ opacity: 0, filter: "blur(4px)", rotateX: 90, y: 5 }}
					transition={{
						ease: "easeOut",
						duration: duration,
						delay: index * 0.015,
					}}
					animate={{
						opacity: 1,
						filter: "blur(0px)",
						rotateX: 0,
						y: 0,
					}}
					let:motion
				>
					<span
						use:motion
						class="inline-block whitespace-pre tracking-tighter text-neutral-200"
					>
						{item}
					</span>
				</Motion>
			{/each}
		</div>
	{/if}
{/if}
