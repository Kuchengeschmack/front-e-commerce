import { Component, LOCALE_ID } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SplitterModule } from "primeng/splitter";
import { ToolbarModule } from "primeng/toolbar";
import { PanierService } from "./products/data-access/panier.service";
import { PanelMenuComponent } from "./shared/ui/panel-menu/panel-menu.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [RouterModule, SplitterModule, ToolbarModule, PanelMenuComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "fr-FR",
    }
  ],
})
export class AppComponent {
  title = "ALTEN SHOP";

  constructor(public panierService: PanierService) {}
}
