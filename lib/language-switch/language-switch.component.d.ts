import { OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class LanguageSwitchComponent implements OnInit, OnChanges {
    faGlobe: import("@fortawesome/fontawesome-common-types").IconDefinition;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<LanguageSwitchComponent, "polp-gadget-language-switch", never, { "langOptions": "langOptions"; "initValue": "initValue"; "size": "size"; }, { "changed": "changed"; }, never, never>;
}
//# sourceMappingURL=language-switch.component.d.ts.map