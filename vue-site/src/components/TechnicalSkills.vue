<template>
  <section>
    <h2 class="scroll-m-20 text-2xl font-semibold tracking-tight mb-6">
      Technical Skills
    </h2>

    <Card>
      <CardContent class-name="p-5">
        <div class="space-y-4">
          <div class="space-y-1">
            <p class="scroll-m-20 text-lg font-semibold tracking-tight leading-snug">Programming</p>
            <p class="leading-7">
              Python (NumPy, pandas, SciPy, Matplotlib, Seaborn), SQL
            </p>
          </div>

          <div class="space-y-1">
            <p class="scroll-m-20 text-lg font-semibold tracking-tight leading-snug">Data Analytics</p>
            <p class="leading-7">
              Statistics (Classical and Bayesian inference, MCMC), signal and image processing, Fourier analysis,
              data visualisation
            </p>
          </div>

          <div class="space-y-1">
            <p class="scroll-m-20 text-lg font-semibold tracking-tight leading-snug">Machine learning</p>
            <p class="leading-7">
              Classical ML and neural networks applied to image and tabular data (scikit-learn, PyTorch)
            </p>
          </div>

          <div class="space-y-1">
            <p class="scroll-m-20 text-lg font-semibold tracking-tight leading-snug">Tools</p>
            <p class="leading-7">
              git, Linux, Jupyter, Google Cloud Platform
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </section>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import CardContent from '@/components/ui/CardContent.vue'
</script>

