<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-center mb-8 text-coffee">Find a Location</h1>
      <div class="max-w-6xl mx-auto">
        
        <!-- Search Section -->
        <div class="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4 text-coffee">Find Coffee Club Near You</h2>
          <div class="flex gap-4">
            <input 
              type="text" 
              placeholder="Enter your city or zip code"
              class="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-coffee"
            >
            <button class="bg-coffee text-white px-6 py-2 rounded-md hover:bg-opacity-80 transition-colors">
              Search
            </button>
          </div>
        </div>

        <!-- Locations Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- Location 1 -->
          <div class="bg-gray-800 rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-3 text-coffee">Downtown Coffee Club</h3>
            <div class="space-y-2 text-gray-300">
              <p><strong>Address:</strong> 123 Main Street, Downtown, CD 12345</p>
              <p><strong>Phone:</strong> (555) 123-4567</p>
              <p><strong>Hours:</strong></p>
              <ul class="ml-4 text-sm">
                <li>Mon-Fri: 6:00 AM - 8:00 PM</li>
                <li>Sat-Sun: 7:00 AM - 9:00 PM</li>
              </ul>
            </div>
            <div class="mt-4 flex gap-2">
              <button class="bg-coffee text-white px-4 py-2 rounded text-sm hover:bg-opacity-80 transition-colors">
                Get Directions
              </button>
              <button class="border border-coffee text-coffee px-4 py-2 rounded text-sm hover:bg-coffee hover:text-white transition-colors">
                Call Store
              </button>
            </div>
          </div>

          <!-- Location 2 -->
          <div class="bg-gray-800 rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-3 text-coffee">Uptown Coffee Club</h3>
            <div class="space-y-2 text-gray-300">
              <p><strong>Address:</strong> 456 Oak Avenue, Uptown, CD 12346</p>
              <p><strong>Phone:</strong> (555) 234-5678</p>
              <p><strong>Hours:</strong></p>
              <ul class="ml-4 text-sm">
                <li>Mon-Fri: 6:30 AM - 7:30 PM</li>
                <li>Sat-Sun: 7:30 AM - 8:30 PM</li>
              </ul>
            </div>
            <div class="mt-4 flex gap-2">
              <button class="bg-coffee text-white px-4 py-2 rounded text-sm hover:bg-opacity-80 transition-colors">
                Get Directions
              </button>
              <button class="border border-coffee text-coffee px-4 py-2 rounded text-sm hover:bg-coffee hover:text-white transition-colors">
                Call Store
              </button>
            </div>
          </div>

          <!-- Location 3 -->
          <div class="bg-gray-800 rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-3 text-coffee">Mall Coffee Club</h3>
            <div class="space-y-2 text-gray-300">
              <p><strong>Address:</strong> 789 Shopping Center, Mall Level 2, CD 12347</p>
              <p><strong>Phone:</strong> (555) 345-6789</p>
              <p><strong>Hours:</strong></p>
              <ul class="ml-4 text-sm">
                <li>Mon-Thu: 8:00 AM - 9:00 PM</li>
                <li>Fri-Sat: 8:00 AM - 10:00 PM</li>
                <li>Sun: 9:00 AM - 8:00 PM</li>
              </ul>
            </div>
            <div class="mt-4 flex gap-2">
              <button class="bg-coffee text-white px-4 py-2 rounded text-sm hover:bg-opacity-80 transition-colors">
                Get Directions
              </button>
              <button class="border border-coffee text-coffee px-4 py-2 rounded text-sm hover:bg-coffee hover:text-white transition-colors">
                Call Store
              </button>
            </div>
          </div>

          <!-- Location 4 -->
          <div class="bg-gray-800 rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-3 text-coffee">Airport Coffee Club</h3>
            <div class="space-y-2 text-gray-300">
              <p><strong>Address:</strong> Terminal A, Gate 15, City Airport, CD 12348</p>
              <p><strong>Phone:</strong> (555) 456-7890</p>
              <p><strong>Hours:</strong></p>
              <ul class="ml-4 text-sm">
                <li>Daily: 5:00 AM - 11:00 PM</li>
              </ul>
            </div>
            <div class="mt-4 flex gap-2">
              <button class="bg-coffee text-white px-4 py-2 rounded text-sm hover:bg-opacity-80 transition-colors">
                Get Directions
              </button>
              <button class="border border-coffee text-coffee px-4 py-2 rounded text-sm hover:bg-coffee hover:text-white transition-colors">
                Call Store
              </button>
            </div>
          </div>

          <!-- Location 5 -->
          <div class="bg-gray-800 rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-3 text-coffee">University Coffee Club</h3>
            <div class="space-y-2 text-gray-300">
              <p><strong>Address:</strong> 321 Campus Drive, University District, CD 12349</p>
              <p><strong>Phone:</strong> (555) 567-8901</p>
              <p><strong>Hours:</strong></p>
              <ul class="ml-4 text-sm">
                <li>Mon-Fri: 6:00 AM - 10:00 PM</li>
                <li>Sat-Sun: 8:00 AM - 9:00 PM</li>
              </ul>
            </div>
            <div class="mt-4 flex gap-2">
              <button class="bg-coffee text-white px-4 py-2 rounded text-sm hover:bg-opacity-80 transition-colors">
                Get Directions
              </button>
              <button class="border border-coffee text-coffee px-4 py-2 rounded text-sm hover:bg-coffee hover:text-white transition-colors">
                Call Store
              </button>
            </div>
          </div>

          <!-- Location 6 -->
          <div class="bg-gray-800 rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-3 text-coffee">Riverside Coffee Club</h3>
            <div class="space-y-2 text-gray-300">
              <p><strong>Address:</strong> 654 River Walk, Riverside, CD 12350</p>
              <p><strong>Phone:</strong> (555) 678-9012</p>
              <p><strong>Hours:</strong></p>
              <ul class="ml-4 text-sm">
                <li>Mon-Fri: 6:30 AM - 8:00 PM</li>
                <li>Sat-Sun: 7:00 AM - 9:00 PM</li>
              </ul>
            </div>
            <div class="mt-4 flex gap-2">
              <button class="bg-coffee text-white px-4 py-2 rounded text-sm hover:bg-opacity-80 transition-colors">
                Get Directions
              </button>
              <button class="border border-coffee text-coffee px-4 py-2 rounded text-sm hover:bg-coffee hover:text-white transition-colors">
                Call Store
              </button>
            </div>
          </div>

        </div>

        <!-- Additional Info -->
        <div class="mt-12 bg-gray-800 rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-4 text-coffee">Can't Find a Location Near You?</h2>
          <p class="text-gray-300 mb-4">
            We're always expanding! If you'd like to see a Coffee Club in your area, let us know. 
            We consider all suggestions for new locations.
          </p>
          <button class="bg-coffee text-white px-6 py-2 rounded hover:bg-opacity-80 transition-colors">
            Suggest a Location
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FindLocation'
}
</script>