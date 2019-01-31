export interface Event {
  eventId?: number;
  time: number;
  description: string;
}

export interface CurrentMonth {
  year: number;
  month: number;
}

export interface CalendarItem {
  events: Event[];
  dayNumber: number;
  timestamp: number;
  weekDay: number;
}
