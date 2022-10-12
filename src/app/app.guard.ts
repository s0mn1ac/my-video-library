/* Angular */
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { ISession } from './shared/interfaces/session.interface';
import { StorageConstants } from './shared/constants/storage.constants';

@Injectable()
export class Logged implements CanActivate {

    constructor(
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const sessionStorageItem: string | null = localStorage.getItem(StorageConstants.SESSION);
        const session: ISession | null = sessionStorageItem === null ? null : JSON.parse(sessionStorageItem) as ISession;
        if (session === null || session?.logged === false) {
            return true;
        }
        this.router.navigate(['board']);
        return false;
    }

}

