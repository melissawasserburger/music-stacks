import { Component, OnInit } from '@angular/core';
import { Profile } from '../../models/profile';
import { ServiceService } from '../../services/service.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  profile!: Profile;

  // serviceService needs renamed... this service gets profile info
  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.serviceService.getProfile().subscribe((data: Profile) => {
      console.log(data);
      this.profile = data;
    });
  }

}
