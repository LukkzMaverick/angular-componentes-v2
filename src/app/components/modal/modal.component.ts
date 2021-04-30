import { EventEmitter, Output } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
declare const $
@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output()
  onHide :EventEmitter<any> = new EventEmitter<any>()

  @Output()
  onShow :EventEmitter<any> = new EventEmitter<any>()
  
  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.addClasses()
    this.subscribeToEvents()
  }

  private subscribeToEvents(): void{
    $(this.divModal).on('hidden.bs.modal', (e) => {
      this.onHide.emit(e)
    })
    $(this.divModal).on('shown.bs.modal', (e) => {
      this.onShow.emit(e)
    })
  }

  private addClasses(): void{
    this.divModal.querySelector('[modal-title]').classList.add('modal-title')
    this.divModal.querySelector('[modal-body]').classList.add('modal-body')
    this.divModal.querySelector('[modal-footer]').classList.add('modal-footer')
  }

  show(): void {
    $(this.divModal).modal('show')
  }

  hide() {
    $(this.divModal).modal('hide')
  }

  get divModal(): HTMLElement {
    return this.element.nativeElement.firstChild;
  }

}
