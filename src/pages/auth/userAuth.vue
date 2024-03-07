<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model="email" />
        </div>
        <div class="form-control">
          <label for="password">password</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <p v-if="!formIsValid">please enter the correct email and password</p>
        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button mode="flat" @click="switchAuthMode">
          {{ switchModeButtonCaptoin }}</base-button
        >
      </form>
    </base-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      error: null,
      isLoading: false,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Signup';
      }
    },

    switchModeButtonCaptoin() {
      if (this.mode === 'login') {
        return 'Signup instead';
      } else return 'Login instead';
    },
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6 ||
        !this.email.includes('.com')
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('login', {
            email: this.email,
            password: this.password,
          });

          //
        } else {
          console.log('signedup');
          await this.$store.dispatch('signup', {
            email: this.email,
            password: this.password,
          });
        }
        const redirectUrl = this.$route.query.redirect;

        if (redirectUrl) {
          this.$router.replace('/' + redirectUrl);
        } else if (this.$store.getters.isauth) {
          this.$router.replace('/coaches');
        }
      } catch (err) {
        this.formIsValid = false;
      }
      this.isLoading = false;
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'Signup instead';
      } else this.mode = 'login';
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>
<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>