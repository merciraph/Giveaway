<template>
            <h1>Giveaway du mois de {{ month }}</h1>
            <p>Une fois par stream vous pouvez acheter une récompense dans la boutique de points de la chaîne. Elle vous donne un point. Plus vous avez de points, plus vous avez de chance de gagner ! </p>
            <p>Une fois par mois on tire au hasard une personne parmi les 40 qui ont le plus de points. Cette personne gagne 20€ de RP !</p>
            <p> Les personnes en <b class="bold">gras et jaune</b> sont en course pour être sélectionnées dans le tirage au sort !</p>
</template>


<script setup>

const month = new Date().toLocaleString('default', { month: 'long' }).charAt(0).toUpperCase() + new Date().toLocaleString('default', { month: 'long' }).slice(1);
</script>
