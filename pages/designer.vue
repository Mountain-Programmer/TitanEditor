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
                                    @click="AddImageToCanvas(image)"
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
            <canvas
                id="DesignerView"
                width="1280"
                height="720"
                class="ma-auto pa-auto flex-center"
            ></canvas>
        </v-container>
        
        <v-container style="width: 25em" class="ma-0 pa-0 grey darken-4">
            <properties :element="currently_selected"/>
            <v-container fluid class="ma-0 pa-0">
                <p class="text-center blue--text ma-0 mt-1">Layers</p>
                <v-divider></v-divider>
            </v-container>
        </v-container>
    </v-container>
</template>

<script>
import { fabric } from 'fabric'
import * as DesignerClasses from '~/modules/designer.js'
import Properties from '../components/properties.vue'


// interface for a 'layer'
fabric.ILayer = fabric.util.createClass(fabric.Object, {
    type: 'Layer',

    initialize: function (layer_id) {
        this.layer_id = layer_id || ''
    },

    toString: function () {
        return this.callSuper('toString') + `(layer_id) ${this.layer_id}`
    },

    toObject: function () {
        return fabric.util.object.extend(this.callSuper('toObject'), {
            layer_id: this.get('layer_id'),
        })
    },
})

fabric.UIImage = fabric.util.createClass(fabric.Image, {
    type: 'UIImage',

    initialize: function (element, options, layer_id) {
        this.callSuper('initialize', element, options)
        this.set('name', layer_id)
    },

    toString: function () {
        return this.callSuper('toString') + `(layer_id) ${this.layer_id}`
    },

    toObject: function () {
        return fabric.util.object.extend(this.callSuper('toObject'), {
            layer_id: this.get('layer_id'),
        })
    },
})

fabric.UIText = fabric.util.createClass(fabric.Text, {
    type: 'UIText',

    initialize: function (layer_id) {
        this.callSuper('initialize')
        this.layer_id = layer_id || ''
    },

    toString: function () {
        return this.callSuper('toString') + ` (layer_id) ${this.layer_id}`
    },

    toObject: function () {
        return fabric.util.object.extend(this.callSuper('toObject'), {
            layer_id: this.get('layer_id'),
        })
    },
})

export default {
    data() {
        return {
 
            image_cache: {},
            image_overlay: false,
            background_image_cache: {},
            backgroundimage_overlay: false,
            background_image: {},
            search_str: '',
            canvas: {},
            currently_selected: null,
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

        this.canvas = new fabric.Canvas('DesignerView', {
            selectionBorderColor: 'blue',
        })

        fabric.Image.fromURL(
            require('~/content/images/backgrounds/bo3_thegiant (1).png'),
            (img) => {
                this.canvas.setBackgroundImage(
                    img,
                    this.canvas.renderAll.bind(this.canvas),
                    {
                        scaleX: this.canvas.width / img.width,
                        scaleY: this.canvas.height / img.height,
                    }
                )
            }
        )
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

        AddImageToCanvas(image) {
            
            var img = document.createElement('img');
            img.src = image.render;

            let Image = new fabric.UIImage(img, {}, 'Image');
            this.canvas.add(Image);
            let setSelected = selected => this.currently_selected = selected;
            Image.on('selected', function(options) {

                console.log("image clicked", this.get('name'));
                setSelected(this);
                
            });

            // this.canvas.add(new fabric.UIImage(img, {}, image.name))
            // console.log()
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
            let dimg = document.createElement('img')
            dimg.src = image.render
            let img = new fabric.Image(dimg)
            this.canvas.setBackgroundImage(
                img,
                this.canvas.renderAll.bind(this.canvas),
                {
                    scaleX: this.canvas.width / img.width,
                    scaleY: this.canvas.height / img.height,
                }
            )
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