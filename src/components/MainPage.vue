<template lang = "pug">
el-container.container
  .header
    .title
      | Hengxiang's Website
    .intro
      | Master CS game development student in USC.
    .contact-info
      .email
        | Email:
        a(href="mailto:hengxiac@usc.edu")
          | hengxiac@usc.edu
      .git
        | github: hengxiac
      .linkedin
        | linkedin:
        a(href="https://www.linkedin.com/in/hengxiang-chen-011036171/")
          | Hengxiang Chen's Linkedin
    el-tabs.tabbar(v-model="activeTab", type="border-card", stretch="true", @tab-click="onTabChanged")
      el-tab-pane.one-tab(label="Gallery" name="gallery")
        Gallery(:videoSrc=video, :imageSrc=img)
      el-tab-pane.one-tab(label="Blogs" name="blogs")
        | Blogs
      el-tab-pane.one-tab(label="About Me" name="about")
        AboutMe

</template>

<script>
import Gallery from './Gallery.vue'
import AboutMe from './AboutMe.vue'
export default {
  name: 'MainPage',
  data () {
    return {
      activeTab: 'gallery',
      demos: {
        img: '../assets/bobaThumbnail.jpg',
        video: 'https://www.youtube.com/watch?v=6wT-A3n7UvM'
      },
      img: '../assets/bobaThumbnail.jpg',
      video: 'https://www.youtube.com/watch?v=6wT-A3n7UvM'
    }
  },
  created () {
    // this.demos.push({ 'img': '../assets/bobaThumbnail.jpg', 'video': 'https://www.youtube.com/watch?v=6wT-A3n7UvM'});
    // this.demos.push('../assets/bobaThumbnail.jpg')
  },

  methods: {
    onTabChanged (tab, event) {
      this.activeTab = tab
      console.log(this.activeTab)
    }
  },

  components: {
    Gallery,
    AboutMe
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  margin: 0;
  display: flex;
  flex-direction: column;
}

.title{
  font-family: system-ui;
  font-size: 5vw;
  text-align: center;
}

.intro {
  padding: 0.5rem;
}
.contact-info {
  color: white;
  text-align: left;
  display: flex;
  flex-direction: row;
}

.email {
  margin-left: 10%;
}

.git {
  margin-left: 20%;
}

.linkedin {
  margin-left: 10%;
}
.header{
  background-image: url("../assets/bgimg3.jpg");
  display: flex;
  flex-direction: column;
}

.main-gallery {
  display: flex;
  flex-flow: column wrap;
}

.tabbar {
  cursor: pointer;
  width: 100%;
  font-size: 3vw;
  display: flex;
  flex-direction: row;
}

.one-tab {
  font-size: 3rem;
}
</style>
