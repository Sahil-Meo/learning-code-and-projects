<template>
     <nav class="bg-white shadow-sm">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div class="flex items-center h-16">
                    <!-- LEFT: Logo -->
                    <div class="flex items-center">
                         <button class="flex items-center gap-2 focus:outline-none" aria-label="Homepage"
                              @click="$emit('go-home')">
                              <!-- Coffee icon SVG -->
                              <svg class="w-8 h-8 text-amber-600" viewBox="0 0 24 24" fill="none"
                                   xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                   <path d="M3 7h14v4a5 5 0 01-5 5H8a5 5 0 01-5-5V7z" stroke="currentColor"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                   <path d="M16 3v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                   <path d="M19 3v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                              </svg>
                              <span class="sr-only">Coffee Club</span>
                         </button>
                    </div>

                    <!-- CENTER: Nav items (hidden on small screens) -->
                    <div class="flex-1 flex justify-center">
                         <ul class="hidden md:flex items-center space-x-6">
                              <li><a href="#" class="text-gray-700 hover:text-gray-900">Home</a></li>
                              <li><a href="#" class="text-gray-700 hover:text-gray-900">About</a></li>
                              <li><a href="#" class="text-gray-700 hover:text-gray-900">Menu</a></li>
                              <li><a href="#" class="text-gray-700 hover:text-gray-900">Contact</a></li>
                         </ul>
                    </div>

                    <!-- RIGHT: Search (md+), Sign Up, Mobile toggles -->
                    <div class="flex items-center space-x-3">
                         <!-- Desktop search -->
                         <div class="hidden md:flex items-center">
                              <label class="relative">
                                   <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <!-- search icon -->
                                        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1010.5 4.5a7.5 7.5 0 006.15 12.15z" />
                                        </svg>
                                   </span>
                                   <input v-model="search" type="search" placeholder="Search..."
                                        class="pl-9 pr-3 py-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300 w-48" />
                              </label>
                         </div>

                         <!-- Sign Up button (desktop & mobile) -->
                         <button class="bg-amber-600 hover:bg-amber-700 text-white text-sm px-3 py-1.5 rounded-md"
                              @click="$emit('signup')">
                              Sign Up
                         </button>

                         <!-- Mobile search toggle (small screens) -->
                         <button @click="toggleSearch" class="md:hidden p-2 rounded-md hover:bg-gray-100"
                              :aria-expanded="isSearchOpen.toString()" aria-label="Toggle search">
                              <svg v-if="!isSearchOpen" class="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                                   <path stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1010.5 4.5a7.5 7.5 0 006.15 12.15z" />
                              </svg>
                              <svg v-else class="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                                   <path stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                         </button>

                         <!-- Mobile menu toggle -->
                         <button @click="toggleMenu" class="md:hidden p-2 rounded-md hover:bg-gray-100"
                              :aria-expanded="isOpen.toString()" aria-label="Toggle menu">
                              <svg v-if="!isOpen" class="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="none">
                                   <path stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                              </svg>
                              <svg v-else class="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="none">
                                   <path stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                         </button>
                    </div>
               </div>
          </div>

          <!-- Mobile Search Row (when toggled) -->
          <div v-if="isSearchOpen" class="md:hidden px-4 pb-3">
               <label class="relative block">
                    <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                         <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                   d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1010.5 4.5a7.5 7.5 0 006.15 12.15z" />
                         </svg>
                    </span>
                    <input v-model="search" type="search" placeholder="Search..."
                         class="pl-9 pr-3 py-2 text-sm border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-amber-300" />
               </label>
          </div>

          <!-- Mobile Menu (collapsible) -->
          <div v-if="isOpen" class="md:hidden border-t">
               <div class="px-4 py-3 space-y-2">
                    <a href="#" @click="closeMenus"
                         class="block text-gray-700 hover:bg-gray-50 px-2 py-2 rounded">Home</a>
                    <a href="#" @click="closeMenus"
                         class="block text-gray-700 hover:bg-gray-50 px-2 py-2 rounded">About</a>
                    <a href="#" @click="closeMenus"
                         class="block text-gray-700 hover:bg-gray-50 px-2 py-2 rounded">Menu</a>
                    <a href="#" @click="closeMenus"
                         class="block text-gray-700 hover:bg-gray-50 px-2 py-2 rounded">Contact</a>

                    <!-- Optional: show search & signup in mobile menu as well -->
                    <div class="pt-2 border-t">
                         <label class="relative block mb-2">
                              <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                   <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                             d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1010.5 4.5a7.5 7.5 0 006.15 12.15z" />
                                   </svg>
                              </span>
                              <input v-model="search" type="search" placeholder="Search..."
                                   class="pl-9 pr-3 py-2 text-sm border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-amber-300" />
                         </label>

                         <button @click="$emit('signup'); closeMenus()"
                              class="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md">
                              Sign Up
                         </button>
                    </div>
               </div>
          </div>
     </nav>
</template>

<script>
export default {
     name: "Navbar",
     data() {
          return {
               isOpen: false,
               isSearchOpen: false,
               search: "",
          };
     },
     methods: {
          toggleMenu() {
               this.isOpen = !this.isOpen;
               if (this.isOpen) {
                    this.isSearchOpen = false;
               }
          },
          toggleSearch() {
               this.isSearchOpen = !this.isSearchOpen;
               if (this.isSearchOpen) {
                    this.isOpen = false;
               }
          },
          closeMenus() {
               this.isOpen = false;
               this.isSearchOpen = false;
          },
     },
};
</script>
