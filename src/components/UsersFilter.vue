<template>
  <v-col cols="12" md="4">
    <v-select @change="(value) => updateCountry(value)" :items="['russia', 'usa']" clearable
      label="Filter by country"></v-select>

    <v-select @change="(value) => updateScores(value)" :items="['> 20', '< 10']" clearable
      label="Filter by score"></v-select>
  </v-col>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    }
  },

  computed:
    mapGetters(['usersFilter']),
  methods: mapMutations(['updateCountry', 'updateScores']),

}
</script>