<script setup lang="ts">
  import Button from 'primevue/button';
  import InputText from 'primevue/inputtext';
import { ref } from 'vue';

  const text = ref('Salut');

</script>

<template>
  <InputText v-model="text" />
  {{ text }}
  <Button label="Click Me" @click="() => alert(text)" />
</template>
