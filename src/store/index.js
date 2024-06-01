import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    characters: [],
    info: {},
    currentPage: 1,
    episodes: [],
    filters: {
      name: '',
      status: ''
    },
  },
  mutations: {
    SET_CHARACTERS(state, characters) {
      state.characters = characters;
    },
    SET_INFO(state, info) {
      state.info = info;
    },
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page;
    },
    SET_EPISODES(state, episodes) {
      state.episodes = episodes;
    },
    SET_FILTERS(state, filters) {
      state.filters = filters;
    },
  },
  actions: {
    async fetchCharacters({ commit }, page) {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        commit('SET_CHARACTERS', response.data.results);
        commit('SET_INFO', response.data.info);
        const allEpisodes = await fetchAllEpisodes(response.data.results);
        commit('SET_EPISODES', allEpisodes);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    },
    setPage({ commit }, page) {
      commit('SET_CURRENT_PAGE', page);
    },
    setFilters({ commit }, filters) {
      commit('SET_FILTERS', filters);
    },
  },
  getters: {
    characters: (state) => state.characters,
    info: (state) => state.info,
    currentPage: (state) => state.currentPage,
    episodes: (state) => state.episodes,
    filters: (state) => state.filters,
    filteredCharacters: (state) => {
      let filtered = state.characters;
      if (state.filters.name) {
        filtered = filtered.filter(character =>
          character.name.toLowerCase().includes(state.filters.name.toLowerCase())
        );
      }
      if (state.filters.status) {
        filtered = filtered.filter(character =>
          character.status.toLowerCase() === state.filters.status.toLowerCase()
        );
      }
      return filtered;
    },
  },
});

async function fetchAllEpisodes(characters) {
  try {
    let episodeSet = new Set(); 

    characters.forEach((character) => {
      character.episode.forEach((episode) => {
        episodeSet.add(episode);
      });
    });

    const uniqueEpisodes = Array.from(episodeSet);

    const responses = await Promise.all(
      uniqueEpisodes.map((url) => axios.get(url))
    );

    return responses.map((response) => response.data);
  } catch (error) {
    console.error('Error fetching episodes:', error);
    return [];
  }
}