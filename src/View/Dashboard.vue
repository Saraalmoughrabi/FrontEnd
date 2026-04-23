<template>
    <SideNavigationBar />
  <div class="space-y-2">
    <h2 class="text-2xl font-bold text-red-500">Over View</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
        <div class="flex items-center gap-3 mb-4">
          <div class="bg-[#1E3A8A] p-2 rounded-lg">
             <img src="../assets/Users.png" class="w-6 h-6 invert" />
          </div>
          <span class="text-gray-600 font-semibold">Total Users</span>
        </div>
        <div class="text-4xl font-bold text-red-400">500+</div>
      </div>
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div class="flex items-center justify-center gap-3 mb-4">
           <div class="bg-[#1E3A8A] p-2 rounded-lg text-white">
             <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
           </div>
           <span class="text-gray-600 font-semibold">Total Bookings</span>
        </div>
        <div class="flex justify-around mt-2">
          <div class="text-center">
            <p class="text-sm text-gray-500">Booking</p>
            <p class="text-xl font-bold text-red-400">800+</p>
          </div>
          <div class="text-center">
            <p class="text-sm text-gray-500">Revenue</p>
            <p class="text-xl font-bold text-red-400">800+</p>
          </div>
        </div>
      </div>
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
        <div class="flex items-center gap-3 mb-4">
          <div class="bg-[#1E3A8A] p-2 rounded-lg text-white">
             <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          </div>
          <span class="text-gray-600 font-semibold">Average Rating</span>
        </div>
        <p class="text-xs text-gray-500">Total Reviews</p>
        <div class="text-4xl font-bold text-red-400">12,834</div>
      </div>
    </div>
  </div>
</template>
<script>
import SideNavigationBar from '@/component/SideNavigationBar.vue'
export default{
    name:'Dashboard',
    components:{
        SideNavigationBar
    }
}
</script>