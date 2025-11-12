<template>
    <Panel toggeable style="margin: 5px">
        <Tabs value="0">
            <TabList>
                <Tab value="0">Règles</Tab>
                <Tab value="1">Précédents gagnants</Tab>
            </TabList>
            <TabPanels>
                <TabPanel value="0">
                    <RulesView />
                </TabPanel>
                <TabPanel value="1">
                    <PreviousWinnerView />
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Panel>
</template>

<script setup>
    import Tabs from 'primevue/tabs';
    import TabList from 'primevue/tablist';
    import Tab from 'primevue/tab';
    import TabPanels from 'primevue/tabpanels';
    import TabPanel from 'primevue/tabpanel';
    import RulesView from './RulesView.vue';
    import PreviousWinnerView from './PreviousWinnersView.vue';
    import Panel from 'primevue/panel';
</script>