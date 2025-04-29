<script lang="ts">
	import ScratchToReveal from "$lib/components/card/Scratch.svelte";
	import ShineBorder from "$lib/components/card/Shine.svelte";
	import Foto from "$lib/images/fotogw.jpeg";
	import TextGenerateEffect from "$lib/components/text/Generate.svelte";
  import InteractiveHover from "$lib/components/button/Interactive.svelte";
  import FlipText from "$lib/components/text/Flip.svelte";
	import Circular from "$lib/components/progress/Circular.svelte";
	import Scroll from "$lib/components/button/ScrollToTop.svelte";
	const paragraphs = [
    "Halo, saya adalah seorang programmer pemula yang saat ini sedang fokus membangun pondasi karier di dunia teknologi, khususnya di bidang web development. Ketertarikan saya terhadap dunia coding bermula dari rasa penasaran tentang bagaimana sebuah website bisa bekerja. Dari situ, saya mulai belajar secara otodidak, mulai dari dasar seperti HTML, CSS, Laravel, JavaScript, sampai sekarang berkembang ke framework modern seperti Astro, dan Svelte",
    "Selain belajar mandiri, saya juga mengasah kemampuan lewat pengalaman freelance. Salah satu pengalaman berharga yang saya jalani adalah menjadi joki skripsi. Hingga saat ini, saya sudah membantu beberapa orang dalam menyelesaikan project skripsinya, terutama dalam pembuatan aplikasi berbasis web. Dari pengalaman itu, saya tidak hanya mengasah skill teknis, tapi juga belajar soal komunikasi dengan klien, memahami kebutuhan orang lain, mengatur deadline, dan bertanggung jawab penuh atas hasil kerja saya.",
    "Di dunia programming, saya tertarik mengembangkan kemampuan di bidang web application, backend development, dan API integration. Saya juga mulai mencoba mengeksplorasi dunia mobile app development karena merasa teknologi saat ini semakin mengarah ke arah mobile-first. Selain itu, saya punya ketertarikan di bidang UI/UX sederhana, terutama soal bagaimana membuat user experience yang nyaman dan responsif.",
    "Minat kerja saya ke depan adalah bergabung dengan tim pengembang di startup atau perusahaan teknologi yang aktif berkembang, di mana saya bisa belajar lebih banyak, mendapatkan bimbingan dari senior, dan berkontribusi nyata lewat project-project yang dikerjakan. Saya juga tidak menutup kemungkinan untuk terus menjalani freelance di samping pekerjaan utama, karena dari sana saya merasa banyak mendapatkan tantangan baru yang seru untuk perkembangan skill saya.",
    "Saya percaya, dunia IT itu luas dan terus berubah cepat. Karena itu, saya berkomitmen untuk terus belajar, beradaptasi, dan membuka diri terhadap ilmu-ilmu baru yang bisa menunjang perjalanan karier saya ke depan. Bagi saya, selama ada kemauan untuk belajar dan berkembang, kesempatan akan selalu ada."
];


</script>

<svelte:head>
  <title>About Me</title>
  <meta name="description" content="About me" />
</svelte:head>

<div class="text-column">
  <h1 class="text-4xl font-bold text-center text-white mt-10">About Me</h1>

  <!-- Kontainer untuk Gambar dan Scratch -->
  <div class="z-10 flex items-center justify-center mt-5 mb-0">
    <div class="flex justify-center items-center w-full min-h-[350px]">
      <!-- Kontainer untuk gambar dan area scratch -->
      <div class="flex justify-center items-center w-full min-h-[350px]">
        <ShineBorder>
          <ScratchToReveal
            width={250}
            height={250}
            minScratchPercentage={70}
            class="flex items-center justify-center bg-gray-100"
            gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
            onComplete={() => {
              console.log("Scratch complete!");
            }}
          >
            <img
              src={Foto}
              alt="Foto Faizal"
              class="w-full h-full object-cover rounded border-none border-white"
            />
          </ScratchToReveal>
        </ShineBorder>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center h-full">
    <a
    href="https://drive.google.com/uc?export=download&id=1i5WvvDsSI_ZqAXohPD6EwUNmqtsJps-k"
    download
    >
      <InteractiveHover text="📑 Curriculum Vitae" class="text-sm" />
    </a>
  </div>
  <!-- Circular Sticky Section -->
  <div class="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
    <Circular />
  </div>
  <!-- Section untuk scroll -->
  <section class="mb-10">
   <Scroll />
  </section>
  <!-- Section untuk teks dengan efek animasi -->
  <section class="min-h-screen max-w-4xl mx-auto text-justify justify-center space-y-0">
    <!-- Judul animasi -->
    <FlipText
      class="text-2xl sm:text-xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white dark:text-white mt-5"
      word="Faizal Muhamad Iqbal, S.Kom"
    />
  
    <TextGenerateEffect words="" className="text-xl md:text-6xl font-bold text-center text-white" paragraphIndex={0} />
    
    {#each paragraphs as text, i}
      <TextGenerateEffect
        words={text}
        className={`text-l leading-relaxed text-gray-800 dark:text-gray-200 ${i === 1 ? 'bg-gray-900 text-green-400 p-2 rounded-lg text-sm' : ''}`}
        paragraphIndex={i + 1} 
      />
    {/each}
  </section>
</div>