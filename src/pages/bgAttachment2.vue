<template>
  <div class="container">
    <section class="slide parallax" id="slide1">
      <h1>Pure CSS Parallax</h1>
    </section>
    <section class="slide" id="slide2">
      <h1>Set to full page for best experience.</h1>
    </section>
    <section class="slide parallax" id="slide3">
      <h1>No JavaScript Required</h1>
    </section>
    <section class="slide" id="slide4">
      <h1>End</h1>
    </section>
  </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Lora:400,400i,700");

body {
  margin: 0;
  padding: 0;
}

.container {
  height: 100vh;
  font-family: Lora, serif;
  overflow-x: hidden;
  // Set the distance from viewport to transformed objects.
  perspective: 2px;
}

.slide {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.2em;
  color: white;
  box-shadow: 0 0 5px 1px black;

  &.parallax::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    width: 100vw;
    background-size: cover;
    background-position: center;
    transform-style: preserve-3d;
    // move the pseudo-element back away from the camera
    // then scale it to fill the viewport
    // when it's further away, it appears to move more slowly
    // which is the essential of parallax
    transform: translateZ(-1px) scale(1.5);
  }

  &:not(.parallax) {
    background: #111;
  }

  h1 {
    font-size: 250%;
    text-shadow: 0 2px 2px black;
  }
}

#slide1::before {
  background-image: url("https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg");
}

#slide3::before {
  background-image: url("https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg");
}
</style>