<template>
  <div class="filter">
    <input class="filter__input" v-model="name" placeholder="Filter by name" @input="updateFilters">
    <select class="filter__select" v-model="status" @change="updateFilters">
      <option class="select__option" value="">All Statuses</option>
      <option class="select__option" value="alive">Alive</option>
      <option class="select__option" value="dead">Dead</option>
      <option class="select__option" value="unknown">Unknown</option>
    </select>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const name = ref('');
    const status = ref('');

    const updateFilters = () => {
      store.dispatch('setFilters', { name: name.value, status: status.value });
    };

    return {
      name,
      status,
      updateFilters,
    };
  },
};
</script>

<style>
.filter {
  display: flex;
  gap: 40px;
  margin-bottom: 20px;
}

.filter__input,
.filter__select {
  padding: 10px 20px;
  font-size: 16px;
  max-width: 200px;
  outline: none;
  border: 1px solid #fff;
  border-radius: 5px;
  background: rgb(60, 62, 68);
  color: #fff;
}
input[placeholder]{
  color: #fff;
  opacity: 1;
}
.filter__input{
  max-width: 110px;
}
::placeholder{
  color: #fff;
}

</style>
