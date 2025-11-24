<script lang="ts" setup>
definePage({
  meta: {
    layout: 'page',
    title: 'aaa',
  },
})
console.log(12345)

const tiltCard = templateRef('tiltCard')

function handleMouseMove(e) {
  const card = tiltCard.value
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const maxTilt = 18
  const rotateY = ((x - centerX) / centerX) * maxTilt
  const rotateX = -((y - centerY) / centerY) * maxTilt
  card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
}

function handleMouseLeave() {
  const card = tiltCard.value
  card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)'
}
</script>

<template>
  <div class="login-container animated-background">
    <!-- SVG滤镜库 -->
    <svg style="display: none">
      <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
        <feTurbulence type="fractalNoise" baseFrequency="0.001 0.005" numOctaves="1" seed="17" result="turbulence" />
        <feComponentTransfer in="turbulence" result="mapped">
          <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
          <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
          <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
        </feComponentTransfer>
        <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
        <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1" specularExponent="100" lighting-color="white" result="specLight">
          <fePointLight x="-200" y="-200" z="300" />
        </feSpecularLighting>
        <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />
        <feDisplacementMap in="SourceGraphic" in2="softMap" scale="200" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>

    <!-- 登录卡片 -->
    <div
      ref="tiltCard"
      class="glass-component login-card"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <div class="glass-effect" />
      <div class="glass-tint" />
      <div class="glass-shine" />
      <div class="glass-content">
        <h2 class="login-title">
          欢迎登录
        </h2>
        <form class="login-form">
          <div class="form-group">
            <input type="text" placeholder="用户名" class="glass-input">
          </div>
          <div class="form-group">
            <input type="password" placeholder="密码" class="glass-input">
          </div>
          <button type="submit" class="glass-button">
            登录
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.animated-background {
  --uno: w-full h-full fixed top-0 left-0 -z-1;
  background-image: url('https://images.unsplash.com/photo-1549921296-3a6b0bb67c59');
  background-size: cover;
  background-position: center;
}

.login-card {
  --uno: w-96 relative rounded-3xl overflow-hidden shadow-xl transition-all duration-400 cursor-pointer bg-transparent;
}

.glass-effect {
  --uno: absolute inset-0 z-0 rounded-3xl;
  backdrop-filter: blur(5px);
  filter: url(#glass-distortion);
  isolation: isolate;
}

.glass-tint {
  --uno: absolute inset-0 z-1 bg-black/15 rounded-3xl;
}

.glass-shine {
  --uno: absolute inset-0 z-2 pointer-events-none rounded-3xl;
  border: 1px solid rgba(255, 255, 255, 0.13);
  box-shadow:
    inset 1px 1px 8px 0 rgba(255, 255, 255, 0.18),
    inset -1px -1px 8px 0 rgba(255, 255, 255, 0.08);
}

.glass-content {
  --uno: relative z-3 p-8 text-white;
}

.login-title {
  --uno: text-2xl font-semibold text-center mb-8 text-white drop-shadow-md;
}

.form-group {
  --uno: mb-6;
}

.glass-input {
  --uno: w-full px-5 py-3 rounded-xl text-white text-base bg-white/10 backdrop-blur-sm transition duration-300;
  border: none;
}
.glass-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}
.glass-input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
}

.glass-button {
  --uno: w-full py-3 rounded-xl font-semibold text-white bg-white/20 backdrop-blur-sm transition duration-300;
}
.glass-button:hover {
  --uno: -translate-y-0.5 shadow-lg;
  background: rgba(255, 255, 255, 0.3);
}
.glass-button:active {
  transform: translateY(0);
}
</style>
