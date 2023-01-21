<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  url: {
    default: "https://jsonplaceholder.typicode.com/todos/1",
  },
  method: {
    default: "GET",
  },
  body: {
    default: undefined,
  },
  result: {
    default: {
      status: 200,
      body: null,
    },
  },
});

const url = ref(props.url);
const method = ref(props.method);
const body = ref(props.body);
const result = ref(props.result);

async function execute() {
  let status;
  let data;
  try {
    const response = await fetch(url.value, {
      method: method.value,
      headers: {
        "Content-Type": "application/json",
      },
      body: !!body.value ? undefined : JSON.stringify(body.value),
    });
    status = response.status;
    data = await response.json();
  } catch (error) {
    status = 500;
    data = null;
  }

  result.value = {
    status,
    body: data,
  };
}
</script>

<template>
  <div style="display: flex; flex-direction: column">
    <select name="cars" id="cars" v-model="method">
      <option value="GET">GET</option>
      <option value="POST">POST</option>
      <option value="PATCH">PATCH</option>
      <option value="PUT">PUT</option>
      <option value="DELETE">DELETE</option>
    </select>
    <br />
    <input v-model="url" />
    <br />
    <textarea v-model="body" rows="6" />
    <br />
    <button
      border="r gray-400 opacity-50"
      hover:bg="gray-400 opacity-20"
      @click="execute()"
    >
      Execute
    </button>
  </div>
  <br />
  <br />
  <div style="background-color: rgba(200, 200, 200, 0.5); padding: 8px">
    <h4 style="margin: 0">Response Status: {{ result.status }}</h4>
    <h4>Response Body:</h4>
    <pre>{{ JSON.stringify(result.body, null, 2) }}</pre>
  </div>
</template>
