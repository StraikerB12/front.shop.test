
// Middleware для перенаправления с защищенных роутов
export default async function auth ({next, store}){
    if( !await store.dispatch('isAuth') ){
        return next({name: 'Authorization'});
    }
    return next();
}