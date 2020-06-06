export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5edbb4e005042b94568e211f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-x998mys8',
                  apiId: '14818e5a-7f4b-46cd-a8a3-50f8e7462058'
                },
                {
                  buildHookId: '5edbb4e0eb4b8467847c7311',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-enmuhk8e',
                  apiId: 'f5c04638-1290-41fc-8da0-ff52acfa02c3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adewinne/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-enmuhk8e.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
