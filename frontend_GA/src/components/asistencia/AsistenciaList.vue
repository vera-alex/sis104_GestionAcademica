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
  <div class="container">
    <div class="row mb-5">
      <h2>Lista de Asistencia</h2>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Hora</th>
            <th scope="col">Lunes</th>
            <th scope="col">Martes</th>
            <th scope="col">Miércoles</th>
            <th scope="col">Jueves</th>
            <th scope="col">Viernes</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="(interprete, index) in interpretes.values()" :key="interprete.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ interprete.nombre }}</td>
            <td>{{ interprete.nacionalidad }}</td>
            <td>
              <button class="btn btn-link" @click="toEdit(interprete.id)">
                <font-awesome-icon icon="fa-solid fa-edit" />
              </button>
              <button class="btn btn-link" @click="toDelete(interprete.id)">
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
              <div class="form-floating mb-2">
                <select class="form-select">
                  <option value="" :disabled="true">Seleccione un elemento</option>
                  <option>P</option>
                  <option>F</option>
                  <option>T</option>
                </select>
                <label for="interprete">Intérpretes</label>
              </div>
            </td>
          </tr> -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
