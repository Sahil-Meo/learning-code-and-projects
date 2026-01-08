<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <MaxContainer class="py-16">
      <h1 class="text-4xl font-bold text-center mb-8 text-coffee">Terms of Use</h1>
      <div class="max-w-4xl mx-auto">
        <div class="space-y-6">
          <section>
            <h2 class="text-2xl font-semibold mb-4 text-coffee">1. Acceptance of Terms</h2>
            <p class="text-gray-300 leading-relaxed">
              By accessing and using Coffee Club's services, you accept and agree to be bound by the terms and provision
              of this agreement.
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-coffee">2. Use License</h2>
            <p class="text-gray-300 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials on Coffee Club's website for
              personal,
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under
              this license you may not:
            </p>
            <ul class="text-gray-300 space-y-2 ml-6">
              <li>• modify or copy the materials</li>
              <li>• use the materials for any commercial purpose or for any public display</li>
              <li>• attempt to reverse engineer any software contained on the website</li>
              <li>• remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-coffee">3. Disclaimer</h2>
            <p class="text-gray-300 leading-relaxed">
              The materials on Coffee Club's website are provided on an 'as is' basis. Coffee Club makes no warranties,
              expressed or implied, and hereby disclaims and negates all other warranties including without limitation,
              implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
              of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-coffee">4. Limitations</h2>
            <p class="text-gray-300 leading-relaxed">
              In no event shall Coffee Club or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on Coffee Club's website, even if Coffee Club or a Coffee Club authorized
              representative
              has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold mb-4 text-coffee">5. Contact Information</h2>
            <p class="text-gray-300 leading-relaxed">
              If you have any questions about these Terms of Use, please contact us at legal@coffeeclub.com
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
  name: 'TermsOfUse',
  components: {
    MaxContainer
  }
}
</script>