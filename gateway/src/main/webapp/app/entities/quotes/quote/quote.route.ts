import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Quote } from 'app/shared/model/quotes/quote.model';
import { QuoteService } from './quote.service';
import { QuoteComponent } from './quote.component';
import { QuoteDetailComponent } from './quote-detail.component';
import { QuoteUpdateComponent } from './quote-update.component';
import { QuoteDeletePopupComponent } from './quote-delete-dialog.component';
import { IQuote } from 'app/shared/model/quotes/quote.model';

@Injectable({ providedIn: 'root' })
export class QuoteResolve implements Resolve<IQuote> {
    constructor(private service: QuoteService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IQuote> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<Quote>) => response.ok),
                map((quote: HttpResponse<Quote>) => quote.body)
            );
        }
        return of(new Quote());
    }
}

export const quoteRoute: Routes = [
    {
        path: '',
        component: QuoteComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'Quotes'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: QuoteDetailComponent,
        resolve: {
            quote: QuoteResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Quotes'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: QuoteUpdateComponent,
        resolve: {
            quote: QuoteResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Quotes'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: QuoteUpdateComponent,
        resolve: {
            quote: QuoteResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Quotes'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const quotePopupRoute: Routes = [
    {
        path: ':id/delete',
        component: QuoteDeletePopupComponent,
        resolve: {
            quote: QuoteResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Quotes'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
