<template>
  <div class="flex h-screen w-full ">
    <aside class="w-50 h-full bg-[#1E3A8A] text-white flex flex-col">
      <div class="p-6 text-3xl  whitespace-nowrap">
        Trip Station 
      </div>
      <nav class="flex-1 p-4 w-full space-y-1 bg-[#1E3A8A]">
 <div @click="goToDashboardPage" 
          class="flex items-center gap-3 py-3 px-4 rounded-full hover:bg-white hover:text-[#1E3A8A] font-bold transition cursor-pointer group">
          <img :src="Home" alt="dashboard icon" class="w-6 h-6 object-contain" />
          <span>Dashboard</span>
        </div>
  <div @click="goToUsersPage" 
          class="flex items-center gap-3 py-3 px-4 rounded-full hover:bg-white hover:text-[#1E3A8A] font-bold transition cursor-pointer group">
          <img :src="Users" alt="users icon" class="w-6 h-6 object-contain" />
          <span>Users</span>
        </div>
         <div @click="goToTripsPage" 
          class="flex items-center gap-3 py-3 px-4 rounded-full hover:bg-white hover:text-[#1E3A8A] font-bold transition cursor-pointer group">
          <img :src="Home" alt="trips icon" class="w-6 h-6 object-contain" />
          <span>Trips</span>
        </div>
         <div @click="goToCompaniesPage" 
          class="flex items-center gap-3 py-3 px-4 rounded-full hover:bg-white hover:text-[#1E3A8A] font-bold transition cursor-pointer group">
          <img :src="Home" alt="companies icon" class="w-6 h-6 object-contain" />
          <span>Companies</span>
        </div>
<button type="button" class=" flex items-center gap-3 py-3 px-4 rounded-full ml-5 hover:bg-white hover:text-[#1E3A8A] font-bold transition cursor-pointer group"">Logout</button>
      </nav>
    </aside>
    <div class="flex-1 flex flex-col">
      <header class="h-20 bg-[#1E3A8A] w-full">
        <div class="h-full flex items-center px-8">
          </div>
      </header>
      <main class="p-8 ">
      </main>
    </div>
  </div>
</template>
<script>
import Home from '../assets/Home.png'
import Users from '../assets/Users.png'
export default {
  name: 'SideNavigationBar',
  data: function() {
    return {
      Home:Home,
      Users:Users,
    }
  },
  methods: {
      goToDashboardPage() {
        this.$router.push('/dashboard');
      },
      goToUsersPage() {
        this.$router.push('/users');
      },
      goToTripsPage() {
        this.$router.push('/trips');
      },
      goToCompaniesPage() {
        this.$router.push('/companies');
      }
    }
  }
</script>
