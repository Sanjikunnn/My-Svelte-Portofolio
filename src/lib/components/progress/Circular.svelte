<script>
  import { onMount } from "svelte";
  import CircularProgressBar from "$lib/components/progress/AnimatedCircular.svelte";
  import { spring } from "svelte/motion";

  let value = spring(0, {
    stiffness: 0.2,
    damping: 0.5,
  });

  onMount(async () => {
    const delay = (ms) => new Promise((r) => setTimeout(r, ms));
    const sequence = [20, 40, 60, 80, 100];

    for (let v of sequence) {
      value.set(v);
      await delay(1000); // kamu bisa ganti ke delay lebih pendek juga
    }
  });
</script>

<CircularProgressBar
  max={100}
  min={0}
  value={$value}
  gaugePrimaryColor="rgb(79 70 229)"
  gaugeSecondaryColor="rgba(0, 50, 100, 0.1)"
/>
