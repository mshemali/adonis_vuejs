import HTTP from '../http';
import router from '../router'
export default {
    namespaced: true,
    state: {
        registerEmail:'',
        registerPassword:'',
        registerError: null,
        token: null 
    },
    mutations: {
        setRegisterEmail(state , email){
            state.registerEmail  = email;
        },
        setRegisterPassword(state , password){
            state.registerPassword  = password;
        },
        setToken(state, token){
            state.token = token
            router.push('/')
        },
        setRegisterError(state, error){
            state.registerError = error;
        }
        

    },
    getters:{
        isLoggedIn(state){
            return !!state.token;
        }
    },
    actions:{
        register({ commit ,state }){
            commit('setRegisterError', null);
            console.log('user', state.registerEmail, state.registerPassword)
             return HTTP().post('/auth/register',{
                 email:state.registerEmail,
                 password: state.registerPassword,
             }).then( ({data} )=> {
                commit('setToken', data.token);
             } )
             .catch( () => {
                 commit('setRegisterError', 'Invalid Registration Error');
             });
             
             
             
        },
    }

}