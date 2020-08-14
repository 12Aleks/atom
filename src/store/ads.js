export default {
    state:{
        ads: [
            {
                title: 'First ad',
                description: 'description',
                promo: false,
                id: '123',
                src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            },
            {
                title: 'Second ad',
                description: 'description',
                promo: true,
                id: '1233',
                src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            },
            {
                title: 'Third ad',
                description: 'description',
                promo: true,
                id: '1234',
                src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            },
        ]
    },
    getters:{
        ads(state){
            return state.ads
        },
        promoAds(state){
            return state.ads.filter(ad=> {
                return ad.promo
            })
        },
        myAds(state){
            return state.ads
        },
        adById(state){
            return adId => {
                return state.ads.find(ad => ad.id === adId)
            }
        }
    },
    mutations:{
        createAd(state, payload){
          state.ads.push(payload)
        }
    },
    actions:{

        createAd({commit}, payload){
            payload.id = Math.random()
            commit('createAd', payload)
        }
    },
}
