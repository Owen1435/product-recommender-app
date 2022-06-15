import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class ProductsPageEffects {
  constructor(
    private actions$: Actions,
    // private heroService: HeroService
  ) {}

  // getHeroes$ = createEffect(() => this.actions$.pipe(
  //   ofType<GetHeroesRequestAction>(heroesActionsType.GET_HEROES_REQUEST),
  //   mergeMap(() => this.heroService.getHeroes().pipe(
  //     map((value) => {
  //       return new SetHeroesAction({
  //         heroes: value
  //       })
  //     }),
  //     catchError(() => of({ type: 'something was wrong' }))
  //   )),
  // ))
}
