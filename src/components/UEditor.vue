<template>
    <div :id="id">
    </div>
</template>

<script type="text/babel">

    export default {
        data() {
            return {
                name: "Test",
                editor: null,
                draftsSaveKey: 'draftsSaveKey',
                id: 'vue-umeditor',
                config: {
                    //为编辑器实例添加一个路径，这个不能被注释
                    UEDITOR_HOME_URL: '/assets/plugins/ueditor/'

                    // 服务器统一请求接口路径
                    , serverUrl: '/ueditor'
                    //工具栏上的所有的功能按钮和下拉框，可以在new编辑器的实例时选择自己需要的重新定义
                    , toolbars: [[
                        'fullscreen', 'source', '|', 'forecolor', 'backcolor', '|',
                        'bold', 'italic', '|',
                        'simpleupload', 'insertimage', 'template', '|',
                        'spechars', '|'
                        , 'searchreplace'
                    ]]
                    ,enableContextMenu: false
                    , enableAutoSave: true
                    , saveInterval: 60000
                    // xss 过滤是否开启,inserthtml等操作
                    , xssFilterRules: true
                    //input xss过滤
                    , inputXssFilter: true
                    //output xss过滤
                    , outputXssFilter: true
                    , catchRemoteImageEnable : true

                    // xss过滤白名单 名单来源: https://raw.githubusercontent.com/leizongmin/js-xss/master/lib/default.js
                    , whitList: {
                        a: ['target', 'href', 'title', 'class', 'style'],
                        abbr: ['title', 'class', 'style'],
                        address: ['class', 'style'],
                        area: ['shape', 'coords', 'href', 'alt'],
                        article: [],
                        aside: [],
                        audio: ['autoplay', 'controls', 'loop', 'preload', 'src', 'class', 'style'],
                        b: ['class', 'style'],
                        bdi: ['dir'],
                        bdo: ['dir'],
                        big: [],
                        blockquote: ['cite', 'class', 'style'],
                        br: [],
                        caption: ['class', 'style'],
                        center: [],
                        cite: [],
                        code: ['class', 'style'],
                        col: ['align', 'valign', 'span', 'width', 'class', 'style'],
                        colgroup: ['align', 'valign', 'span', 'width', 'class', 'style'],
                        dd: ['class', 'style'],
                        del: ['datetime'],
                        details: ['open'],
                        div: ['class', 'style'],
                        dl: ['class', 'style'],
                        dt: ['class', 'style'],
                        em: ['class', 'style'],
                        font: ['color', 'size', 'face'],
                        footer: [],
                        h1: ['class', 'style'],
                        h2: ['class', 'style'],
                        h3: ['class', 'style'],
                        h4: ['class', 'style'],
                        h5: ['class', 'style'],
                        h6: ['class', 'style'],
                        header: [],
                        hr: [],
                        i: ['class', 'style'],
                        img: ['src', 'alt', 'title', 'width', 'height', 'id', '_src', 'loadingclass', 'class', 'data-latex'],
                        ins: ['datetime'],
                        li: ['class', 'style'],
                        mark: [],
                        nav: [],
                        ol: ['class', 'style'],
                        p: ['class', 'style'],
                        pre: ['class', 'style'],
                        s: [],
                        section: [],
                        small: [],
                        span: ['class', 'style'],
                        sub: ['class', 'style'],
                        sup: ['class', 'style'],
                        strong: ['class', 'style'],
                        table: ['width', 'border', 'align', 'valign', 'class', 'style'],
                        tbody: ['align', 'valign', 'class', 'style'],
                        td: ['width', 'rowspan', 'colspan', 'align', 'valign', 'class', 'style'],
                        tfoot: ['align', 'valign', 'class', 'style'],
                        th: ['width', 'rowspan', 'colspan', 'align', 'valign', 'class', 'style'],
                        thead: ['align', 'valign', 'class', 'style'],
                        tr: ['rowspan', 'align', 'valign', 'class', 'style'],
                        tt: [],
                        u: [],
                        ul: ['class', 'style'],
                        video: ['autoplay', 'controls', 'loop', 'preload', 'src', 'height', 'width', 'class', 'style']
                    }
                }
            };
        },
        props: ['width','height'],
        methods: {
            click() {
                alert(11)
            },
            saveKey() {
                var me = this.editor;
                var _suffix = "-drafts-data",
                    key = null;
                if (me.key) {
                    key = me.key + _suffix;
                } else {
                    key = ( me.container.parentNode.id || 'ue-common' ) + _suffix;
                }
                //页面地址+编辑器ID 保持唯一
                this.draftsSaveKey = ( location.protocol + location.host + location.pathname ).replace(/[.:\/]/g, '_') + key;
            },
            saveDrafts() {
                let editor = this.editor;
                if (!editor.hasContents()) {
                    return;
                }
                let saveData = editor.body.innerHTML;
                console.log(saveData);
                editor.setPreferences(this.draftsSaveKey, saveData);
            }
        },
        computed: {

        },
        mounted () {
            console.log('mounted');
            if (this.editor === null) {
                if (window.editorId === undefined || editorId === null) {
                    window.editorId = 0;
                }
                window.editorId++;
                this.id = window.editorId + this.id;
                let _this = this;
                if (this.editor === null) {
                    this.$nextTick(() => {
                        _this.editor = UE.getEditor(_this.id, _this.config);
                        _this.saveKey();
                    });
                }
            }
        },
        deactivated() {
            this.saveDrafts();
            console.log("deactivate");
        },
        activated() {
            if (this.editor != null) {
                this.$nextTick(() => {
                    let _this = this;
                    setTimeout(() => {
                        _this.editor.execCommand('drafts')
                    }, 250);
                });
            }
        },
        beforeDestroy() {
            try {
                console.log("beforeDestroy");
                this.editor.destroy();
                this.editor = null;
            } catch (e) {
            }

        }
    };
</script>
