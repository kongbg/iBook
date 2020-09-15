<template>
  <div class="images-download">
    <div>
      <p>背景：。。。</p>
    </div>
    <div>
      <p>功能描述：。。。。</p>
    </div>
    <div>
      <p>
        实现：
      </p>
      <div class="download" @click="downLoad">下载图片</div>
      <div class="download" @click="downloadAudio">下载音频</div>
      <div class="img-warp">
        <img :src="img_url" style="width:200px;" alt="">
      </div>

    </div>

  </div>
</template>
<script>
// import { base64 } from 'jszip/lib/support'
export default {
  name: '',
  data() {
    return {
      img_url: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1585662404&di=40e7d9891383c2868f2162cc3d6dfea8&src=http://b-ssl.duitang.com/uploads/item/201605/09/20160509110632_tiSr5.jpeg',
      audio_url: 'http://39.108.36.1/monitor/gz.ali.8.7/20191203/20191203-121403_N00000032090__915845495656_cc-ali-0-1575346443.1520184.mp3'
    }
  },
  methods: {
    downLoad() {
      // 1.图片转base64
      const imgToBase64 = function(url, callback, outputFormat) {
        let canvas = document.createElement('CANVAS')
        const ctx = canvas.getContext('2d')
        const images = new Image()
        images.crossOrigin = 'Anonymous'
        images.onload = function() {
          canvas.width = images.width
          canvas.height = images.height
          ctx.drawImage(images, 0, 0)
          const imgBase64 = canvas.toDataURL(outputFormat || 'image/png')
          canvas = null
          callback.call(this, imgBase64)
        }
        images.src = url
      }
      // 2. base64转blob
      const base64ToBlob = function(data) {
        const parts = data.split(';base64,')
        const contentType = parts[0].split(':')[1]
        const raw = window.atob(parts[1]) || []
        const rawLength = raw.length
        const uInt8Array = new Uint8Array(rawLength)
        for (let i = 0; i < rawLength; ++i) {
          uInt8Array[i] = raw.charCodeAt(i)
        }
        return new Blob([Uint8Array], { type: contentType })
      }
      // 3.下载图片
      imgToBase64(this.img_url, function(base64) {
        const a = document.createElement('a')
        const blob = base64ToBlob(base64)
        const e = document.createEvent('HTMLEvents')
        e.initEvent('click', true, true)
        a.download = 'test'
        a.href = URL.createObjectURL(blob)
        a.click()
      })
    },
    downloadAudio() {
      const getAudio = function(url) {
        var xhr = new XMLHttpRequest()
        xhr.open('get', url, true)
        xhr.responseType = 'blob'
        xhr.onload = function() {
          if (this.status === 200) {
            const blobUrl = URL.createObjectURL(this.response)
            const a = document.createElement('a')
            const e = document.createEvent('HTMLEvents')
            e.initEvent('click', true, true)
            a.download = 'audio'
            a.href = blobUrl
            a.click()
          }
        }
        xhr.send()
      }
      getAudio(this.audio_url)
    }
  }
}
</script>
<style scoped>
    .download{
        display: inline-block;
        padding: 5px 10px;
        background: #1890ff;
        color: #fff;
        border-radius: 4px;
    }
</style>
