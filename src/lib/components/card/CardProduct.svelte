<script>
  import { Motion, useMotionTemplate, useMotionValue } from "svelte-motion";
  import Foto from "$lib/images/components/landingpage.png";
  import Foto1 from "$lib/images/components/portofolio.png";
  import Foto2 from "$lib/images/components/admin.png";

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  let background = useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(51, 51, 51, 0.4), transparent 80%)`;

  const products = [
  {
    id: 1,
    title: "Landing Page",
    price: "Mulai dari 1.5jt",
    image: Foto,
    description: "Landing page profesional untuk branding personal, bisnis, atau event, dengan desain modern dan responsive yang user-friendly serta menarik. Hal ini memberikan kesan positif bagi pengunjung, cocok untuk berbagai kebutuhan bisnis digital, meningkatkan kredibilitas dan visibilitas.",
  },
  {
    id: 2,
    title: "Portofolio & Skripsi",
    price: "Mulai dari 2.5jt",
    image: Foto1,
    description: "Website portofolio elegan untuk menampilkan karya atau tugas akhir, cocok untuk mahasiswa, freelancer, maupun profesional. Dilengkapi desain minimalis, tampilannya menarik, dan mudah dinavigasi, menunjukkan hasil kerja terbaik Anda dengan profesional dan menarik.",
  },
  {
    id: 3,
    title: "Digitalisasi Bisnis",
    price: "Mulai dari 5jt",
    image: Foto2,
    description: "Solusi digital lengkap untuk bisnis Anda: website produk, sistem order online, dan integrasi pembayaran yang akan membuat bisnis berkembang lebih cepat. Langkah penting menuju transformasi digital untuk memperluas pasar dan meningkatkan keuntungan secara efektif dan efisien.",
  },
];


</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {#each products as product}
    <div
      on:mousemove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      class="group relative max-w-[350px] w-full overflow-hidden rounded-xl bg-neutral-950"
    >
      <div class="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent" />
      <Motion style={{ background }} let:motion>
        <div
          use:motion
          class="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        ></div>
      </Motion>
      <div class="relative flex flex-col gap-3 rounded-xl border border-white/10 px-4 py-5">
        <div class="space-y-2">
          <img
            src={product.image}
            alt={product.title}
            height={10}
            width={10}
            class="rounded-xl h-52 w-full object-cover opacity-75"
          />
          <div class="flex flex-row items-center justify-between pt-2">
            <h3 class="text-xl font-semibold text-neutral-200">{product.title}</h3>
            <p class="text-[13px] text-neutral-300 select-none">{product.price}</p>
          </div>
          <p class="text-sm leading-[1.5] text-neutral-400 pb-3">{product.description}</p>
          <a
            href="https://wa.me/6289523013056"
            target="_blank"
            class="inline-flex items-center justify-center gap-1 text-sm py-3 px-4 font-semibold bg-white text-black rounded-lg duration-300 hover:bg-white/70 w-full"
          >
            Chat Developer
          </a>
        </div>
      </div>
    </div>
  {/each}
</div>
