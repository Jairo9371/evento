<template>
  <div id="app">
    <div class="container">
        <div class="row justify-content-center mt-4">
            <div class="col-md-10">
              <div class="car border border-dark">
                <div class="card-body ">
                    <router-view />
                </div>
              </div>
        </div>
    </div>
    
    </div>
    
   
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

