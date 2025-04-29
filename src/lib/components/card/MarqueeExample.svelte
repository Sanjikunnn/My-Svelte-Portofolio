<script>
    import Marquee from "$lib/components/card/Marquee.svelte";
    import Reviewcard from "$lib/components/card/Review.svelte";
    import Foto from "$lib/images/avatars/boy (1).png";
    import Foto1 from "$lib/images/avatars/boy.png";
    import Foto2 from "$lib/images/avatars/gamer.png";
    import Foto3 from "$lib/images/avatars/hacker.png";
    import Foto4 from "$lib/images/avatars/man (1).png";
    import Foto5 from "$lib/images/avatars/man (2).png";
    import Foto6 from "$lib/images/avatars/man (3).png";
    import Foto7 from "$lib/images/avatars/man.png";
    import Foto8 from "$lib/images/avatars/woman (1).png";
    import Foto9 from "$lib/images/avatars/woman.png";
    const reviews = [
      {
        name: "CEO Bukalapak",
        username: "@Bukalapak",
        body: "Keren bangettttt website nyaaa......",
        img: Foto,
      },
      {
        name: "CEO Gojek",
        username: "@Gojek",
        body: "Wooww, inimah the best banget sih.....",
        img: Foto1,
      },
      {
        name: "CEO Grab",
        username: "@Grab",
        body: "Mas Iqbal emang gada tandingannyaaaa....",
        img: Foto2,
      },
      {
        name: "CEO Shopee",
        username: "@Shopiput",
        body: "Pengerjaannya cepet banget, Recomended sih ini!!!",
        img: Foto3,
      },
      {
        name: "CEO Lazada",
        username: "@Lazekpress",
        body: "Lebih Murah dari yang lainnn!!!!",
        img: Foto4,
      },
      {
        name: "CEO Tokped",
        username: "@Tokpedo",
        body: "Full senyum maseehhh karna dari mas iqbal full support!!!",
        img: Foto5,
      },
      {
        name: "CEO Michat",
        username: "@Mychat",
        body: "Inimah bukan buka jasa, tapi bantu orang, ini worth it banget woy kudu dicoba weh....",
        img: Foto6,
      },
      {
        name: "CEO Maxim",
        username: "@Maximin",
        body: "Developer Trusted!!!",
        img: Foto7,
      },
      {
        name: "CEO Pesona Indonesia",
        username: "@Pesin",
        body: "Dan kau hadiiiiiiiiirrr merubah segalanyaaaaa, menjadi lebih indahhhhhh",
        img: Foto8,
      },
      {
        name: "CEO Pesbuk",
        username: "@Pesnuk",
        body: "Woy lu member IMPHNEN yaaaaaaaaaa......",
        img: Foto9,
      },
    ];
  
    let firstRow = reviews.slice(0, reviews.length / 2);
    let secondRow = reviews.slice(reviews.length / 2);
  </script>
  
  <div
    class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border-none bg-background py-20 md:shadow-xl"
  >
    <Marquee pauseOnHover class="[--duration:20s]">
      {#each firstRow as item}
        <Reviewcard {...item} />
      {/each}
    </Marquee>
    <Marquee reverse pauseOnHover class="[--duration:20s]">
      {#each secondRow as item}
        <Reviewcard {...item} />
      {/each}
    </Marquee>
    <div
      class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray dark:from-background"
    ></div>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray dark:from-background"
    ></div>
  </div>
  