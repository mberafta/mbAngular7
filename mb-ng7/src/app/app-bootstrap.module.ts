import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[
        CommonModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        CollapseModule.forRoot()
    ],
    exports:[
        BsDropdownModule,
        TooltipModule,
        ModalModule,
        CollapseModule
    ]
})

export class AppBootstrapModule{
    
}