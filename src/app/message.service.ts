// import {Message} from './message';

// export class Messages {

//     private data: Message[] = [
//         {date: '04.02.2019 22:14', name: 'John', phone: '(090)1212121', message: 'hello'} 
//     ];
//     getData(): Message[] {
//         return this.data;
//     }

//     addData(date: string, name: string, phone: string, message: string) {
//         this.data.push(new Message(date, name, phone, message));
//     }
// }

// export class AppComponent implements OnInit {
//     items: Message[] = [];
//     constru(private messages: Messages) {}

//     addMessage(date: string, name: string, phone: string, message: string) {
//         this.messages.addData(date, name, phone, message);
//     }
//     ngOnInit() {
//         this.items = this.messages.getData();
//     }
// }