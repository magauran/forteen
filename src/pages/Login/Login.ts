import firebase from 'firebase'
import Vue from 'vue'
import MobileAppContainer from '@/components/MobileAppContainer.vue'

export default Vue.extend({
  components: {
    MobileAppContainer
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
