import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StockData, stockDataList } from '../models/app.model';

@Component({
    selector: 'stock-panel',
    templateUrl: 'stock-panel.component.html',
    styleUrls: ['stock-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockPanelComponent implements OnInit {

    stockDataList = stockDataList;

    ngOnInit() {
    }

}
