<template>
  <div class="hello">
    <section class="g-img1">
      <div>
        称心称手，
        <br />超值入手。
      </div>
    </section>
    <section class="g-img2">
      <div>一切都刚刚好。</div>
    </section>
    <section class="g-img1">
      <div>
        摄像头、显示屏、性能，
        <br />样样 Pro 如其名。
      </div>
    </section>
    <section class="g-img2">
      <div>哪款 iPhone 适合你？</div>
    </section>
    <section class="g-img1">
      <div>
        换购新 iPhone，享受
        <br />最高达 RMB 3750
        <br />的折抵优惠。
      </div>
    </section>
    <section class="g-img2">
      <div>升级到新款 iPhone，轻轻松松。</div>
    </section>
  </div>
</template>

<script>
export default {
  name: "bgAttachment",
  props: {
    msg: String
  }
};
</script>

<style scoped>
section {
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: center;
}
section>div {
  height: 100%;
  font-size: 50px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
.g-img1 {
  background-image: url("http://pic7.photophoto.cn/20080407/0034034859692813_b.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
}

.g-img2 {
  background-image: url("https://images.unsplash.com/photo-1440688807730-73e4e2169fb8?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=");
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
}
</style>
