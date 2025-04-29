<script lang="ts">
  import { Motion, AnimateSharedLayout, AnimatePresence } from "svelte-motion";
  import { cn } from "$lib/utils";
  import Foto from "$lib/images/components/svelte1.png";
  import Foto1 from "$lib/images/components/svelte2.png";
  import Foto2 from "$lib/images/components/svelte3.png";
  import Foto3 from "$lib/images/components/svelte4.png";
  import Foto4 from "$lib/images/components/svelte5.png";

  let hoverdIdx = 0;
  const items = [
  {
    id: 1,
    title: "Svelte Animations",
    description: "Kumpulan animasi keren berbasis Svelte untuk mempercantik tampilan website dengan transisi halus dan dinamis.",
    href: "https://animation-svelte.vercel.app",
    backgroundImage: `url(${Foto})`
  },
  {
    id: 2,
    title: "Svelte Magic UI",
    description: "Set komponen UI modern dengan efek-efek magis dan interaktif untuk membangun tampilan aplikasi yang atraktif.",
    href: "https://animation-svelte.vercel.app/magic",
    backgroundImage: `url(${Foto1})`
  },
  {
    id: 3,
    title: "Svelte Indie UI",
    description: "Komponen UI bergaya indie, minimalis namun stylish, cocok untuk proyek-proyek kreatif dan inovatif.",
    href: "https://animation-svelte.vercel.app/in",
    backgroundImage: `url(${Foto2})`
  },
  {
    id: 4,
    title: "Svelte Luxe UI",
    description: "Desain UI mewah dan premium untuk menciptakan tampilan aplikasi yang elegan dan berkelas.",
    href: "https://animation-svelte.vercel.app/luxe",
    backgroundImage: `url(${Foto3})`
  },
  {
    id: 5,
    title: "Svelte Acterenity UI",
    description: "Koleksi komponen fleksibel dengan animasi aktif dan layout responsif untuk membangun aplikasi modern.",
    href: "https://animation-svelte.vercel.app/a/components/bento-grid",
    backgroundImage: `url(${Foto4})`
  },
];


  export let containerClassName = "";
</script>

<div
  on:mouseleave={() => { hoverdIdx = 0; }}
  class={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4", containerClassName)}
>
  <AnimateSharedLayout>
    {#each items as one, i}
      <a
        href={one.href}
        target="_blank"
        on:mouseenter={() => (hoverdIdx = one.id)}
        class="relative flex flex-col gap-3 p-4 rounded-xl border border-white/10 transition-colors bg-transparent overflow-hidden"
        style:background-image={hoverdIdx === one.id ? one.backgroundImage : "none"}
        style="background-size: cover; background-position: center; backdrop-blur-lg;"
      >
        {#if hoverdIdx === one.id}
          <AnimatePresence let:item list={[{ key: hoverdIdx }]}>
            <Motion
              layoutId="cardeffect"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.15 } }}
              exit={{ opacity: 0.8, transition: { duration: 2, delay: 0.2 } }}
              let:motion
            >
              <span
                use:motion
                class="absolute inset-0 z-0 block h-full w-full rounded-xl cardHoverEffect"
              ></span>
            </Motion>
          </AnimatePresence>
        {/if}
        <div 
          class="z-[1] space-y-3 transition-opacity duration-300 h-[200px] flex flex-col justify-center" 
          class:opacity-0={hoverdIdx === one.id}
          class:opacity-100={hoverdIdx !== one.id}
        >
          <h1 class="font-medium text-white text-center">{one.title}</h1>
          <p class="text-white text-center">{one.description}</p>
        </div>
      </a>
    {/each}
  </AnimateSharedLayout>
</div>

