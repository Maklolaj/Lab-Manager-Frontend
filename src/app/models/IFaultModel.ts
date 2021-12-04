import { IItemModel } from './IItemModel';

export interface IFaultModel {
  id: number;
  item: IItemModel;
  user: string;
  manufacturer: string;
  description: string;
  reportTIme: Date;
  isDeleted: boolean;
}
