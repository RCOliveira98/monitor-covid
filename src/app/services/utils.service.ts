import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  /**
   * Elimina uma dada inscrição a um objeto Subscription.
   *
   * @param {Subscription} subscription
   * @memberof UtilsService
   */
  unsubscribe(subscription: Subscription): void {
    if (subscription) { subscription.unsubscribe(); }
  }
}
