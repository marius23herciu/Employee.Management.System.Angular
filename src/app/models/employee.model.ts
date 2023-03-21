import { Address } from './address.model';
import { DayMonthYear } from "./day-month-year.model"

export interface Employee {
    id: string
    firstName: string
    lastName: string
    dob: DayMonthYear
    email: string
    phone: number
    address: Address
    salary: number
    department: string
}