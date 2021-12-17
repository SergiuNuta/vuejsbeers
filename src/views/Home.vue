<template>
  <div class="home">
    <CardList />
  </div>
</template>

<script>
// @ is an alias to /src
import CardList from '@/components/CardList.vue'

export default {
  name: 'Home',
  components: {
    CardList
  }
}
</script>
