<template>
    <div>
        <v-progress-linear
            v-if="loading"
            indeterminate
            color="grey darken-2"
        />
        <v-container class="pa-12" v-else>
            <v-row>
                <v-col
                    cols="12"
                    sm="12"
                    md="12"
                >
                    <v-btn depressed @click="goHome">
                        <v-icon left>mdi-keyboard-backspace</v-icon>
                        Back
                    </v-btn>
                </v-col>
                <v-col
                    xl="6"
                    lg="6"
                    md="6"
                    sm="12"
                    xs="12"
                    class="mt-5"
                >
                     <v-img
                        height="395"
                        width="480"
                        :src="countryDetailData.flags.svg"
                        contain
                    />
                </v-col>
                <v-col
                    xl="6"
                    lg="6"
                    md="6"
                    sm="12"
                    xs="12"
                    class="mt-8"
                >
                    <span class="country-title mt-5">
                        {{ countryDetailData.name }}
                    </span>
                    <v-row class="mt-5">
                        <v-col
                            xl="6"
                            lg="6"
                            md="6"
                            sm="6"
                            xs="12"
                        >
                            <div class="py-2"><strong>Native Namme: </strong> <span>{{ countryDetailData.nativeName }}</span></div>
                            <div class="py-2"><strong>Population: </strong> <span> {{ formatPopulation }}</span></div>
                            <div class="py-2"><strong>Region: </strong> <span>{{ countryDetailData.region }}</span></div>
                            <div class="py-2"><strong>Sub Region: </strong> <span>{{ countryDetailData.subregion }}</span></div>
                            <div class="py-2"><strong>Capital: </strong> <span>{{ countryDetailData.capital }}</span></div>
                        </v-col>
                        <v-col
                            xl="6"
                            lg="6"
                            md="6"
                            sm="6"
                            xs="12"
                        >
                            <div class="py-2"><strong>Top Level Domaim: </strong> <span>{{ countryDetailData.topLevelDomain[0] }}</span></div>
                            <div class="py-2"><strong>Currencies: </strong> <span> {{ countryDetailData.currencies[0].name }}</span></div>
                            <div class="py-2"><strong>Languages: </strong> <span>{{ countryLanguages }}</span></div>
                        </v-col>
                    </v-row>
                    <span >
                        <div class="mt-5">
                            <strong>Border Countries: </strong>
                            <v-chip class="ma-1" label v-for="border in countryDetailData.borders" :key="border">
                                {{ border }}
                            </v-chip>
                        </div>
                    </span>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'CountryDetail',
    data() {
        return {
            countryCode: null,
            loading: true,
        };
    },
    computed: {
        ...mapGetters('countryDetail', {
            countryDetailData : 'getCountryDetailData',
        }),
        countryLanguages() {
            const names  = this.countryDetailData.languages.map(item => {
                return item.name;
            })
            return names.toString();
        },
        formatPopulation() {
            return (Math.floor(this.countryDetailData.population / 1)).toLocaleString()
        }
    },
    mounted() {
        this.countryCode = this.$route.params.id;
        this.fetchCountryDetailWithCountryCode(this.countryCode).then(() => {
            this.loading = true;
        })
        .finally(() => {
            this.loading = false;
        });
    },
    methods: {
        ...mapActions('countryDetail', ['fetchCountryDetailWithCountryCode']),
        goHome() {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
    .country-title{
        font-size: 1.6em;
        font-weight: 600;
    }
</style>