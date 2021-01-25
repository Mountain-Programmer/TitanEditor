<template>
    <v-container fluid class="">
        <p class="text-center blue--text ma-0 mt-1">Properties</p>
        <v-divider></v-divider>
        <v-text-field
            dense
            outlined
            placeholder="Element Name"
            class="px-5 pt-4"
            label="Name"
            id="name"
            :value="element.name"
            @change="SetElementName"
        ></v-text-field>
        <v-row
            align="center"
            no-gutters
            fluid
            rows="2"
            style=""
            class="ma-auto px-2"
        >
            <v-col cols="5" class="ma-auto" style="width: 15em">
                <v-text-field
                    dense
                    class="ma-auto"
                    outlined
                    placeholder="0"
                    label="x"
                    id="x"
                    type="number"
                    :value="element.x"
                    @input.native="FieldInputHandler"
                ></v-text-field>
                <v-text-field
                    dense
                    class="ma-auto"
                    outlined
                    placeholder="0"
                    label="scaleX"
                    id="scaleX"
                    type="number"
                    step=".1"
                    :value="element ? element.scaleX : null"
                    @input.native="FieldInputHandler"
                ></v-text-field>
            </v-col>
            <v-tooltip
                open-delay="1000"
                bottom
                color="black"
                style="background-color: black"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon
                        class="mx-0 px-0"
                        width="1em"
                        height="1em"
                        @click="linkedScale = !linkedScale"
                        :class="{ disabled: !linkedScale }"
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon>mdi-link</v-icon>
                    </v-btn>
                </template>
                <div class="blue--text lighten-2">
                    Maintain Aspect Ratio:
                    {{ linkedScale ? 'enabled' : 'disabled' }}
                </div>
            </v-tooltip>
            <v-col cols="5" class="ma-auto" style="width: 15em">
                <v-text-field
                    dense
                    outlined
                    placeholder="0"
                    label="y"
                    id="y"
                    type="number"
                    :value="element ? element.y : null"
                    @input.native="FieldInputHandler"
                ></v-text-field>
                <v-text-field
                    dense
                    outlined
                    placeholder="0"
                    label="scaleY"
                    id="scaleY"
                    type="number"
                    step=".1"
                    :value="element ? element.scaleY : null"
                    @input.native="FieldInputHandler"
                ></v-text-field>
            </v-col>
        </v-row>

        <v-row
            align="center"
            no-gutters
            fluid
            rows="2"
            style=""
            class="ma-auto px-2"
        >
            <v-col cols="5" class="ma-auto" style="width: 15em">
                <v-text-field
                    dense
                    class="ma-auto"
                    outlined
                    placeholder="0"
                    id="width"
                    label="width"
                    :value="element ? element.width : null"
                    type="number"
                    @input.native="FieldInputHandler"
                ></v-text-field>
            </v-col>

            <v-col cols="5" class="ma-auto" style="width: 15em">
                <v-text-field
                    dense
                    class="ma-auto"
                    outlined
                    placeholder="0"
                    label="height"
                    id="height"
                    type="number"
                    :value="element ? element.height : null"
                    @input.native="FieldInputHandler"
                ></v-text-field>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-text-field
                    dense
                    class="ma-auto"
                    outlined
                    placeholder="0"
                    label="rotation"
                    id="rotation"
                    type="number"
                    :value="element ? element.rotation : null"
                    @input.native="FieldInputHandler"
                ></v-text-field>
            </v-col>
        </v-row>

        <v-textarea
            v-if="element.type == 'Text'"
            flat
            outlined
            class="px-5"
            label="Element text"
        ></v-textarea>
        <v-container>
            <v-img
                outlined
                contain
                :src="element.imgsrc"
                width="75px"
                height="75px"
                class="px-5 ma-auto"
                label=""
            ></v-img>
        </v-container>
    </v-container>
</template>

<script>
export default {
    name: 'Properties',

    data() {
        return {
            linkedScale: false,
        }
    },

    props: {
        element: 0,
    },

    methods: {
        SetElementName(evt) {
            if (this.element && typeof evt == 'string') {
                this.element.name = evt
                this.$emit('change', { name: evt })
            }
        },

        FieldInputHandler(evt) {
            let elemProp = evt.target.id

            // we expect only numbers
            let value = Number(evt.target.value)
            if (this.element) {
                let payload = {}

                if (this.linkedScale && ['scaleX', 'scaleY'].includes(elemProp)) {
                    payload['scaleX'] = value
                    payload['scaleY'] = value
                    
                } else {
                    payload[evt.target.id] = Number(evt.target.value)
                }

                this.$emit('change', payload)
            }
        },

        NoElementSelected() {},
    },
}
</script>
<style>
.disabled {
    color: #00beff;
    opacity: 0.5;
}
</style>