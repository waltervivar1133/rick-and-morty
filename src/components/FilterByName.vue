<template>
  <div class="max-w-md mt-5 mx-4 md:mx-auto">
    <input
      class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
      type="text"
      placeholder="Buscar por nombre"
      v-model="name"
      @keyup="filter()"
    >
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const name = ref('')
    const store = useStore()
    const filter = () => {
      store.dispatch('filterByName', name.value)
    }

    return {
      name,
      filter
    }
  }
}
</script>
