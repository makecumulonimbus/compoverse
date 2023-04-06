<template>
  <div>
    <div class="button-container-space">
      <button><span>Click !!</span></button>
    </div>
    <div class="title-name">button-paper</div>
  </div>
</template>

<script>
export default {
  name: 'ButtonPaper',
}
</script>

<style lang="scss" scoped>
button {
  --border: 4px solid #021971;
  appearance: none;
  position: relative;
  padding: 0;
  background: transparent;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  outline: none;
  border-radius: 0;
  border: none;
  span {
    display: block;
    position: relative;
    padding: 1ex 2em;
    background: #1641bc;
    color: white;
    border: var(--border);
    transition: transform 0.2s ease;
    z-index: 1;
    will-change: transform;
  }
}
button::after {
  content: '';
  position: absolute;
  top: 12px;
  left: 12px;
  width: calc(100% - 5px);
  height: calc(100% - 5px);
  background: white;
  border: var(--border);
}
button:hover span {
  transform: translate(-3px, -3px);
}
button:active span {
  transition: transform 0.05s ease;
  transform: translate(0, 0);
}
</style>
