<template>
  <dl class="landing-stats">
    <div>
      <dt class="landing-stats">исполнителей</dt>
      <IOdometer
        class="iOdometer"
        :value="performers"
        :format="'d'"
      />
    </div>
    <div>
      <dt class="landing-stats">подарков<br/>получено</dt>
      <IOdometer
        class="iOdometer"
        :value="gifts"
        :format="'d'"
      />
    </div>
    <div>
      <dt class="landing-stats">заказчиков</dt>
      <IOdometer
        class="iOdometer"
        :value="customers"
        :format="'d'"
      />
    </div>
  </dl>
</template>

<script>
import IOdometer from 'vue-odometer'
import 'odometer/themes/odometer-theme-default.css'

export default {
  name: 'LandingStats',
  components: {
    IOdometer
  },
  data () {
    return {
      performers: 4578,
      gifts: 8578,
      customers: 5588
    }
  },
  mounted () {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this
    setInterval(function () {
      that.performers += 1
    }, 7000)
    setInterval(function () {
      that.gifts += 1
    }, 3000)
    setInterval(function () {
      that.customers += 1
    }, 11000)
  }
}
</script>

<style scoped>
  dl.landing-stats {
    display: flex;
    flex-direction: row;
  }
  dl.landing-stats>div {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
  }
  dt.landing-stats {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    text-align: center;
    color: #4F4F4F;
  }
  .iOdometer {
    font-family: Cousine, monospace;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 73px;
    display: flex;
    margin: 0;
    color: #49C0B8;
  }
</style>
