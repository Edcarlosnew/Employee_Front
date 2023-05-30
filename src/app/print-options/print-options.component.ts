import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-print-options',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Opções de Impressão</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('cancel')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div class="form-group">
        <label>Campos para Impressão:</label>
        <div class="form-check" *ngFor="let field of fields">
          <input type="checkbox" class="form-check-input" [id]="field.name" [checked]="selectedFields.includes(field.name)" (change)="toggleField(field.name)">
          <label class="form-check-label" [for]="field.name">{{ field.label }}</label>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.dismiss('cancel')">Cancelar</button>
      <button type="button" class="btn btn-primary" (click)="print()">Imprimir</button>
    </div>
  `,
})
export class PrintOptionsComponent {
  @Input() fields: any[] = [];
  @Input() selectedFields: string[] = [];

  constructor(public activeModal: NgbActiveModal) {}

  toggleField(fieldName: string) {
    const index = this.selectedFields.indexOf(fieldName);
    if (index === -1) {
      this.selectedFields.push(fieldName);
    } else {
      this.selectedFields.splice(index, 1);
    }
  }

  print() {
    this.activeModal.close('print');
  }
}
