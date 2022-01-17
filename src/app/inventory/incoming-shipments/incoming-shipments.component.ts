import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { IncomingShipmentsNewComponent } from '../incoming-shipments-new/incoming-shipments-new.component';

@Component({
  selector: 'app-incoming-shipments',
  templateUrl: './incoming-shipments.component.html',
  styleUrls: ['./incoming-shipments.component.scss']
})
export class IncomingShipmentsComponent implements OnInit {
  bsModalRef: BsModalRef | undefined;
  constructor(
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
  }

  newIncommingShipment() {
    this.openOtpModal();
  }

  private openOtpModal() {
    const config: ModalOptions = {
      backdrop: true,
      ignoreBackdropClick: true,
      class: 'modal-xxl modal-dialog-centered',
      animated: true,
      initialState : {
        abc: 'abc',
        list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
        ],
        title: 'Modal with component'
      } as any,
    };
    const otpModal = this.modalService.show(IncomingShipmentsNewComponent, config );
    return new Observable<any>(this.getConfirmSubscriber(otpModal));
  }

  private getConfirmSubscriber(otpModal: any) {
    return (observer: any) => {
      const subscription = otpModal.content.eventClosed.subscribe((identity: any) => {
        observer.next(identity);
        observer.complete();
      });

      return {
        unsubscribe() {
          subscription.unsubscribe();
        }
      };
    }
  }

}
