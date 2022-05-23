import { ConfirmDialogComponent } from './confirmation-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

const MatDialogMock = {
    close: () => null
};

describe('confirm dialog component', () => {
    let component: ConfirmDialogComponent;
    let fixture: ComponentFixture<ConfirmDialogComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                ConfirmDialogComponent
            ],
            providers: [
                // MatDialogRef,
                // MAT_DIALOG_DATA
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {}
                },
                {
                    provide: MatDialogRef,
                    useValue: MatDialogMock
                }
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
                NO_ERRORS_SCHEMA
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfirmDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should Create', () => {
        expect(component).toBeTruthy();
    });

    it('OnConfirm send true value', () => {
        const service = TestBed.inject(MatDialogRef);
        const spy = spyOn(service, 'close');

        component.onConfirm();
        expect(spy).toHaveBeenCalledWith(true);
    });

    it('OnConfirm send false value', () => {
        const service = TestBed.inject(MatDialogRef);
        const spy = spyOn(service, 'close');

        component.onDismiss();
        expect(spy).toHaveBeenCalledWith(false);
    });

});
