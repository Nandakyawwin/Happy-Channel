export class Loki {

    static save(data: any) {
        localStorage.setItem('token', data)
    }
    static savename(name: any) {
        localStorage.setItem('name', name)
    }

    static check() {
        let data = localStorage.getItem(
            'token'
        );
        if (data != null || data != undefined) {
            return true;

        } else {
            return false;
        }
    }

    static checkName() {
        let name = localStorage.getItem(
            'name'
        );
        if (name != null || name != undefined) {
            return true;

        } else {
            return false;
        }
    }

    static getToken() {
        return localStorage.getItem('token');
    }

    static getName() {
        return localStorage.getItem('name');
    }
    static remove() {
        return localStorage.removeItem(('token'));
    }
    static removeName() {
        return localStorage.removeItem(('name'));
    }
    static trailer1() {
        return localStorage.getItem('trailer1');
    }
    static trailer1remove() {
        return localStorage.removeItem(('trailer1'));
    }
    static trailer2() {
        return localStorage.getItem('trailer2');
    }
    static trailer2remove() {
        return localStorage.removeItem(('trailer2'));
    }
    static trailer3() {
        return localStorage.getItem('trailer3');
    }
    static trailer3remove() {
        return localStorage.removeItem(('trailer3'));
    }
    static saveTrailer1(trailer1: any) {
        localStorage.setItem('trailer1', trailer1)
    }
    static saveTrailer2(trailer2: any) {
        localStorage.setItem('trailer2', trailer2)
    }
    static saveTrailer3(trailer3: any) {
        localStorage.setItem('trailer3', trailer3)
    }

}