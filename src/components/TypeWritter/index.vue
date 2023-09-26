import { TypeWritter } from '../../../.nuxt/components'; d
<template>
  <div>
    <span
      class="text-white text-2xl"
      v-for="(char, index) in text"
      :key="index"
    >
      {{ char }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  msg: String,
  delayTime: Number,
})

const text = ref('')
const message = props.msg ?? ''
const speed = 100

const typewriterEffect = () => {
  let i = 0

  const remove = () => {
    if (i >= 0) {
      text.value = text.value.slice(0, -1) // Remove the last character from the text
      i--
      setTimeout(remove, speed)
    }
  }
  const type = () => {
    if (i < message.length) {
      text.value += message.charAt(i)
      i++
      setTimeout(type, speed)
    } else {
      setTimeout(remove, speed)
    }
  }

  type()
}

onMounted(() => {
  setTimeout(() => typewriterEffect(), props.delayTime)
})
</script>
