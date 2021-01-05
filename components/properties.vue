<template>
    <v-container fluid class="" v-if="element != null">
        <p class="text-center blue--text ma-0 mt-1">Properties</p>
        <v-divider></v-divider>
        <v-text-field
            id="name"
            dense
            outlined
            placeholder="Element Name"
            class="px-5 pt-4"
            label="Name"
            :value="element.get('name')"
            @change="SetElementName($event)"
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
                    id="top"
                    dense
                    class="ma-auto"
                    outlined
                    placeholder="0"
                    label="top-left"
                ></v-text-field>
                <v-text-field
                    id="bottom"
                    dense
                    class="ma-auto"
                    outlined
                    placeholder="0"
                    label="bottom-left"
                ></v-text-field>
            </v-col>

            <v-col cols="5" class="ma-auto" style="width: 15em">
                <v-text-field
                    dense
                    outlined
                    placeholder="0"
                    label="top-right"
                ></v-text-field>
                <v-text-field
                    dense
                    outlined
                    placeholder="0"
                    label="bottom-right"
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
                    id="width"
                    dense
                    class="ma-auto"
                    outlined
                    placeholder="0"
                    label="width"
                ></v-text-field>
            </v-col>
            <v-col cols="5" class="ma-auto" style="width: 15em">
                <v-text-field
                    id="height"
                    dense
                    class="ma-auto"
                    outlined
                    placeholder="0"
                    label="height"
                ></v-text-field>
            </v-col>
        </v-row>

        <v-textarea
            flat
            outlined
            class="px-5"
            label="Element text"
        ></v-textarea>
        <v-container>
            <p class="caption grey--text ma-0 pa-0">image preview:</p>
            <v-img
                outlined
                contain
                :src="require('~/content/images/hud_bar.png')"
                width="75px"
                height="75px"
                class="px-5 ma-auto"
                label="img preview:"
            ></v-img>
        </v-container>
    </v-container>
</template>

<script>
export default {
    name: 'Properties',
    props: {
        element: {
            type: Object,
            default: {
                name: ""

            },
        },
    },

    methods: {
        SetElementName(event)
        {
            this.element.set('name', event)
            console.log(event);
        }
    },
}
</script>

<style>
</style>