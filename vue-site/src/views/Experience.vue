<template>
  <div class="container max-w-[1100px] mx-auto px-5 py-16">
    <section id="journey">
      <h2 class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-8">
        Experience
      </h2>
      <div class="space-y-3">
        <Card v-for="exp in experiences" :key="exp.id">
          <CardContent class-name="p-5" v-if="exp.expandable === false">
            <div class="flex flex-col gap-2">
              <small class="text-sm font-medium leading-none">
                {{ exp.date }}
              </small>
              <h3 class="scroll-m-20 text-xl font-semibold tracking-tight">
                {{ exp.company }}
              </h3>
              <p class="leading-7 text-muted-foreground">
                {{ exp.description }}
              </p>
            </div>
          </CardContent>

          <CardContent class-name="p-5" v-else>
            <div class="flex flex-col gap-2">
              <small class="text-sm font-medium leading-none">
                {{ exp.date }}
              </small>
              <h3 class="scroll-m-20 text-xl font-semibold tracking-tight">
                {{ exp.company }}
              </h3>
              <p class="leading-7 text-muted-foreground">
                {{ exp.description }}
              </p>
            </div>

            <!-- Projects accordion -->
            <details
              v-if="Array.isArray(exp.projects) && exp.projects.length > 0"
              class="group mt-4"
            >
              <summary class="flex items-center justify-end gap-2 cursor-pointer select-none text-sm font-semibold text-muted-foreground">
                <span>Projects</span>
                <span class="mt-0.5 transition-transform duration-200 group-open:rotate-180">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>

              <div class="mt-3 pl-0 space-y-4">
                <div class="space-y-3">
                  <div
                    v-for="(project, pIdx) in exp.projects"
                    :key="`project-${pIdx}`"
                    class="ml-1"
                  >
                    <div class="flex flex-wrap items-center gap-2">
                      <p class="text-sm font-semibold underline underline-offset-2">
                        {{ project.title }}
                      </p>
                      <Badge
                        v-if="project.link"
                        as="a"
                        :href="project.link"
                        target="_blank"
                        rel="noreferrer"
                        variant="outline"
                        class="badge-link cursor-pointer inline-flex items-center gap-1"
                      >
                        View Paper
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                      </Badge>
                    </div>
                    <ul
                      v-if="Array.isArray(project.bullets) && project.bullets.length > 0"
                      class="ml-5 list-disc space-y-1 text-sm leading-6 text-muted-foreground mt-1"
                    >
                      <li
                        v-for="(b, bIdx) in project.bullets"
                        :key="`project-${pIdx}-bullet-${bIdx}`"
                      >
                        <template v-if="typeof b === 'string'">
                          {{ b }}
                          <Badge
                            v-if="bIdx === 0 && project.extraLinks && project.extraLinks[0]"
                            as="a"
                            :href="project.extraLinks[0].href"
                            target="_blank"
                            rel="noreferrer"
                            variant="outline"
                            class="badge-link-secondary cursor-pointer inline-flex items-center gap-1 ml-2"
                          >
                            {{ project.extraLinks[0].label }}
                          </Badge>
                        </template>
                        <template v-else>
                          <span class="font-medium">{{ b.label }}</span>
                          <ul
                            v-if="Array.isArray(b.items) && b.items.length > 0"
                            class="ml-5 mt-1 list-[circle] space-y-1 text-sm leading-6 text-muted-foreground"
                          >
                            <li
                              v-for="(sub, sIdx) in b.items"
                              :key="`project-${pIdx}-bullet-${bIdx}-sub-${sIdx}`"
                            >
                              {{ sub }}
                            </li>
                          </ul>
                        </template>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </details>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import CardContent from '@/components/ui/CardContent.vue'
import Badge from '@/components/ui/Badge.vue'
import experienceData from '@/data/experience.json'

const experiences = experienceData
</script>

<style>
/* Match "View Paper" badge style from SelectedPapers */
.badge-link {
  background-color: #dbeafe !important;
  color: #2563eb !important;
  border-color: #bfdbfe !important;
}

.badge-link:hover {
  background-color: #bfdbfe !important;
}

/* Secondary badge style for "How it looks" */
.badge-link-secondary {
  background-color: #dcfce7 !important; /* green-100 */
  color: #15803d !important;            /* green-700 */
  border-color: #bbf7d0 !important;     /* green-200 */
}

.badge-link-secondary:hover {
  background-color: #bbf7d0 !important;
}

html.dark .badge-link {
  background-color: #1e3a5f !important;
  color: #93c5fd !important;
  border-color: #2e4a6f !important;
}

html.dark .badge-link:hover {
  background-color: #2e4a6f !important;
}

html.dark .badge-link-secondary {
  background-color: #14532d !important; /* green-900-ish */
  color: #bbf7d0 !important;            /* green-200 */
  border-color: #166534 !important;     /* green-700 */
}

html.dark .badge-link-secondary:hover {
  background-color: #166534 !important;
}
</style>

