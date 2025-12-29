<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-center mb-8 text-coffee">Contact Us</h1>
      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div>
            <h2 class="text-2xl font-semibold mb-6 text-coffee">Get in Touch</h2>
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-medium mb-2">Address</h3>
                <p class="text-gray-300">
                  123 Coffee Street<br>
                  Bean District, CD 12345<br>
                  United States
                </p>
              </div>
              <div>
                <h3 class="text-lg font-medium mb-2">Phone</h3>
                <p class="text-gray-300">(555) 123-BREW</p>
              </div>
              <div>
                <h3 class="text-lg font-medium mb-2">Email</h3>
                <p class="text-gray-300">hello@coffeeclub.com</p>
              </div>
              <div>
                <h3 class="text-lg font-medium mb-2">Hours</h3>
                <p class="text-gray-300">
                  Monday - Friday: 6:00 AM - 8:00 PM<br>
                  Saturday - Sunday: 7:00 AM - 9:00 PM
                </p>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <h2 class="text-2xl font-semibold mb-6 text-coffee">Send us a Message</h2>
            <form class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-2">Name</label>
                <input type="text"
                  class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-coffee">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Email</label>
                <input type="email"
                  class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-coffee">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Subject</label>
                <input type="text"
                  class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-coffee">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Message</label>
                <textarea rows="4"
                  class="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-coffee"></textarea>
              </div>
              <button type="submit"
                class="w-full bg-coffee text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>