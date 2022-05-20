import { gql } from '@apollo/client'
import event from '~/graphql/fragments/event'

const getFilteredEvents = gql`
  query getFilteredEvents($name: String!) {
    filterEvents(name: $name) {
      ...event
    }
  }

  ${event}
`

export default getFilteredEvents
