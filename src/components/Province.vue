<template>
    <div class="block">
        <div class="page">
            <div class="page__content">
                <h1>
                    Polska Prowincja
                </h1>
                <div class="buttons">
                    <button  @click="$router.push('inPoland')">
                       Pasjoniści w Polsce
                    </button>
                    <button  @click="$router.push('monasteries')">
                        Klasztory Pasjonistów polskiej Prowincji
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Province"
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/style";

</style>