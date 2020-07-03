<template>
    <div class="block">
        <h1 class="main">
            Święty Paweł od Krzyża
        </h1>
        <div class="home">
            <div class="home__row">
                <div class="home__col">
                    <button  @click="$router.push('passionists')">
                        <span class="home__circle">
                            <img src="../assets/images/xpi.png" />
                        </span>
                        <span class="home__menu">
                            Pasjoniści
                        </span>
                    </button>
                </div>
                <div class="home__col">
                    <button  @click="$router.push('paul')">
                        <span class="home__circle">
                               <img src="../assets/images/swpawel.png" />
                        </span>
                        <span class="home__menu">
                            Św. Paweł od&nbsp;Krzyża
                        </span>
                    </button>
                </div>
                <div class="home__col">
                    <button  @click="$router.push('prayer')">
                        <span class="home__circle">
                               <img src="../assets/images/modlitwy.png" />
                        </span>
                        <span class="home__menu">
                            Modlitwy
                        </span>
                    </button>
                </div>
                <div class="home__col">
                    <button  @click="$router.push('province')">
                        <span class="home__circle">
                               <img src="../assets/images/polska.png" />
                        </span>
                        <span class="home__menu">
                           Polska Prowincja
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped lang="scss">
    .home {
        position: absolute;
        bottom:15px;
        &__row {
            display: flex;
            flex-wrap: wrap;

        }

        &__col {
            padding: 10px;
            box-sizing: border-box;
            width: 50%;

            @media (min-width:500px)
            {
                width:25%;
            }
        }

        button {

            border: 0;
            outline: none;
            display: block;
            width:100%;
            background: none;

            img{
                display: block;
                max-width: 100%;
            }

            &:active{
                .home__circle{
                    background: #000;
                }
            }

        }

        &__circle{
            border-radius: 100%;
            background: rgba(0, 0, 0, 0.6);
            display: block;
            overflow: hidden;
            padding:20px;
            box-sizing: border-box;
            transition: background 0.1s ease-in-out;

            @media (min-width:500px)
            {
               padding:13px;
            }
        }

        &__menu{

            color:#fff;
            text-align: center;
            display: block;
            font-size:18px;
            margin-top:10px;
            letter-spacing: 1px;
            font-family: 'Avenir', Helvetica, Arial, sans-serif;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
    }
</style>
