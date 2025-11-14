import { pgTable, varchar, text, uuid, integer } from 'drizzle-orm/pg-core'

export const CharacterTable = pgTable("character", {
  id: uuid("id").primaryKey(),
  name: varchar("name").notNull(),
  level: integer().notNull(),
});

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export type User = typeof usersTable.$inferSelect
export type NewUser = typeof usersTable.$inferInsert
export type Character = typeof CharacterTable.$inferSelect
export type NewCharacter = typeof CharacterTable.$inferInsert
