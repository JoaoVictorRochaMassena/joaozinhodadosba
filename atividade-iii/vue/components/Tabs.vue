<script>
export default {
  props: { items: Array },
  data() {
    return { active: 0 };
  },
};
</script>
<template>
  <div role="tablist">
    <button
      v-for="(item, i) in items"
      :key="item.title"
      role="tab"
      :aria-selected="active === i"
      @click="active = i"
    >
      {{ item.title }}
    </button>
  </div>
  <p role="tabpanel">{{ items[active].content }}</p>
</template>
