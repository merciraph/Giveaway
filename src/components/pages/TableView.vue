<script setup >
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { ServiceViewerScoreData } from '@/service/ServiceViewerScoreData';

const tableData = ServiceViewerScoreData.loadViewerScoreData()

</script>


<template>
    <div class="card">
        <DataTable :value="tableData" tableStyle="min-width: 50rem">
            <Column field="username" header="Username" sortable style="width: 50%"></Column>
            <Column field="score" header="Nombre de fois récupérée" sortable style="width: 50%"></Column>
        </DataTable>
    </div>
</template>