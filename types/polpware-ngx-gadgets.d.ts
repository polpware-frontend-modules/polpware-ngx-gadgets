import * as _fortawesome_fontawesome_common_types from '@fortawesome/fontawesome-common-types';
import * as i0 from '@angular/core';
import { OnInit, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from '@angular/forms';
import * as i4 from '@fortawesome/angular-fontawesome';

declare class LanguageSwitchComponent implements OnInit, OnChanges {
    faGlobe: _fortawesome_fontawesome_common_types.IconDefinition;
    langOptions: Array<{
        text: string;
        value: string;
    }>;
    initValue: string;
    size: string;
    changed: EventEmitter<any>;
    langValue: string;
    isSmallSize: boolean;
    isLargeSize: boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    change($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LanguageSwitchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LanguageSwitchComponent, "polp-gadget-language-switch", never, { "langOptions": { "alias": "langOptions"; "required": false; }; "initValue": { "alias": "initValue"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, { "changed": "changed"; }, never, never, false, never>;
}

declare class NgxGadgetsModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxGadgetsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgxGadgetsModule, [typeof LanguageSwitchComponent], [typeof i2.CommonModule, typeof i3.FormsModule, typeof i4.FontAwesomeModule], [typeof LanguageSwitchComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgxGadgetsModule>;
}

export { LanguageSwitchComponent, NgxGadgetsModule };
//# sourceMappingURL=polpware-ngx-gadgets.d.ts.map
