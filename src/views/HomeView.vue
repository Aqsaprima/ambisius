<script setup>
</script>

<template>
  <main>    
    <header class="flex flex-row h-24 place-content-between place-items-center p-8 bg-white">
      <img src="../assets/logo.svg" class=" h-12" alt="logo" />
      <div class="flex flex-row gap-2 h-8 font-semibold">
        <RouterLink to="/masuk" class="px-6 py-1 rounded-md bg-white">MASUK</RouterLink>
        <RouterLink to="/daftar" class="px-6 py-1 rounded-md text-white bg-orange-500">DAFTAR</RouterLink>
      </div>
    </header>
    <body>
      <section class=" bg-black-blue text-white flex flex-row p-10 gap-4 h-screen">
        <div class="flex flex-col gap-8 place-content-center text-xl">
          <div>
            <p class="font-black text-5xl leading-normal">
              <span class=" pl-2 py-1 pr-1 mb-4 bg-orange-500">ASAH</span>LOGIKAMU <br>
              BERIKAN<span class=" px-2 bg-orange-500">SOLUSIMU</span>
            </p>
          </div>
          <p>membantu pengguna dalam menyelesaikan <br> beragam jenis soal logika bersama.</p>
          <RouterLink to="/daftar" class="px-6 py-2 w-5/12 rounded-md text-white text-base font-semibold text-center bg-orange-500">Gabung Sekarang</RouterLink>
        </div>
        <img src="../assets/ilustrasi.svg" alt="ilustrasi" class=" m-auto w-2/5">
      </section>
      <section>
        <div class="flex flex-row gap-12 py-20 p-8 place-content-center text-white">
          <div class=" bg-orange-500 w-1/5 h-20 flex flex-col place-items-center rounded-lg place-content-center">
            <p class=" font-bold text-2xl">5 Juta</p>
            <p>Macam Soal</p>
          </div>
          <div class=" bg-orange-500 w-1/5 h-20 flex flex-col place-items-center rounded-lg place-content-center">
            <p class=" font-bold text-2xl">10 Ribu</p>
            <p>Pengguna</p>
          </div>
          <div class=" bg-orange-500 w-1/5 h-20 flex flex-col place-items-center rounded-lg place-content-center">
            <p class=" font-bold text-2xl">98,9%</p>
            <p>Orang Terbantu</p>
          </div>
        </div>
        <div class="flex flex-col place-items-center place-content-center h-screen">
          <p class="font-black text-5xl">JADI NOMOR 1</p>
          <P class=" pt-8">Kumpulkan semua point dengan berani menjawab semua pertanyaan</P>
          <img src="../assets/piala.svg" alt="ilustrasi" class=" mx-auto w-3/12">
        </div>
      </section>
      <footer class="flex flex-col text-gray-500 place-items-center gap-4 p-8">
        <div class="flex flex-row gap-4">
          <p>About</p>
          <p>Blog</p>
          <p>Jobs</p>
          <p>Documentation</p>
        </div>
        <div class="flex flex-row gap-4">
          <img src="../assets/figma.svg" alt="ilustrasi" class="">
          <img src="../assets/twitter.svg" alt="ilustrasi" class="">
          <img src="../assets/instagram.svg" alt="ilustrasi" class="">
        </div>
        <p>© 2023 Ambisius, Inc. All rights reserved.</p>
      </footer>
    </body>
  </main>
</template>