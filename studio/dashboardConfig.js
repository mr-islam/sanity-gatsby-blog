export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5d14add6e5435d4863b9a0c0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-u223ptki',
                  apiId: 'fbc321cc-8c83-4436-b7ed-640ebeaa5411'
                },
                {
                  buildHookId: '5d14add71642d3a2357b1918',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-b1t7z3qi',
                  apiId: 'a1e8a846-77be-4c5a-a290-2e257f692488'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mr-islam/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-b1t7z3qi.netlify.com', category: 'apps'}
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
