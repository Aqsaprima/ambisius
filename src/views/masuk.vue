<template>
  <section class="flex flex-col gap-10 place-content-center place-items-center h-screen">
    <img src="../assets/logo.svg" class=" h-16" alt="logo" />
    <p class=" text-orange-500 font-bold text-3xl">MASUK</p>
    <div class="flex flex-col gap-6">
      <input type="text" name="" id="" placeholder="username or email" class=" placeholder:text-black border-2 border-black rounded-2xl px-4 py-1 w-80">
      <input type="password" name="" id="" placeholder="password" class=" placeholder:text-black border-2 border-black rounded-2xl px-4 py-1">
    </div>
    <div class="flex flex-col gap-6">
      <button class=" text-white bg-orange-500 w-80 rounded-2xl py-2">Masuk</button>
      <button class="border-2 border-black rounded-2xl flex flex-row place-content-center py-2 gap-6">
        <img src="../assets/logo.svg" class=" h-6" alt="logo" />
        <p class=" text-orange-500">Masuk dengan google</p>
      </button>
    </div>
    <p><span class=" text-orange-500">Belum memiliki akun ? </span><RouterLink to="/daftar">Daftar</RouterLink></p>
  </section>  
</template>