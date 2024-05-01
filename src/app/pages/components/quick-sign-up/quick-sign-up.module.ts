import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { QuickSignUpComponent } from './quick-sign-up.component';
import { QuickSignUpRoutingModule } from './quick-sign-up-routing.module';

@NgModule({
    imports: [
        QuickSignUpRoutingModule,

        CommonModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        ReactiveFormsModule,
        ToastModule,
        
    ],
    declarations: [QuickSignUpComponent]
})
export class QuickSignUpModule { }
