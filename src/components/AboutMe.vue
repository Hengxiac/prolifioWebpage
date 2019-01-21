<template>
<div class='container'>
    <div class='intro'>
        <p style="font-size: 1.5vw; padding-left: 5%; text-align: left;line-height: 4vh">
            I am currently a cs master student majoring in game development.
            <br/>
            Having learnt 3D graphics, game engine architecture, I know the basic mathematics we frequently use
            and rendering pipeline in game development.
            <br/>
            I have been coding in C++ since I was a freshman in university. And I also know about
            C, C#, Python, lua, javascript, go, GLSL, etc.
            <br/>
            I am a beginner in Unreal and currently working on 2 game projects based on unreal.
            <br/>
            I also have projects based on Unity about toon shading / simple rendering pipelines(skybox) / AR(Vuforia and Kudan)&VR(steamVR).
            <br/>
            I have some experience about web and mobile development as well as linux.
            <br/>
            The area that interest me most are the graphics and shader part.
            <br/>
            I like to reproduce the photorealistic world in game.
            <br/>
            I am also interested in some anime-style shading(NPR) techniques since I have been a big fan of anime since elementary school.
            <br/>
            I am studying hard to gain more knowledge about them.
            <br/>
            I devote a lot of time learning tutorials and trying to implemente them.
        </p>
    </div>
    <div class="social-media">
        <span>
            <p style="font-size:1.5rem; margin:0.2rem"><b><i>Blogs & Social Media(In Chinese)</i></b></p>
            <br/>
            <a class="link" href="https://www.zhihu.com/people/chi-tu-qing-hui-50/posts">
                <img src="../assets/zhihu.svg" height="64" width="64">
            </a>
            <a class ="link" href="https://www.jianshu.com/u/81f2c8be2f17">
                <img src="../assets/jianshu.svg" height="64" width="64">
            </a>
            <a class ="link" href="https://twitter.com/achiga4">
                <img src="../assets/twitter.svg" height="64" width="64">
            </a>
        </span>
    </div>
</div>
</template>

<script>
export default {
  name: 'AboutMe',

  data () {
    return {
    }
  },

  methods: {

  }
}
</script>
.intro {
    text-align: left;
    overflow-warp: normal;
    margin-left: 10%;
    line-height: 4vw;
}

.social-media {
    text-align: left;
    overflow-warp: normal;
}

.link {
    margin: 0.3rem;
}
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
