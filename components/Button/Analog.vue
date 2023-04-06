<template>
  <div>
    <div class="button-container-space">
      <button>Click !!</button>
    </div>
    <div class="title-name">button-analog</div>
  </div>
</template>

<script>
export default {
  name: 'ButtonAnalog',
}
</script>

<style lang="scss" scoped>
button {
  background-color: #1197cc;
  box-shadow: #094c66 4px 4px 0px;
  border-radius: 8px;
  transition: transform 200ms, box-shadow 200ms;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
}
button:active {
  transform: translateY(4px) translateX(4px);
  box-shadow: #094c66 0px 0px 0px;
}
</style>
