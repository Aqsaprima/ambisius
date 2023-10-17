<template>
  <section class="flex flex-col gap-10 place-content-center place-items-center h-screen">
    <img src="../assets/logo.svg" class=" h-16" alt="logo" />
    <p class=" text-primary font-bold text-3xl">MASUK</p>
    <div class="flex flex-col gap-6">
      <input type="text" name="" id="" placeholder="username or email"
        class=" placeholder:text-black border-2 border-black rounded-2xl px-4 py-1 w-80">
      <input type="password" name="" id="" placeholder="password"
        class=" placeholder:text-black border-2 border-black rounded-2xl px-4 py-1">
    </div>
    <div class="flex flex-col gap-6">
      <RouterLink to="/dashboard" class=" text-white bg-primary w-80 rounded-2xl py-2 text-center
      ">Masuk</RouterLink>
      <RouterLink to="/dashboard" class="border-2 border-black rounded-2xl flex flex-row place-content-center py-2 gap-6">
        <img src="../assets/google.svg" class=" h-6" alt="logo" />
        <p class=" text-primary">Masuk dengan google</p>
      </RouterLink>
    </div>
    <p><span class=" text-primary">Belum memiliki akun ? </span>
      <RouterLink to="/daftar">Daftar</RouterLink>
  </p>
</section></template>