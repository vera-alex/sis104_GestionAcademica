<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const usuario = ref('')
const rol = ref('')
const id = router.currentRoute.value.params['id']

async function editarUsuario() {
  await http
    .patch(`${ENDPOINT}/${id}`, {
      usuario: usuario.value,
      rol: rol.value
    })
    .then(() => router.push('/usuarios'))
}

async function getUsuario() {
  await http.get(`${ENDPOINT}/${id}`).then((response) => {
    ;(usuario.value = response.data.usuario), (rol.value = response.data.rol)
  })
}

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getUsuario()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/usuarios">Usuarios</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Editar Usuario</h2>
    </div>

    <div class="row">
      <form @submit.prevent="editarUsuario">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="usuario"
            placeholder="Usuario"
            required
          />
          <label for="usuario">Usuario</label>
        </div>
        <div class="form-floating mb-2">
          <select class="form-select" v-model="rol" required>
            <option value="" :disabled="true">Seleccione un elemento</option>
            <option>Docente</option>
            <option>Estudiante</option>
            <option>Administrador</option>
          </select>
          <label for="rol">Rol</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <font-awesome-icon icon="fa-solid fa-save" /> Guardar
          </button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style></style>
