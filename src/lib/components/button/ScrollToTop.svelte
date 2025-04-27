<script lang="ts">
    import { onMount } from 'svelte';
    import { tick } from 'svelte';
  
    let showScrollToTop = false;
  
    onMount(() => {
      const handleScroll = () => {
        showScrollToTop = window.scrollY > 300;
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    });
  
    const scrollToTop = async () => {
      await tick();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  </script>
  
  {#if showScrollToTop}
    <div class="group fixed bottom-6 right-6 z-50">
      <button
        on:click={scrollToTop}
        class="relative p-2 rounded-full bg-white/10 backdrop-blur-md text-white shadow-3xl border border-white/20 hover:scale-110 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <!-- Icon with glow -->
        <div class="relative flex items-center justify-center w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffff" viewBox="0 0 256 256"><path d="M229.66,114.34l-96-96a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,32,128H72v56a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V128h40a8,8,0,0,0,5.66-13.66ZM176,112a8,8,0,0,0-8,8v56H88V120a8,8,0,0,0-8-8H51.31L128,35.31,204.69,112Zm8,104a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,216Z"></path></svg>
          <span class="absolute w-full h-full rounded-full animate-ping bg-blue-500 opacity-30"></span>
        </div>
  
        <!-- Hover Tooltip -->
        <span class="absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 text-xs bg-neutral-900 text-white px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
          Back to top
        </span>
      </button>
    </div>
  {/if}
  
  
  <style>
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  
    button[aria-label="Scroll to top"] {
      animation: fadeIn 0.4s ease-in-out;
    }
  </style>
  