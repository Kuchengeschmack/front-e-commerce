import { Component, LOCALE_ID } from "@angular/core";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { SplitterModule } from "primeng/splitter";
import { ToolbarModule } from "primeng/toolbar";
import { CartService } from "./products/data-access/cart.service";
import { PanelMenuComponent } from "./shared/ui/panel-menu/panel-menu.component";
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { TableModule } from 'primeng/table';
import { CurrencyPipe } from "@angular/common";
import { Product } from "./products/data-access/product.model";

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
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    DialogModule,
    ButtonModule,
    TableModule,
    CurrencyPipe
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

  onRemove(product: Product) {
    this.cartService.remove(product);
  }
}
