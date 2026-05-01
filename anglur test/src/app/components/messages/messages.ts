import { Component, inject} from '@angular/core';
import { MessageService } from '../../services/message/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.html',
  styleUrls: ['./messages.css'],
})
export class Messages  { 
  
   messageService= inject( MessageService)

}