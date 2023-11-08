<template>
  <nav class="main">
    <div class="base logo">
      <RouterLink to="/home"
        ><h4>B-W<img src="../../../assets/logo.svg" />rld</h4>
      </RouterLink>
      <span class="logo-bar">&nbsp;</span>
      <p>We love Books</p>
    </div>
    <input type="text" placeholder="Type any book here" />
    <div class="base navigation-links">
      <RouterLink to="/privacy">Privacy policy</RouterLink>
      <RouterLink to="/warranty">Warranty</RouterLink>
      <RouterLink to="/shipping">Shippin</RouterLink>
      <RouterLink to="/returns">Returns</RouterLink>
    </div>
    <div class="base icons">
      <RouterLink to="/cart">
        <img src="../../../assets/cart.svg" />
      </RouterLink>
      <span class="base-bar">&nbsp;</span>
      <RouterLink to="/favorites">
        <img src="../../../assets/heart.svg" />
      </RouterLink>
      <span class="base-bar">&nbsp;</span>
      <RouterLink to="/acc">
        <img src="../../../assets/acc.svg" />
      </RouterLink>
    </div>
  </nav>
  <nav class="secondary">
    <div class="base links">
      <p>Must read</p>
      <p>News</p>

      <p>Promotion of the month</p>
      <p>Publish</p>
      <p>Subscribe to the newsletter</p>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
  @import "../../../base.scss";
  nav {
    padding: 0 100px 0 150px;
    height: 72px;
    display: flex;
    border-bottom: solid 2px $base-color;
    justify-content: space-between;
    font-family: "Inter";
    align-items: center;
    .base {
      display: flex;
      align-items: center;
    }
    .links {
      justify-content: space-around;
    }
    &.main {
      a {
        text-decoration: none;
      }
      .logo {
        p {
          font-size: 12px;
          color: $base-color;
          font-weight: bold;
          max-width: 50px;
        }
        .logo-bar {
          height: 45px;
          width: 2px;
          background-color: $base-color;
          border-radius: 99px;
          margin: 0 8px;
        }
      }
      input {
        height: 35px;
        width: 376px;
      }
      .navigation-links {
        display: flex;
        a {
          font-weight: 900;
          font-size: 14px;
          padding: 0 10px;
        }
      }
      .icons {
        padding: 10px 30px;
        .base-bar {
          height: 40%;
          width: 2px;
          background-color: $base-color;
          border-radius: 99px;
          margin: 0 20px;
        }
      }
    }
  }
</style>
