<template>
<SideNavigationBar>
  <h2 class="text-[#FF914D] text-2xl font-semibold mb-6">Over View</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    <div class="bg-white rounded-2xl shadow-md p-6">
      <div class="flex items-center gap-3 mb-8">
        <div class="w-12 h-12 bg-[#1f2b5c] rounded-xl"></div>
        <h3 class="text-[#1f2b5c] text-xl font-medium">Total Users</h3>
      </div>
      <div class="text-center text-[#F8A26D] text-5xl font-bold">500+</div>
    </div>
    <div class="bg-white rounded-2xl shadow-md p-6 ">
      <div class="flex items-center gap-3 mb-8">
        <div class="w-12 h-12 bg-[#1f2b5c] rounded-xl"></div>
        <h3 class="text-[#1f2b5c] text-xl font-medium">Total Bookings</h3>
      </div>
      <div class="grid grid-cols-2 text-center">
        <div>
          <h4 class=" text-lg mb-2">Booking</h4>
          <p class="text-[#F8A26D] text-3xl font-bold">800+</p>
        </div>
        <div>
          <h4 class="text-lg mb-2">Revenue</h4>
          <p class="text-[#F8A26D] text-3xl font-bold">800+</p>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-2xl shadow-md p-6 ">
      <div class="flex items-center gap-3 mb-8">
        <div class="w-12 h-12 bg-[#1f2b5c] rounded-xl"></div>
        <h3 class="text-xl font-medium">Average Rating</h3>
      </div>

      <h4 class="text-center text-[#1f2b5c] text-lg mb-3">Total Reviews</h4>
      <p class="text-center text-[#F8A26D] text-3xl font-bold">12,834</p>
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