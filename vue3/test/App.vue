<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <!-- <div>
    <h5>欢迎光临</h5>
  </div> -->
  <modal />
  <!-- <div>
    <div v-if="loading"></div>
    <img v-else :src="result.imgUrl" />
  </div> -->
  <!-- <div>
    <div>{{ "当前时间:" + nowTime }}</div>
    <button @click="showTime">显示时间</button>
    <button @click="closeTime">停止时间</button>
  </div> -->
  <!-- <div>
    <button
      @click="selectF(item)"
      v-for="(item, index) in typeList"
      :key="index"
    >
      {{ item }}
    </button>
  </div>
  <div>
    <span>您选择了【{{ selectType }}】</span>
  </div> -->
  <!-- reactive写法 -->
  <!-- <div>
    <button
      @click="selectF(item)"
      v-for="(item, index) in typeList"
      :key="index"
    >
      {{ item }}
    </button>
  </div>
  <div>
    <span>您选择了【{{ selectType }}】</span>
  </div>
  <div>
    <button @click="selectover">点餐完毕</button>
    <div>{{ overText }}</div>
  </div> -->
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from "vue";
// import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from "vue";
// import { onRenderTracked, onRenderTriggered } from "vue";
import { ref } from "vue";
import { nowTime, showTime, closeTime } from "./hoks/useNowTime";
import getuser from "./hoks/api";
import Modal from "./components/modal.vue";
export default defineComponent({
  name: "App",
  components: {
    Modal,
  },
  setup() {
    // const typeList = ref();
    // const selectType = ref("");
    // console.log("1", selectType);
    // const selectF = (item: string) => {
    //   selectType.value = item;
    // };
    // return { typeList, selectType, selectF };
    //reactive写法
    interface DataProps {
      typeList: string[];
      selectType: string;
      selectF: (item: string) => void;
    }
    const data: DataProps = reactive({
      typeList: ["红", "黄", "蓝"],
      selectType: "",
      selectF: (item: string): void => {
        data.selectType = item;
      },
    });
    const toData = toRefs(data); //转换成ref
    const overText = ref("客户");
    const selectover = (): void => {
      console.log("点餐");
      // overText.value = overText.value + "点餐完毕";
      overText.value = overText.value + "点餐完毕";
      // document.title = overText.value; //
    };
    //watch多值写成数组
    // watch([overText, () => data.selectType], (newv) => {
    //   document.title = newv[0];
    //   console.log(newv);
    // });
    // watch
    //vue3生命周期
    // console.log("组件steup");
    // onBeforeMount(() => {
    //   console.log("组件挂载前");
    // });
    // onMounted(() => {
    //   console.log("vue3组件挂载后");
    // });
    // onBeforeUpdate(() => {
    //   console.log("组件更新前");
    // });
    // onUpdated(() => {
    //   console.log("组件更新后");
    // });
    //vue3生命周期

    //vue3状态跟踪和触发
    // onRenderTracked((event) => {
    //   console.log("状态跟踪", event);
    // });
    // onRenderTriggered((event) => {
    //   console.log("改变", event);
    // });
    //vue3状态跟踪和触发
    //api
    const { result, loading, error } = getuser();
    //api
    return {
      ...toData,
      overText,
      selectover,
      nowTime,
      showTime,
      closeTime,
      result,
      loading,
      error,
    };
  },
  mounted() {
    console.log("vue2组件挂载后");
  },
  // onMounted() {
  //   console.log("组件挂载后");
  // },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
