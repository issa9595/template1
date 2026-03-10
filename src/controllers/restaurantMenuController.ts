import {
  restaurantMenuViewModel,
  type MenuPageViewModel,
} from "../domain/restaurantMenu";

export function getRestaurantMenuViewModel(): MenuPageViewModel {
  return restaurantMenuViewModel;
}

