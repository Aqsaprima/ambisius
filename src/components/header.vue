<template>
  <header class=" bg-primary h-20 z-10 w-screen flex flex-row place-content-evenly items-center px-12 sticky top-0">
    <div class=" flex-1 flex flex-row items-center">
      <img src="../assets/profile1.svg" class=" h-8" alt="logo" />
      <p class=" text-white pl-2">@yourusername</p>
    </div>
    <input type="text" name="" id="" placeholder="Cari Pertanyaan"
      class=" flex-1 bg-gray-200 placeholder:text-black px-6 rounded-3xl h-10">
    <div class=" flex-1"></div>
  </header>
  <section class="flex flex-row">
    <div id="leftbar"
      class=" bg-fifth w-1/6 h-sidebar sticky left-0 top-20 text-white py-10 flex flex-col items-center justify-between">
      <div class="flex flex-col gap-1 w-full">
        <div class="flex flex-row w-full h-10 items-center px-8 gap-8">
          <img src="../assets/beranda.svg" alt="" class=" w-5">
          <p>Beranda</p>
        </div>
        <div class="flex flex-row w-full h-10 items-center px-8 gap-8">
          <img src="../assets/teman.svg" alt="" class=" w-5">
          <p>Teman</p>
        </div>
        <div class="flex flex-row w-full h-10 items-center px-8 gap-8">
          <img src="../assets/pesan.svg" alt="" class=" w-5">
          <p>Pesan</p>
        </div>
        <div class="flex flex-row w-full h-10 items-center px-8 gap-8">
          <img src="../assets/peringkat.svg" alt="" class=" w-5">
          <p>Peringkat</p>
        </div>
      </div>
      <button class="flex flex-row w-4/5 bg-primary h-10 rounded-md justify-center items-center gap-3">
        <img src="../assets/keluar.svg" alt="" class=" w-5">
        Keluar
      </button>
    </div>
    <slot></slot>
    <div class=" bg-fifth w-1/6 h-sidebar sticky right-0 top-20"></div>
  </section>
</template>