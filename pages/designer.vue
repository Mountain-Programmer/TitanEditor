<template>
    <v-container fluid class="ma-0 pa-0 d-flex">
        <v-container
            class="float-left grey darken-4 vertical-toolbar d-flex flex-column flex-center ma-0 pa-0"
        >
            <v-container>
                <p class="text-center blue--text ma-0 mt-1 px-1">Images</p>
                <v-divider class="mb-4"></v-divider>
            </v-container>

            <v-expansion-panels dark :accordion="true" :multiple="true">
                <v-expansion-panel
                    dark
                    flat
                    dense
                    fluid
                    class="ma-auto rounded-0"
                >
                    <v-expansion-panel-header
                        class="pt-0 pb-0 short-panel-header"
                    >
                        World At War
                    </v-expansion-panel-header>
                    <v-expansion-panel-content> </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel flat dense fluid class="ma-auto rounded-0">
                    <v-expansion-panel-header
                        class="pt-0 pb-0 short-panel-header"
                    >
                        Black Ops
                    </v-expansion-panel-header>
                    <v-expansion-panel-content> </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel
                    flat
                    dense
                    fluid
                    accordion="false"
                    class="ma-auto rounded-0"
                >
                    <v-expansion-panel-header
                        class="pt-0 pb-0 short-panel-header"
                    >
                        Black Ops II</v-expansion-panel-header
                    >
                    <v-expansion-panel-content> </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel
                    flat
                    dense
                    fluid
                    accordion="false"
                    class="ma-auto rounded-0"
                >
                    <v-expansion-panel-header
                        class="pt-0 pb-0 short-panel-header"
                    >
                        Black Ops II</v-expansion-panel-header
                    >
                    <v-expansion-panel-content> </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel
                    flat
                    dense
                    fluid
                    accordion="false"
                    class="ma-auto rounded-0"
                >
                    <v-expansion-panel-header
                        class="pt-0 pb-0 short-panel-header"
                    >
                        Black Ops III</v-expansion-panel-header
                    >
                    <v-expansion-panel-content> </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel
                    flat
                    dense
                    fluid
                    accordion="false"
                    class="ma-auto rounded-0"
                >
                    <v-expansion-panel-header
                        class="pt-0 pb-0 short-panel-header"
                    >
                        Black Ops IV</v-expansion-panel-header
                    >
                    <v-expansion-panel-content> </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel
                    flat
                    dense
                    fluid
                    accordion="false"
                    class="ma-auto rounded-0"
                >
                    <v-expansion-panel-header
                        class="pt-0 pb-0 short-panel-header"
                    >
                        Black Ops Cold War</v-expansion-panel-header
                    >
                    <v-expansion-panel-content> </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

            <v-btn
                dense
                outlined
                color="blue"
                class="mx-4 my-4"
                v-model="image_overlay"
                @click="image_overlay = !image_overlay"
                >Image browser</v-btn
            >
            <v-btn
                dense
                outlined
                color="blue"
                class="mx-4 my-4"
                v-model="backgroundimage_overlay"
                @click="backgroundimage_overlay = !backgroundimage_overlay"
                >Change Background</v-btn
            >
            <v-btn
                dense
                outlined
                color="blue"
                class="mx-4 my-4"
                href="http://localhost:3001/download"
                >Download HUD Pack</v-btn
            >
            <v-overlay
                :value="backgroundimage_overlay"
                opacity=".55"
                color="blue"
            >
                <h1 class="text-center">Background Browser</h1>
                <v-container
                    class="grey darken-4 rounded image-overlay-browser-body d-flex flex-column"
                >
                    <v-container>
                        <v-btn
                            outlined
                            color="red"
                            class="mx-4 my-4 float-right"
                            v-model="backgroundimage_overlay"
                            @click="
                                backgroundimage_overlay = !backgroundimage_overlay
                            "
                            >X</v-btn
                        >

                        <v-text-field
                            placeholder="Search for image by name"
                            append-icon="mdi-magnify"
                            clearable
                            v-model="search_str"
                        >
                        </v-text-field>
                    </v-container>

                    <v-container
                        style="height: 80%; overflow: auto"
                        class="ma-auto pa-auto"
                    >
                        <v-row rows="8">
                            <v-col
                                v-for="image in BackgroundImageSearch(
                                    search_str
                                )"
                                :key="image.name"
                                cols="4"
                                class="pa-2"
                            >
                                <v-img
                                    contain
                                    :src="image.render"
                                    width="500px"
                                    class="ma-auto cursor-grab"
                                    gradient=""
                                    :aspect-ratio="16 / 9"
                                    @click="SetCanvasBackground(image)"
                                ></v-img>
                                <p
                                    fluid
                                    class="text-center ma-0 pa-0 grey--text underlined caption"
                                >
                                    {{ image.name }}
                                </p>

                                <v-divider></v-divider>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-container>
            </v-overlay>

            <v-overlay :value="image_overlay" opacity=".55" color="blue">
                <h1 class="text-center">Image Browser</h1>
                <v-container
                    class="grey darken-4 rounded image-overlay-browser-body d-flex flex-column"
                >
                    <v-container>
                        <v-btn
                            outlined
                            color="red"
                            class="mx-4 my-4 float-right"
                            v-model="image_overlay"
                            @click="image_overlay = !image_overlay"
                            >X</v-btn
                        >

                        <v-text-field
                            placeholder="Search for image by name"
                            append-icon="mdi-magnify"
                            clearable
                            v-model="search_str"
                        >
                        </v-text-field>
                    </v-container>

                    <v-container
                        style="height: 80%; overflow: auto"
                        class="ma-auto pa-auto"
                    >
                        <v-row rows="8">
                            <v-col
                                v-for="image in ImageSearch(search_str)"
                                :key="image.name"
                                cols="4"
                                class="pa-2"
                            >
                                <v-img
                                    contain
                                    :src="image.render"
                                    width="75px"
                                    height="75px"
                                    class="ma-auto cursor-grab"
                                    gradient=""
                                    @click="AddImage(image)"
                                ></v-img>
                                <p
                                    fluid
                                    class="text-center ma-0 pa-0 grey--text underlined caption"
                                >
                                    {{ image.name }}
                                </p>

                                <v-divider></v-divider>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-container>
            </v-overlay>
        </v-container>

        <v-container
            class="ma-auto pa-auto d-flex"
            style="justify-content: center"
        >
            <konva-stage
                ref="stage"
                :config="{ width: 1280, height: 720 }"
                style="border: 1px solid white"
                @click="canvasClicked"
            >
                <konva-layer ref="background">
                    <konva-image
                        :config="{
                            image: background_image,
                            width: 1280,
                            height: 720,
                        }"
                    ></konva-image>

                    <span v-for="image in canvas_images">
                        <konva-image
                            :config="{ image: image, draggable: true }"
                            @click="clickHandler"
                            @mouseenter="mouseEnterHandler"
                            @mouseleave="mouseLeaveHandler"
                            @dragstart="dragStartHandler"
                            @dragend="dragEndHandler"
                            @dragmove="dragMoveHandler"
                            @transform="transformHandler"
                        ></konva-image>
                    </span>
                </konva-layer>
            </konva-stage>
        </v-container>

        <v-container style="width: 25em" class="ma-0 pa-0 grey darken-4">
            <properties :element="test_element" @change="UserSetProperty" />
            <v-container fluid class="ma-0 pa-0">
                <p class="text-center blue--text ma-0 mt-1">Layers</p>
                <v-divider></v-divider>
                <v-container
                    v-if="typeof layer != 'undefined'"
                    style="overflow: auto; max-height: 25em"
                >
                    <v-row
                        v-for="item in layer
                            .getChildren((c) => c.getClassName() == 'Image')
                            .toArray()"
                        :key="item.name()"
                        class="d-flex ma-0 pa-0"
                    >
                        <v-col cols="2">
                            <v-btn
                                icon
                                @click="LayerVisibilityUpdate"
                                width="20px"
                            >
                                <v-icon width="20px"> mdi-eye </v-icon>
                            </v-btn>
                        </v-col>
                        <v-col cols="4">
                            <v-img
                                contain
                                :src="item.attrs.image.currentSrc"
                                width="50px"
                            >
                            </v-img>
                        </v-col>
                        <v-col>
                            <p>{{ 'asdjhagjdhsg' + item.name() }}</p>
                        </v-col>
                    </v-row>
                </v-container>
            </v-container>
        </v-container>
        
    </v-container>
