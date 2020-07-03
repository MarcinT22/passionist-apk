<template>
    <div class="block">
        <div class="page">
            <div class="page__content">
                <h1>
                    Modlitwy
                </h1>
                <div class="buttons">
                    <button  @click="$router.push('prayer1')">
                        Modlitwa do Św. Pawła od Krzyża
                    </button>
                    <button  @click="$router.push('prayer2')">
                        Modlitwa za wstawiennictwem Świętego Pawła od Krzyża
                    </button>
                    <button  @click="$router.push('thoughts')">
                        Myśli Św. Pawła od Krzyża
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Prayer"
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/style";

</style>