<template>
    <div>
        <v-progress-linear
            v-if="getLoadingCountryies"
            indeterminate
            color="grey darken-2"
        />
        <div class="ma-5">
            <SearchAndFilter @countryName="getCountryName" @selectedRegionCode="getSelectedRegionCode"/>
            <v-row class="text-center" v-if="!getLoadingCountryies">
                <v-col cols="3" class="pa-0 ma-0" v-for="country in countryList" :key="country.name">
                    <CountryCard :country-data="country" />
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SearchAndFilter from './components/SearchAndFilter.vue'
import CountryCard from './components/CountryCard.vue'
export default {
    name: 'HomePage',
    data() {
        return {
            countryName: '',
            selectedRegionCode: '',
        };
    },
    components: {
        SearchAndFilter,
        CountryCard,
    },
    mounted() {
        this.fetchAllCountryies();
    },
    computed: {
        ...mapGetters('homePage', ['getSpesificEightCountryies','getLoadingCountryies','getSearchedCountry']),
        countryList() {
            if (this.countryName.length) {
                return this.getSearchedCountry
            }
            if (this.selectedRegionCode) {
                return this.getSearchedCountry
            }
            return this.getSpesificEightCountryies
        }
    },
    methods: {
        ...mapActions('homePage', ['fetchAllCountryies']),
        getCountryName(value) {
            this.countryName = value;
        },
        getSelectedRegionCode(value) {
            this.selectedRegionCode = value;
        }
    },
}
</script>