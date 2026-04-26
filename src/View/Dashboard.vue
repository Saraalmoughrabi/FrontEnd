<template>
  <SideNavigationBar>
    <div class="p-4 md:p-6 w-full">
      <h2 class="text-[#FF914D] text-2xl font-bold mb-8">Over View</h2>
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col  w-full overflow-hidden">
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-[#1E3A8A] p-2 rounded-xl ">
              <img :src="TotalUsers" alt="users" class="w-5" />
            </div>
            <span class="font-bold  text-xl">Total Users</span>
          </div>
          <div class="mt-auto mb-2 text-center">
             <p class="text-[#F8A26D] text-4xl font-bold leading-none">500+</p>
          </div>
        </div>
        <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col w-full overflow-hidden">
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-[#1E3A8A] p-2 rounded-xl ">
              <img :src="TotalBookings" alt="bookings" class="w-5" />
            </div>
            <span class="font-bold text-base md:text-lg ">Total Bookings</span>
          </div>
          <div class="flex flex-wrap justify-between items-center mt-auto gap-2 border-t border-gray-50 pt-4">
            <div class="flex-1 text-center">
              <p class=" text-[10px] md:text-xs font-bold ">Booking</p>
              <p class="text-[#F8A26D] text-lg md:text-2xl font-black leading-tight">800+</p>
            </div>
             <div class="flex-1 text-center ">
              <p class="text-[10px] md:text-xs font-bold ">Revenue</p>
              <p class="text-[#F8A26D] text-lg md:text-2xl font-black leading-tight">800+</p>
            </div>
          </div>
        </div>
        <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col w-full overflow-hidden">
          <div class="flex items-center gap-3 mb-4">
            <div class="bg-[#1E3A8A] p-2 rounded-xl">
              <img :src="TotalBookings" alt="bookings" class="w-5 invert" />
            </div>
            <span class="font-bold text-base md:text-lg  ">Average Rating</span>
          </div>
          <div class="mt-auto mb-2 text-center">
            <p class="text-[10px] md:text-xs font-bold  mb-1 ">Total Reviews</p>
            <p class="text-[#F8A26D] text-3xl  font-bold ">12,834</p>
          </div>
        </div>
      </div>
    </div>
  </SideNavigationBar>
</template>
<script>
import SideNavigationBar from '../component/SideNavigationBar.vue'
import TotalUsers from '../assets/Total User.png'
import TotalBookings from '../assets/Total Bookings.png'

export default {
  name: 'DashboardPage',
  components: { SideNavigationBar },
  data() {
    return {
      TotalUsers,
      TotalBookings,
    }
  }
}
</script>