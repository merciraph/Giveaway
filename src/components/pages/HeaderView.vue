<template>
    <Panel toggeable unstyled="true" class="header-container">
        <Tabs value="0">
            <TabList>
                <Tab value="0">Règles</Tab>
                <Tab value="1">Précédents gagnants</Tab>
            </TabList>
            <TabPanels>
                <ScrollPanel style="width: 100%; height: 15vh"
                    :dt="{
                        bar: {
                            background: '{primary.color}'
                        }
                    }"
                >
                    <TabPanel value="0">
                        <RulesView />
                    </TabPanel>
                    <TabPanel value="1">
                        <PreviousWinnerView />
                    </TabPanel>
                </ScrollPanel>
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
    import ScrollPanel from 'primevue/scrollpanel';
</script>
