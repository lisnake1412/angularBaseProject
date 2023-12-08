import {Pipe, PipeTransform} from '@angular/core'
@Pipe ({
    name: 'FormatPhoneNumber'
})
export class FormatPhoneNumber implements PipeTransform {
    transform(value: string) {
        return `+84${value.slice(1)}`
    }
}