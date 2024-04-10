<template>
  <view class="content">
    <view class="text-area">
      <text>{{ types[topicList[currentIndex].type] }}：</text>{{ topicList[currentIndex]['题干'] }}
    </view>
    <view v-if="[1, 2, 3, 4].includes(topicList[currentIndex].type)" class="text-area-1">
      <view v-for="(item, index) in topicList[currentIndex].chooices" :key="index" class="options"
        :class="{'active': item.check}" @click="userCheck(index)">
        <text v-if="topicList[currentIndex].type !== 3" class="left">{{ item.flag }}: </text>
        <text class="right">{{ item.text }}</text>
      </view>
    </view>
    <view class="buttons">
      <button plain hairline class="left" @click="prew">上一题</button>
      <button plain hairline class="middle" @click="showAnswerFn">查看答案</button>
      <button plain hairline class="right" @click="next">下一题</button>
    </view>
    <view v-if="showAnswer" class="answer-outline">
      <view>答案：{{ topicList[currentIndex]['答案'] }}</view>
      <view style="margin-top: 12px;">解析：{{ topicList[currentIndex]['解析'] }}</view>
    </view>
  </view>
</template>

<script>
  import topic from './topic.js'
  export default {
    data() {
      return {
        currentIndex: 0,
        topicList: [],
        chooiceType: ['A', 'B', 'C', 'D'],
        types: ['问答题', '单选', '多选', '判断', '不定项选择'],
        showAnswer: false
      }
    },
    onLoad() {
      this.dealData(topic)
    },
    methods: {
      dealData() {
        // console.log(JSON.stringify(topic.map((item) => {
        //   item.checks = []
        //   item.chooices = []
        //   if ([1, 2, 4].includes(item.type)) {
        //     for (let i = 0; i < 4; i++) {
        //       item.chooices.push({
        //         text: item['选择项' + (i + 1)],
        //         flag: this.chooiceType[i],
        //         check: false
        //       })
        //     }
        //   }
        //   if (item.type === 3) {
        //     item.chooices = [{
        //       text: '对',
        //       flag: '对',
        //       check: false
        //     }, {
        //       text: '错',
        //       flag: '错',
        //       check: false
        //     }]
        //   }
        //   return item
        // })))
        this.topicList = this.shuffle(topic)
      },

      shuffle(arr) {
        return arr.sort(() => Math.random() - 0.5)
      },

      userCheck(index) {
        this.topicList[this.currentIndex].checks = []
        if ([1, 3].includes(this.topicList[this.currentIndex].type)) {
          this.topicList[this.currentIndex].chooices.forEach(item => item.check = false)
          this.topicList[this.currentIndex].chooices[index].check = true
          this.topicList[this.currentIndex].checks.push(this.topicList[this.currentIndex].chooices[index].flag)
        } else {
          this.topicList[this.currentIndex].chooices[index].check = !this.topicList[this.currentIndex].chooices[index]
            .check
          this.topicList[this.currentIndex].chooices.forEach((item) => {
            if (item.check) {
              this.topicList[this.currentIndex].checks.push(item.flag)
            }
          })
        }
      },

      showAnswerFn() {
        this.showAnswer = true
      },

      prew() {
        this.showAnswer = true
        if (this.currentIndex > 0) {
          this.currentIndex--
        }
      },

      next() {
        this.showAnswer = false
        if (this.currentIndex < this.topicList.length - 1) {
          this.currentIndex++
        }
      }
    }
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% - 32px);
    height: calc(100% - 20px);
    margin: 10px 16px
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
  }

  .text-area text {
    color: #7bcdff !important;
  }

  .text-area-1 {
    width: 100%;
    font-size: 16px;
    line-height: 20px;
    margin-top: 18px;
  }

  .text-area-1 .options {
    width: cacl(100% - 18px);
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    padding: 8px 9px;
    background-color: #ededf3;
    border-radius: 4px;
  }

  .text-area-1 .options.active {
    background-color: #7bcdffc8;
  }

  .text-area-1 .options .left {
    width: 24px;
  }

  .text-area-1 .options .right {
    width: calc(100% - 24px);
  }

  .buttons {
    width: calc(100% - 30px);
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 40px auto 0;
  }

  .buttons button {
    width: 96px;
    height: 40px;
    font-size: 14px;
    text-align: 0;
    padding-left: 0;
    padding-right: 0;
    border: 1px solid #f7f7f7;
    box-shadow: 0 0 10px 6px #edf5f5;
  }

  .buttons .left,
  .buttons .right {
    color: #7bcdff;
  }

  .buttons .middle {
    color: #ff989f;
  }

  .answer-outline {
    width: 100%;
    margin-top: 40px;
  }
</style>