<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="10" vs-xs="10">
            <vs-card actionable>
                <div slot="header">
                    <h3>Login</h3>
                </div>
                <div class="centerx">
                    <vs-row vs-justify="center">
                        <vs-input size="large" label-placeholder="Username" v-model="username"/>
                        <br>
                        <vs-input size="large" label-placeholder="Password" v-model="password" type="password"/>
                    </vs-row>
                </div>
                <div slot="footer">
                    <vs-row vs-justify="flex-end">
                        <vs-button size="large" type="gradient" color="primary">Login</vs-button>
                    </vs-row>
                </div>
            </vs-card>
        </vs-col>
    </vs-row>
</template>

<script>
    export default {
        name: "TemplateLogin.vue",
        components: {},
        data() {
            return {
                username: "",
                password: ""
            };
        }
    };
</script>

<style>
    body {
        min-height: 100%;
        background-image: radial-gradient(
                circle 621px at 25.3% 13.8%,
                rgba(255, 255, 255, 1) 0%,
                rgba(100, 236, 255, 1) 90%
        );
        margin-top: 50px;
        margin-bottom: 50px;
        font-family: "Roboto", sans-serif;
    }
</style>
