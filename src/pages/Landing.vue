<template>
  <div>
    <div class="landing-top-bar">
      <div class="landing-logo">
        <img src="@/assets/logo.svg">
      </div>
      <div class="landing-social-buttons">
        <div>
          icon
        </div>
      </div>
    </div>
    <div>
      First section
    </div>
    <div>
      Second section
    </div>
    <div>
      Third section
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing'
}

</script>

<style scoped>
  .landing-top-bar {
    display: flex;
    flex-direction: row;
    background-color: aquamarine;
    justify-content: space-between;
    height: 48pt;
  }
  .landing-logo {
    background-color: yellow;
  }
  .landing-social-buttons {
    display: flex;
    align-items: flex-end;
    align-content: flex-end;
    background-color: antiquewhite;
  }
</style>
