<template>
  <button class="button">
    <slot/>
  </button>
</template>

<style scoped>
.button {
  background: #BDBDBD;
  border: none;
  border-radius: 50%;
  transition: 0.3s ease-in-out all;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
}
.button:hover {
  background: darkgray;
}
.button:active {
  background: gray;
}
button:focus {
  outline: 0;
}
.button:after {
  width: 18px;
  height: 18px;
}
</style>
