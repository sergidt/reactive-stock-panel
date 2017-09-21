import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StockData } from '../../models/app.model';

@Component({
    selector: 'stock-card',
    templateUrl: 'stock-card.component.html',
    styleUrls: ['stock-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockCardComponent implements OnInit {

    @Input() stockData: StockData;

    ngOnInit() {
    }

    getlogoClass() {
        let logoClass = "logo";

        switch (this.stockData.name){
            case 'MICROSOFT':
            case 'FACEBOOK':
                logoClass += ' no-round';
                break;

            case 'APPLE':
                logoClass += ' apple';
                break;
        }

        return logoClass;
    }

}
