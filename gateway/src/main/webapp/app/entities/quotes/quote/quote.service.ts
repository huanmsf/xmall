import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IQuote } from 'app/shared/model/quotes/quote.model';

type EntityResponseType = HttpResponse<IQuote>;
type EntityArrayResponseType = HttpResponse<IQuote[]>;

@Injectable({ providedIn: 'root' })
export class QuoteService {
    public resourceUrl = SERVER_API_URL + 'quotes/api/quotes';

    constructor(protected http: HttpClient) {}

    create(quote: IQuote): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(quote);
        return this.http
            .post<IQuote>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(quote: IQuote): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(quote);
        return this.http
            .put<IQuote>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IQuote>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IQuote[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    protected convertDateFromClient(quote: IQuote): IQuote {
        const copy: IQuote = Object.assign({}, quote, {
            lastTrade: quote.lastTrade != null && quote.lastTrade.isValid() ? quote.lastTrade.toJSON() : null
        });
        return copy;
    }

    protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
        if (res.body) {
            res.body.lastTrade = res.body.lastTrade != null ? moment(res.body.lastTrade) : null;
        }
        return res;
    }

    protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        if (res.body) {
            res.body.forEach((quote: IQuote) => {
                quote.lastTrade = quote.lastTrade != null ? moment(quote.lastTrade) : null;
            });
        }
        return res;
    }
}
