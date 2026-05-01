import { MessageService } from './message.service';
describe('message service:', () => {
  it('add function should add new msg', () => {
    let service = new MessageService();
    service.add('hello');

    expect(service.messages()[0].message).toBe('hello');
    expect(service.messages()).toHaveLength(1);
  });
  it('clear function should remove all messages', () => {
    let service = new MessageService();

    service.add('hello');
    service.add('hello');

    service.clear()

    expect(service.messages()).toHaveLength(0)
  });
});
