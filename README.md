# our-css-idea

//base
@mixin cover($top: 0, $left: 0, $width: 100%, $height: 100%) {
  position: absolute;
  top: $top;
  left: $left;
  width: $width;
  height: $height;
}

条纹背景
<div class="card w-80">
  <div class="border-stripe rounded-xl">
    Lorem ipsum...
  </div>
</div>
.border-stripe {
  --stripe-width: 0.5rem;
  --stripe-deg: -45deg;
  --stripe-color-1: var(--grey-color-1);
  --stripe-offset-1: 2px;
  --stripe-color-2: var(--skin-color-2);
  --stripe-offset-2: 1rem;
  --stripe-radius: 15px;
  --stripe-inset: calc(var(--stripe-width) * -1);

  &::before {
    @include inset(var(--stripe-inset));
    content: "";
    z-index: -1;
    background: repeating-linear-gradient(
      var(--stripe-deg),
      var(--stripe-color-1) 0 var(--stripe-offset-1),
      var(--stripe-color-2) 0 var(--stripe-offset-2)
    );
    border-radius: var(--stripe-radius);
  }
}

光泽效果
<div class="flex flex-col space-y-4">
  <span class="btn btn-primary btn-round inline-flex">
    <span class="font-bold text-grad">Shine Button 1</span>
  </span>
  <span class="btn btn-info btn-round btn-depth inline-flex">
    <span class="font-bold">Shine Button 2</span>
  </span>
</div>
:root {
  --blue-color-1: #08123d;
  --gold-color-1: #dcb687;
  --brown-color-1: #50301f;
  --brown-color-2: #936237;
  --gold-grad-1: radial-gradient(
      circle at 50% 5%,
      #{transparentize(white, 0.5)},
      #eba262
    ),
    #eba262;
  --gold-grad-2: linear-gradient(88deg, #e7924e 0%, #f8ffee 50%, #e7924e 100%);
  --blue-grad-1: radial-gradient(
      circle at 50% 5%,
      #{transparentize(white, 0.8)},
      #091344
    ),
    #091344;
  --primary-color: var(--blue-grad-1);
  --info-color: var(--gold-grad-1);
}

.btn {
  &-primary {
    border: 4px solid var(--gold-color-1);

    span {
      background-image: var(--gold-grad-2);
    }
  }

  &-info {
    color: var(--brown-color-1);
    border: none;
  }

  &-depth {
    box-shadow: 0 -5px 0 var(--brown-color-2);
  }
}

缎带形状
<div class="ribbon">
  Pure CSS Ribbon
  <div class="block"></div>
  <div class="block"></div>
  <div class="block"></div>
  <div class="block"></div>
</div>
.ribbon {
  --ribbon-color-1: var(--yellow-color-1);
  --ribbon-color-2: var(--yellow-color-2);
  --ribbon-color-3: var(--yellow-color-3);

  position: relative;
  padding: 0.5rem 1rem;
  color: white;
  background: var(--ribbon-color-1);

  .block {
    &:nth-child(1),
    &:nth-child(2) {
      position: absolute;
      bottom: -20%;
      width: 20%;
      height: 20%;
      background: var(--ribbon-color-2);
      clip-path: polygon(0 0, 100% 100%, 100% 0);
    }

    &:nth-child(1) {
      left: 0;
    }

    &:nth-child(2) {
      right: 0;
      transform: scaleX(-1);
    }

    &:nth-child(3),
    &:nth-child(4) {
      position: absolute;
      z-index: -1;
      top: 20%;
      width: 40%;
      height: 100%;
      background: var(--ribbon-color-3);
      clip-path: polygon(0 0, 25% 50%, 0 100%, 100% 100%, 100% 0);
    }

    &:nth-child(3) {
      left: -20%;
    }

    &:nth-child(4) {
      right: -20%;
      transform: scaleX(-1);
    }
  }
}
