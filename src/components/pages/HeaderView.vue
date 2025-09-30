<template>
    <Panel toggeable style="margin: 5px">
        <template #header>
            <Avatar image="/Giveaway/merci_raph.jpg" size="xlarge" shape="circle"/>
            <Tabs value="0">
                <TabList>
                    <Tab value="0">
                        <h1>Giveaway du mois de {{ month }}</h1>
                    </Tab>
                    <Tab value="1"><h1>Liste des précédents gagnants</h1></Tab>
                </TabList>
                <TabPanels>
                    <TabPanel value="0">
                        <p>Une fois par stream vous pouvez acheter une récompense dans la boutique de points de la chaîne. Elle vous donne un point. Plus vous avez de points, plus vous avez de chance de gagner ! </p>
                        <p>Une fois par mois on tire au hasard une personne parmi les 40 qui ont le plus de points. Cette personne gagne 20€ de RP !</p>
                        <p> Les personnes en <b class="bold">gras et jaune</b> sont en course pour être sélectionnées dans le tirage au sort !</p>
                    </TabPanel>
                    <TabPanel value="1">
                        <p> Les gagnants des mois précédents sont :</p>
                        <ul>
                            <li>
                                Juin : adjectifs
                            </li>
                            <li>
                                Juillet : Mugi_KillerPigs
                            </li>
                            <li>
                                Août : Viciouso
                            </li>
                            <li>
                                Septembre : Anjalbert
                            </li>
                        </ul>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </template>
    </Panel>
</template>


<script setup>
import Avatar from 'primevue/avatar';
import Panel from 'primevue/panel';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

const month = new Date().toLocaleString('default', { month: 'long' }).charAt(0).toUpperCase() + new Date().toLocaleString('default', { month: 'long' }).slice(1);
</script>
