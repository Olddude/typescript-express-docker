import { Knex } from 'knex'
import { v4 } from 'uuid'

export interface DataEntry {
  readonly id: string
  readonly mime_type: string
  readonly buffer: Buffer
}

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('data', (table) => {
    table.increments('id').primary()
    table.string('mime_type').notNullable()
    table.binary('buffer').notNullable()
  })

  const data: DataEntry[] = [
    {
      id: v4(),
      mime_type: 'model/stl',
      buffer: Buffer.from([]),
    },
  ]

  await knex.batchInsert('data', data)
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('data')
}
