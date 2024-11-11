<script setup>
import {defineEmits, defineProps} from 'vue'

const props = defineProps([
	'text',
	'code'
])

const emit = defineEmits([
	'sendInfo'
])

function sendInfo() {
	emit('sendInfo', props.text + props.code)
}

</script>

<template>
	<div @click="sendInfo" class="button">{{ props.text }} : {{ props.code }}</div>
</template>

<style scoped>
.button {
	width: 100px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	background-color: antiquewhite;
	border-radius: 10px;
}
</style>