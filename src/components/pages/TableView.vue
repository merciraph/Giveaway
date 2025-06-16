<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import { FilterMatchMode } from '@primevue/core';
import { ServiceViewerScoreData } from '@/service/ServiceViewerScoreData';
import { Card } from 'primevue';
import { ref } from 'vue';

const synched = new Date(__BUILD_TIME__);
const tableData = ref(ServiceViewerScoreData.loadViewerScoreData());
const filters = ref({ 
    username: { value: null, matchMode : FilterMatchMode.CONTAINS },
});
const loading = false;
const size = "small";
</script>


<template>
    <Card>
        <template #content>
            <DataTable :size="size" v-model:filters="filters" :value="tableData" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50, 100]" filterDisplay="menu" :loading="loading"
                :globalFilterFields="['username']">
                <template #header>
                        <InputText v-model="filters['username'].value" placeholder="Rechercher un utilisateur" />
                </template>
                <template #empty> Aucun utilisateur correspondant dans la liste !</template>
                <template #loading> Chargement...</template>
                <Column field="username" header="Utilisateur" sortable filterField="username" style="min-width: 12rem">
                    <template #body="{ data }">
                        {{ data.username }}
                    </template>
                </Column>
                <Column field="score" header="Score" sortable style="min-width: 12rem">
                    <template #body="{ data }">
                        {{ data.score }}
                    </template>
                </Column>
        </DataTable>
        </template>
        <template #footer>
            <p>Synchronisé pour la dernière fois le {{ synched.toLocaleDateString() }} à {{ synched.getHours() + ":" + synched.getMinutes().toString().padStart(2,'0') }}</p>
        </template>
    </Card>
</template>