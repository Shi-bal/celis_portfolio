<template>
  <div class="bg-white">
    <div class="container py-3">
      <div class="row pt-1 align-items-center">
        <div
          class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pbelow"
          style="color: white;"
        >
          <span>© 2024 Copyright: Valerie Celis</span>
        </div>

        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <div class="text-center">
            <button
              class="btn btn-outline-secondary mx-2 "
              @click="open('facebook')"
            >
              <i class="fab fa-facebook"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('github')"
            >
              <i class="fab fa-github"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('telegram')"
              v-tooltip.bottom="'Telegram'"
            >
              <i class="fab fa-telegram"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('instagram')"
              v-tooltip.bottom="'Instagram'"
            >
              <i class="fab fa-instagram"></i>
            </button>
            
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('resume')"
              v-tooltip.bottom="'Resume'"
            >
              <i class="fa fa-file"></i>
            </button>
            
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Footer",
  data() {
    return {
      facebook: info.links.facebook,
      github: info.links.github,
      telegram: info.links.telegram,
      instagram: info.links.instagram,    
      resume: info.links.resume,
    };
  },
  methods: {
    open(link) {
      switch (link) {
        case "facebook":
          window.open(this.facebook, "_blank");
          break;
        case "github":
          window.open(this.github, "_blank");
          break;
        case "telegram":
          window.open(this.telegram, "_blank");
          break;
        case "instagram":
          window.open(this.instagram, "_blank");
          break;
        case "resume":
          window.open(this.resume, "_blank");
          break;
      }
    },
  },
};
</script>

<style scoped>
span {
  font-weight: 500;
  color: black;
}

.fa {
  font-size: 15px;
  color: black;
}
.fab {
  font-size: 15px;
  color: black;
}

.btn {
  border-color: #3B3030;
  color: #759CC9;
}

.btn:hover {
  background-color: #795757;
  border-color: #795757;
  color: white;
}

.btn:focus {
  background-color: #3B3030;
  border-color: #3B3030;
  color: white;
}

.btn:focus {
  outline: none !important;
}

@media screen and (max-width: 580px) {
  .pbelow {
    padding-bottom: 20px;
    text-align: center;
  }
}
</style>
