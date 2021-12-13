<template>
    <v-container>
        <v-row class="justify-space-between">
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
                <v-text-field
                    label="Search for a country"
                    placeholder="Search for a country"
                    solo
                    prepend-inner-icon="mdi-magnify"
                    text
                    clearable
                    v-model="countryName"
                    :loading="isSearchLoading"
                ></v-text-field>
            </v-col>
            <v-col
                cols="12"
                sm="6"
                md="3"
                >
                <v-combobox
                    solo
                    v-model="selectedRegion"
                    :items="regions"
                    label="Filter by Region"
                    clearable
                    text
                    item-text="value"
                    item-value="key"
                    :loading="isRegionSearchLoading"
                    @change="searchWithRegion"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'SearchAndFilter',
    data() {
        return {
            isSearchLoading: false,
            isRegionSearchLoading: false,
            countryName: null,
            selectedRegion: null,
            regions: [
                {
                    key: 'EU',
                    value: "European Union"
                },
                
                {
                    key: 'EFTA',
                    value: "European Free Trade Associatio"
                },
                
                { 
                    key: 'CARICOM',
                    value: "Caribbean Community"
                },
                
                { 
                    key: 'PA',
                    value: "Pacific Alliance"},
               
                { 
                    key: 'AU',
                    value: "African Union"},
                
                {
                    key: 'USAN',
                    value: "Union of South American Nations"},
                
                {
                    key: 'EEU',
                    value: "Eurasian Economic Union"},
                
                {
                    key: 'AL',
                    value: "Arab League"},
               
                {
                    key: 'ASEAN',
                    value: "Association of Southeast Asian Nations"},
               
                {
                    key: 'CAIS',
                    value: "Central American Integration System"},
                
                {
                    key: 'CEFTA',
                    value: "Central European Free Trade Agreement"},
                
                {
                    key: 'NAFTA',
                    value: "North American Free Trade Agreement",},
                {
                    key: 'SAARC',
                    value: "South Asian Association for Regional Cooperation"
                },
            ]
        };
    },
    watch: {
        countryName(value) {
            this.isSearchLoading = true;
            this.fetchCountrySearch(value).finally(() => {
                this.isSearchLoading = false;
            })
            this.$emit('countryName', this.countryName)
        },
        selectedRegion() {
            this.$emit('selectedRegionCode', this.selectedRegion?.key)
        }
    },
    methods: {
        ...mapActions('homePage', ['fetchCountrySearch','fetchCountryRegionSearch']),
        searchWithRegion() {
            if (this.selectedRegion?.key) {
                this.isRegionSearchLoading = true;
                this.fetchCountryRegionSearch(this.selectedRegion).finally(() => {
                    this.isRegionSearchLoading = false;
                })
            }
            this.$emit('selectedRegionCode', this.selectedRegion?.key);
        }
    }
}
</script>