
// Middleware для перенаправления с роутов авторизации, регистрации, восстановления
export default async function guest ({next, store}){

    let mainPage = '';
    if(store.state.user.status == 'client' || store.state.user.status == 'redactor'){
        mainPage = 'VideoPage';
    }else{
        mainPage = 'AdminPanel';
    }

    console.log(await store.dispatch('isAuth'));
    if( await store.dispatch('isAuth') ){
        return next({name: mainPage});
    }
    return next();
}