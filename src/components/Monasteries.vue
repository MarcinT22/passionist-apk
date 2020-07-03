<template>
    <div class="block">
        <div class="page">
            <div class="page__content">
                <h1>
                    Klasztory Pasjonistów polskiej Prowincji
                </h1>
                <div class="buttons buttons--small">
                    <button @click="$router.push('przasnysz')">
                        Przasnysz - 1923
                    </button>
                    <button @click="$router.push('sadowie')">
                        Sadowie - 1932
                    </button>
                    <button @click="$router.push('rawa-mazowiecka')">
                        Rawa Mazowiecka - 1938
                    </button>
                    <button @click="$router.push('lodz')">
                        Łódź - 1956
                    </button>
                    <button @click="$router.push('warszawa')">
                        Warszawa - 1958
                    </button>
                    <button @click="$router.push('wisla')">
                        Wisła - 1970
                    </button>
                    <button @click="$router.push('kiezliny')">
                        Kieźliny - 2001
                    </button>
                    <button @click="$router.push('smotrycz')">
                        Smotrycz - 1991
                    </button>
                    <button @click="$router.push('jaromierzyce')">
                        Jaromierzyce - 1994
                    </button>
                    <button @click="$router.push('warszawa-bialoleka')">
                        Warszawa Białołęka - 2009
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Monasteries"
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/style";

</style>