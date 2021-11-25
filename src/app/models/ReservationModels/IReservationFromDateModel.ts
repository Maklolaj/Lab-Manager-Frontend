import { IReservationModel } from './IReservationModel';

export interface IReservationFromDateModel {
  day: string;
  reservations: IReservationModel[];
}
