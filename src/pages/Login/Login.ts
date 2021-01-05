import firebase from 'firebase'
import Vue from 'vue'

export default Vue.extend({
  components: {

  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submit: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.replace({ name: 'Dashboard' })
        })
        .catch(err => {
          alert(err)
        })
    }
  }
})
