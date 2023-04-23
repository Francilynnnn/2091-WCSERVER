<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#top">GENSHIN </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active"
                ><router-link to="/" class="nav-link">Home</router-link>
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link"
                ><router-link to="/blog" class="nav-link">Blog</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link to="/gallery" class="nav-link"
                  >Gallery</router-link
                ></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link to="/contact" class="nav-link"
                  >Contact</router-link
                ></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link to="/about" class="nav-link"
                  >About</router-link
                ></a
              >
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-sm-2"
              type="search"
              placeholder="Search"
            />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navbar {
  background-color: #292929;
}

.navbar-brand,
.nav-link {
  color: white;
}
</style>
