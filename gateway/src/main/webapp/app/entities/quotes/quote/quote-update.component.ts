import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { IQuote } from 'app/shared/model/quotes/quote.model';
import { QuoteService } from './quote.service';

@Component({
    selector: 'jhi-quote-update',
    templateUrl: './quote-update.component.html'
})
export class QuoteUpdateComponent implements OnInit {
    quote: IQuote;
    isSaving: boolean;
    lastTrade: string;

    constructor(protected quoteService: QuoteService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ quote }) => {
            this.quote = quote;
            this.lastTrade = this.quote.lastTrade != null ? this.quote.lastTrade.format(DATE_TIME_FORMAT) : null;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.quote.lastTrade = this.lastTrade != null ? moment(this.lastTrade, DATE_TIME_FORMAT) : null;
        if (this.quote.id !== undefined) {
            this.subscribeToSaveResponse(this.quoteService.update(this.quote));
        } else {
            this.subscribeToSaveResponse(this.quoteService.create(this.quote));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IQuote>>) {
        result.subscribe((res: HttpResponse<IQuote>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
