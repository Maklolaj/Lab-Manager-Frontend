import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    });
  }

  openSnackBar() {
    this._snackBar.openFromComponent(PopupsComponent, {
      data: 'Message one',
      duration: 5 * 1000,
      panelClass: 'custom-popup-style',
    });
  }

  openEmailConfirmationDialog(): void {
    const dialogRef = this.dialog.open(EmailConfirmationDialog, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`The dialog was closed with result: ${result}`);
    });
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
