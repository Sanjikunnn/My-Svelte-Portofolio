<script lang="ts">
	import HoverCards from '$lib/components/card/HoverCard.svelte'; 
	import ProductCard from '$lib/components/card/CardProduct.svelte'; 
	import AnimatedCard from '$lib/components/circles/Circles.svelte';
	import Meteors from "$lib/components/card/Meteor.svelte";
	import ModulCard from "$lib/components/card/ModulCard.svelte";
	import Marquee from "$lib/components/card/MarqueeExample.svelte";
	import Circular from "$lib/components/progress/Circular.svelte";
	import Scroll from "$lib/components/button/ScrollToTop.svelte";

  </script>
  
  <svelte:head>
	  <title>Faizal Muhamad Iqbal - Portofolio</title>
	  <meta name="description" content="Portofolio Faizal Muhamad Iqbal, seorang freelance fullstack developer yang kreatif dan dinamis." />
  </svelte:head>
  
  <!-- Section untuk Meteors -->
  <section class="mb-10">
   <Scroll />
  </section>
  <!-- Section untuk Meteors -->
  <section class="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border-none bg-transparent p-10 md:shadow-l">
	  <Meteors number={100} />
	  <p class="z-1 whitespace-pre-wrap text-center text-2xl tracking-tight font-semibold bg-gradient-to-br from-white to-blue-900/40 text-transparent bg-clip-text">
		  Faizal Muhamad Iqbal <br/> Fullstack Developer
	  </p>
  </section>
  <!-- ModulCard Section -->
  	<section class="max-w-6xl mx-auto mt-10">
		<ModulCard />
	</section>
  <!-- AnimatedCard Section -->
  <section class="mb-10">
	  <AnimatedCard />
  </section>
 <!-- Circular Sticky Section -->
<div class="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
	<Circular />
  </div>
  
  <!-- UI Project Section -->
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
	  <div class="text-center max-w-xl mb-10">
		  <h2 class="text-2xl font-bold text-white mb-2">💻 Proyek & Eksperimen UI</h2>
		  <p class="text-neutral-400">
			  Beberapa komponen UI, layout, dan eksperimen desain gue. Semua dirancang dengan pendekatan modern yang clean, cocok buat project startup, portfolio, sampe produk komersil.
		  </p>
	  </div>
  
	  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
		  {#each Array(6) as _, i}
			  <div class="animate-shine max-w-[350px] w-full rounded-xl text-sm border border-white/10 
				  bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-5 transition-colors">
				  <div class="flex flex-col gap-2">
					  <h3 class="text-xl font-semibold text-neutral-200">Project #{i + 1}</h3>
					  <p class="text-sm leading-[1.5] text-neutral-400">
						  Salah satu project favorit gue, dibuat dengan sentuhan dark mode yang smooth dan performa optimal.
					  </p>
					  <button class="inline-flex animate-shine items-center justify-center rounded-xl text-sm border border-neutral-800 
						  bg-[linear-gradient(110deg,#101010,45%,#1e2631,55%,#101010)] bg-[length:200%_100%] 
						  px-4 py-1 font-medium text-neutral-200 transition-colors">
						  Lihat Detail
					  </button>
				  </div>
			  </div>
		  {/each}
	  </div>
  
	  <div class="text-center mt-16 max-w-xl mx-auto">
		  <h2 class="text-2xl font-bold text-white mb-2">Masih Banyak Lagi 🔥</h2>
		  <p class="text-neutral-400">
			  Scroll terus ke bawah buat lihat komponen interaktif lainnya dan berbagai produk unggulan hasil karya gue. Semua dibuat dengan 💖 & <code>Svelte</code>!
		  </p>
	  </div>
  </section>
  
  <!-- HoverCards Section -->
  <HoverCards containerClassName="mt-10 mb-10" />
  
  <!-- Produk Unggulan Section -->
  <section>
	  <h1 class="text-2xl font-bold mb-4 text-white text-center">Produk Unggulan</h1>
	  <div class="flex flex-wrap gap-6 justify-center">
		  <ProductCard />
		  <ProductCard />
		  <ProductCard />
		  <ProductCard />
	  </div>
  </section>

  <!-- Marquee Section -->
  <section class="mb-10">
	<Marquee />
</section>
  <style>
	  section {
		  display: flex;
		  flex-direction: column;
		  justify-content: center;
		  align-items: center;
		  flex: 0.6;
	  }
  
	  .welcome {
		  display: block;
		  position: relative;
		  width: 100%;
		  height: 0;
		  padding: 0 0 calc(100% * 495 / 2048) 0;
	  }
  
	  .welcome img {
		  position: absolute;
		  width: 100%;
		  height: 100%;
		  top: 0;
		  display: block;
	  }
  
	  /* Responsive adjustments */
	  @media screen and (max-width: 640px) {
		  .grid-cols-1 {
			  grid-template-columns: 1fr; /* 1 column for small screens */
		  }
  
		  .mb-10 {
			  margin-bottom: 10px; /* reduce margin for small screens */
		  }
	  }
  
	  @media screen and (min-width: 640px) {
		  .grid-cols-2 {
			  grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
		  }
	  }
  
	  @media screen and (min-width: 1024px) {
		  .grid-cols-3 {
			  grid-template-columns: repeat(3, 1fr); /* 3 columns for large screens */
		  }
	  }
  
	  @media screen and (min-width: 1280px) {
		  .max-w-6xl {
			  max-width: 1200px; /* Adjust maximum width for larger screens */
		  }
	  }
  
	  /* Additional margin spacing for sections */
	  section > .max-w-6xl {
		  margin-top: 30px; /* Add spacing to avoid overlap */
	  }
  </style>
  