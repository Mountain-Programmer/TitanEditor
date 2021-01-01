<template>
    <v-container fluid class="ma-auto pa-auto background-login flex d-flex">
        <!-- <v-img src="https://wallpapercave.com/wp/wp2232276.jpg"></v-img> -->
        <v-form class="ma-auto pa-auto">
            <v-container
                outlined
                class="ma-auto pa-8 grey darken-4 rounded-lg outlined justify-center align-center elevation-9"
            >
                <h2 class="text-center mb-0 pb-0">Login</h2>
                <v-divider class="mb-8 wider mx-auto align-center"></v-divider>

                <v-text-field
                    flat
                    outlined
                    v-model="username"
                    label="username"
                    class="mx-8 mt-2 wider"
                ></v-text-field>

                <v-text-field
                    flat
                    outlined
                    v-model="password"
                    label="password"
                    type="password"
                    class="mx-8 wider"
                ></v-text-field>
                <v-container fluid class="d-flex mb-0 pb-0 wider">
                    <v-btn
                        color="green"
                        large
                        outlined
                        fluid
                        class="mx-auto mt-0 justify-center align-center"
                        >Login</v-btn
                    >
                    <v-btn
                        color=""
                        large
                        outlined
                        fluid
                        class="mx-auto mt-0 justify-center align-center"
                        to="/signup"
                        >Create New Account</v-btn
                    >
                </v-container>
                <!-- <v-container>
                    <p class="text-center text-caption ma-0 pa-0">Creating an account allows you to save your work. </p>
                    <p class="text-center text-caption mb-0 pb-0">Email is optional, and is not stored in plain text.</p>
                </v-container> -->
            </v-container>
        </v-form>
    </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss">
.background-login {
    width: 100vw;
    height: 100vh;

    background: url('https://cdn.wallpapersafari.com/87/26/MFXmca.png')
        no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.wider {
    width: 30em;
}
</style>