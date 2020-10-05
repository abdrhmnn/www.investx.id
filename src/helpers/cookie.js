import Cookies from 'universal-cookie';
let cookies = new Cookies();
// doc : 
// https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie 

const kuki = {
    set : (key, value, url) => cookies.set(key, value, url),
    get : (key) => cookies.get(key),
    // getAll : () => cookies.getAll(),
    remove : (key) => cookies.remove(key),

}

export default kuki