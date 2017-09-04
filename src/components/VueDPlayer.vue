<template>
    <div class="dplayer"></div>
</template>

<script>
    import DPlayer from 'DPlayer'
    import 'DPlayer/dist/DPlayer.min.css'
    export default {
        props: {
            autoplay: {
                type: Boolean,
                default: false
            },
            theme: {
                type: String,
                default: '#FADFA3'
            },
            loop: {
                type: Boolean,
                default: true
            },
            lang: {
                type: String,
                default: 'zh'
            },
            contextmenu: {
                type: Array,
                default: function () {
                    return [
                        {
                            text: '关于',
                            link: 'https://github.com/MoePlayer/DPlayer'
                        }
                    ]
                }
            },
            screenshot: {
                type: Boolean,
                default: false
            },
            hotkey: {
                type: Boolean,
                default: false
            },
            preload: {
                type: String,
                default: 'none'
            },
            video: {
                type: Object,
                required: true,
                validator(value) {
                    return typeof value.url === 'string'
                }
            }
        },
        data() {
            return {
                dp: null,
                player: {}
            }
        },
        watch: {
            'video' () {
                this.init();
            }
        },

        methods: {
            init() {
                this.player = this.dp = new DPlayer({
                    element: this.$el,
                    autoplay: this.autoplay,
                    theme: this.theme,
                    loop: this.loop,
                    lang: this.lang,
                    screenshot: this.screenshot,
                    hotkey: this.hotkey,
                    preload: this.preload,
                    contextmenu: this.contextmenu,
                    video: {
                        url: this.video.url,
                        pic: this.video.pic,
                        type: 'auto'
                    }
                })

                this.player.on('play', () => {
                    this.$emit('play')
                })

                this.player.on('pause', () => {
                    this.$emit('pause')
                })

                this.player.on('canplay', () => {
                    this.$emit('canplay')
                })

                this.player.on('playing', () => {
                    this.$emit('playing')
                })

                this.player.on('ended', () => {
                    this.$emit('ended')
                })

                this.player.on('error', () => {
                    this.$emit('error')
                })
            }
        },
        mounted() {
            if (!(this.video.url === undefined || this.video.url === '')) {
                this.init();
            }
        }
    }
</script>

<style>
    .dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
        height: auto;
    }

    .dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-showdan,
    .dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
        display: none;
    }
</style>
