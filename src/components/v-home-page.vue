<template>
    <!--vHeader/-->
    <div class="main">
      <vFilter/>
      <vCards />
      <vPagination :info="info" :currentPage="currentPage" @prev="prevPage" @next="nextPage" />
    </div>
    <!--vFooter-->
  </template>
  
  <script>
  import { onMounted, computed, watch } from 'vue';
  import { useStore } from 'vuex';
  /*import vHeader from './v-header.vue';*/
  import vFilter from './v-filter.vue';
  import vCards from './v-cards.vue';
  import vPagination from './v-pagination.vue';
  /*import vFooter from './v-footer.vue';*/
  
  export default {
    components: {
      vFilter,
      vCards,
      vPagination,
      /*vHeader,
      vFooter*/
    },
    setup() {
      const store = useStore();
  
      const info = computed(() => store.getters.info);
      const currentPage = computed(() => store.getters.currentPage);
  
      const fetchCharacters = async (page) => {
        await store.dispatch('fetchCharacters', page);
      };
  
      const prevPage = () => {
        if (currentPage.value > 1) {
          store.dispatch('setPage', currentPage.value - 1);
        }
      };
  
      const nextPage = () => {
        if (currentPage.value < info.value.pages) {
          store.dispatch('setPage', currentPage.value + 1);
        }
      };
  
      onMounted(() => {
        fetchCharacters(currentPage.value);
      });
  
      watch(
        () => currentPage.value,
        (newValue) => {
          fetchCharacters(newValue);
        }
      );
  
      return {
        info,
        currentPage,
        prevPage,
        nextPage,
      };
    },
  };
  </script>

<style>
.main {
    display: flex;
    padding: 40px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(39, 43, 51);
}
</style>