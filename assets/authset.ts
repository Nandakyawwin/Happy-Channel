import { HttpInterceptor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Loki } from "./loki";

@Injectable()

export class authSet implements HttpInterceptor {
    constructor() {

    }

    intercept(req: any, next: any):any{
        let token = Loki.getToken();
        let modiR = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
        return next.handle(modiR);
    }
}


// <iframe width="560" height = "315" src = "https://www.youtube.com/embed/VvMpSwQSBbs" title = "YouTube video player" frameborder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen > </iframe>

// <iframe width="560" height = "315" src = "https://www.youtube.com/embed/bPTCujj9g-I" title = "YouTube video player" frameborder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen > </iframe>