<template>
  <div id="i">{{'hellow world'}}</div>
  <div>{{'hellow world1'}}</div>
  <div>{{'hellow world1'}}</div>
  <div>{{'hellow world1'}}</div>
  <div>{{'hellow world1'}}</div>
</template>

<script>
export default {
setup() {
    const testFunction = () => {
      console.log('滚!!!')
    }
    return {
      testFunction
    }
  }
}
</script>

<style>
    div{
        color: yellow;
    }
</style>