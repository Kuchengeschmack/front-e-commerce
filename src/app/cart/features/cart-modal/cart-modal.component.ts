import { CurrencyPipe } from "@angular/common";
import {
    Component,
    EventEmitter,
    inject,
    Input,
    Output
} from "@angular/core";
import { CartService } from "app/cart/data-access/cart.service";
import { Product } from "app/products/data-access/product.model";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { TableModule } from "primeng/table";

@Component({
    selector: "app-cart-modal",
    templateUrl: "./cart-modal.component.html",
    standalone: true,
    imports: [
        ButtonModule,
        DialogModule,
        TableModule,
        CurrencyPipe
    ]
})
export class CartModalComponent {
    public cartService = inject(CartService);
    @Input() isDialogVisible: boolean = false;
    @Output() isDialogVisibleChange = new EventEmitter<boolean>();

    onRemove(product: Product) {
        this.cartService.remove(product);
    }

    onHide() {
        this.isDialogVisibleChange.emit(false);
    }
}
