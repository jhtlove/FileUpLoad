import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-box',
  templateUrl: './modal-box.component.html',
  styleUrls: ['./modal-box.component.css']
})
export class ModalBoxComponent implements OnInit {
  @Input()
  modalTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
