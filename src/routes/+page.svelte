<script lang="ts">
	import HoverCards from '$lib/components/card/HoverCard.svelte'; 
	import ProductCard from '$lib/components/card/CardProduct.svelte'; 
	import AnimatedCard from '$lib/components/circles/Circles.svelte';
	import Meteors from "$lib/components/card/Meteor.svelte";
	import ModulCard from "$lib/components/card/ModulCard.svelte";
	import Marquee from "$lib/components/card/MarqueeExample.svelte";
	import ProjectCard from "$lib/components/card/Product.svelte";
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
  <section class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
	<div class="text-center max-w-xl mb-10">
	<h2 class="text-2xl font-bold text-white mb-2">💻 Proyek Freelance</h2>
	<p class="text-neutral-400 text-justify justify-center">
		Beberapa proyek freelance yang saya kerjakan, dirancang dengan tujuan untuk memberikan solusi yang simpel dan efisien, serta mudah dipahami oleh peneliti</p>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 text-justify justify-center">
		<ProjectCard 
		  title="Sistem Penjualan Tabung Gas"
		  description="Sistem Penjualan Gas dengan dua mode transaksi: langsung dan konsinyasi. Menyediakan laporan real-time dan UI yang ramah pengguna."
		  buttonText="Lihat Detail"
		  buttonLink="https://sistem-penjualan-tabung-gas.vercel.app"
		/>
		
		<ProjectCard 
		  title="Sistem Pemesanan Menu Cafe"
		  description="Website sistem pemesanan untuk cafe yang mengintegrasikan Midtrans sebagai payment gateway, dengan desain responsif dan user-friendly."
		  buttonText="Lihat Detail"
		  buttonLink="https://sistem-pemesanan-cafe.vercel.app"
		/>
		
		<ProjectCard 
		  title="Sistem Absensi Face Recognition & Lokasi"
		  description="Sistem Absensi berbasis Face Recognition dan Lokasi untuk memudahkan pencatatan kehadiran dengan keamanan lebih baik dan akurasi data."
		  buttonText="Lihat Detail"
		  buttonLink="https://absensi-face-recognition.vercel.app"
		/>
		
		<ProjectCard 
		  title="Sistem Barcode Generated untuk FIFO"
		  description="Sistem FIFO untuk input barang masuk & keluar, secara otomatis menghasilkan barcode PNG dari nomor barcode teks setiap inputan barang."
		  buttonText="Lihat Detail"
		  buttonLink="https://sistem-barcode-fifo.vercel.app"
		/>
	  </div>
	  

	<div class="text-center max-w-xl mb-10 mt-10">
	<h2 class="text-2xl font-bold text-white mb-2">💻 Proyek Eksperimen</h2>
	<p class="text-neutral-400 text-justify justify-center">
		Beberapa proyek eksperimen yang saya kerjakan, dirancang untuk menguji konsep baru dan mengeksplorasi tech stack lainnya. Berikut adalah proyek-proyek yang telah saya kerjakan.
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 text-justify justify-center">
		<ProjectCard 
		  title="Ramal Khodam"
		  description="Website hiburan dengan ramalan khodam lucu dan unik yang memberikan hiburan penuh tawa."
		  buttonText="Lihat Detail"
		  buttonLink="https://khodam-lucu.vercel.app"
		/>
		
		<ProjectCard 
		  title="Bersama Si Cantikk"
		  description="Website digital memory dengan efek animasi 3D box interaktif untuk mengenang momen bersama orang tersayang."
		  buttonText="Lihat Detail"
		  buttonLink="https://bersamasicantikk.vercel.app"
		/>
		
		<ProjectCard 
		  title="Habede Kaka"
		  description="Website ucapan ulang tahun dengan animasi menarik untuk memberikan ucapan lebih spesial."
		  buttonText="Lihat Detail"
		  buttonLink="https://habedekaka.vercel.app"
		/>
		
		<ProjectCard 
		  title="Suki Yo Kobo"
		  description="Website aesthetic dengan vibes Jepang, cocok untuk wibu penggemar desain minimalis."
		  buttonText="Lihat Detail"
		  buttonLink="https://suki-yo-kobo.vercel.app"
		/>
		
		<ProjectCard 
		  title="Ibal Jadi Caleg"
		  description="Website kampanye digital dengan UI interaktif yang dapat dikustomisasi sesuai kebutuhan caleg."
		  buttonText="Lihat Detail"
		  buttonLink="https://ibaljadicaleg.vercel.app"
		/>
		
		<ProjectCard 
		  title="cmd-portofolio"
		  description="Portfolio website dengan desain cepat, ringan, dan SEO-friendly, dibuat menggunakan Typescript."
		  buttonText="Lihat Detail"
		  buttonLink="https://cmd-porto-fzmhq.vercel.app"
		/>
		
		<ProjectCard 
		  title="Yukita Puasa"
		  description="Website untuk mengingatkan waktu berbuka dan sahur selama bulan puasa dengan fitur interaktif seperti baca al-quran dan jadwal solat."
		  buttonText="Lihat Detail"
		  buttonLink="https://yukitapuasa.vercel.app"
		/>
	  </div>
	  
	  
	  <div class="text-center mt-16 max-w-xl mx-auto">
		  <h2 class="text-2xl font-bold text-white mb-2 ">Masih Banyak Lagi 🔥</h2>
		  <p class="text-neutral-400 text-justify justify-center">
			  Scroll terus ke bawah buat lihat komponen ui interaktif lainnya dari svelte yang diimplementasikan dalam pembuatan website ini dan juga berbagai produk unggulan hasil karya gue. Semua dibuat dengan 💖 & <code>Svelte</code>!
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
  