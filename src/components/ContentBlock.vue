<template>
  <v-container>
    <v-row align="center" justify="center" class="ma-4">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>
      <users-filter />
      <modal :currentUser='currentUser' v-show="visible" @close='visible = false' />
      <v-col cols="12" md="4">
        <v-card max-width="450" class="mx-auto">
          <users-list :users='filteredUsers' @show='setCurrentUser' />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UsersFilter from './UsersFilter.vue';
import UsersList from './UsersList.vue';
import Modal from './Modal.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'ContentBlock',
  components: { UsersFilter, UsersList, Modal },


  data: () => ({
    visible: false,
    currentUser: {},
    users: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        country: 'russia',
        scores: 23,
        title: 'Brunch this weekend?',
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998 - 3874',
        },
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        country: 'russia',
        scores: 8,
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        address: {
          street: 'Victor Plains',
          suite: 'Suite 879',
          city: 'Wisokyburgh',
          zipcode: '90566-7771',
        },
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        country: 'usa',
        scores: 25,
        title: 'Oui oui',
        subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        address: {
          street: 'Douglas Extension',
          suite: 'Suite 847',
          city: 'McKenziehaven',
          zipcode: '59590-4157',
        },
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        country: 'usa',
        scores: 9,
        title: 'Birthday gift',
        subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        address: {
          street: 'Hoeger Mall',
          suite: 'Apt. 692',
          city: 'South Elvis',
          zipcode: '53919-4257',
        },
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        country: 'russia',
        scores: 15,
        title: 'Recipe to try',
        subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        address: {
          street: 'Skiles Walk',
          suite: 'Suite 351',
          city: 'Roscoeview',
          zipcode: '33263',
        },
      },
    ],
  }),

  methods: {
    setCurrentUser(index) {
      const user = this.users.find((_, i) => index === i);
      this.currentUser = user;
      console.log(index);
      this.visible = true;
    }
  },

  computed: {
    ...mapGetters(['usersFilter']),
    filteredUsers() {
      const { selectedCountry, selectedScores } = this.usersFilter;
      return this.users.filter((user) => {
        if (!selectedCountry && !selectedScores) return this.users;
        if (selectedCountry && !selectedScores) return user.country === selectedCountry;

        if (selectedCountry && selectedScores) {
          if (selectedScores === "> 20") {
            return user.scores > 20 && user.country === selectedCountry;
          }

          if (selectedScores === "< 10") {
            return user.scores < 10 && user.country === selectedCountry;
          }
        }

        if (!selectedCountry && selectedScores) {
          if (selectedScores === "> 20") {
            return user.scores > 20;
          }

          if (selectedScores === "< 10") {
            return user.scores < 10;
          }
        }
      })
    }
  }
}
</script>
