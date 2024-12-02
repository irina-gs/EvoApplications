import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string, timeZone: string = 'Europe/Moscow'): string {
    if (!value) {
      return ''
    }

    const date = new Date(value)

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: timeZone,
    }

    const formatter = new Intl.DateTimeFormat('ru-RU', options)
    const formattedDate = formatter.format(date)
    const [day, month, year] = formattedDate.split(' ')
    const formattedMonth = month[0].toUpperCase() + month.slice(1)

    return `${day} ${formattedMonth} ${year}`
  }
}
