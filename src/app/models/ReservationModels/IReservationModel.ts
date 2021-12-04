import { IItemModel } from '../IItemModel';

export interface IReservationModel {
  id: number;
  item: IItemModel;
  user: string;
  startDate: Date;
  endDate: Date;
}
