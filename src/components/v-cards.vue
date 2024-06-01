<template>
  <div class="card__container">
    <article class="card__item" v-for="character in characters" :key="character.id">
      <div class="item__image">
        <img :src="character.image" :alt="`Image of ${character.name}`" v-if="character.image">
      </div>
      <div class="item__description" v-if="character">
        <div class="description__text">
          <h2 class="item__name">{{ character.name }}</h2>
          <span class="status" :class="getStatusClass(character.status)">
            <span class="status__icon">{{ character.status }} - </span>
            {{ character.species }}
          </span>
        </div>
        <div class="description__text">
          <span class="text-gray">Last known location: </span>
          <span>{{ character.location ? character.location.name : 'Unknown' }}</span>
        </div>
        <div class="description__text">
          <span class="text-gray">First seen in:</span>
          <span>{{ getFirstSeenEpisodeName(character.episode[0]) }}</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const characters = computed(() => store.getters.filteredCharacters);
    const episodes = computed(() => store.getters.episodes);

    const getFirstSeenEpisodeName = (episodeUrl) => {
      const episode = episodes.value.find((ep) => ep.url === episodeUrl);
      return episode ? episode.name : '';
    };

    const getStatusClass = (status) => {
      return {
        'status-alive': status === 'Alive',
        'status-unknown': status === 'unknown',
        'status-dead': status === 'Dead',
      };
    };

    return {
      characters,
      getFirstSeenEpisodeName,
      getStatusClass,
    };
  },
};
</script>

<style>
.card__container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card__item {
  border: none;
  border-radius: 8px;
  overflow: hidden;
  width: 600px;
  height: 220px;
  display: flex;
  background-color: rgb(60, 62, 68);
  margin: 10px;
}

.item__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item__description {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
  color: #fff;
}

.description__text {
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
}

.status {
  display: flex;
  align-items: center;
}

.status__icon {
  margin-right: 5px;
}

.status__icon::first-letter {
  text-transform: uppercase;
}

.status-alive::before {
  content: '';
  height: 9px;
  width: 9px;
  border-radius: 50%;
  background: rgb(85, 204, 68);
  margin-right: 9px;
  margin-top: 3px;
}

.status-unknown::before {
  content: '';
  height: 9px;
  width: 9px;
  border-radius: 50%;
  background: rgb(158, 158, 158);
  margin-right: 9px;
  margin-top: 3px;
}

.status-dead::before {
  content: '';
  height: 9px;
  width: 9px;
  border-radius: 50%;
  background: rgb(214, 61, 46);
  margin-right: 9px;
  margin-top: 3px;
}

.text-gray {
  font-size: 16px;
  font-weight: 500;
  color: rgb(158, 158, 158);
}
</style>
