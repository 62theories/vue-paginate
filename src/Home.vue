<template>
  <div>
    <div
      v-for="(peaw,index) in FilterPeawsWithCurrentPage"
      v-bind:key="index"
    >{{JSON.stringify(peaw)}}</div>
    <!-- <div v-for="(page,index) in getLastPageNumber()" v-bind:key="index">
      <button v-on:click="toPage(page)">{{page}}</button>
    </div>
    อันนี้โชว์ปุ่มไว้กดทุกหน้า อันล่างจะแสดงแค่ 5 ปุ่ม-->
    <div v-for="(page, index) in getOnlyFivePage()" v-bind:key="index">
      <button v-on:click="toPage(page)" v-bind:class="pickColor(page)">{{page}}</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data: function() {
    return {
      peaws: [],
      currentPage: 1,
      max_per_page: 5
    };
  },
  computed: {
    FilterPeawsWithCurrentPage: function() {
      return this.peaws.filter((peaw, index) => {
        if (this.currentPage === this.convertIndexToPageNumber(index)) {
          return true;
        } else {
          return false;
        }
      });
    }
  },
  methods: {
    convertIndexToPageNumber: function(index) {
      return Math.ceil(index / this.max_per_page);
    },
    isPageValid: function(pageNumber) {
      if (
        pageNumber > 0 &&
        pageNumber <= this.convertIndexToPageNumber(this.peaws.length)
      ) {
        return true;
      } else {
        return false;
      }
    },
    getLastPageNumber: function() {
      return this.convertIndexToPageNumber(this.peaws.length);
    },
    toPage: function(pageNumber) {
      this.currentPage = pageNumber;
    },
    getOnlyFivePage: function() {
      let pages = [];
      if (this.isPageValid(this.currentPage - 2)) {
        pages.push(this.currentPage - 2);
      }
      if (this.isPageValid(this.currentPage - 1)) {
        pages.push(this.currentPage - 1);
      }
      if (this.isPageValid(this.currentPage)) {
        pages.push(this.currentPage);
      }
      if (this.isPageValid(this.currentPage + 1)) {
        pages.push(this.currentPage + 1);
      }
      if (this.isPageValid(this.currentPage + 2)) {
        pages.push(this.currentPage + 2);
      }
      return pages;
    },
    pickColor: function(page) {
      if (page === this.currentPage) return "blue";
      else return "";
    }
  },
  components: {},
  props: {},
  created: function() {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/photos?fbclid=IwAR1PZK2aZx-ERlXkgjaCD_R49Wt33Anlp50Vo6sQBS8jKIUmobbAQUG1E58"
      )
      .then(res => {
        this.peaws = res.data;
      });
  }
};
</script>

<style scoped>
.blue {
  background-color: blue;
}
</style>