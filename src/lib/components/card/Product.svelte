<script lang="ts">
  import { onDestroy } from "svelte";

  export let title: string;
  export let description: string;
  export let buttonText: string = "";
  export let buttonLink: string = "#";
  export let imageList: string[] = [];

  let currentImageIndex = 0;
  let currentImage = "";
  let interval: any;

  $: if (imageList.length > 0) {
    currentImage = imageList[currentImageIndex];
  }

  // Start interval saat component dimount
  interval = setInterval(() => {
    if (imageList.length > 0) {
      currentImageIndex = (currentImageIndex + 1) % imageList.length;
      currentImage = imageList[currentImageIndex];
    }
  }, 1000);

  // Bersihkan interval saat komponen dihancurkan
  onDestroy(() => {
    clearInterval(interval);
  });
</script>


<div class="animate-shine max-w-[350px] w-full rounded-xl text-sm border border-white/10
     bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-5 transition-colors">
  <div class="flex flex-col gap-2 items-center">
    {#if currentImage}
      <img src={currentImage} alt="Project Image" class="w-full h-[180px] object-cover rounded-lg mb-2 transition-all duration-500" />
    {/if}
    <h3 class="text-xl font-semibold text-neutral-200 text-center">{title}</h3>
    <p class="text-sm leading-[1.5] text-neutral-400 text-justify">{description}</p>
    <a href={buttonLink} target="_blank" class="inline-flex animate-shine items-center justify-center rounded-xl text-sm border border-neutral-800 
        bg-[linear-gradient(110deg,#101010,45%,#1e2631,55%,#101010)] bg-[length:200%_100%] 
        px-4 py-1 font-medium text-neutral-200 transition-colors">
      {buttonText}
    </a>
  </div>
</div>
