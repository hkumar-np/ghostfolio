import { DataService } from '@ghostfolio/ui/services';

import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IonIcon } from '@ionic/angular/standalone';
import { Role } from '@prisma/client';
import { addIcons } from 'ionicons';
import { personAddOutline } from 'ionicons/icons';
import { finalize } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    IonIcon,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  selector: 'gf-admin-user-create-dialog',
  styleUrls: ['./admin-user-create-dialog.component.scss'],
  templateUrl: './admin-user-create-dialog.component.html'
})
export class GfAdminUserCreateDialogComponent {
  public form = this.formBuilder.nonNullable.group({
    name: [''],
    email: ['', [Validators.email]],
    role: ['USER' as Role, [Validators.required]]
  });
  public isSubmitting = false;
  public roles = Object.values(Role);

  public constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private dataService: DataService,
    private dialogRef: MatDialogRef<GfAdminUserCreateDialogComponent>,
    private formBuilder: FormBuilder
  ) {
    addIcons({ personAddOutline });
  }

  public onCancel() {
    this.dialogRef.close();
  }

  public onCreate() {
    if (this.form.invalid || this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;

    this.dataService
      .postUserAsAdmin(this.form.getRawValue())
      .pipe(
        finalize(() => {
          this.isSubmitting = false;
          this.changeDetectorRef.markForCheck();
        })
      )
      .subscribe(({ accessToken, authToken, role }) => {
        this.dialogRef.close({
          accessToken,
          authToken,
          role
        });
      });
  }
}
