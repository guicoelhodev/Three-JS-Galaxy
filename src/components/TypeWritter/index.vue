<template>
  <div>
    <span :class="className" v-for="(char, index) in text" :key="index">
      {{ char }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  msg: String,
  delayTime: Number,
  classname: String,
  fixContent: Boolean,
})

const text = ref('')
const message = props.msg ?? ''
const speed = 90
const className = `text-white ${props.classname}`

let typeTimeout: NodeJS.Timeout | null = null
let removeTimeout: NodeJS.Timeout | null = null

const typewriterEffect = () => {
  let i = 0

  const remove = () => {
    if (i >= 0) {
      text.value = text.value.slice(0, -1) // Remove the last character from the text
      i--
      removeTimeout = setTimeout(remove, speed)
    }
  }

  const type = () => {
    if (i < message.length) {
      text.value += message.charAt(i)
      i++
      typeTimeout = setTimeout(type, speed)
    } else if (!props.fixContent) {
      removeTimeout = setTimeout(remove, speed)
    }
  }

  type()
}

onMounted(() => {
  typeTimeout = setTimeout(() => typewriterEffect(), props.delayTime)
})

// Clear the timeouts when the component is unmounted
onUnmounted(() => {
  if (typeTimeout) clearTimeout(typeTimeout)
  if (removeTimeout) clearTimeout(removeTimeout)
})
</script>
