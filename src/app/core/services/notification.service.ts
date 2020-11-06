import { NgEntityServiceNotifier } from '@datorama/akita-ng-entity-service';

export class NotificationService {
  constructor(private notifier: NgEntityServiceNotifier) {}

  listen(): void {
    this.notifier.action$.subscribe((action) => {});
  }
}
