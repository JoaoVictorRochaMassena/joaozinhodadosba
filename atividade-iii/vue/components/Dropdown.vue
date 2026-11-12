<script>
export default {
  props: { options: Array },
  emits: ["select"],
  data() {
    return { open: false };
  },
  mounted() {
    document.addEventListener("click", this.outside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.outside);
  },
  methods: {
    outside(event) {
      if (!this.$el.contains(event.target)) this.open = false;
    },
    choose(option) {
      this.$emit("select", option);
      this.open = false;
    },
  },
};
</script>
<template>
  <div class="dropdown">
    <button @click="open = !open" :aria-expanded="open">
      Filtrar matérias
    </button>
    <div v-if="open" class="options">
      <button v-for="option in options" :key="option" @click="choose(option)">
        {{ option }}
      </button>
    </div>
  </div>
</template>
