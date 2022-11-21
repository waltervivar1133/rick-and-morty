<template>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 m-5">
      <div v-for="character in characters" :key="character.id">
        <CardCharacter :character="character" />
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import CardCharacter from '@/components/CardCharacter'
export default {
  name: 'Characters',
  components: {
    CardCharacter
  },
  setup() {
    const store = useStore()
    const characters = computed(() => {
      return store.state.charactersFilter
    })

    onMounted(() => {
      store.dispatch('getCharacters')
    })

    return {
      characters
    }
  }
}
</script>

