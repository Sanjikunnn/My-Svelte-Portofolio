<script lang="ts">
    import { Motion } from 'svelte-motion';
    import { cn } from '$lib/utils';
  
    export let words: string;
    export let className: string | undefined = undefined;
    export let paragraphIndex: number = 0; // Menambahkan indeks untuk urutan animasi per paragraf
  
    const variants = {
      visible: (i: number) => ({
        opacity: 1,
        transition: {
          delay: paragraphIndex * 1 + (i * 0.2), // Mengatur delay untuk urutan animasi per kata
          duration: 2,
        },
      }),
      hidden: { opacity: 0 },
    };
  </script>
  
  <div class={cn('font-bold', className)}>
    <div class="mt-4">
      <div class="text-2xl leading-snug tracking-wide text-black dark:text-white">
        <Motion let:motion custom={0} {variants} initial="hidden" animate="visible">
          <div use:motion>
            {#each words.split(' ') as word, idx (`${word}${idx}`)}
              <Motion let:motion {variants} custom={idx + 1} initial="hidden" animate="visible">
                <span use:motion class="text-white dark:text-white">
                  {word}{' '}
                </span>
              </Motion>
            {/each}
          </div>
        </Motion>
      </div>
    </div>
  </div>
  