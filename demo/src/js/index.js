let app = new Vue({
	el: '#app',
	data: {
		// 查询关键字
		select: '',
		// 歌曲数组
		musicList: [],
		// 歌曲地址
		musicUrl: '',
		// 歌曲封面
		musicImg: '',
		// 歌曲名字
		musicName: '',
		singsName: '',
		// 歌曲歌词
		musicLyrics: '',
		// 评论数组
		commentList: [],
		// 切换按钮
		value: '切换评论',
		// 切换
		comShow: false,
		lyrShow: true,
		btnShow: false,
		// 动画播放状态
		isPlaying: false,
		// 遮罩层显示状态
		mvShow: false,
		mvUrl: '',
	},
	methods: {
		searchMusic: function () {
			let _this = this
			axios
				.get('https://autumnfish.cn/search?keywords=' + this.select)
				.then(function (response) {
					_this.musicList = response.data.result.songs
				})
				.catch(function (err) {
					console.log(err)
				})
		},
		playMusic: function (musicId) {
			let _this = this
			axios
				.get('https://autumnfish.cn/song/url?id=' + musicId)
				.then(function (response) {
					_this.musicUrl = response.data.data[0].url
					_this.btnShow = true
				})
				.catch(function (err) {
					console.log(err)
				})
			axios
				.get('https://autumnfish.cn/song/detail?ids=' + musicId)
				.then(function (response) {
					res = response.data.songs[0]
					_this.musicImg = res.al.picUrl
					_this.musicName = res.name
					_this.singsName = res.ar[0].name
				})
				.catch(function (err) {
					console.log(err)
				})
			// 显示歌词
			axios
				.get('https://autumnfish.cn/lyric?id=' + musicId)
				.then(function (response) {
					_this.musicLyrics = response.data.lrc.lyric.split('\n')
				})
				.catch(function (err) {
					console.log(err)
				})
			axios
				.get('https://autumnfish.cn/comment/hot?type=0&id=' + musicId)
				.then(function (response) {
					_this.commentList = response.data.hotComments
				})
				.catch(function (err) {
					console.log(err)
				})
		},
		change: function () {
			if (this.comShow === false) {
				this.comShow = true
				this.lyrShow = false
				this.value = '切换歌词'
			} else {
				this.comShow = false
				this.lyrShow = true
				this.value = '切换评论'
			}
		},
		play: function () {
			this.isPlaying = true
		},
		pause: function () {
			this.isPlaying = false
		},
		playMv: function (mvId) {
			let _this = this
			axios
				.get('https://autumnfish.cn/mv/url?id=' + mvId)
				.then(function (response) {
					_this.$refs['audio'].pause()
					_this.mvShow = true
					_this.mvUrl = response.data.data.url
				})
				.catch(function (err) {
					console.log(err)
				})
		},
		changeMv: function () {
			this.mvShow = false
			this.mvUrl = ''
			this.$refs['audio'].play()
		},
	},
})
