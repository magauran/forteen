import Vue from 'vue'
import firebase from 'firebase'
// import { KEYBOARD_DID_CLOSE, KEYBOARD_DID_OPEN, startKeyboardAssist } from '@/utils/Keyboard'

export default Vue.extend({
  components: {

  },
  data () {
    return {
      form: {
        firstName: '',
        secondName: '',
        email: '',
        password: '',
        confirmPassword: '',
        birthday: null,
        passport: null,
        description: null,
        photo: null
      },
      step: 1,
      numberOfSteps: 3,
      submitButtonTitle: 'Далее'
    }
  },
  mounted () {
    // Пытался сделать плавающую кнопку, которая будет прилипать к верхнему краю клавиатуры.
    //
    // startKeyboardAssist(window)
    //
    // window.addEventListener(KEYBOARD_DID_OPEN, (event: Event) => {
    //   const typedEvent = event as CustomEvent<number>
    //   const kHeight = (typedEvent.detail + 16) as unknown as string
    //   (document.getElementById('submitButton') as HTMLParagraphElement).style.bottom = kHeight + 'px'
    // })
    //
    // window.addEventListener(KEYBOARD_DID_CLOSE, () => {
    //   (document.getElementById('submitButton') as HTMLParagraphElement).style.bottom = '16px'
    // })
  },
  methods: {
    showTab (n: number) {
      this.step = n

      if (n === this.numberOfSteps) {
        this.submitButtonTitle = 'Завершить'
      } else {
        this.submitButtonTitle = 'Далее'
      }
    },
    submitForm () {
      const form = (this.$refs[`form${this.step}`] as HTMLFormElement)

      const formIsValid = form.checkValidity()

      const confirmPasswordField = this.$refs.confirmPassword as HTMLInputElement
      if (confirmPasswordField != null) {
        const isPasswordsValid = this.form.password === this.form.confirmPassword
        if (!isPasswordsValid) {
          confirmPasswordField.setCustomValidity('Пароли должны совпадать')
        } else {
          confirmPasswordField.setCustomValidity('')
        }

        if (!isPasswordsValid) {
          form.reportValidity()
          return
        }
      }

      if (!formIsValid) {
        form.reportValidity()
        return
      }

      if (this.step < this.numberOfSteps) {
        this.showTab(this.step + 1)
      } else {
        this.register()
      }
    },
    register () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data?.user
            ?.updateProfile({
              displayName: this.form.firstName
            })
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            .then(() => {
              alert('Регистрация успешно завершена')
              this.$router.replace({ name: 'Tasks' })
            })
        })
        .catch(err => {
          alert(err.message)
        })
    }
  }
})
