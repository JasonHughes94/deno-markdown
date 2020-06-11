const trailingWhitespace = / +$/

// Characters.
const space = ' '
const lineFeed = '\n'
const dash = '-'
const colon = ':'
const verticalBar = '|'

const x = 0
const C = 67
const L = 76
const R = 82
const c = 99
const l = 108
const r = 114

// Create a table from a matrix of strings.
export default function markdownTable(table: any, options: any): string {
  var settings: any = options || {}
  var padding: boolean = settings.padding !== false
  var start: boolean = settings.delimiterStart !== false
  var end: boolean = settings.delimiterEnd !== false
  var align: any = (settings.align || []).concat()
  var alignDelimiters: boolean = settings.alignDelimiters !== false
  var alignments: any[] = []
  var stringLength: any = settings.stringLength || defaultStringLength
  var rowIndex: number = -1
  var rowLength: any = table.length
  var cellMatrix: any[] = []
  var sizeMatrix: any[] = []
  var row: any[] = []
  var sizes: any[] = []
  var longestCellByColumn: any[] = []
  var mostCellsPerRow: number = 0
  var cells: any
  var columnIndex: any
  var columnLength: any
  var largest: any
  var size: any
  var cell: any
  var lines: any
  var line: any
  var before: any
  var after: any
  var code: any

  // This is a superfluous loop if we don’t align delimiters, but otherwise we’d
  // do superfluous work when aligning, so optimize for aligning.
  while (++rowIndex < rowLength) {
    cells = table[rowIndex]
    columnIndex = -1
    columnLength = cells.length
    row = []
    sizes = []

    if (columnLength > mostCellsPerRow) {
      mostCellsPerRow = columnLength
    }

    while (++columnIndex < columnLength) {
      cell = serialize(cells[columnIndex])

      if (alignDelimiters === true) {
        size = stringLength(cell)
        sizes[columnIndex] = size

        largest = longestCellByColumn[columnIndex]

        if (largest === undefined || size > largest) {
          longestCellByColumn[columnIndex] = size
        }
      }

      row.push(cell)
    }

    cellMatrix[rowIndex] = row
    sizeMatrix[rowIndex] = sizes
  }

  // Figure out which alignments to use.
  columnIndex = -1
  columnLength = mostCellsPerRow

  if (typeof align === 'object' && 'length' in align) {
    while (++columnIndex < columnLength) {
      alignments[columnIndex] = toAlignment(align[columnIndex])
    }
  } else {
    code = toAlignment(align)

    while (++columnIndex < columnLength) {
      alignments[columnIndex] = code
    }
  }

  // Inject the alignment row.
  columnIndex = -1
  columnLength = mostCellsPerRow
  row = []
  sizes = []

  while (++columnIndex < columnLength) {
    code = alignments[columnIndex]
    before = ''
    after = ''

    if (code === l) {
      before = colon
    } else if (code === r) {
      after = colon
    } else if (code === c) {
      before = colon
      after = colon
    }

    // There *must* be at least one hyphen-minus in each alignment cell.
    size = alignDelimiters
      ? Math.max(
        1,
        longestCellByColumn[columnIndex] - before.length - after.length
      )
      : 1

    cell = before + dash.repeat(size) + after

    if (alignDelimiters === true) {
      size = before.length + size + after.length

      if (size > longestCellByColumn[columnIndex]) {
        longestCellByColumn[columnIndex] = size
      }

      sizes[columnIndex] = size
    }

    row[columnIndex] = cell
  }

  // Inject the alignment row.
  cellMatrix.splice(1, 0, row)
  sizeMatrix.splice(1, 0, sizes)

  rowIndex = -1
  rowLength = cellMatrix.length
  lines = []

  while (++rowIndex < rowLength) {
    row = cellMatrix[rowIndex]
    sizes = sizeMatrix[rowIndex]
    columnIndex = -1
    columnLength = mostCellsPerRow
    line = []

    while (++columnIndex < columnLength) {
      cell = row[columnIndex] || ''
      before = ''
      after = ''

      if (alignDelimiters === true) {
        size = longestCellByColumn[columnIndex] - (sizes[columnIndex] || 0)
        code = alignments[columnIndex]

        if (code === r) {
          before = space.repeat(size)
        } else if (code === c) {
          if (size % 2 === 0) {
            before = space.repeat(size / 2)
            after = before
          } else {
            before = space.repeat(size / 2 + 0.5)
            after = space.repeat(size / 2 - 0.5)
          }
        } else {
          after = space.repeat(size)
        }
      }

      if (start === true && columnIndex === 0) {
        line.push(verticalBar)
      }

      if (
        padding === true &&
        // Don’t add the opening space if we’re not aligning and the cell is
        // empty: there will be a closing space.
        !(alignDelimiters === false && cell === '') &&
        (start === true || columnIndex !== 0)
      ) {
        line.push(space)
      }

      if (alignDelimiters === true) {
        line.push(before)
      }

      line.push(cell)

      if (alignDelimiters === true) {
        line.push(after)
      }

      if (padding === true) {
        line.push(space)
      }

      if (end === true || columnIndex !== columnLength - 1) {
        line.push(verticalBar)
      }
    }

    line = line.join('')

    if (end === false) {
      line = line.replace(trailingWhitespace, '')
    }

    lines.push(line)
  }

  return lines.join(lineFeed)
}

function serialize(value: any): string {
  return value === null || value === undefined ? '' : String(value)
}

function defaultStringLength(value: any) {
  return value.length
}

function toAlignment(value: any): 0 | 108 | 114 | 99 {
  var code: number = typeof value === 'string' ? value.charCodeAt(0) : x

  return code === L || code === l
    ? l
    : code === R || code === r
      ? r
      : code === C || code === c
        ? c
        : x
}