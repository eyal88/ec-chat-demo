<template>
  <v-app>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="12"
          md="10"
        >
          <v-card
            class="elevation-4"
            style="height: 600px;"
          >
            <ec-chat
              :messages="messages"
              :fetching-messages="fetchingMessages"
              :user="user._id"
              :send-message="sendMessage"
              :get-user-by-id="getUserById"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import ECChat from "ec-chat";
import { sample } from "lodash";

export default {
  name: "App",
  data: () => ({
    messages: [],
    user: {
      _id: "0",
      name: "Eyal Cohen",
      color: "F44336"
    },
    users: {
      "1": {
        _id: "1",
        name: "Albert Einstien",
        color: "9C27B0",
        quotes: [
          `Few are those who see with their own eyes and feel with their own hearts.`,
          `Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.`,
          `Unthinking respect for authority is the greatest enemy of truth.`,
          `Try not to become a man of success, but rather try to become a man of value.`,
          `I am by heritage a Jew, by citizenship a Swiss, and by makeup a human being, and only a human being, without any special attachment to any state or national entity whatsoever.`,
          `Great spirits have always encountered violent opposition from mediocre minds.`
        ]
      },
      "2": {
        _id: "2",
        name: "Bob Dylan",
        color: "3F51B5",
        quotes: [
          `I think of a hero as someone who understands the degree of responsibility that comes with his freedom.`,
          `You're going to die. You're going to be dead. It could be 20 years, it could be tomorrow, anytime. So am I. I mean, we're just going to be gone. The world's going to go on without us. All right now. You do your job in the face of that, and how seriously you take yourself you decide for yourself.`,
          `Being noticed can be a burden. Jesus got himself crucified because he got himself noticed. So I disappear a lot.`
        ]
      }
    },
    fetchingMessages: false
  }),
  methods: {
    sendMessage: async function(message) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            this.messages.push(message);
            resolve();
          } catch (err) {
            reject(err);
          }
        }, 1000);
      });
    },
    getUserById: function(id) {
      let users = Object.assign({}, this.users, {
        "0": this.user
      });
      return users[id];
    },
    fetchMessages: async function() {
      this.fetchingMessages = true;
      setTimeout(() => {
        this.messages = [];
        this.fetchingMessages = false;
      }, 1000);
    },
    generateRandomMessage() {
      let user = sample(this.users);
      return {
        user: user._id,
        text: sample(user.quotes),
        created: new Date()
      };
    }
  },
  computed: {},
  mounted() {
    this.fetchMessages();
    setInterval(() => {
      let message = this.generateRandomMessage();
      this.messages.push(message);
    }, 10000);
  },
  components: {
    "ec-chat": ECChat
  }
};
</script>

<style>
@import "~ec-chat/dist/ECChat.css";
</style>
