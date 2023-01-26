import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';


@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})


// ********** Compoentente tabla Angular Material ***********


export class VistaComponent {


  // ************ //
  listado: Users[] = [];
  displayedColumns: string[] = ['Id', 'Nombre', 'Apellido', 'Correo'];//+++
  dataSource: any;
  clickedRows = new Set<Users>();

  // ************ //

  constructor(private userService: UserserviceService){}

 
  ngOnInit(){

 
    this.userService.getUsersAll().subscribe({
      next: (UserAll: Users[]) => 
        {
          this.listado = UserAll,
          this.dataSource = this.listado
        },
      error: (e) => console.error(e),
      complete: () => console.info("La API devolvio todos los registros")
    });


    // Ejecutar el metogo getUsersAllInterceptor

    /*
    this.userService.getUsersAllInterceptor().subscribe({
      next: (response: any) => {this.listado = response.body; console.log(response)},
      error: (e) => console.error(e),
      complete: () => console.info("La API devolvio todos los registros")
    });
    */
    
  }

}
