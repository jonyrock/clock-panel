import {PanelCtrl} from 'app/plugins/sdk';
import './css/clock-panel.css!';

export class ClockCtrl extends PanelCtrl {
  constructor($scope, $injector) {
    super($scope, $injector);
  }
  
}

ClockCtrl.templateUrl = 'module.html';
