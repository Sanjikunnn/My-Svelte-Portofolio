<script lang="ts">
    import { cubicInOut, cubicOut, quintInOut } from "svelte/easing";
    import { crossfade, scale, fade, slide, fly, blur } from "svelte/transition";
    import Foto from "$lib/images/fotogw.jpg";
    let layout = "layouta";

    let [send, receive] = crossfade({
      duration: 400,
    });
</script>

<div class="w-full h-full flex justify-center items-center flex-col">
    {#if layout === "layouta"}
      <div
        on:click={() => { layout = "layoutb"; }}
        class="bg-transparent p-4 rounded-3xl layouta w-fit h-fit overflow-hidden"
        in:receive={{ key: "layouta" }}
        out:send={{ key: "layouta" }}
      >
        <div class="imgTag text-center justify-center " in:receive={{ key: "imgTag" }} out:send={{ key: "imgTag" }}>
          <img src={Foto} alt="Saturn Art" class="w-100 h-56 rounded-2xl" />
        </div>
        <div class="mt-2 px-2 flex flex-col">
          <h1 class="font-bold text-lg md:text-lg heading text-white" in:receive={{ key: "heading" }} out:send={{ key: "heading" }}>
            Faizal Muhamad Iqbal
          </h1>
          <p class="text-xs sm:text-sm w-52 text-center para mx-auto text-white" in:receive={{ key: "para" }} out:send={{ key: "para" }}>
            Freelance Fullstack Developer
          </p>
        </div>
      </div>
    {:else if layout === "layoutb"}
      <div
        on:click={() => { layout = "layouta"; }}
        class="bg-transparent p-2.5 md:p-4 rounded-3xl layoutb flex gap-1 md:gap-3 w-fit h-fit overflow-hidden"
        in:receive={{ key: "layouta" }}
        out:send={{ key: "layouta" }}
      >
        <div class="imgTag text-center mx-auto" in:receive={{ key: "imgTag" }} out:send={{ key: "imgTag" }}>
          <img src={Foto} alt="Saturn Art" class="w-200 h-50 md:w-200 md:h-100 rounded-2xl" />
        </div>
        <div class="mt-0 px-1 md:px-2 flex flex-col">
          <h1 class="font-bold text-lg md:text-2xl heading text-white text-left" in:receive={{ key: "heading" }} out:send={{ key: "heading" }}>
            Selamat Datang Semuaaaa 😶‍🌫️
          </h1>
          <p class="text-xs md:text-sm w-full para text-white" in:receive={{ key: "para" }} out:send={{ key: "para" }}>
            Website ini diperuntukkan sebagai Portofolio saya<br/>
            sebagai <strong> FULLSTACK DEVELOPER</strong>...<br/>
            Perkenalan hanya nama, kalo mau kenal dm aja😏<br/>
            Nama Saya <strong>Faizal Muhamad Iqbal</strong> 🤗
          </p>
          <br />
          <strong class="text-white block mt-0">Solusi Digitalisasi Bisnis Anda 💻</strong>
          <ul class="list-disc pl-5 mt-1 text-xs md:text-sm text-white">
            <li>Jasa Pembuatan Website Landing Page 🖥️</li>
            <li>Jasa Pembuatan Website Untuk UMKM 🏪</li>
            <li>Jasa Pembuatan Website Untuk Personal 👤</li>
            <li>Jasa Pembuatan Website Untuk Tugas Akhir 🎓</li>
            <li>Jasa Pembuatan Website Untuk Instansi 🏛</li>
          </ul>
        </div>
      </div>
    {/if}
</div>

<style>
    /* Styling umum untuk kedua layout */
    .layouta,
    .layoutb {
      position: relative;
      transition: all 0.4s ease;
      background-color: transparent;
      padding: 1rem;
      border-radius: 1.5rem;
      overflow: hidden;
      width: fit-content;
      height: fit-content;
    }
  
    /* Hover effect untuk seluruh layout */
    .layouta:hover,
    .layoutb:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }
  
    /* Animasi dan hover untuk gambar */
    .layouta img,
    .layoutb img {
      transition: transform 0.3s ease-in-out;
    }
  
    .layouta:hover img,
    .layoutb:hover img {
      transform: scale(1.05);
    }
  
    .imgTag {
      transition: transform 0.4s ease-in-out;
    }
  
    /* Responsive handling */
    @media screen and (max-width: 640px) {
      .layouta,
      .layoutb {
        flex-direction: column;
        width: 100%;
      }
    }
    /* Responsive handling */
    @media screen and (min-width: 640px) {
      .layouta,
      .layoutb {
        flex-direction: row;
        width: 100%;
      }
      .layoutb img {
        margin: auto;
        width: 400px;
        height: 270px;
      }

    }
  </style>
  