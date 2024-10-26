import { Component, LOCALE_ID } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from "primeng/button";
import { SplitterModule } from "primeng/splitter";
import { ToolbarModule } from "primeng/toolbar";
import { CartService } from "./cart/data-access/cart.service";
import { CartModalComponent } from "./cart/features/cart-modal/cart-modal.component";
import { PanelMenuComponent } from "./shared/ui/panel-menu/panel-menu.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [
    RouterModule,
    SplitterModule,
    ToolbarModule,
    PanelMenuComponent,
    ButtonModule,
    BadgeModule,
    CartModalComponent
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "fr-FR",
    },
  ],
})
export class AppComponent {
  title = "ALTEN SHOP";
  isDialogVisible = false;

  constructor(public cartService: CartService) { }

  onViewCart() {
    this.isDialogVisible = true;
  }
}
