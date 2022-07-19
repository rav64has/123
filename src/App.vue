<template>
    <div id="app">
        <header>
            <div class="row">
                <nav class="navbar navbar-expand-lg  navbar-light ">
                    <div class="container">
                        <div class="col-12 col-sm-12 col-md-4 ">
                            <a class="navbar-brand" href="#">
                                <img class="img-fluid" src="../src/assets/images/logo.png" alt="Logo">
                            </a>
                            <br>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-example">
                               <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div class="collapse navbar-collapse" id="navbar-example">
                            <div class="col-12 col-sm-12 col-md-8 ml-auto ">
                                <ul class="navbar-nav mr-auto">
                                    <router-link class="dropdown-item" to="/"exact>Home</router-link> |
                                    <router-link class="dropdown-item" to="/about">About</router-link>
                                    <router-link class="dropdown-item" to="/blog">Blog</router-link>
                                    <router-link class="dropdown-item" to="/contacte">Contact</router-link>
                                    <router-link class="dropdown-item" to="/login">Sign In</router-link>
                                    <router-link class="dropdown-item" to="/regict">Regict</router-link>
                                                                     
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <div class="content">
            <router-view />
        </div>
        <footer>
            <div class="footer">
                <img src="../src/assets/images/napa.svg">
            </div>
        </footer>
    </div>
</template>
<style scoped>
header {
    background-color: blue;
    height: 170px;
    display: flex;
    align-items: center;
}



footer {
    background-color: blue;
    height: 70px;

}

.footer {
    text-align: right;
    
}

.content {
    min-height: calc(100vh - 140px);
}

ul {
    list-style: none;
    margin: 0;
    color: red;
}

li {
    color: red;
    display: inline;
    margin: 0 5px;
}

.link {
    color: #fff000;
    text-decoration: none;
    font-size: 25px;
}

.dropdown-item {
    color: #fff000;
    text-decoration: none;
    font-size: 25px;
}

.img-fluid {
    width: 200px;
    height: auto;
}
a.router-link-active, li.router-link-active>a {
    color: red;
    }
</style>
<!-- <style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style> -->