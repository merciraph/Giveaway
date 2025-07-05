<template>
    <Card class="card">
        <template #title>
            <h2>Giveaway du mois de {{ month }}</h2>
        </template>
        <template #content class="item1">
            <Avatar image="/Giveaway/merci_raph.jpg" size="xlarge" shape="circle"/>
            <text class="item2">
                <p>Une fois par stream vous pouvez acheter une récompense dans la boutique de points de la chaîne. Elle vous donne un point. Plus vous avez de points, plus vous avez de chance de gagner ! </p>
                <p>Une fois par mois on tire au hasard une personne parmi les 50 qui ont le plus de points. Cette personne gagne 20€ de RP !</p>
                <p> Les personnes en <b class="bold">gras et jaune</b> sont en course pour être sélectionnées pour le tirage au sort !</p>
            </text>
        </template>
    </Card>
</template>


<script setup>
import { Card } from 'primevue';
import Avatar from 'primevue/avatar';

const month = new Date().toLocaleString('default', { month: 'long' }).charAt(0).toUpperCase() + new Date().toLocaleString('default', { month: 'long' }).slice(1);
</script>
