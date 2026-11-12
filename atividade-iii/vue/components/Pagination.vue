<script>
export default { props: { total: Number, current: Number }, emits: ["change"] };
</script>
<template>
  <nav aria-label="Paginação">
    <button :disabled="current <= 1" @click="$emit('change', current - 1)">
      Anterior</button
    ><button
      v-for="n in total"
      :key="n"
      :aria-current="current === n ? 'page' : 'false'"
      @click="$emit('change', n)"
    >
      {{ n }}</button
    ><button :disabled="current >= total" @click="$emit('change', current + 1)">
      Próxima
    </button>
    <p>Página {{ current }} de {{ total }}</p>
  </nav>
</template>
