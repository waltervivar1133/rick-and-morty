<template>
  <div class="max-w-md grid grid-cols-4 rounded-xl overflow-hidden mx-4 md:mx-auto ">
    <div class="p-3 bg-gray-700 text-white cursor-pointer hover:text-orange-500" @click="filter('')">Todos</div>
    <div class="p-3 bg-gray-700 text-white cursor-pointer hover:text-orange-500" @click="filter('Alive')">Alive</div>
    <div class="p-3 bg-gray-700 text-white cursor-pointer hover:text-orange-500" @click="filter('Dead')">Dead</div>
    <div class="p-3 bg-gray-700 text-white cursor-pointer hover:text-orange-500" @click="filter('unknown')">
      Unknown
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const filter = (status) => {
      store.dispatch("filterByStatus", status);
    };

    return {
      filter,
    };
  },
};
</script>

