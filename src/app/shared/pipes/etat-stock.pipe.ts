import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "etatStock",
  standalone: true,
})
export class EtatStockPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case "INSTOCK": {
        return "En stock";
      }
      case "LOWSTOCK": {
        return "Presque épuisé";
      }
      case "OUTOFSTOCK": {
        return "Épuisé";
      }
      default: {
        return "Disponibilité inconnue";
      }
    }
  }
}
