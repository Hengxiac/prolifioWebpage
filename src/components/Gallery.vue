<template>
<div class='container'>
    <div class="one-demo">
        <div class = "title">
            <div class = "header">
                <p style="font-size: 2vw"><b>Advanced Pathfinding in RTS Game Demo</b></p>
                <br/>
            </div>
            <div class="description">
                <pre style="font-size: 1.5vw">
                    Advanced pathfinding demo in PrimeEngine(A c++ game engine).
                    A* pathfinding with euler distance as heuristic.
                    Funnel algorithm to smooth the path.
                    Simple steering methods to make turning more natural.
                </pre>
            </div>
        </div>
        <div class="demo-video">
            <iframe width="90%" height="480"
                src="https://www.youtube.com/embed/vtrrkp2Iy3U">
            </iframe>
        </div>
    </div>
    <div class="one-demo">
        <div class = "title">
            <div class = "header">
                <p style="font-size: 2vw"><b>BoBaRhythm game first playable</b></p>
                <br/>
            </div>
            <div class="description">
                <pre style="font-size: 1.5vw">
                The moba & music style game made by us(3 members in the team).
                First playable demo.
                1. Player can pick up characters on pick up page.
                2. Play the fighting game in teams to defeat as many opponents as possible.
                3. Play music game(implmented by me from scratch currently with single notes
                and hold notes(long bar)) to get extra bonus so that player will gain more
                skill points to fire some attacks.
                </pre>
            </div>
        </div>
        <div class="demo-video">
            <iframe width="90%" height="480"
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
                <pre style="font-size: 1.5vw">
                A brief introduction to the construction system in ABYSS
                (USC AGP(Advanced game project) game project(By Unreal) that I am
                currently working on).
                First playable demo, construction system part
                1. Player can enable the construction functionality.
                2. Raycasting: A ray will be cast from 200 units above the follow camera
                toward the camera view direction within certain ranage.
                3. When the ray-casting hits the ground, we will get the hit position and
                normal. By using that, we will check the flatness of ground.
                4. If the ground is flat enough(for e.g.tilting less than 30 degrees),
                we will place the contruction there.
                5. Construction will not consume resources now, feel free to build your
                own world.
                </pre>
            </div>
        </div>
        <div class="demo-video">
            <iframe width="90%" height="480"
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
    overflow-warp: normal;
}

.demo-video {
    margin-left: 10%;
    padding-bottom: 0.5rem;
}
</style>
