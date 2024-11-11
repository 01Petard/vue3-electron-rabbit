<script setup>
import {ref, watch} from 'vue'
import MyButton from './components/button.vue'

const str = ref('')

const list = ref([
	{
		isCompleted: false,
		text: "吃饭"
	},
	{
		isCompleted: false,
		text: "睡觉"
	},
	{
		isCompleted: false,
		text: "打豆豆"
	},
])

function add() {
	if (str.value === '') {
		alert('请输入内容')
	} else {
		list.value.push({
			isCompleted: false,
			text: str.value
		})
		str.value = ''
	}
}

function del(index) {
	list.value.splice(index, 1)
}

watch(list, (newList, oldList) => {
	console.log('新的列表:', newList)
	console.log('旧的列表:', oldList)
}, {deep: true})

function loadInfo(info) {
	str.value = info
	add()
}

</script>

<template>

	<div class="todo-app">

		<div class="title">Todo App</div>
		<MyButton @sendInfo="loadInfo" text="你好" code="200"></MyButton>
		<MyButton @sendInfo="loadInfo" text="我好" code="300"></MyButton>
		<MyButton @sendInfo="loadInfo" text="大家好" code="400"></MyButton>
		<div class="todo-form">
			<input type="text" v-model="str" class="todo-input" placeholder="Add Todo...">
			<div @click="add" class="todo-button">Add</div>
		</div>

		<div v-for="(item, index) in list" :key="index" class="item">
			<div>
				<input type="checkbox"/>
				<span class="name">{{ index }}. {{ item.text }}</span>
			</div>
			<div @click="del(index)" class="del">del</div>
		</div>

	</div>
</template>

<style scoped>
.todo-app {
	width: 300px;
	margin: 50px auto;
	padding: 20px;
	background-color: #fff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
}

.title {
	font-size: 24px;
	font-weight: bold;
	text-align: center;
	margin-bottom: 20px;
	color: #333;
}

.todo-form {
	display: flex;
	align-items: center;
	margin-bottom: 20px;
}

.todo-input {
	flex-grow: 1;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
	margin-right: 10px;
	font-size: 16px;
}

.todo-button {
	cursor: pointer;
	padding: 10px 20px;
	background-color: #007bff;
	color: #fff;
	border: none;
	border-radius: 4px;
	font-size: 16px;
	transition: background-color 0.3s;
}

.todo-button:hover {
	background-color: #0056b3;
}

.item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
	border-bottom: 1px solid #eee;
}

.name {
	font-size: 16px;
	color: #333;
}

.del {
	cursor: pointer;
	color: #ff5252;
	font-size: 16px;
	transition: color 0.3s;
}

.del:hover {
	color: #e51c23;
}
</style>