import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './investor-crud/post/post.component';
import { FetchComponent } from './investor-crud/fetch/fetch.component';
import { UpdateComponent } from './investor-crud/update/update.component';
import { DeleteComponent} from './investor-crud/delete/delete.component';
import { PostTranComponent } from './transaction-crud/post-tran/post-tran.component';
import { DeleteTranComponent } from './transaction-crud/delete-tran/delete-tran.component';
import { UpdateTranComponent } from './transaction-crud/update-tran/update-tran.component';
import { TranFindbyidComponent } from './transaction-crud/tran-findbyid/tran-findbyid.component';
import { FetchTranComponent } from './transaction-crud/fetch-tran/fetch-tran.component';

const routes: Routes = [
  {path: 'post-investor',component: PostComponent},
  {path: 'delete-investor',component: DeleteComponent},
  {path: 'fetch-investor',component: FetchComponent},
  {path: 'update-investor',component: UpdateComponent},
  {path: 'post-tran-investor',component: PostTranComponent},
  {path: 'delete-tran-investor',component: DeleteTranComponent},
  {path: 'fetch-tran-investor-id',component: TranFindbyidComponent},
  {path: 'fetch-tran-investor',component: FetchTranComponent},
  {path: 'update-tran-investor',component: UpdateTranComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



 
