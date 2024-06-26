import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { CustomPaginationComponent } from './Components/Shared/custom-pagination/custom-pagination.component';
import { TeachersComponent } from './Components/teachers/teachers.component';
import { MainComponent } from './Components/Home/main/main.component';
import { CourseCardComponent } from './Components/Shared/course-card/course-card.component';
import { TeacherCardComponent } from './Components/Shared/teacher-card/teacher-card.component';
import { RecentCoursesComponent } from './Components/Home/recent-courses/recent-courses.component';
import { AboutAcademyComponent } from './Components/Home/about-academy/about-academy.component';
import { AboutTeachersComponent } from './Components/Home/about-teachers/about-teachers.component';
import { SideScrollButtonsComponent } from './Components/Shared/side-scroll-buttons/side-scroll-buttons.component';
import { AboutUsComponent } from './Components/Home/about-us/about-us.component';
import { ClassRankComponent } from './Components/Home/class-rank/class-rank.component';
import { QuestionsComponent } from './Components/Home/questions/questions.component';
import { TargetCounterComponent } from './Components/Home/target-counter/target-counter.component';
import { AppearFromLeftDirective } from './Directive/appear-from-left.directive';
import { AppearFromRightDirective } from './Directive/appear-from-right.directive';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { ScrollToTopButtonComponent } from './Components/Shared/scroll-to-top-button/scroll-to-top-button.component';
import { CourseDetailsComponent } from './Components/CourseDetails/course-details/course-details.component';
import { CourseDetailsHeaderComponent } from './Components/CourseDetails/course-details-header/course-details-header.component';
import { CourseDetailsCardComponent } from './Components/CourseDetails/course-details-card/course-details-card.component';

import { LessonDialogComponent } from './Components/CourseDetails/Dialog/lesson-dialog/lesson-dialog.component';
import { ContentDialogComponent } from './Components/CourseDetails/Dialog/content-dialog/content-dialog.component';
import { ConfirmationDialogComponent } from './Components/CourseDetails/Dialog/confirmation-dialog/confirmation-dialog.component';
import { HeroComponent } from './Components/Home/hero/hero.component';
import { EditExamComponent } from './Components/Exam/Teacher/edit-exam/edit-exam.component';
import { ExamDialogComponent } from './Components/CourseDetails/Dialog/exam-dialog/exam-dialog.component';
import { QuestionControllerComponent } from './Components/Exam/Teacher/question-controller/question-controller.component';
import { ExamControllerComponent } from './Components/Exam/Teacher/exam-controller/exam-controller.component';
import { StudentExamComponent } from './Components/Exam/Student/student-exam/student-exam.component';
import { TimerComponent } from './Components/Exam/Student/timer/timer.component';
import { ExamResultComponent } from './Components/Exam/Student/exam-result/exam-result.component';
import { ExamTimeOutComponent } from './Components/Exam/Student/exam-time-out/exam-time-out.component';
import { StudentProfileComponent } from './Components/Profile/Student/student-profile/student-profile.component';
import { StudentCourseComponent } from './Components/Profile/Student/student-course/student-course.component';
import { ProfileBudgetComponent } from './Components/Profile/Student/profile-budget/profile-budget.component';
import { StudentShippingCodesComponent } from './Components/Profile/Student/student-shipping-codes/student-shipping-codes.component';
import { ChangePasswordComponent } from './Components/Profile/change-password/change-password.component';
import { StudentSettingsComponent } from './Components/Profile/Student/student-settings/student-settings.component';
import { SignOutComponent } from './Components/sign-out/sign-out.component';
import { TeacherDetailsComponent } from './Components/teacher-details/teacher-details.component';
import { TeacherProfileComponent } from './Components/Profile/Teacher/teacher-profile/teacher-profile.component';
import { CustomCloudNavbarComponent } from './Components/Shared/custom-cloud-navbar/custom-cloud-navbar.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { StudentSignUpPageComponent } from './Components/SignUp/Student/student-sign-up-page/student-sign-up-page.component';
import { TeacherSignUpPageComponent } from './Components/SignUp/Teacher/teacher-sign-up-page/teacher-sign-up-page.component';
import { LoadingCardsComponent } from './Components/Shared/loading-cards/loading-cards.component';

