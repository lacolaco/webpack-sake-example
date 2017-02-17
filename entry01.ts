import { Observable } from "rxjs";

Observable.interval(1000).take(5).subscribe(() => {
    console.log("tick");
});
