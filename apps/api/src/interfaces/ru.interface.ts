import { Inject } from '@nestjs/common'

export interface ScheduleOptions<Credentials> {
  day: string
  meals: { item: number }[]
  restaurant: number
  credentials: Credentials
}

export interface MenuOptions<Credentials> {
  day: string
  restaurant: number
  credentials: Credentials
}

export abstract class RestaurantInterface<Credentials = {}> {
  constructor(@Inject('UNIVERSITY') protected universityName?: string) {}
  abstract schedule(options: ScheduleOptions<Credentials>): Promise<any>
  abstract menu(options: MenuOptions<Credentials>): Promise<any>
  abstract handleCron(): void
}