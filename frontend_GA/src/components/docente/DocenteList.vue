<script setup lang="ts">
import type { Docente } from '@/models/docente'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var docentes = ref<Docente[]>([])

async function getDocentes() {
  docentes.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/docentes/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar el Docente?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getDocentes())
  }
}

function formatoFecha(fecha: string | number | Date) {
  return new Date(fecha).toLocaleDateString(undefined, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

onMounted(() => {
  getDocentes()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Docentes</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Docentes</h2>
      <div class="col-12">
        <RouterLink to="/docentes/crear"
          ><font-awesome-icon icon="fa-solid fa-plus" /> Crear Nuevo</RouterLink
        >
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">CI</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Fecha de Nacimiento</th>
            <th scope="col">Email</th>
            <th scope="col">Usuario</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(docente, index) in docentes.values()" :key="docente.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ docente.ci }}</td>
            <td>{{ docente.nombres }}</td>
            <td>{{ docente.apellidos }}</td>
            <td>{{ formatoFecha(docente.fechaNacimiento) }}</td>
            <td>{{ docente.email }}</td>
            <td>{{ docente.usuario.usuario }}</td>
            <td>
              <button class="btn btn-link" @click="toEdit(docente.id)">
                <font-awesome-icon icon="fa-solid fa-edit" />
              </button>
              <button class="btn btn-link" @click="toDelete(docente.id)">
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
