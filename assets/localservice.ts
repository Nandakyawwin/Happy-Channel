import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Subject } from "rxjs";
@Injectable()
export class localService {


    BASE_URL = 'http://localhost:3000/';
    movieURL = this.BASE_URL + 'movies';
    adminMovieURL = this.BASE_URL + 'admin/movies';
    AdminLoginURL = this.BASE_URL + 'admin/adminLogin';
    AdminAllURL = this.BASE_URL + 'admin/all';
    AdminPostmovieURL = this.BASE_URL + 'admin/post/movie';
    DeleteMovieURL = this.BASE_URL + 'admin/delete/movie';
    findMovieURL = this.BASE_URL + 'admin/findmovie/';
    findMovieSearchURL = this.BASE_URL + 'admin/findMovie';
    PostJobURL = this.BASE_URL + 'admin/post/job';
    AllJobURL = this.BASE_URL + 'admin/allJob';
    DeleteJobURL = this.BASE_URL + 'admin/deleteJob';
    PostAdsURL = this.BASE_URL + 'admin/postAds';
    isAuth = new Subject<boolean>();
    authBool = this.isAuth.asObservable();
    dd = 'Under the Queen Unbrella';


    isDefine = new Subject<boolean>();
    trueOR = this.isDefine.asObservable();
    constructor(private http: HttpClient) {

    }

    findMovieSearch(data: any) {
        return this.http.post(this.findMovieSearchURL, data).pipe(
            map(
                (response: any) => response
            )
        )
    }
    PostAds(data: any) {
        return this.http.post(this.PostAdsURL, data).pipe(
            map(
                (response: any) => response
            )
        );
    }

    deleteJob(_id: any) {
        return this.http.post(this.DeleteJobURL, _id).pipe(
            map(
                (response: any) => response
            )
        );
    }
    postJob(data: any) {
        return this.http.post(this.PostJobURL, data).pipe(
            map(
                (response: any) => response
            )
        );
    }

    changeAuth(val: boolean) {
        this.isAuth.next(val);
    }

    changeState(val: boolean) {
        this.isDefine.next(val);
    }


    findMovie(id:any) {
        const moviefinalURL = this.findMovieURL + id;
        return this.http.get(moviefinalURL).pipe(
            map(
                (response: any) => response
            )
        )

    }

    getallmovie() {
        return this.http.get(this.movieURL).pipe(
            map(
                (response: any) => response
            )
        )
    }

    getallAdminMovie() {
        return this.http.get(this.adminMovieURL).pipe(
            map(
                (response: any) => response
            )
        )
    }

    AdminLogin(data: any) {
        return this.http.post(this.AdminLoginURL, data).pipe(
            map(
                (response: any) => response
            )
        )
    }
    AdminAll(): any {
        return this.http.get(this.AdminAllURL).pipe(
            map(
                (response: any) => response
            )
        )
    }
    allJobAdmin() {
        return this.http.get(this.AllJobURL).pipe(
            map(
                (response: any) => response
            )
        )
    }

    PostMoviebyAdmin(datas: any) {

        return this.http.post(this.AdminPostmovieURL, datas).pipe(
            map(
                (response: any) => response
            )
        )
    }
    deleteMovie(data: any) {
        return this.http.post(this.DeleteMovieURL, data).pipe(
            map(
                (response: any) => response
            )
        )

    }

}