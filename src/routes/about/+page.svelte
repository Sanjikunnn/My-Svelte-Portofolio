<script lang="ts">
	import ScratchToReveal from "$lib/components/card/Scratch.svelte";
	import ShineBorder from "$lib/components/card/Shine.svelte";
	import Foto from "$lib/images/fotogw.jpeg";
	import TextGenerateEffect from "$lib/components/text/Generate.svelte";
  
	const paragraphs = [
    "Hai, saya pengembang web yang suka banget sama yang namanya tantangan! Lebih dari 1 tahun berkutat di dunia coding, mulai dari website simple hingga aplikasi yang lebih kompleks.",
    "Sekarang, saya fokus banget ngulik teknologi seperti SvelteKit ini, supaya bisa bikin aplikasi yang enggak cuma powerful tapi juga gampang dipakai dan reusable.",
    "Btw, di luar ngoding, saya senang ngegali tren teknologi terbaru. Sering ikut proyek open-source di github dan eksperimen sama desain UI/UX.",
    "Jadi, kalau kamu punya ide atau proyek yang butuh kolaborasi, langsung aja hubungi saya. Siapa tahu kita bisa kerja bareng dan bikin sesuatu yang keren!",
    "Saya selalu berusaha untuk memberikan solusi yang nggak cuma ‘beres’ tapi juga bener-bener ngasih dampak positif buat pengguna.",
    "Selain web development, saya juga tertarik dengan software engineering, khususnya yang berhubungan dengan integrasi API dan pengolahan data besar.",
    "Bekerja dengan teknologi yang terus berkembang itu memang menantang, tapi buat saya, itu justru yang bikin makin seru! Saya selalu berusaha belajar hal baru supaya hasil kerja saya makin oke.",
    "Punya proyek baru atau ide yang butuh solusi kreatif? Jangan ragu untuk menghubungi saya! Saya terbuka untuk tantangan baru dan kerjasama yang seru.",
    "Saya percaya banget kalau teknologi itu punya potensi besar untuk bikin hidup kita lebih mudah dan efisien. Jadi, saya ingin jadi bagian dari perubahan itu.",
    "Kalau kamu lagi cari partner buat proyek baru, atau butuh ngobrolin ide-ide inovatif, langsung aja reach out! Saya siap membantu mewujudkannya."
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

  <!-- Section untuk teks dengan efek animasi -->
  <section class="min-h-screen max-w-4xl mx-auto text-left justify-center space-y-1">
    <!-- Judul animasi -->
    <TextGenerateEffect words="Faizal Muhamad Iqbal, S.Kom" className="text-xl md:text-6xl font-bold text-center text-white" paragraphIndex={0} />
  
    <!-- Paragraf-paragraf animasi -->
    {#each paragraphs as text, i}
      <TextGenerateEffect
        words={text}
        className={`text-l leading-relaxed text-gray-800 dark:text-gray-200 ${i === 1 ? 'bg-gray-900 text-green-400 p-4 rounded-lg text-sm' : ''}`}
        paragraphIndex={i + 1} 
      />
    {/each}
  </section>
</div>