<template>
  <div
    class="flex flex-col items-center border rounded-lg shadow-md md:flex-row md:max-w-xl border-gray-700 bg-gray-800"
  >
    <img
      class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      :src="character.image"
      alt=""
    />
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
        {{ character.name }}
      </h5>
      <div class="flex flex-row justify-center items-center">
        <span
          class="w-3 h-3 rounded-full mr-2"
          :class="
            character.status === 'Alive'
              ? 'bg-green-500'
              : character.status === 'Dead'
              ? 'bg-red-600'
              : 'bg-gray-200'
          "
        ></span>
        <span class="text-white"
          >Status : {{ character.status }} - {{ character.species }}</span
        >
      </div>
      <div>
        <p class="text-white">Origin: {{ character.origin.name }}</p>
      </div>
      <div>
        <p class="text-white">Location: {{ character.location.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['character']
}
</script>
