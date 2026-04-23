<template>
  <div class="flex h-screen w-full overflow-hidden">
    <div class="w-full md:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-white">
      <div class="w-full max-w-md"> 
        <div class="text-center mb-10">
          <h1 class="text-3xl font-bold text-gray-800">Admin Login</h1>
          <p class="text-[#868686] mt-2 text-sm">enter your Email and Password</p>
        </div>
        <form @submit.prevent="handleLogin" class="space-y-6">
          <fieldset class="border-2 border-[#1E3A8A] rounded-2xl p-4 pb-2">
            <legend class="text-[#1E3A8A] font-semibold px-6 ml-4">Email</legend>
            <input 
              type="email" 
              placeholder="admin@gmail.com" 
              class="w-full bg-transparent outline-none text-[#868686] py-1" />
          </fieldset>
          <fieldset class="border-2 border-[#1E3A8A] rounded-2xl p-4 pb-2">
            <legend class="text-[#1E3A8A] font-semibold px-6 ml-4">password</legend>
            <input 
              type="password" 
              class="w-full bg-transparent outline-none text-[#868686] py-1" />
          </fieldset>
          <button 
          @click="gotodashboard"
            type="submit" 
            class="w-full bg-[#1E3A8A] text-white font-bold py-4 rounded-2xl mt-4 cursor-pointer">
            Sign In
          </button>
        </form>
      </div>
    </div>
    <div class="hidden md:flex w-1/2 bg-[#1E3A8A] items-center justify-center">
  <img :src="Signin" class="max-w-[70%] h-auto" />
</div>
  </div>
</template>
<script>
import Signin from '../assets/Signin.png'
export default {
  name: 'LoginPageAdmin',
  data: function() {
    return {
      Signin: Signin
    }
  },
  methods: {
      gotodashboard() {
        this.$router.push('/dashboard');
      }
  }}
</script>