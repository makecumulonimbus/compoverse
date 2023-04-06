<template>
  <div>
    <div class="button-container-space">
      <button>Hover !!</button>
    </div>
    <div class="title-name">button-raindow-border</div>
  </div>
</template>

<script>
export default {
  name: 'ButtonRainbowBorder',
}
</script>

<style lang="scss" scoped>
button {
  --border-radius: 10px;
  --border-width: 4px;
  appearance: none;
  padding: 1em 2em;
  border: 0px;
  background-color: #212121;
  color: white;
  z-index: 2;
  border-radius: 15px;
  position: relative;
}
button::after {
  --m-i: linear-gradient(#000, #000);
  --m-o: content-box, padding-box;
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: var(--border-width);
  border-radius: var(--border-radius);
  background-image: conic-gradient(
    #488cfb,
    #23dbbc,
    #ddf505,
    #ff9f0e,
    #e440bb,
    #655adc,
    #488cfb
  );
  mask-image: var(--m-i), var(--m-i);
  mask-image: var(--m-i), var(--m-i);
  mask-origin: var(--m-o);
  mask-origin: var(--m-o);
  mask-clip: var(--m-o);
  mask-composite: exclude;
  mask-composite: destination-out;
  filter: hue-rotate(0);
  animation: rotate-hue linear 500ms infinite;
  animation-play-state: paused;
}
button:hover::after {
  animation-play-state: running;
}
button,
button::after {
  box-sizing: border-box;
}
button:active {
  --border-width: 5px;
}

@keyframes rotate-hue {
  to {
    filter: hue-rotate(1turn);
  }
}
</style>
