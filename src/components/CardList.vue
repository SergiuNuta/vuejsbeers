<template>
  <b-container class="CardList pt-5">
    <b-row class="text-center mb-5">
      <h2>All the beers in the world</h2>
      <div class="d-flex mt-3 justify-content-center">
        <div class="mr-5">Search</div>
        <input id="searchInput" v-model="filterBeer" />
      </div>
    </b-row>
    <b-row>
      <template v-for="beer in filteredList(items, filterBeer)">
        <b-col :key="beer.id" md="6" sm="12">
          <b-card no-body class="CardList__Card">
            <b-card-img
              :src="beer.image_url"
              :img-alt="beer.name"
              img-right
              class="CardList__image"
            ></b-card-img>
            <div class="CardList__content">
              <b-card-text class="text-center p-3">
                {{ beer.name }}
              </b-card-text>
              <b-card-text>
                {{ beer.tagline }}
              </b-card-text>
            </div>
          </b-card>
        </b-col>
      </template>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      filterBeer: ''
    }
  },
  mounted () {
    this.$store.dispatch('loadItems')
  },
  computed: mapState(['items']),
  methods: {
    filteredList (items, filterBeer) {
      if (!filterBeer) {
        return this.items
      }
      return this.items.filter((beer) => {
        return beer.name.match(new RegExp(filterBeer, 'i'))
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.CardList {
  &__image {
    object-fit: contain;
    width: 40%;
  }

  &__content {
    padding-left: 1.5em;
  }

  &__Card {
    box-shadow: 0 5px 40px rgba(0, 0, 0, 0.2);
    flex-direction: row;
    width: 100%;
    height: 19em;
    padding: 1em;
    border: none;
    margin-bottom: 1em;

    &:hover {
      border: 1px solid black;
    }
  }
}
</style>
