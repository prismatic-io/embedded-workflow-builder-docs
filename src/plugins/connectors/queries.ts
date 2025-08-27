export interface Component {
  key: string;
  label: string;
  description: string;
  category: string;
  iconUrl: string;
  connections: { nodes: Connection[] };
  triggers: { nodes: Trigger[] };
  dataSources: { nodes: DataSource[] };
  actions: { nodes: Action[] };
}

interface Connection {
  key: string;
  label: string;
  type: string;
  default: string;
  comments: string;
  connectionDocs?: string;
}

interface Trigger {
  key: string;
  label: string;
  description: string;
  inputs: { nodes: Input[] };
}

interface DataSource {
  key: string;
  label: string;
  description: string;
  dataSourceType: string;
  inputs: { nodes: Input[] };
}

interface Action {
  key: string;
  label: string;
  description: string;
  dataSourceType?: string;
  inputs: { nodes: Input[] };
}

interface Input {
  key: string;
  label: string;
  type: string;
  collection?: string;
  default?: string;
  comments?: string;
  required: boolean;
  language?: string;
}

const componentFragment = `
  fragment Component_component on Component {
    key
    label
    description
    category
    iconUrl
    connections(orderBy: { direction: ASC, field: LABEL }) {
      nodes {
        key
        label
        comments
        oauth2Type
        inputs {
          nodes {
            key
            label
            type
            default
            comments
          }
        }
      }
    }
    triggers: actions(
      orderBy: { direction: ASC, field: LABEL }
      isTrigger: true
    ) {
      nodes {
        key
        label
        description
        inputs {
          nodes {
            key
            label
            type
            collection
            default
            comments
            required
            language
          }
        }
      }
    }
    dataSources: actions(
      orderBy: { direction: ASC, field: LABEL }
      isDataSource: true
      isDetailDataSource: false
    ) {
      nodes {
        key
        label
        description
        dataSourceType
        inputs {
          nodes {
            key
            label
            type
            collection
            default
            comments
            required
            language
          }
        }
      }
    }
    actions: actions(
      orderBy: { direction: ASC, field: LABEL }
      isDataSource: false
      isTrigger: false
    ) {
      nodes {
        key
        label
        description
        dataSourceType
        inputs {
          nodes {
            key
            label
            type
            collection
            default
            comments
            required
            language
          }
        }
      }
    }
  }
`;

export const GET_PUBLIC_COMPONENTS = `
  query getPublicComponents($cursor: String) {
    components(
      public: true
      orderBy: { direction: ASC, field: LABEL }
      first: 25
      after: $cursor
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
      nodes {
        ...Component_component
      }
    }
  }
  ${componentFragment}
`;

export const GET_PRIVATE_COMPONENT = `
  query getPrivateComponent($componentKey: String) {
    components(public: false, key: $componentKey) {
      nodes {
        ...Component_component
      }
    }
  }
  ${componentFragment}
`;
