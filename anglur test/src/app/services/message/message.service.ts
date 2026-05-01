import { Injectable, signal } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  /**
   * Signal of array of messages.   
   */
   messages = signal< {id:string,message:string}[]>([]);

  /**
   * Adds a new message to the store.
   *
   *
   * @param message Text of the message to add.
   */
  add(message: string): void {
    this.messages.update(messages => [
      ...messages,
      {
        id: crypto.randomUUID(),
        message
      }
    ]);
  }

  /**
   * Removes all messages.
   */
  clear(): void {
    this.messages.set([]);
  }
}