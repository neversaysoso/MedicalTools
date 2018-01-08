<template>
  <div>
    <scroller>
      <div>
        <wxc-cell
          title="输入框1">
          <input class="input"
            slot="value"
            type="number"
            placeholder="通用输入框"
            v-model="input"/>
        </wxc-cell>
        <wxc-cell
          title="输入框2">
          <input class="input"
            slot="value"
            type="tel"
            placeholder="通用输入框"
            v-model="input"/>
        </wxc-cell>
        <wxc-checkbox 
          :checked="checked1"
          title="复选框1"
          @wxcCheckBoxItemChecked="itemChecked1">
        </wxc-checkbox>
        <wxc-checkbox 
          :checked="checked2"
          title="复选框2"
          @wxcCheckBoxItemChecked="itemChecked2">
        </wxc-checkbox>
        <wxc-cell
          title="性别">
          <select-box
            :config="sexindex"
            :options="sexoptions">
          </select-box>
        </wxc-cell>
        <wxc-cell
          title="年龄">
          <select-box
            :config="ageindex"
            :options="ageoptions">
          </select-box>
        </wxc-cell>
        <wxc-cell>
          <select-box
            :config="ageindex"
            :options="ageoptions">
          </select-box>
        </wxc-cell>
      </div>
      <btn-box
        @cancelClick="cancelClick"
        @scoreClick="scoreClick">
      </btn-box>
      <Result
        title="结果1"
        :result="result">
      </Result>
      <Result
        title="结果2"
        :result="result">
      </Result>
    </scroller>
    <wxc-dialog 
      :title="dialog.title"
      :content="dialog.content"
      :show="dialog.show"
      :single="dialog.single"
      @wxcDialogCancelBtnClicked="wxcDialogCancelBtnClicked"
      @wxcDialogConfirmBtnClicked="wxcDialogConfirmBtnClicked">
    </wxc-dialog>
  </div>
</template>
<style scoped>
.input {
  width: 300px;
  text-align: right;
  font-size: 28px;
}
</style>

<script>
const modal = weex.requireModule("modal");
import { WxcCell, WxcCheckbox, WxcDialog } from "weex-ui";
import TitleBar from "../../components/titlebar.vue";
import BtnBox from "../../components/btnbox.vue";
import Result from "../../components/result.vue";
import SelectBox from "../../components/selectbox.vue";
import { ganyinhuadata } from "../../assets/data.js";

export default {
  data() {
    return {
      result: [
        {
          label: "评分1",
          value: 10
        },
        {
          label: "评分2",
          value: 10
        }
      ],
      input: "",
      checked1: false,
      checked2: false,
      sexoptions: [
        {
          title: "男"
        },
        {
          title: "女"
        }
      ],
      ageoptions: [
        {
          title: "婴儿"
        },
        {
          title: "7岁"
        },
        {
          title: "12岁"
        }
      ],
      sexindex: {
        index: 0
      },
      ageindex: {
        index: 0
      },
      dialog: {
        title: "标题",
        content: "",
        show: false,
        single: false
      }
    };
  },
  watch: {
    score(d) {
      this.result[0].value = d;
    }
  },
  methods: {
    cancelClick() {
      this.input = "";
      this.checked1 = false;
      this.checked2 = false;
      this.sexindex.index = -1;
      this.ageindex.index = -1;
    },
    scoreClick() {
      this.dialog.content = JSON.stringify({
        input: this.input,
        checked1: this.checked1,
        checked2: this.checked2,
        sex: this.sexindex.index,
        age: this.ageindex.index
      });
      this.dialog.show = true;
    },
    wxcDialogCancelBtnClicked() {
      this.dialog.show = false;
    },
    wxcDialogConfirmBtnClicked() {
      this.dialog.show = false;
    },
    itemChecked1(e) {
      this.checked1 = e.checked;
    },
    itemChecked2(e) {
      this.checked2 = e.checked;
    }
  },
  components: {
    TitleBar,
    Result,
    BtnBox,
    SelectBox,
    WxcCell,
    WxcCheckbox,
    WxcDialog
  }
};
</script>

