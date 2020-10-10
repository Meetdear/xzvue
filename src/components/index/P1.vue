<template>
     <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h5 class="d-inline-block mb-2" v-text="p1.title"></h5>
                <h6 class="mb-5">
                  <a class="text-dark" href="javascript:;" v-text="p1.details"></a>
                </h6>
                <span class="text-primary" v-cloak>¥{{p1.price.toFixed(2)}}</span>
                <router-link class="btn btn-primary" :to="`/details/${p1.href.split('=')[1]}`">查看详情</router-link>
              </div>
              <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" :src="p1.pic" data-holder-rendered="true">
            </div>
</template>

<script>
export default {
    props:["p1"]
}
</script>
