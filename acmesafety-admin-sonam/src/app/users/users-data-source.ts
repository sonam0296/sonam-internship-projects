import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';
import { catchError, finalize } from 'rxjs/operators';
import { Users } from '../model/users.model';
import { HttpService } from '../http.service';
export class UsersDataSource implements DataSource<Users>{
    private userSubject = new BehaviorSubject<Users[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();
    public count: any;
    constructor(private httpService: HttpService) { }

    connect(collectionViewer: CollectionViewer): Observable<Users[]> {
        return this.userSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.userSubject.complete();
        this.loadingSubject.complete();
    }

    
    loadUsers(filter = '',
        sortDirection = 'asc', pageIndex = 0, pageSize = 3) {
        this.loadingSubject.next(true);

        this.httpService.loadUsers(filter, sortDirection,
            pageIndex, pageSize, "users.json").pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(data => {
                this.userSubject.next(data['users'])
                this.count = data['pagination'].count;
            });
    }
}
