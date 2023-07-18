import { Knex } from 'knex'
import { v4 } from 'uuid'
import { hashSync } from 'bcrypt'

export interface User {
  readonly id: string
  readonly username: string
  readonly password: string
}

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.uuid('id').primary()
    table.string('username').notNullable()
    table.string('password').notNullable()
  })

  const users: User[] = [
    {
      id: v4(),
      username: 'admin',
      password: hashSync('password', 10),
    },
  ]

  await knex.batchInsert('users', users)
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('users')
}
