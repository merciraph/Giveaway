<template>
    <Card class="card">
        <template #title class="item1">
            <h1>Giveaway du mois de {{ month }}</h1>
        </template>
        <template #content class="item2">
            <Avatar image="/customGiveaway/merci_raph.jpg" size="xlarge" shape="circle"/>
            <p>Une fois par stream vous pouvez acheter une récompense dans la boutique de points de la chaîne. </p>
            <p>Elle vous donne un point. Une fois par mois on tire au hasard une personne parmi les 20 qui ont le plus de points</p>
            <p>Cette personne gagne 20€ de RP !</p>
        </template>
    </Card>
</template>


<script setup>
import { Card } from 'primevue';
import Avatar from 'primevue/avatar';

const month = new Date().toLocaleString('default', { month: 'long' }).charAt(0).toUpperCase() + new Date().toLocaleString('default', { month: 'long' }).slice(1);
</script>