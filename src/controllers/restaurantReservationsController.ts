import {
  reservationsViewModel,
  type ReservationsViewModel,
} from "../domain/restaurantReservations";

export function getReservationsViewModel(): ReservationsViewModel {
  return reservationsViewModel;
}

