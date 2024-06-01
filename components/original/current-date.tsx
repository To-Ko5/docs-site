import { format } from 'date-fns'
import { date } from '@/data/data'

const CurrentDate = () => {
  return (
    <p className="text-right text-sm text-muted-foreground mb-4">
      <time>{format(date.lastUpdatedAt, 'yyyy/MM/dd')}</time>
    </p>
  )
}

export default CurrentDate
