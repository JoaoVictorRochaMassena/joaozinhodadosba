<script>
export default { props: { message: String }, emits: ["close"] };
</script>
<template>
  <div v-if="message" class="toast" role="status">
    {{ message }}
    <button @click="$emit('close')" aria-label="Fechar aviso">Fechar</button>
  </div>
</template>
