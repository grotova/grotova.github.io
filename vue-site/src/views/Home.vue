<template>
  <div>
    <section id="showcase" class="py-16">
      <div class="container max-w-[1100px] mx-auto px-5">
        <div class="flex items-center justify-center gap-12 flex-col-reverse md:flex-row">
          <div class="flex-[2]">
            <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
              Hi, I'm {{ firstName }}!
            </h1>
            <div id="typewriter" class="font-jetbrains text-lg mb-8">
              <span class="font-semibold">
                <span 
                  v-for="(charInfo, index) in displayChars" 
                  :key="index"
                  :class="{ 'text-muted-foreground opacity-40': !charInfo.isRevealed }"
                >{{ charInfo.char }}</span>
              </span>
              <br>
              <span class="text-muted-foreground">{{ profile.location }}</span>
            </div>
            
            <div class="space-y-4 leading-7 [&:not(:first-child)]:mt-6">
              <p v-for="(paragraph, index) in profile.bio" :key="index" class="leading-7">
                {{ paragraph }}
              </p>
            </div>
          </div>
          
          <div class="flex-1">
            <div class="mx-auto w-full max-w-[280px] text-center">
              <img 
                :src="profile.image" 
                :alt="profile.name" 
                class="w-full h-auto rounded-2xl shadow-xl border border-border"
              >
              <div class="mt-6 flex justify-center">
                <a
                  href="/cv_Grotova_1103.pdf"
                  download="Grotova_Iuliia_CV.pdf"
                  class="badge-cv cursor-pointer inline-flex items-center justify-center rounded-md border px-4 py-2 text-base font-semibold transition-colors"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills & Selected Papers -->
    <div class="container max-w-[1100px] mx-auto px-5 pb-16">
      <TechnicalSkills />

      <div class="mt-12">
        <SelectedPapers />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTypewriter } from '@/composables/useTypewriter'
import SelectedPapers from '@/components/SelectedPapers.vue'
import TechnicalSkills from '@/components/TechnicalSkills.vue'
import profileData from '@/data/profile.json'

const profile = profileData
const firstName = profile.name.split(' ')[0] || profile.name
const { displayChars } = useTypewriter(profile.titles)
</script>

<style scoped>
:global(.badge-cv) {
  background-color: #dcfce7 !important;
  color: #166534 !important;
  border-color: #bbf7d0 !important;
}

:global(.badge-cv:hover) {
  background-color: #bbf7d0 !important;
}

:global(html.dark .badge-cv),
:global(.dark .badge-cv) {
  background-color: #11301a !important;
  color: #86efac !important;
  border-color: #1b3f26 !important;
}

:global(html.dark .badge-cv:hover),
:global(.dark .badge-cv:hover) {
  background-color: #1b3f26 !important;
}

@media screen and (max-width: 768px) and (orientation: portrait) {
  .flex {
    flex-direction: column-reverse;
    gap: 0;
  }
}
</style>

