<script setup>
import HeaderView from './components/pages/HeaderView.vue';
import TableView from './components/pages/TableView.vue';
import FooterView from './components/pages/FooterView.vue';
import Image from 'primevue/image';

</script>

<template>
  <div class="main-container">
    <div class="header-container">
      <Image class="avatar" image-style="border-radius:50%" src="/Giveaway/merci_raph.jpg"/>
      <HeaderView />
    </div>
    <div class="table-container">
      <TableView />
    </div>
    <div class="footer-container">
      <FooterView />
    </div>
  </div>
</template>
