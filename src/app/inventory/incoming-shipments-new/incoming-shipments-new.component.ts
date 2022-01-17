import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-incoming-shipments-new',
  templateUrl: './incoming-shipments-new.component.html',
  styleUrls: ['./incoming-shipments-new.component.scss']
})
export class IncomingShipmentsNewComponent implements OnInit {
  title: string | undefined;
  abc: string | undefined;
  hasOrderCode = false;
  public eventClosed: EventEmitter<any> = new EventEmitter();
  constructor(
    public bsModalRef: BsModalRef,
  ) { }

  ngOnInit() {
    console.log(this.abc);
  }

  checkOrderCode(event: any) {
    const value = (event.target as HTMLInputElement).value;
    this.hasOrderCode = value === "true";
  }

  onModalClose() {
    this.eventClosed.emit({ hola: 'sss'});
    this.bsModalRef.hide();
  }

  addItem() {

  }

}
