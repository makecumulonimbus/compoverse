<template>
  <div>
    <div class="button-container-space bg-dark">
      <button>Hover !!</button>
    </div>
    <div class="title-name">button-neon</div>
  </div>
</template>

<script>
export default {
  name: 'ButtonNeon',
}
</script>

<style lang="scss" scoped>
*,
*::after,
*::before {
  box-sizing: border-box;
}

button {
  --clr-neon: hsl(317 100% 54%);
  --clr-bg: #31202b;
  font-size: 18px;
  display: inline-block;
  color: var(--clr-neon);
  border: var(--clr-neon) 0.125em solid;
  padding: 0.5em 1.25em;
  border-radius: 0.25em;
  position: relative;
  text-shadow: 0 0 0.125em hsl(0, 0%, 100% / 0.3), 0 0 0.45em currentColor;
  box-shadow: inset 0 0 0.5em 0 var(--clr-neon), 0 0 0.5em 0 var(--clr-neon);
  transition: all 100ms linear;
  &::after {
    contain: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    box-shadow: 0 0 2em 0.5em var(--clr-neon);
    opacity: 0;
    background-color: var(--clr-neon);
    z-index: -1;
    transition: opacity 100ms linear;
  }
  &::before {
    pointer-events: none;
    content: '';
    position: absolute;
    background: var(--clr-neon);
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    transform: perspective(1em) rotateX(20deg) scale(1, 0.35);
    filter: blur(1em);
    opacity: 0.7;
    transition: opacity 100ms linear;
  }

  &:hover {
    color: var(--clr-bg);
    text-shadow: none;
    background: var(--clr-neon);
    box-shadow: inset 0 0 0.5em 0 var(--clr-neon), 0 0 1em 0 var(--clr-neon);
    transition: all 100ms linear;
    &::before {
      transition: opacity 100ms linear;
      opacity: 1;
    }
    &::after {
      transition: opacity 100ms linear;
      opacity: 1;
    }
  }
  &:focus {
    color: var(--clr-bg);
    text-shadow: none;
    background: var(--clr-neon);
    box-shadow: inset 0 0 0.5em 0 var(--clr-neon), 0 0 1em 0 var(--clr-neon);
    transition: all 100ms linear;
    &::before {
      transition: opacity 100ms linear;
      opacity: 1;
    }
    &::after {
      transition: opacity 100ms linear;
      opacity: 1;
    }
  }
}
</style>
