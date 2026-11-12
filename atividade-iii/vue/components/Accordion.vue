<script>
export default {
  props: { items: Array },
  data() {
    return { opened: -1 };
  },
  methods: {
    toggle(i) {
      this.opened = this.opened === i ? -1 : i;
    },
  },
};
</script>
<template>
  <div v-for="(item, i) in items" :key="item.title">
    <button @click="toggle(i)" :aria-expanded="opened === i">
      {{ item.title }}
    </button>
    <div class="answer" :class="{ open: opened === i }">
      <div>
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>
