<script setup>
import HeaderView from './components/pages/HeaderView.vue';
import TableView from './components/pages/TableView.vue';
import FooterView from './components/pages/FooterView.vue';

</script>

<template>
  <div class="main-container">
    <div class="header-container">
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