import { TeacherCourseComponent } from './Components/Profile/Teacher/teacher-course/teacher-course.component';
import { AddEditCourseComponent } from './Components/Profile/Teacher/add-edit-course/add-edit-course.component';
import { TeacherSettingsComponent } from './Components/Profile/Teacher/teacher-settings/teacher-settings.component';
import { LectureComponent } from './Components/lecture/lecture.component';
import { ImageUploaderComponent } from './Components/Shared/image-uploader/image-uploader.component';
import { PendingProfileComponent } from './Components/Profile/Teacher/pending-profile/pending-profile.component';
import { StudentSignUpFormComponent } from './Components/SignUp/Student/student-sign-up-form/student-sign-up-form.component';
import { TeacherSignUpFormComponent } from './Components/SignUp/Teacher/teacher-sign-up-form/teacher-sign-up-form.component';
import { StudentSettingsFormComponent } from './Components/Profile/Student/student-settings-form/student-settings-form.component';
import { TeacherSettingsFormComponent } from './Components/Profile/Teacher/teacher-settings-form/teacher-settings-form.component';
import { EnrollDialogComponent } from './Components/CourseDetails/Dialog/enroll-dialog/enroll-dialog.component';

import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { OverlayContainer } from '@angular/cdk/overlay';
import { ParentsComponent } from './Components/parents/parents.component';
import { AboutPlatformComponent } from './Components/about-platform/about-platform.component';
import { CouponComponent } from './Components/Profile/Student/PaymentForms/coupon/coupon.component';
import { WalletComponent } from './Components/Profile/Student/PaymentForms/wallet/wallet.component';
import { CreditCardComponent } from './Components/Profile/Student/PaymentForms/credit-card/credit-card.component';
import { StudentExamRankComponent } from './Components/student-exam-rank/student-exam-rank.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    CoursesComponent,
    CustomPaginationComponent,
    TeachersComponent,
    MainComponent,
    CourseCardComponent,
    TeacherCardComponent,
    RecentCoursesComponent,
    AboutAcademyComponent,
    AboutTeachersComponent,
    SideScrollButtonsComponent,
    AboutUsComponent,
    ClassRankComponent,
    QuestionsComponent,
    TargetCounterComponent,
    AppearFromLeftDirective,
    AppearFromRightDirective,
    FooterComponent,
    ScrollToTopButtonComponent,
    CourseDetailsComponent,
    CourseDetailsHeaderComponent,
    CourseDetailsCardComponent,
    EnrollDialogComponent,
    LessonDialogComponent,
    ContentDialogComponent,
    ConfirmationDialogComponent,
    HeroComponent,
    EditExamComponent,
    ExamDialogComponent,
    QuestionControllerComponent,
    ExamControllerComponent,
    LectureComponent,
    StudentExamComponent,
    TimerComponent,
    ExamResultComponent,
    ExamTimeOutComponent,
    StudentProfileComponent,
    StudentCourseComponent,
    ProfileBudgetComponent,
    StudentShippingCodesComponent,
    ChangePasswordComponent,
    StudentSettingsComponent,
    SignOutComponent,
    TeacherDetailsComponent,
    TeacherProfileComponent,
    CustomCloudNavbarComponent,
    NotFoundComponent,
    StudentSignUpPageComponent,
    LoadingCardsComponent,
    PendingProfileComponent,
    TeacherCourseComponent,
    AddEditCourseComponent,
    TeacherSettingsComponent,
    ImageUploaderComponent,
    TeacherSignUpPageComponent,
    StudentSignUpFormComponent,
    TeacherSignUpFormComponent,
    StudentSettingsFormComponent,
    TeacherSettingsFormComponent,
    ParentsComponent,
    AboutPlatformComponent,
    CouponComponent,
    WalletComponent,
    CreditCardComponent,
    StudentExamRankComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatRadioModule,
    MatSliderModule,
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatMenuModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatTableModule,
    AppRoutingModule,
    LoadingBarModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    OverlayContainer,
    DatePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
