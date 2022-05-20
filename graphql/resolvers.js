import { events } from './mock-data'

export const resolvers = {
  Query: {
    popularEvents(_parent, args, _context, _info) {
      const { first } = args

      return events.slice(0, first)
    },
    event(_parent, args, _context, _info) {
      const { id } = args

      return events.find(event => event.id === id) || null
    },
    filterEvents(_parent, args, _context, _info) {
      const { name } = args
      return events.filter(event =>
        event.name.toLowerCase().includes(name.toLowerCase())
      )
    },
  },
}
