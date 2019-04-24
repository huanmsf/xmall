import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IQuote } from 'app/shared/model/quotes/quote.model';
import { QuoteService } from './quote.service';

@Component({
    selector: 'jhi-quote-delete-dialog',
    templateUrl: './quote-delete-dialog.component.html'
})
export class QuoteDeleteDialogComponent {
    quote: IQuote;

    constructor(protected quoteService: QuoteService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.quoteService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'quoteListModification',
                content: 'Deleted an quote'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-quote-delete-popup',
    template: ''
})
export class QuoteDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ quote }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(QuoteDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
                this.ngbModalRef.componentInstance.quote = quote;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate(['/quote', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate(['/quote', { outlets: { popup: null } }]);
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
