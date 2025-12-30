<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <MaxContainer class="py-16">
      <h1 class="text-4xl font-bold text-center mb-8 text-coffee">Privacy Policy</h1>
      <div class="max-w-4xl mx-auto">
        <div class="space-y-6">
          <section>
            <h2 class="text-2xl font-semibold mb-4 text-coffee">Information We Collect</h2>
            <p class="text-gray-300 leading-relaxed mb-4">
              At Coffee Club, we collect information you provide directly to us, such as when you:
            </p>
            <ul class="text-gray-300 space-y-2 ml-6">
              <li>• Create an account or profile</li>
              <li>• Make a purchase or place an order</li>
              <li>• Subscribe to our newsletter</li>
              <li>• Contact us for customer support</li>
              <li>• Participate in surveys or promotions</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-coffee">How We Use Your Information</h2>
            <p class="text-gray-300 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul class="text-gray-300 space-y-2 ml-6">
              <li>• Process and fulfill your orders</li>
              <li>• Provide customer service and support</li>
              <li>• Send you promotional communications</li>
              <li>• Improve our products and services</li>
              <li>• Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-coffee">Information Sharing</h2>
            <p class="text-gray-300 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except as described in this policy. We may share your information with trusted service providers who assist 
              us in operating our website and conducting our business.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-coffee">Data Security</h2>
            <p class="text-gray-300 leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-coffee">Your Rights</h2>
            <p class="text-gray-300 leading-relaxed">
              You have the right to access, update, or delete your personal information. You may also opt out of 
              receiving promotional communications from us at any time.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-coffee">Contact Us</h2>
            <p class="text-gray-300 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at privacy@coffeeclub.com
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
  name: 'PrivacyPolicy',
  components: {
    MaxContainer
  }
}
</script>