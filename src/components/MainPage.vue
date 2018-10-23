<template lang = "pug">
el-container.container
  .header
    .title
      | Hengxiang's Website
    .intro
      | Master CS game development student in USC.
    .contact-info
      .email
        a(href="mailto:hengxiac@usc.edu")
          img(src="../assets/email.svg", height="36", width="36")
      .git
        a(href="https://github.com/Hengxiac")
          img(src="../assets/github.svg", height="36", width="36")
      .linkedin
        a(href="https://www.linkedin.com/in/hengxiang-chen-011036171/")
          img(src="../assets/linkedin.svg", height="36", width="36")
    el-menu.el-menu-demo(:default-active="activeIndex", mode="horizontal", @select="onTabChanged")
      el-menu-item.one-tab(index="1")
          |Gallery
      el-menu-item.one-tab(index="2")
        | Blogs
      el-menu-item.one-tab(index="3")
          | AboutMe
  el-main.main-gallery
    Gallery(v-if="activeIndex == '1'")
    AboutMe(v-else-if="activeIndex == '3'")
    Gallery(v-else)
</template>

<script>
import Gallery from './Gallery.vue'
import AboutMe from './AboutMe.vue'
export default {
  name: 'MainPage',
  data () {
    return {
      activeIndex: '1',
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
      // Blogs tab is not activated yet
      if (tab !== '2') {
        this.activeIndex = tab
      }
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
  margin-left: 35%;
}

.git {
  margin-left: 10%;
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
  font-size: 1rem;
}
</style>
