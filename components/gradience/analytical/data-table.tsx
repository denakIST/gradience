import { cn } from '@/lib/utils'

export type DataTableColumn<T> = {
  key: keyof T & string
  header: string
  emphasizeWhenSelected?: boolean
  className?: string
}

type DataTableProps<T> = {
  caption: string
  columns: DataTableColumn<T>[]
  rows: T[]
  getRowKey: (row: T) => string
  selectedKey?: string
  className?: string
}

export function DataTable<T extends Record<string, React.ReactNode>>({
  caption,
  columns,
  rows,
  getRowKey,
  selectedKey,
  className,
}: DataTableProps<T>) {
  return (
    <div className={cn('overflow-x-auto rounded-control border border-line-subtle bg-surface', className)}>
      <table className="w-full min-w-140 border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-surface-muted">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={cn('px-4 py-3 type-micro uppercase text-fg-secondary', column.className)}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const rowKey = getRowKey(row)
            const selected = rowKey === selectedKey
            return (
              <tr
                key={rowKey}
                data-selected={selected || undefined}
                className="border-t border-line-subtle data-selected:bg-surface-selected"
              >
                {columns.map((column, columnIndex) => {
                  const Cell = columnIndex === 0 ? 'th' : 'td'
                  return (
                    <Cell
                      key={column.key}
                      scope={columnIndex === 0 ? 'row' : undefined}
                      className={cn(
                        'px-4 py-3.75 type-ui-small tabular-nums text-fg-secondary',
                        selected ? 'font-semibold' : 'font-normal',
                        selected && columnIndex === 0 && 'border-l-2 border-line',
                        selected && column.emphasizeWhenSelected && 'text-fg',
                        column.className,
                      )}
                    >
                      {row[column.key]}
                      {selected && columnIndex === 0 ? <span className="sr-only"> (selected)</span> : null}
                    </Cell>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
