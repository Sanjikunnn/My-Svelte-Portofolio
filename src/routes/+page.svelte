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
	import Absen1 from "$lib/images/project/absen/absen1.jpg";
	import Absen2 from "$lib/images/project/absen/absen2.jpg";
	import Absen3 from "$lib/images/project/absen/absen3.jpg";
	import Fifo1 from "$lib/images/project/fifo/fifo1.jpg";
	import Gas1 from "$lib/images/project/gas/gas1.jpg";
	import Gas2 from "$lib/images/project/gas/gas2.jpg";
	import Gas3 from "$lib/images/project/gas/gas3.jpg";
	import Gas4 from "$lib/images/project/gas/gas4.jpg";
	import Gas5 from "$lib/images/project/gas/gas5.jpg";
	import Kafe1 from "$lib/images/project/kafe/kafe1.jpg";
	import Kafe2 from "$lib/images/project/kafe/kafe2.jpg";
	import Kafe3 from "$lib/images/project/kafe/kafe3.jpg";
	import Kafe4 from "$lib/images/project/kafe/kafe4.jpg";
	import Kafe5 from "$lib/images/project/kafe/kafe5.jpg";
	import Caleg1 from "$lib/images/project/caleg/caleg1.png";
	import Caleg2 from "$lib/images/project/caleg/caleg2.png";
	import Caleg3 from "$lib/images/project/caleg/caleg3.png";
	import Caleg4 from "$lib/images/project/caleg/caleg4.png";
	import Caleg5 from "$lib/images/project/caleg/caleg5.png";
	import Caleg6 from "$lib/images/project/caleg/caleg6.png";
	import Caleg7 from "$lib/images/project/caleg/caleg7.png";
	import Cantik1 from "$lib/images/project/cantik/cantik1.png";
	import Cantik2 from "$lib/images/project/cantik/cantik2.png";
	import Cantik3 from "$lib/images/project/cantik/cantik3.png";
	import Cmd1 from "$lib/images/project/cmd/cmd1.png";
	import Cmd2 from "$lib/images/project/cmd/cmd2.png";
	import Cmd3 from "$lib/images/project/cmd/cmd3.png";
	import Cmd4 from "$lib/images/project/cmd/cmd4.png";
	import Hbd1 from "$lib/images/project/hbd/hbd1.png";
	import Hbd2 from "$lib/images/project/hbd/hbd2.png";
	import Hbd3 from "$lib/images/project/hbd/hbd3.png";
	import Hbd4 from "$lib/images/project/hbd/hbd4.png";
	import Hbd5 from "$lib/images/project/hbd/hbd5.png";
	import Khodam1 from "$lib/images/project/khodam/khodam.png";
	import Khodam2 from "$lib/images/project/khodam/khodam1.png";
	import Khodam3 from "$lib/images/project/khodam/khodam2.png";
	import Sukiyo1 from "$lib/images/project/sukiyo/sukiyo1.png";
	import Sukiyo2 from "$lib/images/project/sukiyo/sukiyo2.png";
	import Yukita1 from "$lib/images/project/yukita/yukita1.png";
	import Yukita2 from "$lib/images/project/yukita/yukita2.png";
	import Yukita3 from "$lib/images/project/yukita/yukita3.png";
	import Yukita4 from "$lib/images/project/yukita/yukita4.png";
	import Yukita5 from "$lib/images/project/yukita/yukita5.png";

	import Neo1 from "$lib/images/project/neobrutalism/Screenshot (166).png";
	import Neo2 from "$lib/images/project/neobrutalism/Screenshot (167).png";
	import Neo3 from "$lib/images/project/neobrutalism/Screenshot (168).png";
	import Neo4 from "$lib/images/project/neobrutalism/Screenshot (169).png";
	import Neo5 from "$lib/images/project/neobrutalism/Screenshot (170).png";
	
	import Ang1 from "$lib/images/project/koncodewe/Screenshot (124).png";
	import Ang2 from "$lib/images/project/koncodewe/Screenshot (125).png";
	import Ang3 from "$lib/images/project/koncodewe/Screenshot (126).png";
	import Ang4 from "$lib/images/project/koncodewe/Screenshot (127).png";
	import Ang5 from "$lib/images/project/koncodewe/Screenshot (128).png";
	import Ang6 from "$lib/images/project/koncodewe/Screenshot (129).png";
	
	import Und1 from "$lib/images/project/undangan/Screenshot (130).png";
	import Und2 from "$lib/images/project/undangan/Screenshot (131).png";
	import Und3 from "$lib/images/project/undangan/Screenshot (132).png";
	import Und4 from "$lib/images/project/undangan/Screenshot (133).png";
	import Und5 from "$lib/images/project/undangan/Screenshot (134).png";
	import Und6 from "$lib/images/project/undangan/Screenshot (135).png";

  </script>
  
  <svelte:head>
	  <title>Faizal Muhamad Iqbal - Portofolio</title>
	  <meta name="description" content="Portofolio Faizal Muhamad Iqbal, seorang freelance fullstack developer yang kreatif dan dinamis." />
  </svelte:head>
  
  <!-- Section untuk scroll -->
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
		  title="Angkringan Koncodewe"
		  description="Sistem pemesanan menu pada angkringan koncodewe dengan metode pembayaran digital menggunakan payment gateway Midtrans."
		  buttonText="Lihat Detail"
		  buttonLink="https://www.angkringan-koncodewe.rf.gd/"
		  imageList={[ Ang1, Ang2, Ang3, Ang4, Ang5, Ang6]}
		/>
		
		<ProjectCard 
		  title="Sistem Penjualan Tabung Gas"
		  description="Sistem Penjualan Gas dengan dua mode transaksi: langsung dan konsinyasi. Menyediakan laporan real-time dan UI yang ramah pengguna."
		  buttonText="Lihat Detail"
		  buttonLink="https://sistem-penjualan-tabung-gas.vercel.app"
		  imageList={[ Gas1, Gas2, Gas3, Gas4, Gas5]}
		/>
		
		<ProjectCard 
		  title="Sistem Pemesanan Menu Cafe"
		  description="Website sistem pemesanan untuk cafe yang mengintegrasikan Midtrans sebagai payment gateway, dengan desain responsif dan user-friendly."
		  buttonText="Lihat Detail"
		  buttonLink="https://sistem-pemesanan-cafe.vercel.app"
		  imageList={[ Kafe1, Kafe2, Kafe3, Kafe4, Kafe5]}
		/>
		
		<ProjectCard 
		  title="Sistem Absensi Face Recognition & Lokasi"
		  description="Sistem Absensi berbasis Face Recognition dan Lokasi untuk memudahkan pencatatan kehadiran dengan keamanan lebih baik dan akurasi data."
		  buttonText="Lihat Detail"
		  buttonLink="https://absensi-face-recognition.vercel.app"
		  imageList={[ Absen1, Absen2, Absen3 ]}
		/>
		
		<ProjectCard 
		  title="Sistem Barcode Generated untuk FIFO"
		  description="Sistem FIFO untuk input barang masuk & keluar, secara otomatis menghasilkan barcode PNG dari nomor barcode teks setiap inputan barang."
		  buttonText="Lihat Detail"
		  buttonLink="https://sistem-barcode-fifo.vercel.app"
		  imageList={[ Fifo1 ]}
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
		  buttonText="Lihat Web"
		  buttonLink="https://khodamku-coral.vercel.app/"
		  imageList={[ Khodam1, Khodam2, Khodam3 ]}
		/>
		
		<ProjectCard 
		  title="Undangan Digital"
		  description="Website undangan digital dengan ratusan template undangan digital yang menarik dan bisa di custom."
		  buttonText="Lihat Web"
		  buttonLink="https://dev-barudacode.pantheonsite.io/"
		  imageList={[ Und1, Und2, Und3, Und4, Und5, Und6 ]}
		/>
		
		<ProjectCard 
		  title="Bersama Si Cantikk"
		  description="Website digital memory dengan efek animasi 3D box interaktif untuk mengenang momen bersama ayang."
		  buttonText="Lihat Web"
		  buttonLink="https://bersamasicantikk.vercel.app"
		  imageList={[ Cantik1, Cantik2, Cantik3 ]}
		/>
		
		<ProjectCard 
		  title="Habede Kaka"
		  description="Website ucapan ulang tahun dengan animasi menarik untuk memberikan ucapan lebih spesial."
		  buttonText="Lihat Web"
		  buttonLink="https://habedekaka.vercel.app"
		  imageList={[ Hbd1, Hbd2, Hbd3, Hbd4, Hbd5]}
		/>
		
		<ProjectCard 
		  title="Suki Yo Kobo"
		  description="Website aesthetic dengan vibes Jepang, cocok untuk wibu penggemar desain minimalis."
		  buttonText="Lihat Web"
		  buttonLink="https://suki-yo-kobo.vercel.app"
		  imageList={[ Sukiyo1, Sukiyo2 ]}
		/>
		
		<ProjectCard 
		  title="Ibal Jadi Caleg"
		  description="Website kampanye digital dengan UI interaktif yang dapat dikustomisasi sesuai kebutuhan caleg."
		  buttonText="Lihat Web"
		  buttonLink="https://ibaljadicaleg.vercel.app"
		  imageList={[ Caleg1, Caleg2, Caleg3, Caleg4, Caleg5, Caleg6, Caleg7 ]}
		/>
		
		<ProjectCard 
		  title="cmd-portofolio"
		  description="Portfolio website dengan desain cepat, ringan, dan SEO-friendly, dibuat menggunakan Typescript."
		  buttonText="Lihat Web"
		  buttonLink="https://cmd-porto-fzmhq.vercel.app"
		  imageList={[ Cmd1, Cmd2, Cmd3, Cmd4 ]}
		/>
		
		<ProjectCard 
		  title="Yukita Puasa"
		  description="Website untuk mengingatkan waktu berbuka dan sahur selama bulan puasa dengan fitur interaktif seperti baca al-quran dan jadwal solat."
		  buttonText="Lihat Web"
		  buttonLink="https://yukitapuasa.vercel.app"
		  imageList={[ Yukita1, Yukita2, Yukita3, Yukita4, Yukita5]}
		/>
		<ProjectCard 
		  title="Sosmed Neobrutalism"
		  description="Sosial Media dengan tampilan unik dan juga fitur fitur yang menarik yang berbeda dengan sosmed lainnya."
		  buttonText="Lihat Web"
		  buttonLink="https://neobrutalism.netlify.app/"
		  imageList={[ Neo1, Neo2, Neo3, Neo4, Neo5]}
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
  
