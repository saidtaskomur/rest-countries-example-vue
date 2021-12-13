<template>
    <v-card
        class="mx-auto my-2"
        max-width="280"
        style="cursor: pointer;"
        hover
        @click="goCountryDetail"
    >
        <v-img
            height="195"
            width="280"
            :src="countryData.flags.svg"
            contain
        />

        <v-card-title>{{ countryData.name }}</v-card-title>

        <v-card-text>
            <v-row
                class="mx-0"
            >
                <v-col cols="12" class="text-start py-1 my-0">
                    <strong>Popülation</strong>: <span>{{ countryData.population }}</span>
                </v-col>
                <v-col cols="12" class="text-start py-1 my-0">
                    <strong>Region</strong>: <span>{{ countryData.region }}</span>
                </v-col>
                <v-col cols="12" class="text-start py-1 my-0">
                    <strong>Capital</strong>: <span>{{ countryData.capital }}</span>
                </v-col>
            </v-row>
        </v-card-text>
  </v-card>
</template>

<script>
export default {
    name: 'CountryCard',
    props: {
        countryData: {
            type: Object,
            required: true,
        },
    },
    methods: {
        goCountryDetail() {
            this.$router.push(`/${this.countryData.alpha2Code}`)
        }
    }
}
</script>