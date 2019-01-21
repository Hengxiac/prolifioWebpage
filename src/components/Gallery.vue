<template>
<div class='container'>
    <div class="one-demo">
        <div class = "title">
            <div class = "header">
                <p style="font-size: 2vw"><b>Cel Shading and edge detection(NPR) in Unity</b></p>
                <br/>
            </div>
            <div class="description">
                <p style="font-size: 1.5vw; padding-left: 5%">
                    Implemented Basic Cel Shader and Edge Detection Shader In Unity2018.3.0f.
                    <br/>
                    1. Cel shader to make the shadow discrete on characters.
                    <br/>
                    2. Edge detection using Sobel and Laplacian operators.
                    <br/>
                    3. Used Sobel operator on colors to detect color changes and drew outlines.
                    <br/>
                    4. Used Sobel operator on depth texture to draw silhouettes of models.
                    <br/>
                    5. Used Laplacian operator on cameraDepthNormal texture to determine edges(both inner and outer edges).
                    <br/>
                    6. Used fade factor to mask out all background colors so that only outlines would be seen.
                    <br/>
                    <a href="https://github.com/Hengxiac/UnityShaderTraining.git">Github link</a>
                </p>
            </div>
        </div>
        <div class="demo-video">
            <iframe class="video" allowfullscreen
                src="https://www.youtube.com/embed/dZY8ujOoVBY">
            </iframe>
        </div>
    </div>
    <div class="one-demo">
        <div class = "title">
            <div class = "header">
                <p style="font-size: 2vw"><b>Abyss Game 2018 Final Demo</b></p>
                <br/>
            </div>
            <div class="description">
                <p style="font-size: 1.5vw; padding-left: 5%">
                    Abyss Game for USC AGP(Advanced Game Project) Class
                    <br/>
                    <a href="http://game-abyss.com/">Game website</a>
                    <br/>
                    1. Rogue-like 3D adventure game with goals to explore more into the abyss.(in Unrea Engine 4)
                    <br/>
                    2. Team consists of 6 members.
                    <br/>
                    3. Implemented the inventory system logics.(With stacking items, searching, sorting by category, etc.. functions),
                    <br/>
                    4. Implemented construction system so that player is able to construct camps or campfires as save points, player will be able to teleport to the save points using construction list menu.
                    <br/>
                    5. Implemented element system(fire, water element) so that fire can burn items and spread if items are combustible while water will extinguish fire.
                    <br/>
                    6. Fulfilled some post processing effects (Outline pickable items and teleportation dissolve shader) using Unreal Engine shader.
                </p>
            </div>
        </div>
        <div class="demo-video">
            <iframe class="video" allowfullscreen
                src="https://www.youtube.com/embed/zoC6Ws7TPeQ">
            </iframe>
        </div>
    </div>
    <div class="one-demo">
        <div class = "title">
            <div class = "header">
                <p style="font-size: 2vw"><b>BoBaRhythm game final demo</b></p>
                <br/>
            </div>
            <div class="description">
                <p style="font-size: 1.5vw; padding-left: 5%">
                    The moba & music style game made by us(3 members in the team).
                    <br/>
                    <a href="https://sakurar01.wixsite.com/bobarhythm">Game Webpage</a>
                    <br/>
                    1. Player can pick up characters on pick up page.
                    <br/>
                    2. Play the fighting game in teams to defeat as many opponents as possible.
                    <br/>
                    3. Play music game(implmented by me from scratch with 3 types of music notes -- single notes, hold notes and slide notes to play with).
                    <br/>
                    4. Toon shading on login page with dynamic material to capture all the character and render into the UI.
                </p>
            </div>
        </div>
        <div class="demo-video">
            <iframe class="video" allowfullscreen
                src="https://www.youtube.com/embed/hIkI87LVgSo">
            </iframe>
        </div>
    </div>

    <div class="one-demo">
        <div class = "title">
            <div class = "header">
                <p style="font-size: 2vw"><b>Advanced Pathfinding in RTS Game Demo</b></p>
                <br/>
            </div>
            <div class="description">
                <p style="font-size: 1.5vw; padding-left: 5%">
                    Advanced pathfinding demo in PrimeEngine(A c++ game engine).
                    <br/>
                    1. A* pathfinding with euler distance as heuristic.
                    <br/>
                    2. Funnel algorithm to smooth the path.
                    <br/>
                    3. Simple steering methods to make turning more natural.
                </p>
            </div>
        </div>
        <div class="demo-video">
            <iframe class="video" allowfullscreen
                src="https://www.youtube.com/embed/vtrrkp2Iy3U">
            </iframe>
        </div>
    </div>

    <div class="one-demo">
        <div class = "title">
            <div class = "header">
                <p style="font-size: 2vw"><b>WebGL Simple shader</b></p>
                <br/>
            </div>
            <div class="description">
                <p style="font-size: 1.5vw; padding-left: 5%">
                    Fireball explosion shader on WebGL with Perlin Noise
                    <br/>
                    <a href="http://www-scf.usc.edu/~hengxiac/wind/WindShader.html">Fireball Explosion Effect Page</a>
                    <br/>
                    1. Follow the instructions and code on <a href="https://www.clicktorelease.com/blog/experiments-with-perlin-noise/">Blog</a>.
                    <br/>
                    2. Used Three.js with glsl to try the rendering pipeline in WebGL.
                    <br/>
                    3. Used Perlin noise and some open source library to fulfill the explosion shader.
                </p>
            </div>
        </div>
        <div>
            <img width="90%" height="90%" src="../assets/Fireball.jpg">
        </div>
    </div>

    <div class="one-demo">
        <div class = "title">
            <div class = "header">
                <p style="font-size: 2vw"><b>BoBaRhythm game first playable</b></p>
                <br/>
            </div>
            <div class="description">
                <p style="font-size: 1.5vw; padding-left: 5%">
                    The moba & music style game made by us(3 members in the team).
                    <br/>
                    First playable demo.
                    <br/>
                    1. Player can pick up characters on pick up page.
                    <br/>
                    2. Play the fighting game in teams to defeat as many opponents as possible.
                    <br/>
                    3. Play music game(implmented by me from scratch currently with single notes
                    and hold notes(long bar)) to get extra bonus so that player will gain more
                    skill points to fire some attacks.
                </p>
            </div>
        </div>
        <div class="demo-video">
            <iframe class="video" allowfullscreen
                src="https://www.youtube.com/embed/6wT-A3n7UvM">
            </iframe>
        </div>
    </div>

    <div class="one-demo">
        <div class = "title">
            <div class = "header">
                <p style="font-size: 2vw"><b>Abyss game first playable</b></p>
                <br/>
            </div>
            <div class="description">
                <p style="font-size: 1.5vw; padding-left: 5%">
                    A brief introduction to the construction system in ABYSS
                    (USC AGP(Advanced game project) game project(By Unreal) that I am
                    currently working on).
                    <br/>
                    First playable demo, construction system part
                    <br/>
                    1. Player can enable the construction functionality.
                    <br/>
                    2. Raycasting: A ray will be cast from 200 units above the follow camera
                    toward the camera view direction within certain ranage.
                    <br/>
                    3. When the ray-casting hits the ground, we will get the hit position and
                    normal. By using that, we will check the flatness of ground.
                    <br/>
                    4. If the ground is flat enough(for e.g.tilting less than 30 degrees),
                    we will place the contruction there.
                    <br/>
                    5. Construction will not consume resources now, feel free to build your
                    own world.
                </p>
            </div>
        </div>
        <div class="demo-video">
            <iframe class="video" allowfullscreen
                src="https://www.youtube.com/embed/j5S0u9wlXEY">
            </iframe>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    'videoSrc': {
      type: String
    },

    'imageSrc': {
      type: String
    }
  },

  created () {
    this.imagesrc = this.imageSrc
    this.videoLink = this.videoSrc
    console.log(this.imagesrc, this.videoLink)
  },

  data () {
    return {
      imagesrc: this.imageSrc,
      videoLink: this.vedioSrc
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
