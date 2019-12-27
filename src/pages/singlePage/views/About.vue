<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { trackClick } from '@/utils/track.js'
import api from '../api'
export default {
    data () {
        return {
            list: []
        }
    },
    created () {
        this.getData()
    },
    methods: {
        async getData () {
            const { data } = api.news({ page: 1, count: 10 })
            console.log(data)
            trackClick()
        }
    }
}
</script>
