<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-center mb-8 text-coffee">Our Story</h1>
      <div class="max-w-4xl mx-auto">
        
        <!-- Hero Section -->
        <div class="text-center mb-12">
          <div class="w-32 h-32 bg-coffee rounded-full mx-auto mb-6 flex items-center justify-center">
            <span class="text-4xl font-bold">CC</span>
          </div>
          <p class="text-xl text-gray-300 leading-relaxed">
            From a small dream to a global community of coffee lovers, discover how Coffee Club became 
            the destination for exceptional coffee experiences.
          </p>
        </div>

        <!-- Timeline -->
        <div class="space-y-12">
          
          <!-- 2010 -->
          <div class="flex items-start gap-6">
            <div class="flex-shrink-0 w-20 h-20 bg-coffee rounded-full flex items-center justify-center">
              <span class="font-bold">2010</span>
            </div>
            <div>
              <h2 class="text-2xl font-semibold mb-3 text-coffee">The Beginning</h2>
              <p class="text-gray-300 leading-relaxed">
                It all started with Sarah and Mike, two coffee enthusiasts who met at a local roastery. 
                Frustrated by the lack of quality coffee shops in their neighborhood, they decided to 
                create their own. With a small loan and big dreams, they opened the first Coffee Club 
                in a tiny 500-square-foot space downtown.
              </p>
            </div>
          </div>

          <!-- 2012 -->
          <div class="flex items-start gap-6">
            <div class="flex-shrink-0 w-20 h-20 bg-coffee rounded-full flex items-center justify-center">
              <span class="font-bold">2012</span>
            </div>
            <div>
              <h2 class="text-2xl font-semibold mb-3 text-coffee">Growing Community</h2>
              <p class="text-gray-300 leading-relaxed">
                Word spread quickly about our exceptional coffee and welcoming atmosphere. Local artists 
                began displaying their work on our walls, students found their study haven, and business 
                meetings became more productive over our perfectly crafted lattes. We realized we weren't 
                just serving coffee – we were building a community.
              </p>
            </div>
          </div>

          <!-- 2015 -->
          <div class="flex items-start gap-6">
            <div class="flex-shrink-0 w-20 h-20 bg-coffee rounded-full flex items-center justify-center">
              <span class="font-bold">2015</span>
            </div>
            <div>
              <h2 class="text-2xl font-semibold mb-3 text-coffee">Direct Trade Partnership</h2>
              <p class="text-gray-300 leading-relaxed">
                Our commitment to quality led us to establish direct relationships with coffee farmers 
                in Colombia, Ethiopia, and Guatemala. This wasn't just about getting better beans – 
                it was about ensuring fair wages for farmers and sustainable farming practices. 
                Every cup now told a story of partnership and respect.
              </p>
            </div>
          </div>

          <!-- 2018 -->
          <div class="flex items-start gap-6">
            <div class="flex-shrink-0 w-20 h-20 bg-coffee rounded-full flex items-center justify-center">
              <span class="font-bold">2018</span>
            </div>
            <div>
              <h2 class="text-2xl font-semibold mb-3 text-coffee">Expansion & Innovation</h2>
              <p class="text-gray-300 leading-relaxed">
                With five successful locations, we launched our mobile app for order-ahead service 
                and began our signature roasting program. Our master roaster, Elena, joined the team 
                and brought her expertise in creating unique blends that would become Coffee Club 
                classics. We also introduced our loyalty program, rewarding our regular customers.
              </p>
            </div>
          </div>

          <!-- 2020 -->
          <div class="flex items-start gap-6">
            <div class="flex-shrink-0 w-20 h-20 bg-coffee rounded-full flex items-center justify-center">
              <span class="font-bold">2020</span>
            </div>
            <div>
              <h2 class="text-2xl font-semibold mb-3 text-coffee">Adapting & Thriving</h2>
              <p class="text-gray-300 leading-relaxed">
                When the world changed, so did we. We quickly pivoted to focus on delivery and 
                contactless pickup while maintaining the quality our customers loved. We launched 
                virtual coffee tastings, online barista classes, and home brewing kits. Our community 
                stayed connected, even when apart.
              </p>
            </div>
          </div>

          <!-- 2024 -->
          <div class="flex items-start gap-6">
            <div class="flex-shrink-0 w-20 h-20 bg-coffee rounded-full flex items-center justify-center">
              <span class="font-bold">2024</span>
            </div>
            <div>
              <h2 class="text-2xl font-semibold mb-3 text-coffee">Looking Forward</h2>
              <p class="text-gray-300 leading-relaxed">
                Today, Coffee Club operates 25 locations across three states, but we haven't forgotten 
                our roots. Every new location maintains that same community feel of our original shop. 
                We're now working on carbon-neutral operations and planning to open our first 
                international location. The journey continues, one cup at a time.
              </p>
            </div>
          </div>

        </div>

        <!-- Values Section -->
        <div class="mt-16 bg-gray-800 rounded-lg p-8">
          <h2 class="text-2xl font-semibold text-center mb-8 text-coffee">Our Core Values</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="text-center">
              <h3 class="text-lg font-semibold mb-3 text-coffee">Quality First</h3>
              <p class="text-gray-300">
                From bean selection to the final pour, we never compromise on quality. 
                Every cup represents our commitment to excellence.
              </p>
            </div>
            <div class="text-center">
              <h3 class="text-lg font-semibold mb-3 text-coffee">Community Connection</h3>
              <p class="text-gray-300">
                We believe coffee brings people together. Our spaces are designed to 
                foster conversation, creativity, and connection.
              </p>
            </div>
            <div class="text-center">
              <h3 class="text-lg font-semibold mb-3 text-coffee">Sustainability</h3>
              <p class="text-gray-300">
                We're committed to environmental responsibility and supporting 
                sustainable farming practices that benefit everyone.
              </p>
            </div>
            <div class="text-center">
              <h3 class="text-lg font-semibold mb-3 text-coffee">Innovation</h3>
              <p class="text-gray-300">
                While respecting tradition, we continuously explore new ways to 
                enhance the coffee experience for our customers.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurStory'
}
</script>