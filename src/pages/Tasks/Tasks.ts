import Vue from 'vue'
import TaskCategoryCard from '../../components/TaskCategoryCard.vue'

export default Vue.extend({
  components: {
    TaskCategoryCard
  },
  data () {
    return {
    }
  },
  methods: {
    select: function (type: number) {
      this.$router.push({ name: 'TasksCategory' })
    }
  }
})
