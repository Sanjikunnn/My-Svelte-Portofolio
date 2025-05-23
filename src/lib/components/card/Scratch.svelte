<script lang="ts">
  import { onMount } from "svelte";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { cn } from "$lib/utils";
  import { Motion, useAnimation } from "svelte-motion";
  
  export let width: number;
  export let height: number;
  export let minScratchPercentage: number = 50;
  export let onComplete: (() => void) | undefined;
  let _class: string | undefined;
  export { _class as class };
  export let gradientColors: [string, string, string] = [
    "#A97CF8",
    "#F38CB8",
    "#FDCC92",
  ];

  let isScratching = false;
  let isComplete = false;
  let canvas: HTMLCanvasElement | null;
  let ctx: CanvasRenderingContext2D | null;
  let showContent = false;  // Kondisi untuk menampilkan slot
  let showText = true;  // Kondisi untuk menampilkan teks "Gosok-gosok berhadiah"
  let showSuccessText = false;  // Kondisi untuk menampilkan teks "Ganteng gaaa?"
  
  let controls = useAnimation();
  
  onMount(() => {
    if (canvas) {
      ctx = canvas.getContext("2d");
      refillCanvas();
      if (ctx) {
        ctx.fillStyle = "#ccc";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
  
        const gradient = ctx.createLinearGradient(
          0,
          0,
          canvas.width,
          canvas.height
        );
        gradient.addColorStop(0, gradientColors[0]);
        gradient.addColorStop(0.5, gradientColors[1]);
        gradient.addColorStop(1, gradientColors[2]);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  
    const handleMouseMove = (event: MouseEvent) => {
      if (!isScratching) return;
      scratch(event.clientX, event.clientY);
    };
  
    const handleTouchMove = (event: TouchEvent) => {
      if (!isScratching) return;
      const touch = event.touches[0];
      scratch(touch.clientX, touch.clientY);
    };
  
    const stopScratching = () => {
      isScratching = false;
      checkCompletion();
    };
  
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("mouseup", stopScratching);
    document.addEventListener("touchend", stopScratching);
  
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mouseup", stopScratching);
      document.removeEventListener("touchend", stopScratching);
    };
  });
  
  function handleMouseDown() {
    isScratching = true;
  }
  
  function handleTouchStart() {
    isScratching = true;
  }
  
  function scratch(clientX: number, clientY: number) {
    if (canvas && ctx) {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left + 16;
      const y = clientY - rect.top + 16;
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  async function startAnimation() {
    await controls.start({
      scale: [1, 1.5, 1],
      rotate: [0, 10, -10, 10, -10, 0],
      transition: { duration: 0.5 },
    });
    if (onComplete) onComplete();
  }
  
  function checkCompletion() {
    if (isComplete) return;

    if (canvas && ctx) {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      const totalPixels = pixels.length / 4;
      let clearPixels = 0;

      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) clearPixels++;
      }

      const percentage = (clearPixels / totalPixels) * 100;

      if (percentage >= minScratchPercentage) {
        isComplete = true;
        showContent = true; // tampilkan slot
        showText = false;  // sembunyikan teks "Gosok-gosok berhadiah"
        showSuccessText = true;  // tampilkan teks "Ganteng gaaa?"
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        startAnimation();

        setTimeout(() => {
          showSuccessText = false;
        }, 3000);
      }
    }
  }

  function refillCanvas() {
    if (canvas && ctx) {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "#ccc";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, gradientColors[0]);
      gradient.addColorStop(0.5, gradientColors[1]);
      gradient.addColorStop(1, gradientColors[2]);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }
</script>

<Motion let:motion animate={controls}>
  <div
    use:motion
    class={cn("scratch-container", _class)}
    style="width: {width}px; height: {height}px; cursor:
     url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNSIgc3R5bGU9ImZpbGw6I2ZmZjtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6MXB4OyIgLz4KPC9zdmc+'), auto; z-index: 90;"
  >
    <canvas
      bind:this={canvas}
      {width}
      {height}
      class="z-10"
      on:mousedown={handleMouseDown}
      on:touchstart={handleTouchStart}
    ></canvas>
    {#if showContent}
      <div style="position: relative;">
        <slot />
      </div>
    {/if}
    {#if showText}
      <div class="floating-text">
        <p class="text-xl font-bold text-white">Gosok2 berhadiah!</p>
      </div>
    {/if}
    {#if showSuccessText}
      <div class="floating-text">
        <p class="text-l font-bold text-white">Ganteng gaaa?</p>
      </div>
    {/if}
  </div>
</Motion>

<style>
  .scratch-container {
    position: relative;
    user-select: none;
    overflow: hidden;
  }

  canvas {
    position: absolute;
    top: 0;
    left: 0;
  }

  .floating-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    text-align: center;
  }
</style>
