import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  IUpdateUserEmailModel,
  IUpdateUserPasswordModel,
} from 'src/app/models/IBrowseUserModel';
import { AuthService } from 'src/app/services/auth.service';
import { PopupsComponent } from '../../shared/popups/popups.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  updatePasswordDataForm: FormGroup;

  updateEmailDataForm: FormGroup;

  isChangePasswordDisabled = false;

  isChangeEmailDisabled = false;

  ngOnInit(): void {
    this.updatePasswordDataForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required, Validators.minLength(6)]],
      newPasswordOne: ['', [Validators.required, Validators.minLength(6)]],
      newPasswordTwo: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.updateEmailDataForm = this.formBuilder.group({
      newEmail: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      currentPassword: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.updatePasswordDataForm.valueChanges.subscribe(() => {
      this.isChangePasswordDisabled = this.updatePasswordDataForm.valid;
    });

    this.updateEmailDataForm.valueChanges.subscribe(() => {
      this.isChangeEmailDisabled = this.updateEmailDataForm.valid;
    });
  }

  changePassword() {
    if (this.updatePasswordDataForm.valid) {
      this.authService
        .updateUserPassword(this.getChangePasswordModel())
        .subscribe(
          (x) => {
            this.openSnackBar('Hasło zostało zmienione');
          },
          (error) => {
            console.log(error);
            this.openSnackBar('Coś poszło nie tak');
          }
        );
    }
  }

  openEmailConfirmationDialog(): void {
    this.authService.updateUserEmail(this.getChangeEmailModel()).subscribe(
      () => {
        this.openSnackBar('Wysłano kod weryfikacyjny');

        const dialogRef = this.dialog.open(EmailConfirmationDialog, {});

        dialogRef.afterClosed().subscribe((resultCode) => {
          const request = this.getChangeEmailModel();
          request.userCode = resultCode;
          this.authService.confirmNewEmail(request).subscribe(
            () => {
              this.openSnackBar('Email zsotał zmieniony');
            },
            (error) => {
              console.log(error);
              this.openSnackBar('Coś poszło nie tak');
            }
          );
        });
      },
      (error) => {
        console.log(error);
        this.openSnackBar('Coś poszło nie tak');
      }
    );
  }

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(PopupsComponent, {
      data: message,
      duration: 5 * 1000,
      panelClass: 'custom-popup-style',
    });
  }

  getChangePasswordModel(): IUpdateUserPasswordModel {
    return {
      currentPassword: this.updatePasswordDataForm.controls.oldPassword.value,
      newUserPassword:
        this.updatePasswordDataForm.controls.newPasswordOne.value,
      newUserReTypedPassword:
        this.updatePasswordDataForm.controls.newPasswordTwo.value,
    };
  }

  getChangeEmailModel(): IUpdateUserEmailModel {
    return {
      userEmail: this.updateEmailDataForm.controls.newEmail.value,
      userPassword: this.updateEmailDataForm.controls.currentPassword.value,
      userCode: '',
    };
  }
}

@Component({
  selector: 'email-confirmation-dialog',
  templateUrl: 'email-confirmation-dialog.html',
})
export class EmailConfirmationDialog {
  constructor(public dialogRef: MatDialogRef<EmailConfirmationDialog>) {}
  userVerificationCode: string;
  onNoClick(): void {
    this.dialogRef.close();
  }
}
