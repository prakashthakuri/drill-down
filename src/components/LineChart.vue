<template>
       <div>
        <h2> Chart </h2>
        <canvas id="line-chart"></canvas>
        </div>
</template>


<script>

import Chart from 'chart.js';
import netLineChart from '../line-chart-data'
export default {
    // extends: Chart,
    name: 'LineChart',
    data() {
        return {
            netLineChart
        }
    },
    mounted() {
        const ctx = document.getElementById('line-chart')
        new Chart(ctx, this.netLineChart)
    }
}
</script>