<template>
    <v-container fluid class="ma-0 pa-0 d-flex">
        <v-container
            class="float-left grey darken-4 vertical-toolbar d-flex flex-column flex-center ma-0 pa-0"
        >
            <p class="text-center blue--text ma-0 mt-1">Images</p>
            <v-divider class="mb-4"></v-divider>

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
                outlined
                color="blue"
                class="mx-4 my-4"
                v-model="image_overlay"
                @click="image_overlay = !image_overlay"
                >Image browser</v-btn
            >
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
                                :key="image"
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

            <p
                v-if="
                    currently_selected != null &&
                    typeof currently_selected != 'string'
                "
                style="width: inherit; overflow: auto"
            >
                {{
                    `top: ${currently_selected.top.toFixed(
                        3
                    )} left: ${currently_selected.left.toFixed(3)}`
                }}
            </p>
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
    </v-container>
</template>

<script>
import { fabric } from 'fabric'
import { DesignerClasses } from '~/plugins/designer.js'
designer.UIText
export default {
    data() {
        return {
            image_cache: {},
            image_overlay: false,
            search_str: '',
            canvas: {},
            currently_selected: null,
        }
    },

    mounted() {
        let context = require.context(
            '~/content',
            true,
            /\.(gif|jpe?g|tiff?|png|webp|bmp)$/,
            'sync'
        )

        let images = []
        context.keys().forEach((key) => {
            this.image_cache[key] = {
                render: context(key),
                name: String(key).substr(key.lastIndexOf('/') + 1),
            }
        })

        this.canvas = new fabric.Canvas('DesignerView', {
            selectionBorderColor: 'blue',
        })

        fabric.Image.fromURL(
            'https://wallpapercave.com/wp/wp6340540.jpg',
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

        for (let i = 0; i < 2; i++) {
            fabric.Image.fromURL(
                'https://image.winudf.com/v2/image/YmFyLmNob3VjaG91LndhbGxwYXBlcnNhbmltZV9zY3JlZW5fNl8xNTM1Njg0MzI3XzA4Ng/screen-6.jpg?h=800&fakeurl=1&type=.jpg',
                (img) => {
                    this.canvas.add(img)
                    console.log(img)
                }
            )
        }

        this.canvas.on('mouse:down', (options) => {
            if (options.target) {
                console.log(options.target)
                this.currently_selected = options.target
            } else {
                this.currently_selected = 'nothing selected'
            }
        })
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
            fabric.Image.fromURL(image.render, (img) => {
                this.canvas.add(img)
            })
            console.log(JSON.stringify(this.canvas))
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
</style>