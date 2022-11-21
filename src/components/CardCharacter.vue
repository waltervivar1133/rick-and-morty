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

<style lang="scss">
.character {
  background-color: var(--background-card);
  border-radius: 20px;
  box-shadow: 0 0 10px 1px var(--background-body);
  overflow: hidden;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  height: 100%;
  &:hover {
    transform: scale(1.05);
    h3 {
      color: var(--text-orange);
    }
  }
  span {
    color: var(--text-gray);
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  &__info {
    padding: 1.5rem;
    .status{
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      span {
        color: var(--text-gray);
        &:first-child {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 0.5rem;
        }
      }
      .alive {
        background-color: green;
      }
      .dead {
        background-color: red;
      }
      .default {
        background-color: white;
      }
    }
    .origen {
      margin-bottom: 0.5rem;
    }
  }
}
</style>