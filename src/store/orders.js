import * as fb from 'firebase'

class Order {
    constructor(name, phone, adId, done = false, id = null) {
        this.name = name;
        this.phone = phone;
        this.adId = adId;
        this.done = done;
        this.id = id;
    }
}

export default {
    state: {
        orders: []
    },
    getters: {
        doneOrders(state){
            return state.orders.filter( o => o.done)
        },
        undoneOrders(state){
            return state.orders.filter( o => !o.done)
        },
        orders(state, getters){
            return getters.undoneOrders.concat(getters.doneOrders)
        }
    },
    mutations: {
        loadOrders(state, payload) {
            state.orders = payload
        }
    },
    actions: {
        async createOrders({commit}, {name, phone, adId, ownerId}) {
            const order = new Order(name, phone, adId);
            commit('clearError')

            try {
                await fb.database().ref(`/users/${ownerId}/orders`).push(order)
            } catch (error) {
                commit('setError', error.message)
                throw error
            }
        },
        async fetchOrders({commit}) {
            commit('setLoading', true)
            commit('clearError')

            const resultOrders = []

            try{
                const fbVal = await fb.database().ref(`/users/${fb.auth().currentUser.uid}/orders`).once('value')
                const orders = fbVal.val()

                Object.keys(orders).forEach(key =>{
                    const o = orders[key]
                    resultOrders.push((
                        new Order(o.name, o.phone, o.adId, o.done, key)
                    ))
                })

                commit('loadOrders', resultOrders)
                commit('setLoading', false)
            }catch(error){
                commit('setLoading', false)
                commit('setError', error.message)
            }
        },
        async markOrderDone({commit}, payload){
            try{
               await fb.database().ref(`/users/${fb.auth().currentUser.uid}/orders`).child(payload).update({
                   done: true
               })
            }
            catch(error){
                commit('setError', error.message)
                throw error
            }
        }
    }
}
