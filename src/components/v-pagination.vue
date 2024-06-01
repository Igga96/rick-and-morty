<template>
  <div class="pagination">
    <button class="pagination__button"
    @click="prevPage" 
    :disabled="currentPage === 1">
    Previous</button>
    <span class="pagination__counter">{{ currentPage }}/{{ info.pages }}</span>
    <button class="pagination__button"
    @click="nextPage" 
    :disabled="currentPage === info.pages">
    Next</button>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  props: {
    info: Object,
    currentPage: Number,
  },
  setup(props) {
    const store = useStore();

    const prevPage = () => {
      if (props.currentPage > 1) {
        store.dispatch('setPage', props.currentPage - 1);
      }
    };

    const nextPage = () => {
      if (props.currentPage < props.info.pages) {
        store.dispatch('setPage', props.currentPage + 1);
      }
    };

    return {
      prevPage,
      nextPage,
    };
  },
};
</script>

<style>
.pagination {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    align-items: center;
}

.pagination__button {
    font-size: 18px;
    padding: 10px 20px;
    min-width: 120px;
    border: none;
    border-radius: 5px;
    background-color: rgb(60, 62, 68);
border: 1px solid #fff;
    color: #fff;
    cursor: pointer;
    margin: 0 10px;
}
.pagination__button:hover{
    background-color: rgb(74, 76, 83);;
}
.pagination__button:active{
    background-color: rgb(90, 92, 100);;
}

.pagination__button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    border: 1px solid #ccc;
}
.pagination__counter{
color: #ccc;
font-size: 27px;

}
</style>