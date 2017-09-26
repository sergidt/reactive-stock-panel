import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { stockDataList } from '../services/app.service';

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
