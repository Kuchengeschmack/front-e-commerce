import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
  ViewEncapsulation,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Product } from "app/products/data-access/product.model";
import { Message, SelectItem } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { MessagesModule } from "primeng/messages";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    DropdownModule,
    MessagesModule,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ContactFormComponent {
  public email: string = "";
  public message: string = "";
  public messages: Message[] = [];

  onSave() {
    // TODO : implémenter l'appel au service
    this.email = "";
    this.message = "";
    this.messages = [
      { severity: "success", detail: "Demande de contact envoyée avec succès" },
    ];
  }
}
