import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../../../typescripts/free';
import { ToastrService } from 'ngx-toastr';
import { TripcarService } from '../../../api/tripcar.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @ViewChild('loginModal') public loginModal: ModalDirective;

  username: string;
  address: string;
  phone: number;
  numberChair: number;

  param = "https://smtpjs.com/smtp.aspx?From=trungmapdit14@gmail.com&to=travelhoangphuc@gmail.com&Subject=khách%20đặt%20xe%20anh%20phúc%20ơi&Body=";
  param1 = "&Host=smtp.elasticemail.com&Username=c4c10941-3672-467c-85e6-b1155d509797&Password=85854bab-116f-4b3b-870c-caea5bdda2c5&Action=Send&cachebuster=64533";
  content: string;

  constructor(private toastrService: ToastrService, private tripcarService: TripcarService) { }

  ngOnInit() {
  }

  logIn() { 
    this.loginModal.hide();
    this.toastrService.success('Thông tin gửi đến chúng tôi thành công!', "Thông báo");
    this.content = "Họ và tên: " + this.username + " ///// Số điện thoại: tel:0" + this.phone + " ///// Nơi đi :"+ this.address+ " ///// Số ghế: " + this.numberChair ;
    this.content = encodeURIComponent(this.content);
    this.param = this.param + this.content + this.param1

    this.tripcarService.sentMail(this.param).subscribe(() => {

    });

  }

}