</template>

<script>
import Konva from 'vue-konva'
import KonvaAPI from 'konva'
import Vue from 'vue'
Vue.use(Konva, { prefix: 'konva' })
import Properties from '../components/properties.vue'
import '../plugins/aws-sdk-2.831.0.min.js'
console.log(AWS);
// import AWS from 'aws-sdk'

export default {
    data() {
        return {
            image_cache: {},
            image_overlay: false,
            background_image_cache: {},
            backgroundimage_overlay: false,
            background_image: new window.Image(),
            search_str: '',
            stage: {},
            canvas_images: [],
            transformer: {},
            selected_element: {},
            test_element: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                scaleX: 0,
                scaleY: 0,
                name: '',
                imgsrc: '',
            },
            layer: undefined,
        }
    },

    mounted() {
        let context = require.context(
            '~/content/images',
            false,
            /\.(gif|jpe?g|tiff?|png|webp|bmp)$/,
            'sync'
        )

        let images = []
        context.keys().forEach((key) => {
            key = String(key)
            this.image_cache[key] = {
                render: context(key),
                name: String(key).substr(key.lastIndexOf('/') + 1),
            }
        })

        let bgcontext = require.context(
            '~/content/images/backgrounds',
            false,
            /\.(gif|jpe?g|tiff?|png|webp|bmp)$/,
            'sync'
        )

        bgcontext.keys().forEach((key) => {
            key = String(key)
            this.background_image_cache[key] = {
                render: bgcontext(key),
                name: String(key).substr(key.lastIndexOf('/') + 1),
            }
        })

        this.stage = this.$refs.stage._konvaNode
        this.SetCanvasBackground(Object.values(this.background_image_cache)[0])
        let transformer = new KonvaAPI.Transformer({
            anchorFill: '#00beff',
            anchorCornerRadius: 0,
            anchorSize: 9,
            rotateAnchorOffset: 20,
            borderStrokeWidth: 2,
            borderStroke: '#00aaff',
        })

        this.layer = this.$refs.background._konvaNode
        this.layer.add(transformer)
        console.log(this.layer.getChildren().toArray())
        this.transformer = transformer
        this.transformer.children[9].off('mouseenter')

        this.transformer.children[9].on('mouseenter', (evt) => {
            console.log('mouse entered rotater', this.stage.container().style)
            this.stage.container().style.cursor =
                'url("/rotate.svg") 16 16, auto'
        })

        this.transformer.children[9].on('mouseleave', (evt) => {
            console.log('mouse entered rotater', this.stage.container().style)
            this.stage.container().style.cursor = 'auto'
        })


        

    },

    created() {
        
        // ====================================================== SETUP AWS ====================================================================
        
        AWS.config.region = 'us-east-2' // Region
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'us-east-2:648c55da-43b4-4aea-8bd0-9425c3061c3f',
        })
        var params = {
            Bucket: 'arn:aws:s3:us-east-2:266624589417:accesspoint/titanfrontend',
            // Prefix: 'images/',
        }

        let s3 = new AWS.S3(AWS.config);
        s3.listObjectsV2(params, function (err, data) {
            if (err) {
                console.log(err)
            } else {
                data.Contents.forEach((obj, idx) => console.log(obj.Key))
            }
        })


    },

    async asyncData() {
    },

    methods: {
        ImageSearch(search_str) {
            if (search_str == null || search_str.size == 0 || search_str == ' ')
                return this.image_cache
            let result = {}
            Object.keys(this.image_cache).forEach((key) => {
                if (this.image_cache[key].name.includes(search_str)) {
                    result[key] = this.image_cache[key]
                }
            })

            return result
        },

        BackgroundImageSearch(search_str) {
            if (search_str == null || search_str.size == 0 || search_str == ' ')
                return this.background_image_cache
            let result = {}
            Object.keys(this.background_image_cache).forEach((key) => {
                if (
                    this.background_image_cache[key].name.includes(search_str)
                ) {
                    result[key] = this.background_image_cache[key]
                }
            })

            return result
        },

        SetCanvasBackground(image) {
            console.log(image)
            let img = document.createElement('img')
            img.src = image.render
            img.onload = () => (this.background_image = img)
        },

        AddImage(image) {
            let img = document.createElement('img')
            img.src = image.render
            img.onload = () => {
                this.canvas_images[this.canvas_images.length] = img
                console.log('img loaded', this.canvas_images)
            }
        },

        clickHandler(evt) {
            console.log(evt.target.getType())
            this.selected_element = evt.target

            this.transformer.nodes([evt.target])
            // evt.target.name('Image')
            // console.log('selected: ', evt.target)
            // this.test_element = evt.target.attrs
            this.test_element.x = evt.target.x()
            this.test_element.y = evt.target.y()
            this.test_element.width = evt.target.width()
            this.test_element.height = evt.target.height()
            this.test_element.name = evt.target.name()
            this.test_element.scaleX = evt.target.scaleX()
            this.test_element.scaleY = evt.target.scaleY()
            this.test_element.imgsrc = evt.target.attrs.image.currentSrc
            this.test_element.type = evt.target.getType()

            evt.cancelBubble = true
        },

        mouseEnterHandler(evt) {
            this.stage.container().style.cursor = 'move'
        },

        mouseLeaveHandler(evt) {
            this.stage.container().style.cursor = 'default'
        },

        dragStartHandler(evt) {},

        dragMoveHandler(evt) {
            this.selected_element = evt.target
            this.test_element.x = evt.target.x()
            this.test_element.y = evt.target.y()
            this.test_element.width = evt.target.width()
            this.test_element.height = evt.target.height()
            this.test_element.name = evt.target.name()
            this.test_element.scaleX = evt.target.scaleX()
            this.test_element.scaleY = evt.target.scaleY()
        },

        transformHandler(evt) {
            console.log(evt)
            this.test_element.x = evt.target.x()
            this.test_element.y = evt.target.y()
            this.test_element.width = evt.target.width()
            this.test_element.height = evt.target.height()
            this.test_element.name = evt.target.name()
            this.test_element.scaleX = evt.target.scaleX()
            this.test_element.scaleY = evt.target.scaleY()
            this.test_element.rotation = evt.target.getAttr('rotation')
        },

        dragEndHandler(evt) {},

        canvasClicked(evt) {
            this.transformer.nodes([])
            console.log('canvas clicked', evt)
        },

        UserSetProperty(evt) {
            console.log(Object.keys(evt))
            Object.keys(evt).forEach((key) => {
                console.log(this.test_element)
                this.test_element[key] = evt[key]
                console.log(Object.getOwnPropertyNames(this.selected_element))
                if (
                    Object.getOwnPropertyNames(this.selected_element).length > 1
                )
                    this.selected_element.setAttr(key, evt[key])
            })
            // this.selected_element.name(evt.name)
            // console.log('user changed', evt)
        },

        LayerVisibilityUpdate(evt) {
            console.log(evt)
        },
    },
}
</script>

<style lang="scss" scoped>
.vertical-toolbar {
    height: 100vh !important;
    width: 15em;
}

.v-toolbar__content {
    flex-direction: column !important;
}

.short-panel-header {
    min-height: 28px;
}

.image-overlay-browser-body {
    width: 75vw;
    height: 75vh;
    // overflow: auto;
}

.cursor-grab:hover {
    cursor: pointer;
}

/* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #ff0000;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>