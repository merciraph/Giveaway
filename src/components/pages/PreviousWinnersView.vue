<script setup>
import { ServicePreviousWinner } from '@/service/ServicePreviousWinner';
const previousWinners = ServicePreviousWinner.loadPreviousWinners();
</script>

<template>
        <ul class="bold">
            <li v-for="entry in previousWinners">
                {{ entry.month }} - {{ entry.year }} : {{ entry.winner }}
            </li>
        </ul>
</template>
