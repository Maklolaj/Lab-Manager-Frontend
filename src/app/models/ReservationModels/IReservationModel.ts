export interface IReservationModel {
  id: number;
  item: number;
  user: string;
  startDate: Date | null;
  endDate: Date | null;
}
