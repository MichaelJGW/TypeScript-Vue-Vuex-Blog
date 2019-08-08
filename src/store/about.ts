import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import Store from '../store';

@Module({
    dynamic: true,
    store: Store,
    name: 'about',
    namespaced: true,
})
export default class AboutModule extends VuexModule {

    public firstName: string = 'bob';
    public lastName: string = 'smith';

    public get fullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    @Mutation
    public setNames(payload: {name: string}) {
        const names: string[] = payload.name.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }

    @Action({ commit: 'setNames'})
    public async setNamesAsync(payload: {name: string}) {
        return await payload;
    }
}


