import { ModalComponent } from './modal.component';
import { EventEmitter, Output } from '@angular/core';
import { Directive, OnInit, ViewChild } from "@angular/core";

@Directive()
export abstract class Modalable implements OnInit {

    @ViewChild(ModalComponent, { static: true })
    modal: ModalComponent

    @Output()
    onHide: EventEmitter<any> = new EventEmitter<any>()

    @Output()
    onShow: EventEmitter<any> = new EventEmitter<any>()

    ngOnInit() {
        this.modal.onHide.subscribe((e) => {
            this.onHide.emit(e)
        })
        this.modal.onShow.subscribe((e) => {
            this.onShow.emit(e)
        })
    }

    show(){
        this.modal.show()
    }

    hide(){
        this.modal.hide()
    }

}