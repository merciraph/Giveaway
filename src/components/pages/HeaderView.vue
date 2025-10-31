<template>
    <Panel toggeable style="margin: 5px">
        <template #header>
            <Avatar image="/Giveaway/merci_raph.jpg" size="xlarge" shape="circle"/>
            <h1>Giveaway du mois de {{ month }}</h1>
        </template>
                <p>Une fois par stream vous pouvez acheter une récompense dans la boutique de points de la chaîne. Elle vous donne un point. Plus vous avez de points, plus vous avez de chance de gagner ! </p>
                <p>Une fois par mois on tire au hasard une personne parmi les 40 qui ont le plus de points. Cette personne gagne 20€ de RP !</p>
                <p> Les personnes en <b class="bold">gras et jaune</b> sont en course pour être sélectionnées dans le tirage au sort !</p>
                
                <p>Les gagnants des mois précédents sont : adjectifs, Mugi Killer Pigs, Viciouso, Anjalbert et upandie !</p>
    </Panel>
</template>


<script setup>
import Avatar from 'primevue/avatar';
import Panel from 'primevue/panel';

const month = new Date().toLocaleString('default', { month: 'long' }).charAt(0).toUpperCase() + new Date().toLocaleString('default', { month: 'long' }).slice(1);
</script>
