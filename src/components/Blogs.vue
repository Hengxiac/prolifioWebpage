<template>
<div class='container'>
    <div class="one-demo">
        <div class = "title">
            <div class = "header">
                <p style="font-size: 2vw"><a href="https://zhuanlan.zhihu.com/p/50260340"><b>Shader学习：初步了解卡通渲染Cel Shading</b></a></p>
                <p style="font-size: 1.5vw"><i>Posted: 11-19-2018 09:25</i></p>
            </div>
            <div class="description">
                <p style="font-size: 1.5vw; padding-left: 5%">
                    卡通渲染（英文Cel Shading或者Toon shading），是一种能够使3D的图像产生动漫效果的渲染手段。
                    <br/>
                    它具体的定义我们先看一段来自维基的解释： Cel shading or toon shading...
                </p>
            </div>
        </div>
    </div>
        <div class="one-demo">
        <div class = "title">
            <div class = "header">
                <p style="font-size: 2vw"><a href="https://zhuanlan.zhihu.com/p/47779154"><b>Unity中的异步场景批量加载(Unity Asynchronous Scene Loading)</b></a></p>
                <p style="font-size: 1.5vw"><i>Posted: 10-27-2018 08:04</i></p>
            </div>
            <div class="description">
                <p style="font-size: 1.5vw; padding-left: 5%">
                    场景（Scene）是Unity中组织我们的环境，物品，玩家，障碍等一切游戏相关的内容的地方.
                    <br/>
                    我们基本上可以把Scene当做关卡（Level）来理解。
                    <br/>
                    在游戏中基本上我们不会只有一个场景，这个时候场景之间...
                </p>
            </div>
        </div>
    </div>

    <div class="one-demo">
        <div class = "title">
            <div class = "header">
                <p style="font-size: 2vw"><a href="https://zhuanlan.zhihu.com/p/46358868"><b>虚幻4（Unreal Engine4）中的代理委托Delegate的使用方法</b></a></p>
                <p style="font-size: 1.5vw"><i>Posted: 10-10-2018 05:54</i></p>
            </div>
            <div class="description">
                <p style="font-size: 1.5vw; padding-left: 5%">
                    前言 最近做的游戏经常使用到delegate，如果你使用过C#，可能对delegate有一定的了解。
                    <br/>
                    不过如果你和我一样在C#中没有用过代理，甚至根本就没接触过C#，那可能就需要花一点时间来理解deleg…
                </p>
            </div>
        </div>
    </div>
    <div class="one-demo">
        <div class = "title">
            <div class = "header">
                <p style="font-size: 2vw"><a href="https://www.jianshu.com/p/6454dec1898a"><b>UE4虚幻4引擎计时器Timer延迟方法(Delay Using Unreal Engine 4 Timer)</b></a></p>
                <p style="font-size: 1.5vw"><i>Posted: 10-02-2018 04:34</i></p>
            </div>
            <div class="description">
                <p style="font-size: 1.5vw; padding-left: 5%">
                    最近在做的游戏中经常需要使用到定时器延迟。比如制作类似Moba游戏中的回城效果，就会有一个几秒钟的延迟读条。
                    <br/>
                    在标准的C/C++中我们可以用tim...
                </p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Blogs',

  created () {
  },

  data () {
    return {

    }
  },

  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    height: 100%;
    width: 100%;

}
.one-demo {
    border: 0.05rem solid grey;
    border-style: outset;
    margin-top: 0.5rem;
}
.title {
}

.header {
    font-size: 2vw;
    text-align: center;
    margin: 1rem, 0;
    overflow-warp: normal;
}

.description {
    font-size: 1.5vw;
    text-align: left;
    margin-left: 10%;
    margin-right: 10%;
    line-height: 3vw;
    padding-left: 10%;
    overflow-warp: normal;
}

.demo-video {
    margin-left: 10%;
    padding-bottom: 56.25%;
    position: relative;
    width: 90%;
    height: 0;
}

.video {
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;
    height: 90%;
}
</style>
