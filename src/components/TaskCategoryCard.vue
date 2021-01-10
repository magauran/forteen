<template>
  <div class="container">
    <img v-bind:src="require(`@/assets/task_category_${imgPath}_img.png`)" :alt="imgAlt">
    <div id="right-container">
      <h2>{{title}}</h2>
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskCategoryCard',
  props: {
    title: { type: String },
    description: { type: String },
    imgPath: { type: String },
    imgAlt: { type: String }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    height: 176px;
    flex-direction: row;
    border-radius: 16px;
    overflow: hidden;
    padding: 0;
    margin-top: 32px;
    margin-bottom: 32px;
    box-shadow: 0 2px 4px rgba(117, 131, 142, 0.04), 0 8px 16px rgba(52, 60, 68, 0.1);
  }
  img {
    height: 176px;
    width: 141px;
    flex-grow: 0;
  }
  #right-container {
    background-color: $ft-background;
    flex-grow: 1;
    padding: 16px 8px 16px 12px;
  }
  h2 {
    text-align: left;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 120%;
    color: $ft-text-accent2;
    margin-bottom: 4px;
  }
  p {
    text-align: left;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 160%;
    color: $ft-text-secondary;
  }
  @media (max-width: 320px) {
   p {
     font-size:10px;
   }
  }
</style>
