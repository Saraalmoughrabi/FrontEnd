<template>
  <SideNavigationBar>
    <div class="p-6  min-h-screen">
      <h2 class="text-3xl font-bold text-[#FF914D] mb-6 px-2">Trips</h2>
      <div class="bg-white rounded-lg shadow-sm overflow-hidden">
        <table class="w-full text-left ">
          <thead>
            <tr class="bg-[#F8A26D] text-white">
              <th class="p-4 text-sm font-semibold border-r border-white/20">Name</th>
              <th class="p-4 text-sm font-semibold border-r border-white/20">Description</th>
              <th class="p-4 text-sm font-semibold border-r border-white/20">Location</th>
              <th class="p-4 text-sm font-semibold border-r border-white/20">Lat</th>
              <th class="p-4 text-sm font-semibold border-r border-white/20">Lang</th>
              <th class="p-4 text-sm font-semibold border-r border-white/20">Price</th>
              <th class="p-4 text-sm font-semibold border-r border-white/20">Status</th>
              <th class="p-4 text-sm font-semibold border-r border-white/20 text-center">Image</th>
              <th class="p-4 text-sm font-semibold text-center">Action</th>
            </tr>
          </thead>
          <tbody class="text-gray-600">
            <tr v-for="i in 8" :key="i" class="even:bg-[#F3F4F6] border-b border-gray-100  transition-colors">
              <td class="p-4 text-sm font-medium">Samanta William</td>
              <td class="p-4 text-sm ">#123456789</td>
              <td class="p-4 text-sm">March 25, 2021</td>
              <td class="p-4 text-sm">Mang William</td>
              <td class="p-4 text-sm">Jakarta</td>
              <td class="p-4 text-sm">Jakarta</td>
              <td class="p-4 text-sm">Jakarta</td>
              <td class="p-4 text-center">
                <div class="flex justify-center">
                  <img :src="`https://i.pravatar.cc/150?u=${i}`" class="w-8 h-8 rounded-full object-cover border border-gray-300" alt="trip">
                </div>
              </td>
              <td class="p-4 text-center">
                <div class="relative inline-block group">
                  <button class="flex items-center justify-center p-2 space-x-1 hover:bg-gray-300 rounded-full transition-all">
                    <span class="w-1 h-1 rounded-full bg-gray-400"></span>
                    <span class="w-1 h-1 rounded-full bg-gray-400"></span>
                    <span class="w-1 h-1 rounded-full bg-gray-400"></span>
                  </button>
                  <div class="absolute right-0 z-20 mt-1 w-28 bg-white border border-gray-200 rounded-lg shadow-lg 
                              invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 transition-all">
                    <div class="py-1 text-center">
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">تعديل</a>
                      <hr class="border-gray-100">
                      <a href="#" class="block px-4 py-2 text-sm text-red-500 hover:bg-red-50">حذف</a>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-end p-4 bg-white items-center space-x-2">
          <button class="p-2 text-gray-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <span class="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">1</span>
          <span class="text-gray-500 text-sm">2</span>
          <span class="text-gray-500 text-sm">3</span>
          <button class="p-2 text-gray-400 ">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </div>
  </SideNavigationBar>
</template>
<script>
import SideNavigationBar from '../component/SideNavigationBar.vue'

export default {
  name: 'Trips',
  components: {
  SideNavigationBar
  }
}
</script>