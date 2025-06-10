<script setup >
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import { FilterMatchMode } from '@primevue/core';
import { ServiceViewerScoreData } from '@/service/ServiceViewerScoreData';

const tableData = ServiceViewerScoreData.loadViewerScoreData()

const filters= {
    username: { value: null, matchMode : FilterMatchMode.CONTAINS }
}

const loading = false;
const size = "small";

</script>


<template>
    <div class="card">
        <DataTable :size="size" v-model:filters="filters" :value="tableData" paginator :rows="20" :rowsPerPageOptions="[5, 10, 20, 50, 100]" dataKey="id" filterDisplay="row" :loading="loading"
            :globalFilterFields="['username']">
            <template #header>
                <div>
                    <IconField>
                        <InputText v-model="filters['username'].value" placeholder="🔎 Rechercher un utilisateur" />
                    </IconField>
                </div>
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
    </div>
</template>