<script setup lang="ts">
import type { Estudiante } from '@/models/estudiante'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var estudiantes = ref<Estudiante[]>([])

async function getEstudiantes() {
  estudiantes.value = await http.get(ENDPOINT).then((response) => response.data)
}

onMounted(() => {
  getEstudiantes()
})
</script>

<template>
  <div class="notas-libreta-container">
    <h2>Libreta de Notas</h2>
    <table class="notas-table">
      <thead>
        <tr>
          <th>Áreas Curriculares</th>
          <th>1er Trimestre</th>
          <th>2do Trimestre</th>
          <th>3er Trimestre</th>
          <th>Promedio Anual</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="nota in notas" :key="nota.id">
          <td>{{ nota.materia.nombre }}</td>
          <td>{{ nota.nota }}</td>
          <td>{{ new Date(nota.fecha).toLocaleDateString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.notas-libreta-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.notas-table {
  width: 100%;
  border-collapse: collapse;
}

.notas-table th,
.notas-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.notas-table th {
  background-color: #f2f2f2;
}

.notas-table tr:hover {
  background-color: #f1f1f1;
}
</style>
