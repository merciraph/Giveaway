<template>
    <Card>
        <template #title>
            <h1>Giveaway du mois de {{ month }}</h1>
        </template>
        <template #content>
            <Avatar image="/customGiveaway/src/assets/merci_raph.jpg" size="xlarge" shape="circle"/>
            <p>Une fois par stream vous pouvez acheter cette récompense qui vous donne un point, et une fois par mois on tire au hasard une personne parmi les 20 qui ont le plus de points qui gagne 20€ de RP !</p>
        </template>
    </Card>
</template>


<script setup>
import { Card } from 'primevue';
import Avatar from 'primevue/avatar';

const month = new Date().toLocaleString('default', { month: 'long' }).charAt(0).toUpperCase() + new Date().toLocaleString('default', { month: 'long' }).slice(1);
</script>