<template>
  <TheNavigation></TheNavigation>
  <RouterView></RouterView>
  <div className="App">
            <form
                @submit.prevent=handleSubmit
            >
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    v-model="name"     />
                <br />
                <button type="submit">Submit</button>
            </form>
            <h1>{{ result }}</h1>
        </div>
  <TheFooter></TheFooter>
</template>

<script setup>
  import TheFooter from "./components/ui/footer/TheFooter.vue";
  import TheNavigation from "./components/ui/nagivation/TheNavigation.vue";
  import { ref } from "vue";
  import axios from 'axios';
  const name = ref('');
  const result = ref('');
  console.log(name.value);
  const handleSubmit = () => {
    let params = new URLSearchParams();
    params.append('name', name.value)
        axios.post('http://localhost:8080/bookstore/src/php/server.php', params
  ).then(response => result.value = response.data)
        
    };
</script>

<style lang="scss">
  body {
    margin: 0;
  }
</style>
