<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <MaxContainer class="py-16">
      <h1 class="text-4xl font-bold text-center mb-8 text-coffee">Cookie Policy</h1>
      <div class="max-w-4xl mx-auto">
        <div class="space-y-6">
          <section>
            <h2 class="text-2xl font-semibold mb-4 text-coffee">What Are Cookies?</h2>
            <p class="text-gray-300 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-coffee">Types of Cookies We Use</h2>
            
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-medium mb-2 text-coffee">Essential Cookies</h3>
                <p class="text-gray-300 leading-relaxed">
                  These cookies are necessary for the website to function properly. They enable basic functions like 
                  page navigation and access to secure areas of the website.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-medium mb-2 text-coffee">Performance Cookies</h3>
                <p class="text-gray-300 leading-relaxed">
                  These cookies collect information about how visitors use our website, such as which pages are 
                  visited most often. This data helps us improve how our website works.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-medium mb-2 text-coffee">Functionality Cookies</h3>
                <p class="text-gray-300 leading-relaxed">
                  These cookies allow the website to remember choices you make and provide enhanced, more personal features.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-medium mb-2 text-coffee">Marketing Cookies</h3>
                <p class="text-gray-300 leading-relaxed">
                  These cookies are used to deliver advertisements more relevant to you and your interests.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-coffee">Managing Cookies</h2>
            <p class="text-gray-300 leading-relaxed mb-4">
              You can control and manage cookies in various ways:
            </p>
            <ul class="text-gray-300 space-y-2 ml-6">
              <li>• Browser settings: Most browsers allow you to refuse cookies or delete existing ones</li>
              <li>• Cookie preferences: Use our cookie preference center to manage your choices</li>
              <li>• Third-party tools: Use browser extensions or privacy tools to block tracking cookies</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-coffee">Third-Party Cookies</h2>
            <p class="text-gray-300 leading-relaxed">
              We may use third-party services like Google Analytics to help us understand how our website is used. 
              These services may place their own cookies on your device.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-coffee">Updates to This Policy</h2>
            <p class="text-gray-300 leading-relaxed">
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with 
              an updated revision date.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-coffee">Contact Us</h2>
            <p class="text-gray-300 leading-relaxed">
              If you have questions about our use of cookies, please contact us at cookies@coffeeclub.com
            </p>
          </section>
        </div>
      </div>
    </MaxContainer>
  </div>
</template>

<script>
import MaxContainer from '../components/MaxContainer.vue'

export default {
  name: 'Cookies',
  components: {
    MaxContainer
  }
}
</script>