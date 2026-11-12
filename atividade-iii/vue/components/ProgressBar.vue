<script>
export default { props: { value: Number } };
</script>
<template>
  <p>{{ value }}%</p>
  <div
    class="progress"
    role="progressbar"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-valuenow="value"
  >
    <span :style="{ width: value + '%' }"></span>
  </div>
</template>
