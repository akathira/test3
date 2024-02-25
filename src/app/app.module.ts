import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './investor-crud/post/post.component';
import { FetchComponent} from './investor-crud/fetch/fetch.component';
import { DeleteComponent } from './investor-crud/delete/delete.component';
import { UpdateComponent } from './investor-crud/update/update.component';
import { FindbyidComponent } from './investor-crud/findbyid/findbyid.component';
import { PostTranComponent } from './transaction-crud/post-tran/post-tran.component';
import { FetchTranComponent } from './transaction-crud/fetch-tran/fetch-tran.component';
import { UpdateTranComponent } from './transaction-crud/update-tran/update-tran.component';
import { DeleteTranComponent } from './transaction-crud/delete-tran/delete-tran.component';
import { TranFindbyidComponent } from './transaction-crud/tran-findbyid/tran-findbyid.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FetchComponent,
    UpdateComponent,
    DeleteComponent,
    FindbyidComponent,
    PostTranComponent,
    FetchTranComponent,
    UpdateTranComponent,
    DeleteTranComponent,
    TranFindbyidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule , HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
